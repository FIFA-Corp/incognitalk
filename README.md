# IncogniTalk

IncogniTalk is a social media website that inspirated by Twitter with added anonymous comment like Secreto.

## Main Features

- Posting in user's timeline or feed
- Commenting or asking in secret/incognito, so the user info won't be showed/revealed

## Contributors

1. Fikri Alwan Ramadhan ([fikrialwan](https://github.com/fikrialwan))
2. Mohammad Farizan ([mohammadfarizan](https://github.com/mohammadfarizan))
3. Muhamad Agung Nur Ramadhan ([agnuramdan](https://github.com/agnuramdan))
4. Nur Ikhwan ([ikhwanmachmud](https://github.com/ikhwanmachmud))

## Design and Links

- Figma: [IncogniTalk](https://www.figma.com/file/82QOJVg0SDmLjRLqobfyVv/Figma-Corp?node-id=0%3A1)
- Live: https://incognitalk.netlify.app

## REST API Endpoints

URL: `https://api.kontenbase.com/query/api/v1/ed5645dd-f5f3-468d-b5f9-50d322d2b646`

| HTTP   | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| GET    | `/posts?$lookup=*` | Get all posts  |
| POST   | `/posts`           | Create post    |
| PATCH  | `/posts/:id`       | Edit post      |
| DELETE | `/posts/:id`       | Delete post    |
| POST   | `/comments`        | Create comment |
| PATCH  | `/comments/:id`    | Edit comment   |

## Data Structure

```json
[
  {
    "_id": "633bcc6bdadc42808a40c6af",
    "comments": [],
    "post": ""
  },
  {
    "_id": "633bd40fdadc42808a40c6b1",
    "comments": [
      {
        "_id": "633c37e0dadc42808a40c6fc",
        "comments": "hai juga"
      }
    ],
    "post": "hello all"
  }
]
```
