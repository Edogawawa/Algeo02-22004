import cv2 as cv
import numpy as np
import sys
import math
import time
from colorama import Fore, Back, Style
np.set_printoptions(threshold=sys.maxsize)

# FUNCTIONS

def write_to_file(filename, data):
    filename = "file_output/" + filename
    f = open(filename, "w")
    f.write(str(data))
    f.close()

def split_2d_array(arr, n):
    if arr.shape[0] % n != 0 or arr.shape[1] % n != 0:
        raise ValueError("Array dimensions should be divisible by n")

    subarrays = []
    row_step = arr.shape[0] // n
    col_step = arr.shape[1] // n

    for i in range(n):
        for j in range(n):
            subarray = arr[i * row_step:(i + 1) * row_step, j * col_step:(j + 1) * col_step]
            subarrays.append(subarray)

    return subarrays

def rgb_to_hsv(R, G, B):

    r = R / 255.0
    g = G / 255.0
    b = B / 255.0

    Cmax = max(r, g, b)
    Cmin = min(r, g, b)
    delta = Cmax - Cmin

    # print(f"R: {R}\t\t | G: {G}\t\t | B: {B}")
    # print(f"r: {r} | g: {g} | b\t: {b}")
    # print(f"Cmax\t- {Cmax}")
    # print(f"Cmin\t- {Cmin}")
    # print(f"delta\t- {delta}")

    # Cmax is Red
    h = 0
    if(delta != 0):
        if(Cmax == r):
            h = (60 * ((g - b) / delta) + 360) % 360
            # h = (math.degrees(60) * ((g - b) / delta) % 6)
        elif (Cmax == g):
            h = (60 * ((b - r) / delta) + 120) % 360
            # h = (math.degrees(60) * ((b - r) / delta + 2))
        elif (Cmax == b):
            h = (60 * ((r - g) / delta) + 240) % 360
            # h = (math.degrees(60) * ((r - g) / delta + 4))
    
    s = 0
    if(Cmax != 0):
        s = delta / Cmax
    v = Cmax

    # print(f"h: {h}")
    # print(f"s: {s}")
    # print(f"v: {v}")
    return round(h), s, v

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
    elif (296 <= h <= 315):
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

def read_per_pixel(img):
    arr_h = [0 for i in range(8)]
    arr_s = [0 for i in range(3)]
    arr_v = [0, 0, 0]

    arr_file_h = []

    row, col = img.shape[0], img.shape[1]
    # print(row, col)
    for x in range(row):
        # arr_row = []
        for y in range(col):
            R = img[x][y][2]
            G = img[x][y][1]
            B = img[x][y][0]
            h, s, v = rgb_to_hsv(R, G, B)

            

            if(h == 0):
                h = 360
            # arr_row.append(h)
            i_h = check_h(h)
            i_s = check_s(s)
            i_v = check_s(v)
            # print(R, G, B)
            # print(h, s, v)
            # print(i_h, i_s, i_v)
            arr_h[i_h] += 1
            arr_s[i_s] += 1
            arr_v[i_v] += 1

            # img[x][y][0] = h
            # img[x][y][1] = s
            # img[x][y][2] = v
        # arr_file_h.append(arr_row)
    # arr_file_h = np.asarray(arr_file_h)
    # print(type(arr_file_h))
    # write_to_file("hsv1.txt", arr_file_h)
    return img, arr_h, arr_s, arr_v

def get_vector(img):
    # olah gambar
    img, h, s, v = read_per_pixel(img)

    # write_to_file("hsv1.txt", h)

    # write_to_file("isi_matriks", str(img))

    return h, s, v

def cosinus_simmilarity(a, b):
    # print(a, b)
    jumlah_dot = [a[i] * b[i] for i in range(len(a))]

    kali_dot1 = 0
    kali_dot2 = 0

    for i in range(len(a)):
        kali_dot1 += a[i] * a[i]
        kali_dot2 += b[i] * b[i]

    # print(kali_dot1, kali_dot2)
    kali_dot1 = math.sqrt(kali_dot1)
    kali_dot2 = math.sqrt(kali_dot2)

    return (sum(jumlah_dot) / (kali_dot1 * kali_dot2))
    
def euclid_distance(v1, v2):
    sum = 0
    for i in range(len(v1)):
        sum += math.pow((v1[i] - v2[i]), 2)
    return math.sqrt(sum)

def main(file1, file2):

    start_time = time.time()
    img = cv.imread(file1)
    # img = cv.resize(img, (513, 513))
    # print(img)
    # img = split_2d_array(img, 3)

    

    v1_h, v1_s, v1_v = get_vector(img)
    # print(type(v1_h))

    img2 = cv.imread(file2)
    # img2 = cv.resize(img2, (513, 513))
    # img2 = split_2d_array(img2, 3)
    v2_h, v2_s, v2_v = get_vector(img2)

    

    v1_h = np.asarray(v1_h, dtype=np.int64)
    v1_s = np.asarray(v1_s, dtype=np.int64)
    v1_v = np.asarray(v1_v, dtype=np.int64)

    v2_h = np.asarray(v2_h, dtype=np.int64)
    v2_s = np.asarray(v2_s, dtype=np.int64)
    v2_v = np.asarray(v2_v, dtype=np.int64)
    # print(type(v1_h))

    # print(v1_h, v1_s, v1_v)
    # print(v2_h, v2_s, v2_v)


    result_h = cosinus_simmilarity(v1_h, v2_h)
    result_s = cosinus_simmilarity(v1_s, v2_s)
    result_v = cosinus_simmilarity(v1_v, v2_v)

    result_h = result_h
    result_s = result_s
    result_v = result_v

    tot_v1 = (np.concatenate((v1_h, v1_s, v1_v), axis = None))
    tot_v2 = (np.concatenate((v2_h, v2_s, v2_v), axis = None))
    print("tot_v1 = ", tot_v1)
    print("tot_v2 = ", tot_v2)
    tot = (cosinus_simmilarity(tot_v1, tot_v2), 2)

    print("jumlah histogram:", np.sum(tot_v1), np.sum(tot_v2))

    euclid_d = euclid_distance(tot_v1, tot_v2)
    print(f"kemiripan hue: {result_h}%")
    print(f"kemiripan sat: {result_s}%")
    print(f"kemiripan val: {result_v}%")
    print(f"rata-rata: {(result_h + result_s + result_v) / 3}")
    print(f"kemiripan versi mixed: {tot}")
    print(f"euclid distance: {euclid_d}")

    end_time = time.time()
    epoch = end_time - start_time
    if(epoch > 0.01):
        print(Fore.RED + "time passed: " + str(epoch) + Style.RESET_ALL)
    else:
        print(Fore.GREEN + "time passed: " + str(epoch) + Style.RESET_ALL)
    
# MAIN APP

if __name__ == "__main__":
    f1 = "images/result.png"
    f2 = "images/chat_gpt_lena.png"
    print(f1, f2)
    print()
    main(f1, f2)
