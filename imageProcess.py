import pytesseract
from PIL import Image

# Load the preprocessed image
image = Image.open('image.png')

# Perform OCR using Tesseract
extracted_text = pytesseract.image_to_string(image)

# Print the extracted text
print(extracted_text)
