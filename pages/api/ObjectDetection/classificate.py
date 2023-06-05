from modelOD import detect_labels

def main():
   photo = 'C:/Users/alejo/Documents/Proyecto Algoritmia/proyecto-algoritmia/public/PawPrint.png'
   label_count = detect_labels(photo)
   
   return label_count

if __name__ == "__main__":
   main()

x = main()

def classifyF():
   listWhite  = ['Plastic', 'Paper', 'Cardboard', 'Glass', 'Metal']
   listGreen = ['Food Waste', 'Food']
   listBlack = ['Toilet Paper', 'Napkins', 'Face Mask', 'Gloves']
      
   for waste in listWhite:
      if x == waste:
         print('Tu residuo va en la caneca blanca.')

   for waste in listGreen:
      if x == waste:
         print('Tu residuo va en la caneca verde.')

   for waste in listBlack:
      if x == waste:
         print('Tu residuo va en la caneca negra')