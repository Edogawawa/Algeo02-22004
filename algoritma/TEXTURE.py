import time
from cv2 import imread, imwrite
import numpy as np
from colorama import Fore, Back, Style
import sys
from math import sqrt, pow, log
np.set_printoptions(threshold=sys.maxsize)

def write_to_img(fname, data):
    imwrite(fname, data)

def write_to_file(fname, data):
    fname = "file_output/" + fname
    f = open(fname, "w")
    f.write(str(data))
    f.close()

def toBlack(img):
    # print(img)

    B, G, R = img[:, :, 0], img[..., 1], img[..., 2]
    black = 0.299 * R + 0.587 * G + 0.114 * B
    black = np.where(black <= 255, black, 255)
    return black

def feature_extraction(fm):
    contrast = 0
    for i in range(fm.shape[0]):
        for j in range(fm.shape[1]):
            contrast += (fm[i][j] * pow(i - j, 2))

    homogenity = 0
    for i in range(fm.shape[0]):
        for j in range(fm.shape[1]):
            homogenity += (fm[i][j] / (1 + pow(i-j, 2)))

    entropy = 0
    for i in range(fm.shape[0]):
        for j in range(fm.shape[1]):
            if(fm[i][j] == 0):
                entropy += 0
                continue
            entropy += fm[i][j] * log(fm[i][j])
    entropy = -entropy

    dissimilarity = 0
    for i in range(fm.shape[0]):
        for j in range(fm.shape[1]):
            dissimilarity += fm[i][j] * abs(i-j)

    asm = 0
    for i in range(fm.shape[0]):
        for j in range(fm.shape[1]):
            asm += pow(fm[i][j], 2)
    energy = sqrt(asm)
    return np.array([contrast, homogenity, entropy, dissimilarity, asm, energy])

def createCoOccurence(arr):
    framework0 = np.zeros((256, 256))
    framework45 = np.zeros((256, 256))
    framework90 = np.zeros((256, 256))
    framework135 = np.zeros((256, 256))
    
    # 0 angle
    for i in range(arr.shape[0]):
        for j in range(arr.shape[1] - 1):
            x = arr[i][j]
            y = arr[i][j+1]
            # print(x, y)
            framework0[x][y] += 1
    # write_to_file("texture-0angle.txt", framework0)

    # 45 angle
    for i in range(1, arr.shape[0]):
        for j in range(0, arr.shape[1]-1):
            x = arr[i][j]
            y = arr[i-1][j+1]
            # print(x, y)
            framework45[x][y] += 1

    # 90 angle
    for i in range(1, arr.shape[0]):
        for j in range(arr.shape[1]):
            x = arr[i][j]
            y = arr[i-1][j]
            framework90[x][y] += 1

    # 135 angle
    for i in range(1, arr.shape[0]):
        for j in range(1, arr.shape[1]):
            x = arr[i][j]
            y = arr[i-1][j-1]
            framework135[x][y] += 1
    framework0 += np.transpose(framework0)
    framework45 += np.transpose(framework45)
    framework90 += np.transpose(framework90)
    framework135 += np.transpose(framework135)

    
    # normalize
    framework0 = framework0 / np.sum(np.sum(framework0))
    framework45 = framework45 / np.sum(np.sum(framework45))
    framework90 = framework90 / np.sum(np.sum(framework90))
    framework135 = framework135 / np.sum(np.sum(framework135))
    # print(framework0)

    f_0 = feature_extraction(framework0)
    f_45 = feature_extraction(framework45)
    f_90 = feature_extraction(framework90)
    f_135 = feature_extraction(framework135)

    return f_0, f_45, f_90, f_135

def cosine_similarity(v1, v2):
    # print(v1, v2)
    mat_jumlah_dot = np.sum(v1 * v2)
    # print(mat_jumlah_dot)
    # exit()

    # print(mat_jumlah_dot[0][0])

    kali_dot1 = np.sqrt(np.sum(v1 * v1))
    kali_dot2 = np.sqrt(np.sum(v2 * v2))

    return ((mat_jumlah_dot) / (kali_dot1 * kali_dot2))

def processPicture(f1, f2):
    img = imread(f1)
    img = toBlack(img)

    img = np.round(img)
    img = np.int64(img)
    print("dimension: ", img.shape)

    # write_to_file("angie_apple_black.txt", img)
    
    fm0, fm45, fm90, fm135 = createCoOccurence(img)

    img2 = imread(f2)
    img2 = toBlack(img2)

    img2 = np.round(img2)
    img2 = np.int64(img2)
    print("dimension: ", img2.shape)

    # write_to_img("angie_apple_black.png", img2)
    # write_to_file("angie_apple_black.txt", img2)
    
    
    fm20, fm245, fm290, fm2135 = createCoOccurence(img2)

    print(fm20)
    print(type(fm20))

    print("Simmilarity 0 degree:", cosine_similarity(fm0, fm20))
    print("Simmilarity 45 degree:", cosine_similarity(fm45, fm245))
    print("Simmilarity 90 degree:", cosine_similarity(fm90, fm290))
    print("Simmilarity 135 degree:", cosine_similarity(fm135, fm2135))




def main(f1, f2):
    img = processPicture(f1, f2)


if __name__ == "__main__" :
    # f1 = "images/angie_apel.jpg"
    # f2 = "images/angie_nct.jpg"
    f1 = "images/lena.png"
    f2 = "images/angie_apel.jpg"

    print(f1, f2)
    print()

    start_time = time.time()

    main(f1, f2)

    end_time = time.time()

    if(end_time-start_time > 1):
        print(Fore.RED, "running time:", end_time - start_time, Style.RESET_ALL)
    else:
        print(Fore.GREEN, "running time:", end_time - start_time, Style.RESET_ALL)