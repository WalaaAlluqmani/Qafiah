from fastapi import FastAPI, HTTPException, Request, Form
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from transformers import GPT2TokenizerFast, GPT2LMHeadModel, pipeline

# ----------------------------------------------------------------------------------
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# --------------------------------AraGPT-2----------------------------------------------

# # model_path = "models/AraGPT-mutnabi"
# model = GPT2LMHeadModel.from_pretrained(model_path)
# tokenizer = GPT2TokenizerFast.from_pretrained(model_path)
# model.eval()

# generation_pipeline = pipeline("text-generation", model=model, tokenizer=tokenizer)

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

    line = "كسوتني حلة تبلى محاسنها"
    if type == "مدح":
        generatedpoem = generatePoem_BasedonGenre(line)
    # elif type == "ابو الطيب المتنبي":
    #     generatedpoem = generatePoem_BasedonPoet(line)
    else:
        raise HTTPException(status_code=400, detail="Invalid model type")
    
    return templates.TemplateResponse("poetry_display.html", {"request": request,"generated_poem": generatedpoem, "type": type})

#-------------------------------------------------------------------------------------
# def generatePoem_BasedonPoet(prompt: str) -> str:
     
#     generated_poem =" "
#     # generation_pipeline(
#     # #   prompt,
    #   pad_token_id=tokenizer.eos_token_id,
    #   num_beams=6,
    #   max_length=50,
    #   top_p=0.9,
    #   temperature=0.9,
    #   repetition_penalty = 3.0,
    #   no_repeat_ngram_size = 3,
    #   early_stopping=True,
    #   truncation=True
    # )[0]['generated_text']
    # return generated_poem

#-------------------------------------------------------------------------------------
def generatePoem_BasedonGenre(prompt: str) -> str:
    generated_poem = prompt
    return generated_poem
   
#-------------------------------------------------------------------------------------
@app.post("/classify_poetry", response_class=HTMLResponse)
async def generate_poetry(request: Request):
    return templates.TemplateResponse("poetry_classification.html", {"request": request})

