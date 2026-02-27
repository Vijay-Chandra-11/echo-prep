# 🎓 Echo-Prep: AI-Augmented Context-Aware Exam Coach

Echo-Prep is a next-generation AI-powered study platform designed to
intelligently prepare students for exams.
It leverages Retrieval-Augmented Generation (RAG) and Computer Vision
to:

-   Read your syllabus & PYQs
-   Generate contextual mock tests
-   Build a personalized 7-day study plan
-   Fetch exact YouTube tutorials automatically
-   Track your focus in real-time using MediaPipe

------------------------------------------------------------------------

##  Key Features

### Context-Aware Mock Tests (RAG)

-   Upload Syllabus + PYQs as PDFs\
-   Local embeddings using `all-MiniLM-L6-v2` (Zero API limits!)\
-   Gemini 2.5 Flash generates a 15-question conceptual diagnostic exam

### Adaptive 7-Day Study Planner

-   Analyzes weak topics from mock test
-   Creates day-by-day mastery roadmap

### Auto-YouTube Integration

-   Generates smart YouTube search queries\
-   Fetches actual #1 ranked tutorial link\
-   Prevents hallucinated URLs

### Instant Cheat Sheets

-   Beautiful HTML formatted revision sheets\
-   Core formulas + pro tips

###  Real-Time Focus Room

-   WebSocket-based live tracking\
-   MediaPipe Face Mesh detection\
-   Alerts when user looks away

------------------------------------------------------------------------

## Tech Stack

### Frontend

-   React (Vite)
-   Tailwind CSS
-   TypeScript
-   React-Webcam
-   WebSockets

### Backend (Microservices)

**Core AI API (Port 8000):** - FastAPI - LangChain - Google Gemini
(`gemini-2.5-flash`) - ChromaDB - HuggingFace Embeddings
(`all-MiniLM-L6-v2`) - PyPDF

**Focus Tracker API (Port 8001):** - FastAPI - WebSockets - OpenCV -
MediaPipe

------------------------------------------------------------------------

##  Installation

### Prerequisites

-   Node.js & npm
-   Python 3.11
-   Google Gemini API Key

------------------------------------------------------------------------

### 1️⃣ Backend Setup

``` bash
cd backend
python -3.11 -m venv venv11
source venv11/bin/activate   # Windows: .\venv11\Scripts\activate

pip install fastapi uvicorn pydantic python-dotenv python-multipart langchain-google-genai langchain-huggingface langchain-community langchain-text-splitters chromadb pypdf sentence-transformers youtubesearchpython mediapipe opencv-python websockets
```

------------------------------------------------------------------------

### 2️⃣ Frontend Setup

``` bash
npm install
```

------------------------------------------------------------------------

##  Running The App (3-Terminal Setup)

### Terminal 1 -- Core API

``` bash
cd backend
source venv11/bin/activate
python main.py
```

Runs on → http://0.0.0.0:8000

------------------------------------------------------------------------

### Terminal 2 -- Focus Tracker

``` bash
cd backend
source venv11/bin/activate
python focus_backend.py
```

Runs on → ws://0.0.0.0:8001

------------------------------------------------------------------------

### Terminal 3 -- Frontend

``` bash
npm run dev
```

Runs on → http://localhost:5173

------------------------------------------------------------------------

## Architecture Notes

###  Quota-Free Embeddings

Uses local HuggingFace embeddings to prevent 429 quota errors during PDF
processing.

###  Anti-Hallucination Video Links

LLM generates a YouTube search query → backend fetches actual #1 ranked
video.

###  Low-Latency Computer Vision

Webcam frame → base64 → WebSocket → MediaPipe Face Mesh → instant
feedback.

------------------------------------------------------------------------

## Ports Summary

  Service         Port
  --------------- ------
  Core API        8000
  Focus Tracker   8001
  Frontend        5173

------------------------------------------------------------------------

Google drive link for ppt and application demo video: https://drive.google.com/drive/u/0/folders/1e17UvdmvbQ_MO7C3ho376nhndO8LtUgH