import telegram
import requests
import json
telegram_token_news = "5068084974:AAHsrEn9jA4R0MlVzNbLCc0UdmrvUlbHmnQ"


def send_photos(api_key, chat_id, photo_paths):
    params = {
        'chat_id': chat_id,
        'media': [],
    }
    for path in photo_paths:
        params['media'].append(
            {'type': 'photo', 'media': path})
    params['media'] = json.dumps(params['media'])
    url = f'https://api.telegram.org/bot{api_key}/sendMediaGroup'
    return requests.post(url, data=params)

# sent text message


def sent_message(api_key, chat_id, text):
    params = {
        "chat_id": chat_id,
        "text": text
    }
    url = f'https://api.telegram.org/bot{api_key}/sendMessage'


def facebookPageToTelegram(api_key,telegramId,message,images):
    send_photos(api_key,telegramId,images)
    sent_message(api_key,telegramId,message)

if __name__ == '__main__':
    send_photos(telegram_token_news, '@pjfashionwaywomens',
                ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Idioma_tamil.png/220px-Idioma_tamil.png',
                 'https://omniglot.com/images/writing/tamil.gif'])
