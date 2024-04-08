from PIL import Image
import io
import requests
import json
import base64

image_path = "./example.jpeg"
image = Image.open(image_path)

# Save the image data to a BytesIO object
with io.BytesIO() as output:
    image.save(output, format="JPEG")
    # Get the byte data from the BytesIO object
    image_bytes = output.getvalue()

# Encode the image bytes using Base64
image_base64 = base64.b64encode(image_bytes).decode("utf-8")

# Send the image data along with other data in the request
url = "http://localhost:3000/api/usr/pfp"
data = {"uid": "WMbaj4lcYNTzg6rOXvuOtkfvw6S2", "newByte8Array": image_base64}
headers = {"Content-Type": "application/json"}

# Convert data to JSON and send the request
response = requests.put(url, data=json.dumps(data), headers=headers)
print(response.text)
