import os
import cv2
import numpy as np

class ImageProcessing:

  def process_image(self, image_string, image_width, icon_width):
    # Load image
    img_np = np.fromstring(image_string, np.uint8)
    img_cv = cv2.imdecode(img_np, cv2.IMREAD_COLOR)

    # Standardise background
    result = self.std_background(img_cv)

    # Create bounding box of content on white background and crop
    ret, thresh = cv2.threshold(result, 250, 255, cv2.THRESH_BINARY_INV)
    x1,y1,w,h = cv2.boundingRect(cv2.cvtColor(thresh, cv2.COLOR_BGR2GRAY))
    x2 = x1+w
    y2 = y1+h
    cropped = img_cv[y1:y2, x1:x2]

    # Scale and flip image as required to generate full size image and icon
    flipped = self.ensure_vertical(cropped)
    transformed_full = self.scale_image(flipped, image_width)
    full_string = cv2.imencode('.jpg', transformed_full)[1].toString()

    transformed_icon = self.scale_image(flipped, icon_width)
    icon_string = cv2.imencode('.jpg', transformed_icon)[1].toString()

    return (full_string, icon_string)

  def ensure_vertical(self, img):
    if img.shape[0] < img.shape[1]:
      return cv2.rotate(img, cv2.ROTATE_90_CLOCKWISE)
    return img

  def scale_image(self, img, width):
    scale_percent = (width / img.shape[1])
    width = int(img.shape[1] * scale_percent)
    height = int(img.shape[0] * scale_percent)
    return cv2.resize(img, (width, height))

  def std_background(self, img):
    myimage_hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    #Take S and remove any value that is less than half
    s = myimage_hsv[:,:,1]
    s = np.where(s < 127, 0, 1) # Any value below 127 will be excluded

    # We increase the brightness of the image and then mod by 255
    v = (myimage_hsv[:,:,2] + 127) % 255
    v = np.where(v > 127, 1, 0)  # Any value above 127 will be part of our mask

    # Combine our two masks based on S and V into a single "Foreground"
    foreground = np.where(s+v > 0, 1, 0).astype(np.uint8)  #Casting back into 8bit integer
    background = np.where(foreground==0,255,0).astype(np.uint8) # Invert foreground to get background in uint8
    background = cv2.cvtColor(background, cv2.COLOR_GRAY2BGR)  # Convert background back into BGR space
    foreground = cv2.bitwise_and(img, img, mask=foreground) # Apply our foreground map to original image
    final_image = background+foreground # Combine foreground and background

    return final_image
