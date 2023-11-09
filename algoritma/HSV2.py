from cv2 import imread
import numpy as np
from math import sqrt
import sys
import time
from colorama import Fore, Back, Style
np.set_printoptions(threshold=sys.maxsize)

def write_to_file(fname, data):
    fname = "file_output/" + fname
    f = open(fname, "w")
    f.write(str(data))
    f.close()

def count_hsv(B, G, R):
    max_values = np.maximum(np.maximum(B, G), R)
    min_values = np.minimum(np.minimum(B, G), R)
    delta_values = max_values - min_values

    # print(max_values[0][0], min_values[0][0], delta_values[0][0])
    # print(h)
    h = np.where(max_values == R, (60 * ((G - B) / delta_values) + 360) % 360, 0)
    h += np.where(max_values == G, (60 * ((B - R) / delta_values) + 120) % 360, 0)
    h += np.where(max_values == B, (60 * ((R - G) / delta_values) + 240) % 360, 0)
    h = np.where(delta_values != 0, h, 0)
    h = np.where(h > 360, h//2, h)
    
    h = np.round(h)

    h = np.where(h == 0, 360, h)

    # calculate s
    s = max_values.copy()
    s = np.where(max_values != 0, delta_values / max_values, 0)

    v = max_values

    return h, s, v

def to_hsv(img):
    # print(img[0][0])
    img = img / 255.0
    # print("img shape", img.shape)
    B, G, R = img[:, :, 0], img[..., 1], img[..., 2]
    B = preprocess(B)
    G = preprocess(G)
    R = preprocess(R)
    # print(B[0][0], G[0][0], R[0][0])
    # print("B shape", B.shape)
    # write_to_file("hsv2.txt", B)
    arr_h = np.zeros((3, 3, img.shape[0]//3, img.shape[1]//3))
    arr_s = np.zeros((3, 3, img.shape[0]//3, img.shape[1]//3))
    arr_v = np.zeros((3, 3, img.shape[0]//3, img.shape[1]//3))
    for i in range(3):
        for j in range(3):
            h, s, v =  count_hsv(B[i][j], G[i][j], R[i][j])
            arr_h[i][j] = h
            arr_s[i][j] = s
            arr_v[i][j] = v
    return arr_h, arr_s, arr_v

def masking(h, s, v):
    h = h.flatten()
    s = s.flatten()
    v = v.flatten()
    # print("kurang dari 0 atau lebih", np.sum(h > 360))
    temp = np.where(h > 360, h, 0)
    # print(temp)
    # print("size h:", len(h))
    # print(type(h))
    # write_to_file("hsv2.txt", h)
    h_bins = [1, 26, 41, 121, 191, 271, 296, 316, 360]
    s_bins = [0, 0.2, 0.7, 1]
    v_bins = [0, 0.2, 0.7, 1]
    h, bin_h = np.histogram(h, bins=h_bins)
    # write_to_file("hsv2-after.txt", h)
    s, bin_s = np.histogram(s, bins=s_bins)
    v, bin_v = np.histogram(v, bins=v_bins)
    # print("size h after:", np.sum(h))
    
    # print(h.shape, s.shape, v.shape)
    # print("hsv :", h, s, v)
    return np.hstack(( h, s, v )).ravel()

def cosine_similarity(v1, v2):
    mat_jumlah_dot = np.zeros((3, 3))
    jumlah_dot = v1 * v2
    for i in range(3):
        for j in range(3):
            mat_jumlah_dot[i][j] = sum(jumlah_dot[i][j])

    # print(mat_jumlah_dot[0][0])
    mat_kal_dot1 = np.zeros((3, 3))
    mat_kal_dot2 = np.zeros((3, 3))

    kali_dot1 = (v1 * v1)
    kali_dot2 = (v2 * v2)
    
    for i in range(3):
        for j in range(3):
            mat_kal_dot1[i][j] = sqrt(sum(kali_dot1[i][j]))
            mat_kal_dot2[i][j] = sqrt(sum(kali_dot2[i][j]))

    return ((mat_jumlah_dot) / (mat_kal_dot1 * mat_kal_dot2))

def preprocess(array):
    # print(array.shape)
    row, col = array.shape[0], array.shape[1]
    row = row - (row % 3)
    col = col - (col % 3)
    row //= 3
    col //= 3
    # print(row, col)

    img = np.zeros((3, 3, row, col))
    # print(img)
    for i in range(3):
        for j in range(3):
            temp = array[i*row:i*row + row, j*col: j*col + col]
            # print(temp)
            img[i][j] = temp
    return img

def get_histogram(f1):
    img1 = imread(f1)

    h1, s1, v1 = to_hsv(img1)
    # print(h1.shape, s1.shape, v1.shape)
    
    vector1 = np.zeros((3, 3, 14))
    for i in range(3):
        for j in range(3):
            temp = masking(h1[i][j], s1[i][j], v1[i][j])
            vector1[i][j] = temp
    # print(vector1)
    print("pixel sum:", np.sum(vector1), 512*512*3)
    return vector1
    

def main(f1, f2):
    vector1 = get_histogram(f1)
    vector2 = get_histogram(f2)

    # for i in range(3):
    #     for j in range(3):

    result = cosine_similarity(vector1, vector2)
    result = sum(sum(result))
    print("similarity:", result/9*100)

if __name__ == "__main__":
    
    f1 = "images/result.png"
    f2 = "images/chat_gpt_lena.png"
    print(f1, f2)
    print()

    start_time = time.time()

    main(f1, f2)

    end_time = time.time()

    if(end_time-start_time > 1):
        print(Fore.RED, "running time:", end_time - start_time, Style.RESET_ALL)
    else:
        print(Fore.GREEN, "running time:", end_time - start_time, Style.RESET_ALL)