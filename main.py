from fastapi import FastAPI, HTTPException, Request, Form
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from transformers import GPT2TokenizerFast, GPT2LMHeadModel, pipeline
import random

# ----------------------------------------------------------------------------------
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# --------------------------------AraGPT-2 - mutnabi ----------------------------------------------

# model_path = "models/AraGPT-mutnabi"
# model_mutnabi = GPT2LMHeadModel.from_pretrained(model_path)
# tokenizer_mutnabi = GPT2TokenizerFast.from_pretrained(model_path)
# model_mutnabi.eval()

# generation_mutnabi_pipeline = pipeline("text-generation", model=model_mutnabi, tokenizer=tokenizer_mutnabi)


# --------------------------------AraGPT-2 - madih ----------------------------------------------

model_name= "WalaaAlluqmani/madih_model"
# model_name= "gpt2-poemsss"
model_madih = GPT2LMHeadModel.from_pretrained(model_name)
tokenizer_madih = GPT2TokenizerFast.from_pretrained(model_name)

generation_madih_pipeline = pipeline("text-generation", model=model_madih, tokenizer=tokenizer_madih)

# --------------------------------pages-----------------------------------------------

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/select-poet", response_class=HTMLResponse)
async def generate_poetry(request: Request):
    return templates.TemplateResponse("poetry_generation_poets.html", {"request": request})

@app.get("/select-genre", response_class=HTMLResponse)
async def generate_poetry(request: Request):
    return templates.TemplateResponse("poetry_generation_genre.html", {"request": request})

# @app.get("/generate-poetry", response_class=HTMLResponse)
# async def generate_poetry(request: Request):
    
#     return templates.TemplateResponse("poetry_display.html", {"request": request})

@app.post("/generate-poetry", response_class=HTMLResponse)
async def generate_poetry(request: Request, type: str = Form(...)):

    line = prompt(type)

    if type == "مدح":
        generatedpoem = generatePoem_BasedonGenre(line)
    elif type == "أبو الطيب المتنبي":
       generatedpoem="hi"
        # generatedpoem = generatePoem_BasedonPoet(line)
    else:
        raise HTTPException(status_code=400, detail="Invalid model type")
    
    return templates.TemplateResponse("poetry_display.html", {"request": request,"generated_poem": generatedpoem, "type": type})

#-------------------------------------------------------------------------------------
# def generatePoem_BasedonPoet(prompt: str) -> str:
     
#     generated_poem = generation_mutnabi_pipeline(
#       prompt,
#       pad_token_id=tokenizer_mutnabi.eos_token_id,
#       num_beams=6,
#       max_length=50,
#       top_p=0.95,
#       temperature=0.7,
#       repetition_penalty = 3.0,
#       no_repeat_ngram_size = 3,
#       early_stopping=True,
#       truncation=True
#     )[0]['generated_text']
#     return generated_poem

#-------------------------------------------------------------------------------------
def generatePoem_BasedonGenre(prompt: str) -> str:
    generated_poem_madih = generation_madih_pipeline(
      prompt,
      pad_token_id=tokenizer_madih.eos_token_id,
      num_beams=6,
      max_length=50,
      top_p=0.9,
      temperature=0.9,
      repetition_penalty = 3.0,
      no_repeat_ngram_size = 3,
      early_stopping=True,
      truncation=True
    )[0]['generated_text']
    return generated_poem_madih
   
#-------------------------------------------------------------------------------------
def prompt(type: str) -> str:

    if type == "مدح":
      with open('prompts/25_random_prompt.txt', 'r', encoding='utf-8') as file:
        lines = file.readlines()
        random_line = random.choice(lines).strip()
        return random_line
    elif type == "أبو الطيب المتنبي":
      with open('prompts/prompts/prompt_mutnabi.txt', 'r', encoding='utf-8') as file:
        lines = file.readlines()
        random_line = random.choice(lines).strip()
        return random_line
    else:
        return "نوع النص غير معروف."


# @app.post("/classify_poetry", response_class=HTMLResponse)
# async def generate_poetry(request: Request):
#     return templates.TemplateResponse("poetry_classification.html", {"request": request})

