import os
from image.image import ImageProcessing
from database.sqlite3 import execute

ip = ImageProcessing()

for filename in os.listdir(os.getcwd() + '/image/samples'):
  with open(os.path.join(os.getcwd() + '/image/samples', filename), 'rb') as file:
    (img, ico) = ip.process_image(file.read(), 400, 60)

    execute('UPDATE books SET image_icon = ?, image_full = ? WHERE id = ?', [ico, img, filename.replace('.jpg', '')])
