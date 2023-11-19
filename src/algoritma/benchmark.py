from cv2 import imread, cvtColor
import cv2 as cv
import numpy as np
import time
import sys
from colorama import Fore, Back, Style
np.set_printoptions(threshold=sys.maxsize)

def check_h(h):
    if (316 <= h <= 360):
        return 0
    elif (1 <= h <= 25):
        return 1
    elif (26 <= h <= 40):
        return 2
    elif (41 <= h <= 120):
        return 3
    elif (121 <= h <= 190):
        return 4
    elif (191 <= h <= 270):
        return 5
    elif (271 <= h <= 295):
        return 6
    elif (295 <= h <= 315):
        return 7
    
def check_s(s):
    if (0 <= s < 0.2):
        return 0
    elif (0.2 <= s < 0.7):
        return 1
    elif (0.7 <= s <= 1):
        return 2

def check_v(v):
    if (0 <= v < 0.2):
        return 0
    elif (0.2 <= v < 0.7):
        return 1
    elif (0.7 <= v <= 1):
        return 2
    
def to_hist(img):
    h = [0 for i in range(7)]
    s = [0, 0, 0]
    v = [0, 0, 0]

    for i in range(img.shape[0]):
        for j in range(img.shape[1]):
            h[check_h(img[i][j][0])] += 1
            s[check_h(img[i][j][1])] += 1
            v[check_h(img[i][j][2])] += 1

    result = [*h, *s, *v]
    print(result)
    return result


def main(f1, f2):
    img1 = imread(f1)
    img1 = cvtColor(img1, cv.COLOR_BGR2HSV)
    img2 =  imread(f2)
    img2 = cvtColor(img2, cv.COLOR_BGR2HSV)

    print(img1)
    img1 = to_hist(img1)

    print(img1[0][0], img2[0][0])

    



if __name__ == "__main__":
    
    f1 = "images/dataset/dataset/0.jpg"
    f2 = "images/dataset/dataset/1.jpg"
    print(f1, f2)
    print()

    start_time = time.time()

    main(f1, f2)

    end_time = time.time()

    if(end_time-start_time > 1):
        print(Fore.RED, "running time:", end_time - start_time, Style.RESET_ALL)
    else:
        print(Fore.GREEN, "running time:", end_time - start_time, Style.RESET_ALL)