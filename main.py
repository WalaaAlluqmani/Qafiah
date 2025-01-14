from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from transformers import  AutoTokenizer, AutoModelForSequenceClassification
import torch

# ----------------------------------------------------------------------------------
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# --------------------------------models----------------------------------------------

classification_model_path = "models/50e" # نموذج 1
classification_tokenizer = AutoTokenizer.from_pretrained(classification_model_path)
classification_model = AutoModelForSequenceClassification.from_pretrained(classification_model_path)

# --------------------------------pages-----------------------------------------------

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/select-genre", response_class=HTMLResponse)
async def generate_poetry(request: Request):
    return templates.TemplateResponse("poetry_generation_genre.html", {"request": request})


@app.get("/select-poet", response_class=HTMLResponse)
async def generate_poetry(request: Request):
    return templates.TemplateResponse("poetry_generation_poets.html", {"request": request})


@app.post("/generate-poetry", response_class=HTMLResponse)
async def generate_poetry(request: Request, type: str = Form(...)):
    type='g'
    return templates.TemplateResponse("poetry_display.html", {"request": request, "type": type})


@app.get("/classify_poetry", response_class=HTMLResponse)
async def generate_poetry(request: Request):
    return templates.TemplateResponse("poetry_classification.html", {"request": request})


@app.post("/classification_poetry", response_class=HTMLResponse)
async def classify(request: Request):
   
    data = await request.json()
    text = data.get("poem") 

    if not text:
        return JSONResponse(content={"error": "Missing poem field"}, status_code=422)

    inputs = classification_tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    
    with torch.no_grad():
        outputs = classification_model(**inputs)
    
    predicted_class = torch.argmax(outputs.logits, dim=1).item()
    class_labels = ["رثاء", "مدح", "هجاء"]  
    result = class_labels[predicted_class]

    return JSONResponse(content={"result": result})
