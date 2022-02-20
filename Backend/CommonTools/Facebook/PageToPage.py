import requests

#  post single image
def postImage(group_id, img):
    url = f"https://graph.facebook.com/{group_id}/photos?access_token=" + auth_token

    files = {
        'file': open(img, 'rb'),
    }
    data = {
        "published": False
    }
    r = requests.post(url, files=files, data=data).json()
    return r

# upload multiple image
def multiPostImage(pageId,message, img_list):
    imgs_id = []
    for img in img_list:
        post_id = postImage(pageId, img)

        imgs_id.append(post_id['id'])

    args = dict()
    args["message"] = message
    for img_id in imgs_id:
        key = "attached_media["+str(imgs_id.index(img_id))+"]"
        args[key] = "{'media_fbid': '"+img_id+"'}"
    url = f"https://graph.facebook.com/{pageId}/feed?access_token=" + auth_token
    requests.post(url, data=args)

#  upload a video
def postVideo(pageId, video_path):
    url = f"https://graph-video.facebook.com/{pageId}/videos?access_token=" + auth_token
    files = {
        'file': open(video_path, 'rb'),
    }
    payload={
        "title":"Testing Title",
        "description":"Testing Description",
    }
    requests.post(url, files=files, data=payload)
