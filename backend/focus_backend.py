import cv2
import mediapipe as mp
import numpy as np
import base64
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI for the Focus Microservice
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize MediaPipe Face Mesh
mp_face_mesh = mp.solutions.face_mesh
face_mesh = mp_face_mesh.FaceMesh(
    max_num_faces=1,
    refine_landmarks=True,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5
)

def analyze_focus(image_bytes):
    """Analyzes a single frame to determine if the user is focused."""
    # Convert base64 image from React into an OpenCV image
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    if img is None:
        return {"status": "error", "message": "Invalid image format"}

    # Convert to RGB for MediaPipe
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = face_mesh.process(img_rgb)

    if not results.multi_face_landmarks:
        # If no face is detected on the screen, they walked away or turned completely around
        return {"status": "distracted", "message": "Face not detected! Please look at the screen."}
    
    # HACKATHON LOGIC: If a face is clearly detected by the mesh, we count it as focused.
    # (In a production app, we would calculate the exact 3D head pose pitch/yaw here)
    return {"status": "focused", "message": "Great focus!"}

@app.websocket("/ws/focus")
async def focus_tracker_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("Frontend connected to Focus Tracker!")
    try:
        while True:
            # Receive base64 image string from React frontend
            data = await websocket.receive_text()
            
            # Clean the base64 string (remove the "data:image/jpeg;base64," header)
            if "," in data:
                header, encoded = data.split(",", 1)
            else:
                encoded = data
                
            image_bytes = base64.b64decode(encoded)
            
            # Analyze the frame
            result = analyze_focus(image_bytes)
            
            # Send the result back to React instantly
            await websocket.send_json(result)
            
    except WebSocketDisconnect:
        print("Frontend disconnected from Focus Tracker.")
    except Exception as e:
        print(f"WebSocket Error: {e}")

if __name__ == "__main__":
    import uvicorn
    # Notice this runs on PORT 8001 so it doesn't conflict with main.py!
    uvicorn.run(app, host="0.0.0.0", port=8001)