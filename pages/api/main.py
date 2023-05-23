from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pages.api.ObjectDetection.modelOD import detect_objects

app = FastAPI()

app.add_middleware(
   CORSMiddleware,
   allow_origins=["http://localhost:3000"],
   allow_credentials=True,
   allow_methods=["GET", "POST", "PUT", "DELETE"],
   allow_headers=["*"],
)

class ImageData(BaseModel):
   image: str

@app.get('/main')
async def upload_image(image_data: ImageData):
   try:
      image_path = 'captured_image.jpg' 
      with open('captured_image.jpg', 'wb') as f:
         f.write(image_data.image.encode('utf-8'))
      
      detection_results = detect_objects(image_path)
      
      return {'message': 'Image uploaded successfully'}
   
   except Exception as e:
      return {"error": "Failed to upload and process image", "details": str(e)}