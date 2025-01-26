from fastapi import FastAPI, HTTPException, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from transformers import GPT2TokenizerFast, GPT2LMHeadModel, pipeline
import random


app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Models setup
#-------------------------------------AraGPT2-mutnabi_model--------------------------------------------
model_path = "WalaaAlluqmani/mutnabi_model"
model_mutnabi = GPT2LMHeadModel.from_pretrained(model_path)
tokenizer_mutnabi = GPT2TokenizerFast.from_pretrained(model_path)
model_mutnabi.eval()

generation_mutnabi_pipeline = pipeline("text-generation", model=model_mutnabi, tokenizer=tokenizer_mutnabi)

#----------------------------------------AraGPT2-madih_model---------------------------------------------
model_name = "WalaaAlluqmani/madih_model"
model_madih = GPT2LMHeadModel.from_pretrained(model_name)
tokenizer_madih = GPT2TokenizerFast.from_pretrained(model_name)
model_madih.eval()

generation_madih_pipeline = pipeline("text-generation", model=model_madih, tokenizer=tokenizer_madih)

#-----------------------------------------------------------------------------------------------------

# Routes
@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/select-poet", response_class=HTMLResponse)
async def select_poet(request: Request):
    return templates.TemplateResponse("poetry_generation_poets.html", {"request": request})

@app.get("/select-genre", response_class=HTMLResponse)
async def select_genre(request: Request):
    return templates.TemplateResponse("poetry_generation_genre.html", {"request": request})

@app.post("/generate-poetry", response_class=HTMLResponse)
async def generate_poetry(request: Request, type: str = Form(...)):
    prompt_text = get_prompt(type)

    if type == "مدح":
        generated_poem = generate_poem_based_on_genre(prompt_text)
    elif type == "أبو الطيب المتنبي":
        generated_poem = generate_poem_based_on_poet(prompt_text)
    else:
        raise HTTPException(status_code=400, detail="Invalid model type")
    
    return templates.TemplateResponse("poetry_display.html", {"request": request, "generated_poem": generated_poem, "type": type})

# Poetry generation functions
def generate_poem_based_on_poet(prompt: str) -> str:
    generated_poem = generation_mutnabi_pipeline(
        prompt,
        pad_token_id=tokenizer_mutnabi.eos_token_id,
        num_beams=6,
        max_length=50,
        top_p=0.95,
        temperature=0.7,
        repetition_penalty=3.0,
        no_repeat_ngram_size=3,
        early_stopping=True,
        truncation=True
    )[0]['generated_text']
    return generated_poem

def generate_poem_based_on_genre(prompt: str) -> str:
    generated_poem_madih = generation_madih_pipeline(
        prompt,
        pad_token_id=tokenizer_madih.eos_token_id,
        num_beams=6,
        max_length=50,
        top_p=0.95,
        temperature=0.7,
        repetition_penalty=3.0,
        no_repeat_ngram_size=3,
        early_stopping=True,
        truncation=True
    )[0]['generated_text']
    return generated_poem_madih

def get_prompt(type: str) -> str:
    if type == "مدح":
        with open('prompts/random_prompt.txt', 'r', encoding='utf-8') as file:
            lines = file.readlines()
            random_line = random.choice(lines).strip()
            return random_line
    elif type == "أبو الطيب المتنبي":
        with open('prompts/prompt_mutnabi.txt', 'r', encoding='utf-8') as file:
            lines = file.readlines()
            random_line = random.choice(lines).strip()
            return random_line
    else:
        return "نوع النص غير معروف."