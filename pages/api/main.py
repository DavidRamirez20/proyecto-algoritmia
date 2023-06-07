from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import base64
from ObjectDetection.classificate import classifyF

app = FastAPI()

if __name__ == '__main__':
   import uvicorn
   uvicorn.run(app, host='127.0.0.1', port=8000)
   
origins = ["http://localhost:3000","https://greenfy.vercel.app/"]

app.add_middleware(
   CORSMiddleware,
   allow_origins=origins,
   allow_credentials=True,
   allow_methods=["*"],
   allow_headers=["*"],
)

class ImagePayload(BaseModel):
   imageSrc: str


@app.post("/")
async def upload_image(payload: ImagePayload):
   imageData = base64.b64decode(payload.imageSrc.split(",")[1])
   
   with open("uploaded_image.jpg", "wb") as f:
      f.write(imageData)
   return {"message": "Image uploaded successfully", 'image' : imageData}

@app.post("/result")
async def sendResult():
   resultp = classifyF()
   return { 'result' : resultp }