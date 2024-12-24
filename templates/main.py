#للربط
from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi import Depends

app = FastAPI()
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# @app.get("/create-poem", response_class=HTMLResponse)
# async def create_poem(request: Request):
#     return templates.TemplateResponse("create_poem.html", {"request": request})

# @app.get("/select-type", response_class=HTMLResponse)
# async def select_type(request: Request):
#     return templates.TemplateResponse("select_type.html", {"request": request})

# @app.post("/result", response_class=HTMLResponse)
# async def generate_poem(request: Request, prompt: str = Form(...)):
#     # هنا يمكنك إضافة منطق إنشاء الشعر باستخدام النموذج
#     generated_poem = f"قصيدة تم إنشاؤها حول: {prompt}"  # مثال بسيط
#     return templates.TemplateResponse("result.html", {"request": request, "generated_poem": generated_poem})