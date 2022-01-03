import os
from PIL import Image
from os import path

file_path = path.abspath(__file__)
dir_path = path.dirname(file_path)
print("converter",dir_path)
def converter(images):
    imagelist = []
    if(len(images) == 1):
        Image.open(images[0]).convert('RGB').save(dir_path+'/Data/PJImageConveter.pdf')
        return
    for img in images[1:]:
        imagelist.append(Image.open(img).convert('RGB'))

    Image.open(images[0]).convert('RGB').save(dir_path+'/Data/PJImageConveter.pdf', save_all=True,append_images=imagelist)
    print("converted")


ALLOWED_EXTENSION = set(['png', 'jpg', 'jpeg', 'gif'])


def allowedFile(filename):

    return "." in filename and filename.split(".")[1].lower() in ALLOWED_EXTENSION






