#import base64

# Get the image data.
#image_data = open("image.jpg", "rb").read()

# Base64 encode the image data.
#base64_encoded_image_data = base64.b64encode(image_data)

# Call the detect_labels method.
#response = client.detect_labels(Image={"Bytes": base64_encoded_image_data})

#Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#PDX-License-Identifier: MIT-0 (For details, see https://github.com/awsdocs/amazon-rekognition-developer-guide/blob/master/LICENSE-SAMPLECODE.)

#response = client.detect_labels(Image={'S3Object':{'Bucket':bucket,'Name':photo}},
#MaxLabels=10,
# Uncomment to use image properties and filtration settings
#Features=["GENERAL_LABELS", "IMAGE_PROPERTIES"],
#Settings={"GeneralLabels": {"LabelInclusionFilters":["Cat"]},
# "ImageProperties": {"MaxDominantColors":10}}
#)

#for label in response['Labels']:
#    print("Label: " + label['Name'])
#    print("Confidence: " + str(label['Confidence']))
#    print("Instances:")

#    for instance in label['Instances']:
#        print(" Bounding box")
#        print(" Top: " + str(instance['BoundingBox']['Top']))
#        print(" Left: " + str(instance['BoundingBox']['Left']))
#        print(" Width: " + str(instance['BoundingBox']['Width']))
#        print(" Height: " + str(instance['BoundingBox']['Height']))
#        print(" Confidence: " + str(instance['Confidence']))
#        print()

#    print("Parents:")
#    for parent in label['Parents']:
#        print(" " + parent['Name'])

#    print("Aliases:")
#    for alias in label['Aliases']:
#        print(" " + alias['Name'])

#    print("Categories:")
#    for category in label['Categories']:
#        print(" " + category['Name'])
#        print("----------")
#        print()

#if "ImageProperties" in str(response):
#    print("Background:")
#    print(response["ImageProperties"]["Background"])
#    print()
#    print("Foreground:")
#    print(response["ImageProperties"]["Foreground"])
#    print()
#    print("Quality:")
#    print(response["ImageProperties"]["Quality"])
#    print()

import boto3

def detect_labels(photo):

    session = boto3.Session(profile_name='Alejo')
    client = session.client('rekognition')

    with open(photo, 'rb') as image:
        response = client.detect_labels(Image={'Bytes': image.read()})

    return response['Labels'][0]['Name']