from PIL import Image
import io
import requests

image_path = "./example.jpeg"
image = Image.open(image_path)
with io.BytesIO() as output:
    image.save(output, format="JPEG")
    requests.put(
        "http://localhost:3000/api/usr/pfp",
        {"uid": "WMbaj4lcYNTzg6rOXvuOtkfvw6S2", "newByte8Array": output},
    )
