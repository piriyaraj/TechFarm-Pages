import os
from PIL import Image

def converter(images):
    imagelist = []
    if(len(images) == 1):
        Image.open(images[0]).convert('RGB').save('app/Self/Data/PJImageConveter.pdf')
        return
    for img in images[1:]:
        imagelist.append(Image.open(img).convert('RGB'))

    Image.open(images[0]).convert('RGB').save('app/Self/Data/PJImageConveter.pdf', save_all=True,append_images=imagelist)


ALLOWED_EXTENSION = set(['png', 'jpg', 'jpeg', 'gif'])


def allowedFile(filename):

    return "." in filename and filename.split(".")[1].lower() in ALLOWED_EXTENSION






