from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})



@app.get("/select-genre", response_class=HTMLResponse)
async def generate_poetry(request: Request):
    return templates.TemplateResponse("poetry_generation_genre.html", {"request": request})


@app.get("/select-poet", response_class=HTMLResponse)
async def generate_poetry(request: Request):
    return templates.TemplateResponse("poetry_generation_poets.html", {"request": request})


@app.get("/classify_poetry", response_class=HTMLResponse)
async def generate_poetry(request: Request):
    return templates.TemplateResponse("poetry_classification.html", {"request": request})


@app.post("/generate-poetry", response_class=HTMLResponse)
async def generate_poetry(request: Request, type: str = Form(...)):
    type='g'
    return templates.TemplateResponse("poetry_display.html", {"request": request, "type": type})

