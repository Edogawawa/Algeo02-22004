import time
from cv2 import imread, imwrite
import numpy as np
from numpy.linalg import norm
from colorama import Fore, Back, Style
import sys
from math import sqrt, pow, log
np.set_printoptions(threshold=sys.maxsize)
np.set_printoptions(linewidth=np.inf)

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
    return black

def feature_extraction(fm):
    matrix_index = np.arange(fm.shape[0])
    m_square = np.square(matrix_index[:, None] - matrix_index)

    contrast = np.sum(m_square * fm)
    # for i in range(fm.shape[0]):
    #     for j in range(fm.shape[1]):
    #         contrast += (fm[i][j] * pow(i - j, 2))

    homogenity = np.sum(fm / (1 + m_square))
    # for i in range(fm.shape[0]):
    #     for j in range(fm.shape[1]):
    #         homogenity += (fm[i][j] / (1 + pow(i-j, 2)))

    entropy = -np.sum(np.where(fm == 0, 0, fm * np.log(fm)))
    # for i in range(fm.shape[0]):
    #     for j in range(fm.shape[1]):
    #         if(fm[i][j] == 0):
    #             entropy += 0
    #             continue
    #         entropy += (fm[i][j] * log(fm[i][j]))
    # entropy = -entropy

    # dissimilarity = 0
    # for i in range(fm.shape[0]):
    #     for j in range(fm.shape[1]):
    #         dissimilarity += fm[i][j] * abs(i-j)

    # asm = 0
    # for i in range(fm.shape[0]):
    #     for j in range(fm.shape[1]):
    #         asm += pow(fm[i][j], 2)
    # energy = sqrt(asm)

    # dissimilarity, asm, energy
    return np.array([contrast, homogenity, entropy])

def createCoOccurence(arr):
    framework0 = np.zeros((256, 256))
    # framework45 = np.zeros((256, 256))
    # framework90 = np.zeros((256, 256))
    # framework135 = np.zeros((256, 256))
    
    # 0 angle
    for i in range(arr.shape[0]):
        for j in range(arr.shape[1] - 1):
            x = arr[i][j]
            y = arr[i][j+1]
            # print(x, y)
            framework0[x][y] += 1
    # write_to_file("texture-0angle.txt", framework0)

    # 45 angle
    # for i in range(1, arr.shape[0]):
    #     for j in range(0, arr.shape[1]-1):
    #         x = arr[i][j]
    #         y = arr[i-1][j+1]
    #         # print(x, y)
    #         framework45[x][y] += 1

    # 90 angle
    # for i in range(1, arr.shape[0]):
    #     for j in range(arr.shape[1]):
    #         x = arr[i][j]
    #         y = arr[i-1][j]
    #         framework90[x][y] += 1

    # 135 angle
    # for i in range(1, arr.shape[0]):
    #     for j in range(1, arr.shape[1]):
    #         x = arr[i][j]
    #         y = arr[i-1][j-1]
    #         framework135[x][y] += 1
    framework0 += np.transpose(framework0)
    # framework45 += np.transpose(framework45)
    # framework90 += np.transpose(framework90)
    # framework135 += np.transpose(framework135)

    
    # normalize
    framework0 = framework0 / (np.sum(framework0))
    # framework45 = framework45 / (np.sum(framework45))
    # framework90 = framework90 / (np.sum(framework90))
    # framework135 = framework135 / (np.sum(framework135))
    # print(framework0)

    
    f_0 = feature_extraction(framework0)
    # f_45 = feature_extraction(framework45)
    # f_90 = feature_extraction(framework90)
    # f_135 = feature_extraction(framework135)

    return f_0 #, f_45, f_90, f_135

def cosine_similarity(v1, v2):
    hasil_dot = np.dot(v1, v2)

    return ((hasil_dot) / (norm(v1) * norm(v2)))

def processPicture(f1, f2):
    img = imread(f1)
    img = toBlack(img)

    img = np.round(img)
    img = np.int64(img)
    print("dimension: ", img.shape)

    # write_to_file("angie_apple_black.txt", img)
    
    # fm0, fm45, fm90, fm135 = createCoOccurence(img)
    fm0 = createCoOccurence(img)

    img2 = imread(f2)
    img2 = toBlack(img2)

    img2 = np.round(img2)
    img2 = np.int64(img2)
    print("dimension: ", img2.shape)

    # write_to_img("angie_apple_black.png", img2)
    # write_to_file("angie_apple_black.txt", img2)
    
    
    # fm20, fm245, fm290, fm2135 = createCoOccurence(img2)
    fm20 = createCoOccurence(img2)

    # print(fm20)
    # print(type(fm20))
    print()
    print(f1)
    print("------------------------------")
    print("contrast, homogenity, entropy, dissimilarity, asm, energy")
    print(fm0)
    # print(fm45)
    # print(fm90)
    # print(fm135)

    print()
    print(f2)
    print("------------------------------")
    print("contrast, homogenity, entropy, dissimilarity, asm, energy")
    print(fm20)
    # print(fm245)
    # print(fm290)
    # print(fm2135)

    print()
    print("Simmilarity 0 degree:", cosine_similarity(fm0, fm20))
    # print("Simmilarity 45 degree:", cosine_similarity(fm45, fm245))
    # print("Simmilarity 90 degree:", cosine_similarity(fm90, fm290))
    # print("Simmilarity 135 degree:", cosine_similarity(fm135, fm2135))




def main(f1, f2):
    img = processPicture(f1, f2)


if __name__ == "__main__" :
    # f1 = "images/angie_apel.jpg"
    # f2 = "images/angie_nct.jpg"
    f1 = "images/Solid_black.png"
    f2 = "images/putih2_0.png"

    print(f1, f2)
    print()

    start_time = time.time()

    main(f1, f2)

    end_time = time.time()

    if(end_time-start_time > 1):
        print(Fore.RED, "running time:", end_time - start_time, Style.RESET_ALL)
    else:
        print(Fore.GREEN, "running time:", end_time - start_time, Style.RESET_ALL)