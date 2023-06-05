import shutil
from fastapi import FastAPI, File, HTTPException, UploadFile
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import boto3
import base64

app = FastAPI()

if __name__ == '__main__':
   import uvicorn
   uvicorn.run(app, host='127.0.0.1', port=8000)

app.add_middleware(
   CORSMiddleware,
   allow_origins=["http://localhost:3000/recyclepage"],
   allow_credentials=True,
   allow_methods=["*"],
   allow_headers=["*"],
)

class ImageRequest(BaseModel):
   image: str

@app.post('/main')
async def upload_image(image: UploadFile = File(...)):
   try:
      # Save the uploaded image
      with open("image.jpg", "wb") as buffer:
         shutil.copyfileobj(image.file, buffer)
        
      return {"message": "Image uploaded successfully"}
   except Exception as e:
      raise HTTPException(status_code=500, detail="Failed to upload image")