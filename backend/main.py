# # import os
# # import shutil
# # import json
# # from fastapi import FastAPI, UploadFile, File
# # from fastapi.middleware.cors import CORSMiddleware
# # from dotenv import load_dotenv
# # from pydantic import BaseModel

# # # LangChain & RAG Imports
# # from langchain_community.document_loaders import PyPDFLoader
# # from langchain_text_splitters import RecursiveCharacterTextSplitter
# # from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
# # from langchain_community.vectorstores import Chroma

# # load_dotenv()

# # app = FastAPI()

# # # Allow your React app to talk to this Python server
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["*"], 
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # os.makedirs("temp_uploads", exist_ok=True)

# # @app.post("/generate-test")
# # async def generate_test(syllabus: UploadFile = File(...), papers: UploadFile = File(...)):
# #     print(f"Received files: {syllabus.filename}, {papers.filename}")
    
# #     syl_path = f"temp_uploads/{syllabus.filename}"
# #     pap_path = f"temp_uploads/{papers.filename}"
    
# #     with open(syl_path, "wb") as buffer:
# #         shutil.copyfileobj(syllabus.file, buffer)
# #     with open(pap_path, "wb") as buffer:
# #         shutil.copyfileobj(papers.file, buffer)

# #     try:
# #         print("Loading PDFs...")
# #         loaders = [PyPDFLoader(syl_path), PyPDFLoader(pap_path)]
# #         docs = []
# #         for loader in loaders:
# #             docs.extend(loader.load())

# #         print("Sanitizing PDF text...")
# #         for doc in docs:
# #             if doc.page_content:
# #                 doc.page_content = doc.page_content.encode('utf-8', 'replace').decode('utf-8')

# #         print("Splitting text...")
# #         text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
# #         splits = text_splitter.split_documents(docs)

# #         print("Creating Embeddings in ChromaDB...")
# #         embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")
# #         vectorstore = Chroma.from_documents(documents=splits, embedding=embeddings)
        
# #         # FIX 1: Pull 30 chunks of data instead of 10 to ensure we capture ALL subjects
# #         retriever = vectorstore.as_retriever(search_kwargs={"k": 30}) 

# #         # FIX 2: Multi-Querying. Ask the database specifically to find all subjects
# #         print("Retrieving context from DB...")
# #         docs_syllabus = retriever.invoke("List every distinct subject, unit, and chapter mentioned in the entire syllabus.")
# #         docs_papers = retriever.invoke("Provide examples of the previous year questions and their format.")
        
# #         # Combine the results and remove duplicates
# #         all_docs = {doc.page_content for doc in (docs_syllabus + docs_papers)}
# #         context_text = "\n\n".join(all_docs)

# #         print("Generating test...")
# #         # FIX 3: Lower temperature to 0.1 so the AI strictly follows instructions
# #         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.1)
        
# #         prompt = f"""
# #         You are an expert educational assessor and exam creator. 
# #         Based on the following extracted context from the user's uploaded Syllabus and Previous Papers:
        
# #         CONTEXT:
# #         {context_text}
        
# #         CRITICAL INSTRUCTIONS:
# #         1. Scan the context and identify EVERY major subject present (e.g., Physics, Chemistry, Math, Biology, History, etc.).
# #         2. Generate EXACTLY 15 multiple-choice questions based on the syllabus.
# #         3. You MUST distribute these 15 questions as equally as mathematically possible across ALL the subjects you found. (If you find 3 subjects, do 5 questions each. If you find 5 subjects, do 3 questions each).
# #         4. Match the difficulty level of the previous papers.
        
# #         Return ONLY a valid JSON array of 15 objects with this exact structure, no markdown formatting:
# #         [
# #           {{
# #             "id": 1,
# #             "text": "Question text here?",
# #             "options": ["A", "B", "C", "D"],
# #             "correctAnswerIndex": 0,
# #             "topic": "Subject Name: Specific Subtopic"
# #           }}
# #         ]
# #         """
        
# #         response = llm.invoke(prompt)
        
# #         json_string = response.content.replace('```json', '').replace('```', '').strip()
# #         questions = json.loads(json_string)
        
# #         os.remove(syl_path)
# #         os.remove(pap_path)
# #         vectorstore.delete_collection()
        
# #         return questions

# #     except Exception as e:
# #         print(f"Error: {e}")
# #         return {"error": str(e)}

# # if __name__ == "__main__":
# #     import uvicorn
# #     uvicorn.run(app, host="0.0.0.0", port=8000)




# import os
# import shutil
# import json
# from fastapi import FastAPI, UploadFile, File
# from fastapi.middleware.cors import CORSMiddleware
# from dotenv import load_dotenv
# from pydantic import BaseModel

# # LangChain & RAG Imports
# from langchain_community.document_loaders import PyPDFLoader
# from langchain_text_splitters import RecursiveCharacterTextSplitter
# from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
# from langchain_community.vectorstores import Chroma

# load_dotenv()

# app = FastAPI()

# # Allow your React app to talk to this Python server
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"], 
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# os.makedirs("temp_uploads", exist_ok=True)

# # ==========================================
# # ENDPOINT 1: GENERATE MOCK TEST (RAG)
# # ==========================================
# @app.post("/generate-test")
# async def generate_test(syllabus: UploadFile = File(...), papers: UploadFile = File(...)):
#     print(f"Received files: {syllabus.filename}, {papers.filename}")
    
#     syl_path = f"temp_uploads/{syllabus.filename}"
#     pap_path = f"temp_uploads/{papers.filename}"
    
#     with open(syl_path, "wb") as buffer:
#         shutil.copyfileobj(syllabus.file, buffer)
#     with open(pap_path, "wb") as buffer:
#         shutil.copyfileobj(papers.file, buffer)

#     try:
#         print("Loading PDFs...")
#         loaders = [PyPDFLoader(syl_path), PyPDFLoader(pap_path)]
#         docs = []
#         for loader in loaders:
#             docs.extend(loader.load())

#         print("Sanitizing PDF text...")
#         for doc in docs:
#             if doc.page_content:
#                 doc.page_content = doc.page_content.encode('utf-8', 'replace').decode('utf-8')

#         print("Splitting text...")
#         text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
#         splits = text_splitter.split_documents(docs)

#         print("Creating Embeddings in ChromaDB...")
#         embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")
#         vectorstore = Chroma.from_documents(documents=splits, embedding=embeddings)
        
#         # Pull 30 chunks of data instead of 10 to capture ALL subjects
#         retriever = vectorstore.as_retriever(search_kwargs={"k": 30}) 

#         print("Retrieving context from DB...")
#         docs_syllabus = retriever.invoke("List every distinct subject, unit, and chapter mentioned in the entire syllabus.")
#         docs_papers = retriever.invoke("Provide examples of the previous year questions and their format.")
        
#         # Combine the results and remove duplicates
#         all_docs = {doc.page_content for doc in (docs_syllabus + docs_papers)}
#         context_text = "\n\n".join(all_docs)

#         print("Generating test via Gemini...")
#         # FIX: Lower temperature to 0.0 so the AI strictly follows instructions and avoids hallucination
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.0)
        
#         prompt = f"""
#         You are a strict data-extraction and exam-generation engine. 
#         You have NO outside knowledge. You MUST rely EXCLUSIVELY on the provided CONTEXT.
        
#         CONTEXT (Extracted directly from the user's uploaded PDFs):
#         {context_text}
        
#         INSTRUCTIONS:
#         1. Scan the CONTEXT and identify the main subjects (e.g., Physics, Chemistry, Math, or whatever is explicitly present in the text).
#         2. Generate EXACTLY 15 multiple-choice questions.
#         3. Distribute these 15 questions EQUALLY across all the subjects you found.
        
#         CRITICAL ANTI-HALLUCINATION RULES:
#         - DO NOT use your pre-trained knowledge.
#         - DO NOT generate ANY question about a topic, formula, or concept that is NOT explicitly mentioned in the CONTEXT above.
#         - The difficulty MUST match the examples found in the CONTEXT.
        
#         Return ONLY a valid JSON array of 15 objects with this exact structure, no markdown formatting:
#         [
#           {{
#             "id": 1,
#             "text": "Question text based strictly on context?",
#             "options": ["A", "B", "C", "D"],
#             "correctAnswerIndex": 0,
#             "topic": "Subject Name: Specific Subtopic"
#           }}
#         ]
#         """
        
#         response = llm.invoke(prompt)
        
#         json_string = response.content.replace('```json', '').replace('```', '').strip()
#         questions = json.loads(json_string)
        
#         # Cleanup
#         os.remove(syl_path)
#         os.remove(pap_path)
#         vectorstore.delete_collection()
        
#         return questions

#     except Exception as e:
#         print(f"Error: {e}")
#         return {"error": str(e)}


# # ==========================================
# # ENDPOINT 2: GENERATE 7-DAY STUDY PLAN
# # ==========================================
# class PlanRequest(BaseModel):
#     weak_topics: list[str]

# @app.post("/generate-plan")
# async def generate_plan(request: PlanRequest):
#     print(f"Generating 7-day plan for weak topics: {request.weak_topics}")
    
#     try:
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
        
#         prompt = f"""
#         You are an expert academic planner.
#         The student just took a mock test and got questions wrong in these specific topics:
#         {request.weak_topics}
        
#         INSTRUCTIONS:
#         Create a highly effective 7-day study plan to help them master these exact weak areas.
        
#         CRITICAL RULES:
#         1. Distribute the topics logically across the 7 days.
#         2. Assign MULTIPLE topics per day (balance 1 hard topic with 1-2 easier ones).
#         3. For EVERY subtopic, provide a highly specific "youtubeQuery" (e.g., "JEE Advanced Rotational Dynamics one shot").
#         4. Day 7 MUST be dedicated to a "Full Revision & Re-test".
        
#         Return ONLY a valid JSON array of 7 objects with this exact structure, no markdown formatting:
#         [
#           {{
#             "day": 1,
#             "topic": "Main Focus (e.g., Mechanics)",
#             "subtopics": [
#               {{
#                 "name": "Hard Subtopic 1",
#                 "youtubeQuery": "JEE Mechanics Hard Subtopic",
#                 "wikiTopic": "Classical_mechanics"
#               }},
#               {{
#                 "name": "Easier Subtopic 2",
#                 "youtubeQuery": "JEE Mechanics Basics",
#                 "wikiTopic": "Kinematics"
#               }}
#             ]
#           }}
#         ]
#         """
        
#         response = llm.invoke(prompt)
        
#         json_string = response.content.replace('```json', '').replace('```', '').strip()
#         plan = json.loads(json_string)
        
#         return plan

#     except Exception as e:
#         print(f"Error generating plan: {e}")
#         return {"error": str(e)}


# # ==========================================
# # ENDPOINT 3: GENERATE INSTANT CHEAT SHEET
# # ==========================================
# class CheatSheetRequest(BaseModel):
#     topic: str

# @app.post("/generate-cheat-sheet")
# async def generate_cheat_sheet(request: CheatSheetRequest):
#     print(f"Generating cheat sheet for: {request.topic}")
    
#     try:
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
        
#         prompt = f"""
#         You are an expert tutor. Create a quick, high-yield cheat sheet for the topic: "{request.topic}".
        
#         It must include:
#         1. A 1-2 sentence simple definition.
#         2. 3-4 Key Formulas or Core Concepts (Bullet points).
#         3. 1 "Pro-Tip" for solving questions on this topic faster.
        
#         FORMATTING RULES:
#         - Format the output strictly as clean, modern HTML. 
#         - Use standard tags like <h3>, <ul>, <li>, <p>, and <strong>.
#         - Add inline CSS styles to make it look beautiful. For example, make the <h3> tags a cool cyan color (color: #00f3ff), and make the pro-tip a slightly different background color.
#         - DO NOT wrap it in ```html markdown code blocks. Just return the raw HTML string starting with a <div>.
#         """
        
#         response = llm.invoke(prompt)
        
#         # Clean the response just in case Gemini tries to add markdown backticks
#         html_content = response.content.replace('```html', '').replace('```', '').strip()
        
#         return {"html": html_content}

#     except Exception as e:
#         print(f"Error generating cheat sheet: {e}")
#         return {"error": str(e)}


# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)




# import os
# import shutil
# import json
# from fastapi import FastAPI, UploadFile, File
# from fastapi.middleware.cors import CORSMiddleware
# from dotenv import load_dotenv
# from pydantic import BaseModel

# # LangChain & RAG Imports
# from langchain_community.document_loaders import PyPDFLoader
# from langchain_text_splitters import RecursiveCharacterTextSplitter
# from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
# from langchain_community.vectorstores import Chroma

# load_dotenv()

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"], 
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# os.makedirs("temp_uploads", exist_ok=True)

# # ==========================================
# # ENDPOINT 1: GENERATE MOCK TEST (RAG)
# # ==========================================
# @app.post("/generate-test")
# async def generate_test(syllabus: UploadFile = File(...), papers: UploadFile = File(...)):
#     print(f"Received files: {syllabus.filename}, {papers.filename}")
    
#     syl_path = f"temp_uploads/{syllabus.filename}"
#     pap_path = f"temp_uploads/{papers.filename}"
    
#     with open(syl_path, "wb") as buffer:
#         shutil.copyfileobj(syllabus.file, buffer)
#     with open(pap_path, "wb") as buffer:
#         shutil.copyfileobj(papers.file, buffer)

#     try:
#         print("Loading PDFs...")
#         loaders = [PyPDFLoader(syl_path), PyPDFLoader(pap_path)]
#         docs = []
#         for loader in loaders:
#             docs.extend(loader.load())

#         print("Sanitizing PDF text...")
#         for doc in docs:
#             if doc.page_content:
#                 doc.page_content = doc.page_content.encode('utf-8', 'replace').decode('utf-8')

#         print("Splitting text...")
#         text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
#         splits = text_splitter.split_documents(docs)

#         print("Creating Embeddings in ChromaDB...")
#         embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")
#         vectorstore = Chroma.from_documents(documents=splits, embedding=embeddings)
        
#         # FIX 1: Double the context window to 60 chunks so it grabs the ENTIRE syllabus
#         retriever = vectorstore.as_retriever(search_kwargs={"k": 60}) 

#         print("Retrieving context from DB...")
#         # FIX 2: Use keyword matching instead of sentences so ChromaDB finds the actual index pages
#         docs_syllabus = retriever.invoke("Syllabus Course Outline Topics Chapters Units Detail Index")
#         docs_papers = retriever.invoke("multiple choice questions objective format previous year paper")
        
#         all_docs = {doc.page_content for doc in (docs_syllabus + docs_papers)}
#         context_text = "\n\n".join(all_docs)

#         print("Generating test via Gemini...")
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.0)
        
#         # FIX 3: Added a "Chain of Thought" rule so the AI verifies the topic before writing the question.
#         prompt = f"""
#         You are a strict data-extraction and exam-generation engine. 
#         You have NO outside knowledge. You MUST rely EXCLUSIVELY on the provided CONTEXT.
        
#         CONTEXT (Extracted directly from the user's uploaded PDFs):
#         {context_text}
        
#         INSTRUCTIONS:
#         1. Scan the CONTEXT and explicitly extract the exact names of the subjects and chapters present.
#         2. Generate EXACTLY 15 multiple-choice questions.
#         3. Distribute these 15 questions EQUALLY across all the main subjects you found.
        
#         CRITICAL ANTI-HALLUCINATION RULES:
#         - DO NOT generate ANY question about a topic, formula, or concept that is NOT explicitly mentioned in the CONTEXT above.
#         - If the CONTEXT only contains a few specific chapters, ALL 15 questions must be forced into those specific chapters. 
#         - DO NOT invent topics just to fill space.
        
#         Return ONLY a valid JSON array of 15 objects with this exact structure, no markdown formatting:
#         [
#           {{
#             "id": 1,
#             "text": "Question text based strictly on context?",
#             "options": ["A", "B", "C", "D"],
#             "correctAnswerIndex": 0,
#             "topic": "Subject Name: Specific Subtopic"
#           }}
#         ]
#         """
        
#         response = llm.invoke(prompt)
        
#         json_string = response.content.replace('```json', '').replace('```', '').strip()
#         questions = json.loads(json_string)
        
#         # Cleanup
#         os.remove(syl_path)
#         os.remove(pap_path)
#         vectorstore.delete_collection()
        
#         return questions

#     except Exception as e:
#         print(f"Error: {e}")
#         return {"error": str(e)}


# # ==========================================
# # ENDPOINT 2: GENERATE 7-DAY STUDY PLAN
# # ==========================================
# class PlanRequest(BaseModel):
#     weak_topics: list[str]

# @app.post("/generate-plan")
# async def generate_plan(request: PlanRequest):
#     print(f"Generating 7-day plan for weak topics: {request.weak_topics}")
#     try:
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
#         prompt = f"""
#         You are an expert academic planner.
#         The student just took a custom mock test based on their specific syllabus and got questions wrong in these specific topics:
#         {request.weak_topics}
        
#         INSTRUCTIONS:
#         Create a highly effective 7-day study plan to help them master these exact weak areas.
        
#         CRITICAL RULES:
#         1. Distribute the topics logically across the 7 days.
#         2. Assign MULTIPLE topics per day (balance 1 complex topic with 1-2 easier ones).
#         3. For EVERY subtopic, generate a highly specific "youtubeQuery" that will yield the best educational videos for this subject.
#         4. For EVERY subtopic, provide the exact "wikiTopic" string for its Wikipedia page.
#         5. Day 7 MUST be dedicated to a "Full Revision & Re-test".
        
#         Return ONLY a valid JSON array of 7 objects with this exact structure, no markdown formatting:
#         [
#           {{
#             "day": 1,
#             "topic": "Main Focus",
#             "subtopics": [
#               {{
#                 "name": "Specific Subtopic 1",
#                 "youtubeQuery": "Topic tutorial",
#                 "wikiTopic": "Topic_Wiki"
#               }}
#             ]
#           }}
#         ]
#         """
#         response = llm.invoke(prompt)
#         json_string = response.content.replace('```json', '').replace('```', '').strip()
#         return json.loads(json_string)
#     except Exception as e:
#         print(f"Error generating plan: {e}")
#         return {"error": str(e)}


# # ==========================================
# # ENDPOINT 3: GENERATE INSTANT CHEAT SHEET
# # ==========================================
# class CheatSheetRequest(BaseModel):
#     topic: str

# @app.post("/generate-cheat-sheet")
# async def generate_cheat_sheet(request: CheatSheetRequest):
#     print(f"Generating cheat sheet for: {request.topic}")
#     try:
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
#         prompt = f"""
#         You are an expert academic professor. Create a quick, high-yield cheat sheet for the topic: "{request.topic}".
        
#         It must include:
#         1. A 1-2 sentence simple, intuitive definition.
#         2. 3-4 Key Formulas, Core Principles, or Important Facts (Bullet points).
#         3. 1 "Pro-Tip" for mastering this topic or avoiding common mistakes.
        
#         FORMATTING RULES:
#         - Format the output strictly as clean, modern HTML. 
#         - Use standard tags like <h3>, <ul>, <li>, <p>, and <strong>.
#         - Add inline CSS styles to make it look beautiful.
#         - DO NOT wrap it in ```html markdown code blocks. Just return the raw HTML string starting with a <div>.
#         """
#         response = llm.invoke(prompt)
#         html_content = response.content.replace('```html', '').replace('```', '').strip()
#         return {"html": html_content}
#     except Exception as e:
#         print(f"Error generating cheat sheet: {e}")
#         return {"error": str(e)}


# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)





# import os
# import shutil
# import json
# from fastapi import FastAPI, UploadFile, File
# from fastapi.middleware.cors import CORSMiddleware
# from dotenv import load_dotenv
# from pydantic import BaseModel

# # YouTube Search Import (NEW)
# from youtubesearchpython import VideosSearch

# # LangChain & RAG Imports
# from langchain_community.document_loaders import PyPDFLoader
# from langchain_text_splitters import RecursiveCharacterTextSplitter
# from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
# from langchain_community.vectorstores import Chroma

# load_dotenv()

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"], 
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# os.makedirs("temp_uploads", exist_ok=True)

# # ==========================================
# # ENDPOINT 1: GENERATE MOCK TEST (RAG)
# # ==========================================
# @app.post("/generate-test")
# async def generate_test(syllabus: UploadFile = File(...), papers: UploadFile = File(...)):
#     print(f"Received files: {syllabus.filename}, {papers.filename}")
    
#     syl_path = f"temp_uploads/{syllabus.filename}"
#     pap_path = f"temp_uploads/{papers.filename}"
    
#     with open(syl_path, "wb") as buffer:
#         shutil.copyfileobj(syllabus.file, buffer)
#     with open(pap_path, "wb") as buffer:
#         shutil.copyfileobj(papers.file, buffer)

#     try:
#         print("Loading PDFs...")
#         loaders = [PyPDFLoader(syl_path), PyPDFLoader(pap_path)]
#         docs = []
#         for loader in loaders:
#             docs.extend(loader.load())

#         print("Sanitizing PDF text...")
#         for doc in docs:
#             if doc.page_content:
#                 doc.page_content = doc.page_content.encode('utf-8', 'replace').decode('utf-8')

#         print("Splitting text...")
#         text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
#         splits = text_splitter.split_documents(docs)

#         print("Creating Embeddings in ChromaDB...")
#         embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")
#         vectorstore = Chroma.from_documents(documents=splits, embedding=embeddings)
        
#         retriever = vectorstore.as_retriever(search_kwargs={"k": 60}) 

#         print("Retrieving context from DB...")
#         docs_syllabus = retriever.invoke("Syllabus Course Outline Topics Chapters Units Detail Index")
#         docs_papers = retriever.invoke("multiple choice questions objective format previous year paper")
        
#         all_docs = {doc.page_content for doc in (docs_syllabus + docs_papers)}
#         context_text = "\n\n".join(all_docs)

#         print("Generating test via Gemini...")
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.0)
        
#         prompt = f"""
#         You are a strict data-extraction and exam-generation engine. 
#         You have NO outside knowledge. You MUST rely EXCLUSIVELY on the provided CONTEXT.
        
#         CONTEXT (Extracted directly from the user's uploaded PDFs):
#         {context_text}
        
#         INSTRUCTIONS:
#         1. Scan the CONTEXT and explicitly extract the exact names of the subjects and chapters present.
#         2. Generate EXACTLY 15 multiple-choice questions.
#         3. Distribute these 15 questions EQUALLY across all the main subjects you found.
        
#         CRITICAL ANTI-HALLUCINATION RULES:
#         - DO NOT generate ANY question about a topic, formula, or concept that is NOT explicitly mentioned in the CONTEXT above.
#         - If the CONTEXT only contains a few specific chapters, ALL 15 questions must be forced into those specific chapters. 
#         - DO NOT invent topics just to fill space.
        
#         Return ONLY a valid JSON array of 15 objects with this exact structure, no markdown formatting:
#         [
#           {{
#             "id": 1,
#             "text": "Question text based strictly on context?",
#             "options": ["A", "B", "C", "D"],
#             "correctAnswerIndex": 0,
#             "topic": "Subject Name: Specific Subtopic"
#           }}
#         ]
#         """
        
#         response = llm.invoke(prompt)
        
#         json_string = response.content.replace('```json', '').replace('```', '').strip()
#         questions = json.loads(json_string)
        
#         # Cleanup
#         os.remove(syl_path)
#         os.remove(pap_path)
#         vectorstore.delete_collection()
        
#         return questions

#     except Exception as e:
#         print(f"Error: {e}")
#         return {"error": str(e)}


# # ==========================================
# # ENDPOINT 2: GENERATE 7-DAY STUDY PLAN
# # ==========================================
# class PlanRequest(BaseModel):
#     weak_topics: list[str]

# @app.post("/generate-plan")
# async def generate_plan(request: PlanRequest):
#     print(f"Generating 7-day plan for weak topics: {request.weak_topics}")
#     try:
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
#         prompt = f"""
#         You are an expert academic planner.
#         The student just took a custom mock test based on their specific syllabus and got questions wrong in these specific topics:
#         {request.weak_topics}
        
#         INSTRUCTIONS:
#         Create a highly effective 7-day study plan to help them master these exact weak areas.
        
#         CRITICAL RULES:
#         1. Distribute the topics logically across the 7 days.
#         2. Assign MULTIPLE topics per day (balance 1 complex topic with 1-2 easier ones).
#         3. For EVERY subtopic, generate a highly specific "youtubeQuery" that will yield the best educational videos for this subject.
#         4. For EVERY subtopic, provide the exact "wikiTopic" string for its Wikipedia page.
#         5. Day 7 MUST be dedicated to a "Full Revision & Re-test".
        
#         Return ONLY a valid JSON array of 7 objects with this exact structure, no markdown formatting:
#         [
#           {{
#             "day": 1,
#             "topic": "Main Focus",
#             "subtopics": [
#               {{
#                 "name": "Specific Subtopic 1",
#                 "youtubeQuery": "Topic tutorial",
#                 "wikiTopic": "Topic_Wiki"
#               }}
#             ]
#           }}
#         ]
#         """
#         response = llm.invoke(prompt)
#         json_string = response.content.replace('```json', '').replace('```', '').strip()
#         plan = json.loads(json_string)

#         # --- NEW: FETCH EXACT YOUTUBE LINKS ---
#         print("Fetching exact YouTube URLs for the study plan...")
#         for day in plan:
#             for subtopic in day.get("subtopics", []):
#                 query = subtopic.get("youtubeQuery", "")
#                 if query:
#                     try:
#                         # Search YouTube silently
#                         videosSearch = VideosSearch(query, limit=1)
#                         result = videosSearch.result()
                        
#                         # Grab the exact URL of the #1 video
#                         if result and result.get('result'):
#                             subtopic["youtubeLink"] = result['result'][0]['link']
#                         else:
#                             # Fallback to a search URL if no exact video is found
#                             subtopic["youtubeLink"] = f"https://www.youtube.com/results?search_query={query.replace(' ', '+')}"
#                     except Exception as e:
#                         print(f"YouTube search error for query '{query}': {e}")
#                         subtopic["youtubeLink"] = f"https://www.youtube.com/results?search_query={query.replace(' ', '+')}"
#                 else:
#                     subtopic["youtubeLink"] = "https://www.youtube.com"

#         return plan
#     except Exception as e:
#         print(f"Error generating plan: {e}")
#         return {"error": str(e)}


# # ==========================================
# # ENDPOINT 3: GENERATE INSTANT CHEAT SHEET
# # ==========================================
# class CheatSheetRequest(BaseModel):
#     topic: str

# @app.post("/generate-cheat-sheet")
# async def generate_cheat_sheet(request: CheatSheetRequest):
#     print(f"Generating cheat sheet for: {request.topic}")
#     try:
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
#         prompt = f"""
#         You are an expert academic professor. Create a quick, high-yield cheat sheet for the topic: "{request.topic}".
        
#         It must include:
#         1. A 1-2 sentence simple, intuitive definition.
#         2. 3-4 Key Formulas, Core Principles, or Important Facts (Bullet points).
#         3. 1 "Pro-Tip" for mastering this topic or avoiding common mistakes.
        
#         FORMATTING RULES:
#         - Format the output strictly as clean, modern HTML. 
#         - Use standard tags like <h3>, <ul>, <li>, <p>, and <strong>.
#         - Add inline CSS styles to make it look beautiful.
#         - DO NOT wrap it in ```html markdown code blocks. Just return the raw HTML string starting with a <div>.
#         """
#         response = llm.invoke(prompt)
#         html_content = response.content.replace('```html', '').replace('```', '').strip()
#         return {"html": html_content}
#     except Exception as e:
#         print(f"Error generating cheat sheet: {e}")
#         return {"error": str(e)}


# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)




# import os
# import shutil
# import json
# from fastapi import FastAPI, UploadFile, File
# from fastapi.middleware.cors import CORSMiddleware
# from dotenv import load_dotenv
# from pydantic import BaseModel

# # YouTube Search Import
# from youtubesearchpython import VideosSearch

# # LangChain & RAG Imports
# from langchain_community.document_loaders import PyPDFLoader
# from langchain_text_splitters import RecursiveCharacterTextSplitter
# from langchain_community.vectorstores import Chroma

# # --- UPDATED IMPORTS: Use Local HuggingFace for Embeddings, Gemini for Chat ---
# from langchain_google_genai import ChatGoogleGenerativeAI
# from langchain_huggingface import HuggingFaceEmbeddings

# load_dotenv()

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"], 
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# os.makedirs("temp_uploads", exist_ok=True)

# # ==========================================
# # ENDPOINT 1: GENERATE MOCK TEST (RAG)
# # ==========================================
# @app.post("/generate-test")
# async def generate_test(syllabus: UploadFile = File(...), papers: UploadFile = File(...)):
#     print(f"Received files: {syllabus.filename}, {papers.filename}")
    
#     syl_path = f"temp_uploads/{syllabus.filename}"
#     pap_path = f"temp_uploads/{papers.filename}"
    
#     with open(syl_path, "wb") as buffer:
#         shutil.copyfileobj(syllabus.file, buffer)
#     with open(pap_path, "wb") as buffer:
#         shutil.copyfileobj(papers.file, buffer)

#     try:
#         print("Loading PDFs...")
#         loaders = [PyPDFLoader(syl_path), PyPDFLoader(pap_path)]
#         docs = []
#         for loader in loaders:
#             docs.extend(loader.load())

#         print("Sanitizing PDF text...")
#         for doc in docs:
#             if doc.page_content:
#                 doc.page_content = doc.page_content.encode('utf-8', 'replace').decode('utf-8')

#         print("Splitting text...")
#         text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
#         splits = text_splitter.split_documents(docs)

#         # --- THE FIX: Using Local HuggingFace Embeddings instead of Gemini ---
#         print("Creating Embeddings in ChromaDB (Locally - Free & Unlimited!)...")
#         embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
#         # ---------------------------------------------------------------------
        
#         vectorstore = Chroma.from_documents(documents=splits, embedding=embeddings)
        
#         retriever = vectorstore.as_retriever(search_kwargs={"k": 60}) 

#         print("Retrieving context from DB...")
#         docs_syllabus = retriever.invoke("Syllabus Course Outline Topics Chapters Units Detail Index")
#         docs_papers = retriever.invoke("multiple choice questions objective format previous year paper")
        
#         all_docs = {doc.page_content for doc in (docs_syllabus + docs_papers)}
#         context_text = "\n\n".join(all_docs)

#         print("Generating test via Gemini...")
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.0)
        
#         prompt = f"""
#         You are a strict data-extraction and exam-generation engine. 
#         You have NO outside knowledge. You MUST rely EXCLUSIVELY on the provided CONTEXT.
        
#         CONTEXT (Extracted directly from the user's uploaded PDFs):
#         {context_text}
        
#         INSTRUCTIONS:
#         1. Scan the CONTEXT and explicitly extract the exact names of the subjects and chapters present.
#         2. Generate EXACTLY 15 multiple-choice questions.
#         3. Distribute these 15 questions EQUALLY across all the main subjects you found.
        
#         CRITICAL ANTI-HALLUCINATION RULES:
#         - DO NOT generate ANY question about a topic, formula, or concept that is NOT explicitly mentioned in the CONTEXT above.
#         - If the CONTEXT only contains a few specific chapters, ALL 15 questions must be forced into those specific chapters. 
#         - DO NOT invent topics just to fill space.
        
#         Return ONLY a valid JSON array of 15 objects with this exact structure, no markdown formatting:
#         [
#           {{
#             "id": 1,
#             "text": "Question text based strictly on context?",
#             "options": ["A", "B", "C", "D"],
#             "correctAnswerIndex": 0,
#             "topic": "Subject Name: Specific Subtopic"
#           }}
#         ]
#         """
        
#         response = llm.invoke(prompt)
        
#         json_string = response.content.replace('```json', '').replace('```', '').strip()
#         questions = json.loads(json_string)
        
#         # Cleanup
#         os.remove(syl_path)
#         os.remove(pap_path)
#         vectorstore.delete_collection()
        
#         return questions

#     except Exception as e:
#         print(f"Error: {e}")
#         return {"error": str(e)}


# # ==========================================
# # ENDPOINT 2: GENERATE 7-DAY STUDY PLAN
# # ==========================================
# class PlanRequest(BaseModel):
#     weak_topics: list[str]

# @app.post("/generate-plan")
# async def generate_plan(request: PlanRequest):
#     print(f"Generating 7-day plan for weak topics: {request.weak_topics}")
#     try:
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
#         prompt = f"""
#         You are an expert academic planner.
#         The student just took a custom mock test based on their specific syllabus and got questions wrong in these specific topics:
#         {request.weak_topics}
        
#         INSTRUCTIONS:
#         Create a highly effective 7-day study plan to help them master these exact weak areas.
        
#         CRITICAL RULES:
#         1. Distribute the topics logically across the 7 days.
#         2. Assign MULTIPLE topics per day (balance 1 complex topic with 1-2 easier ones).
#         3. For EVERY subtopic, generate a highly specific "youtubeQuery" that will yield the best educational videos for this subject.
#         4. For EVERY subtopic, provide the exact "wikiTopic" string for its Wikipedia page.
#         5. Day 7 MUST be dedicated to a "Full Revision & Re-test".
        
#         Return ONLY a valid JSON array of 7 objects with this exact structure, no markdown formatting:
#         [
#           {{
#             "day": 1,
#             "topic": "Main Focus",
#             "subtopics": [
#               {{
#                 "name": "Specific Subtopic 1",
#                 "youtubeQuery": "Topic tutorial",
#                 "wikiTopic": "Topic_Wiki"
#               }}
#             ]
#           }}
#         ]
#         """
#         response = llm.invoke(prompt)
#         json_string = response.content.replace('```json', '').replace('```', '').strip()
#         plan = json.loads(json_string)

#         # --- FETCH EXACT YOUTUBE LINKS ---
#         print("Fetching exact YouTube URLs for the study plan...")
#         for day in plan:
#             for subtopic in day.get("subtopics", []):
#                 query = subtopic.get("youtubeQuery", "")
#                 if query:
#                     try:
#                         # Search YouTube silently
#                         videosSearch = VideosSearch(query, limit=1)
#                         result = videosSearch.result()
                        
#                         # Grab the exact URL of the #1 video
#                         if result and result.get('result'):
#                             subtopic["youtubeLink"] = result['result'][0]['link']
#                         else:
#                             # Fallback to a search URL if no exact video is found
#                             subtopic["youtubeLink"] = f"https://www.youtube.com/results?search_query={query.replace(' ', '+')}"
#                     except Exception as e:
#                         print(f"YouTube search error for query '{query}': {e}")
#                         subtopic["youtubeLink"] = f"https://www.youtube.com/results?search_query={query.replace(' ', '+')}"
#                 else:
#                     subtopic["youtubeLink"] = "https://www.youtube.com"

#         return plan
#     except Exception as e:
#         print(f"Error generating plan: {e}")
#         return {"error": str(e)}


# # ==========================================
# # ENDPOINT 3: GENERATE INSTANT CHEAT SHEET
# # ==========================================
# class CheatSheetRequest(BaseModel):
#     topic: str

# @app.post("/generate-cheat-sheet")
# async def generate_cheat_sheet(request: CheatSheetRequest):
#     print(f"Generating cheat sheet for: {request.topic}")
#     try:
#         llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
#         prompt = f"""
#         You are an expert academic professor. Create a quick, high-yield cheat sheet for the topic: "{request.topic}".
        
#         It must include:
#         1. A 1-2 sentence simple, intuitive definition.
#         2. 3-4 Key Formulas, Core Principles, or Important Facts (Bullet points).
#         3. 1 "Pro-Tip" for mastering this topic or avoiding common mistakes.
        
#         FORMATTING RULES:
#         - Format the output strictly as clean, modern HTML. 
#         - Use standard tags like <h3>, <ul>, <li>, <p>, and <strong>.
#         - Add inline CSS styles to make it look beautiful.
#         - DO NOT wrap it in ```html markdown code blocks. Just return the raw HTML string starting with a <div>.
#         """
#         response = llm.invoke(prompt)
#         html_content = response.content.replace('```html', '').replace('```', '').strip()
#         return {"html": html_content}
#     except Exception as e:
#         print(f"Error generating cheat sheet: {e}")
#         return {"error": str(e)}


# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)




import os
import shutil
import json
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel

# YouTube Search Import
from youtubesearchpython import VideosSearch

# LangChain & RAG Imports
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma

# Local HuggingFace for Embeddings, Gemini for Chat
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_huggingface import HuggingFaceEmbeddings

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("temp_uploads", exist_ok=True)

# ==========================================
# ENDPOINT 1: GENERATE MOCK TEST (RAG)
# ==========================================
@app.post("/generate-test")
async def generate_test(syllabus: UploadFile = File(...), papers: UploadFile = File(...)):
    print(f"Received files: {syllabus.filename}, {papers.filename}")
    
    syl_path = f"temp_uploads/{syllabus.filename}"
    pap_path = f"temp_uploads/{papers.filename}"
    
    with open(syl_path, "wb") as buffer:
        shutil.copyfileobj(syllabus.file, buffer)
    with open(pap_path, "wb") as buffer:
        shutil.copyfileobj(papers.file, buffer)

    try:
        print("Loading PDFs...")
        loaders = [PyPDFLoader(syl_path), PyPDFLoader(pap_path)]
        docs = []
        for loader in loaders:
            docs.extend(loader.load())

        print("Sanitizing PDF text...")
        for doc in docs:
            if doc.page_content:
                doc.page_content = doc.page_content.encode('utf-8', 'replace').decode('utf-8')

        print("Splitting text...")
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        splits = text_splitter.split_documents(docs)

        print("Creating Embeddings in ChromaDB (Locally - Free & Unlimited!)...")
        embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        
        vectorstore = Chroma.from_documents(documents=splits, embedding=embeddings)
        
        retriever = vectorstore.as_retriever(search_kwargs={"k": 60}) 

        print("Retrieving context from DB...")
        docs_syllabus = retriever.invoke("Syllabus Course Outline Topics Chapters Units Detail Index")
        docs_papers = retriever.invoke("multiple choice questions objective format previous year paper")
        
        all_docs = {doc.page_content for doc in (docs_syllabus + docs_papers)}
        context_text = "\n\n".join(all_docs)

        print("Generating test...")
        llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.0)
        
        # --- NEW EXAM GENERATION PROMPT ---
        prompt = f"""
        You are an expert academic professor and elite exam setter.
        
        Here is the CONTEXT extracted from the student's uploaded Syllabus and Previous Year Questions (PYQs):
        {context_text}
        
        INSTRUCTIONS FOR EXAM GENERATION:
        1. ANALYZE SCOPE: Read the CONTEXT to identify exactly which subjects and specific concepts are part of the curriculum.
        2. ANALYZE STYLE: Look at the PYQs in the CONTEXT to understand the required difficulty level, formatting, and depth of the exam.
        3. GENERATE EXAM: Create EXACTLY 15 high-quality, conceptual multiple-choice questions.
        
        CRITICAL RULES (READ CAREFULLY):
        - NO META-QUESTIONS: DO NOT ask questions about the syllabus document itself. (Never ask "What is listed in Unit 2?").
        - BE ACADEMIC: Ask real, hard, technical questions that test the student's actual understanding of the concepts.
        - USE YOUR KNOWLEDGE: You are ALLOWED to use your internal expert knowledge base to write the questions, formulas, and answers. 
        - STAY IN BOUNDS: Even though you use your own knowledge to write the questions, the TOPICS you choose to test MUST be strictly limited to the topics mentioned in the syllabus CONTEXT.
        - Distribute the questions fairly across the different subjects found in the syllabus.

        Return ONLY a valid JSON array of 15 objects with this exact structure, no markdown formatting:
        [
          {{
            "id": 1,
            "text": "The actual academic/technical question here?",
            "options": ["A", "B", "C", "D"],
            "correctAnswerIndex": 0,
            "topic": "Subject Name: Specific Subtopic"
          }}
        ]
        """
        
        response = llm.invoke(prompt)
        
        json_string = response.content.replace('```json', '').replace('```', '').strip()
        questions = json.loads(json_string)
        
        # Cleanup
        os.remove(syl_path)
        os.remove(pap_path)
        vectorstore.delete_collection()
        
        return questions

    except Exception as e:
        print(f"Error: {e}")
        return {"error": str(e)}


# ==========================================
# ENDPOINT 2: GENERATE 7-DAY STUDY PLAN
# ==========================================
class PlanRequest(BaseModel):
    weak_topics: list[str]

@app.post("/generate-plan")
async def generate_plan(request: PlanRequest):
    print(f"Generating 7-day plan for weak topics: {request.weak_topics}")
    try:
        llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
        prompt = f"""
        You are an expert academic planner.
        The student just took a custom mock test based on their specific syllabus and got questions wrong in these specific topics:
        {request.weak_topics}
        
        INSTRUCTIONS:
        Create a highly effective 7-day study plan to help them master these exact weak areas.
        
        CRITICAL RULES:
        1. Distribute the topics logically across the 7 days.
        2. Assign MULTIPLE topics per day (balance 1 complex topic with 1-2 easier ones).
        3. For EVERY subtopic, generate a highly specific "youtubeQuery" that will yield the best educational videos for this subject.
        4. For EVERY subtopic, provide the exact "wikiTopic" string for its Wikipedia page.
        5. Day 7 MUST be dedicated to a "Full Revision & Re-test".
        
        Return ONLY a valid JSON array of 7 objects with this exact structure, no markdown formatting:
        [
          {{
            "day": 1,
            "topic": "Main Focus",
            "subtopics": [
              {{
                "name": "Specific Subtopic 1",
                "youtubeQuery": "Topic tutorial",
                "wikiTopic": "Topic_Wiki"
              }}
            ]
          }}
        ]
        """
        response = llm.invoke(prompt)
        json_string = response.content.replace('```json', '').replace('```', '').strip()
        plan = json.loads(json_string)

        # --- FETCH EXACT YOUTUBE LINKS ---
        print("Fetching exact YouTube URLs for the study plan...")
        for day in plan:
            for subtopic in day.get("subtopics", []):
                query = subtopic.get("youtubeQuery", "")
                if query:
                    try:
                        # Search YouTube silently
                        videosSearch = VideosSearch(query, limit=1)
                        result = videosSearch.result()
                        
                        # Grab the exact URL of the #1 video
                        if result and result.get('result'):
                            subtopic["youtubeLink"] = result['result'][0]['link']
                        else:
                            # Fallback to a search URL if no exact video is found
                            subtopic["youtubeLink"] = f"https://www.youtube.com/results?search_query={query.replace(' ', '+')}"
                    except Exception as e:
                        print(f"YouTube search error for query '{query}': {e}")
                        subtopic["youtubeLink"] = f"https://www.youtube.com/results?search_query={query.replace(' ', '+')}"
                else:
                    subtopic["youtubeLink"] = "https://www.youtube.com"

        return plan
    except Exception as e:
        print(f"Error generating plan: {e}")
        return {"error": str(e)}


# ==========================================
# ENDPOINT 3: GENERATE INSTANT CHEAT SHEET
# ==========================================
class CheatSheetRequest(BaseModel):
    topic: str

@app.post("/generate-cheat-sheet")
async def generate_cheat_sheet(request: CheatSheetRequest):
    print(f"Generating cheat sheet for: {request.topic}")
    try:
        llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)
        prompt = f"""
        You are an expert academic professor. Create a quick, high-yield cheat sheet for the topic: "{request.topic}".
        
        It must include:
        1. A 1-2 sentence simple, intuitive definition.
        2. 3-4 Key Formulas, Core Principles, or Important Facts (Bullet points).
        3. 1 "Pro-Tip" for mastering this topic or avoiding common mistakes.
        
        FORMATTING RULES:
        - Format the output strictly as clean, modern HTML. 
        - Use standard tags like <h3>, <ul>, <li>, <p>, and <strong>.
        - Add inline CSS styles to make it look beautiful.
        - DO NOT wrap it in ```html markdown code blocks. Just return the raw HTML string starting with a <div>.
        """
        response = llm.invoke(prompt)
        html_content = response.content.replace('```html', '').replace('```', '').strip()
        return {"html": html_content}
    except Exception as e:
        print(f"Error generating cheat sheet: {e}")
        return {"error": str(e)}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)