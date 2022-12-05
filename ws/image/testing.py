import os

from image import ImageProcessing

ip = ImageProcessing()

for filename in os.listdir(os.getcwd() + '/samples'):
  if filename.find('img-') != -1 or filename.find('ico-') != -1:
    os.remove(os.path.join(os.getcwd() + '/samples', filename))

for filename in os.listdir(os.getcwd() + '/samples'):
  with open(os.path.join(os.getcwd() + '/samples', filename), 'rb') as file:
    (img, ico) = ip.process_image(file.read(), 300, 50)

    with open(os.path.join(os.getcwd() + '/samples', 'img-' + filename), "wb") as save_file:
      save_file.write(img)

    with open(os.path.join(os.getcwd() + '/samples', 'ico-' + filename), "wb") as save_file:
      save_file.write(ico)
