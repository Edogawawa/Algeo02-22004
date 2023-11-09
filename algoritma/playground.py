import numpy as np

def preprocess(array):
    print(array.shape)
    row, col = array.shape[0], arr.shape[1]
    row = row - (row % 3)
    col = col - (col % 3)
    row //= 3
    col //= 3
    print(row, col)

    img = np.zeros((3, 3, row, col))
    # print(img)
    for i in range(3):
        for j in range(3):
            temp = array[i*row:i*row + row, j*col: j*col + col]
            print(temp)
            img[i][j] = temp
    return img

def slice_img():
    arr = np.array(
        [
            [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8]
            ], 
            [
                [9, 10, 11], [12, 13, 14], [15, 16, 17], [9, 10, 11], [12, 13, 14], [15, 16, 17]
            ],
            [
                [18, 19, 20], [21, 22, 23], [24, 25, 26], [18, 19, 20], [21, 22, 23], [24, 25, 26]
            ],
            [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8]
            ], 
            [
                [9, 10, 11], [12, 13, 14], [15, 16, 17], [9, 10, 11], [12, 13, 14], [15, 16, 17]
            ],
            [
                [18, 19, 20], [21, 22, 23], [24, 25, 26], [18, 19, 20], [21, 22, 23], [24, 25, 26]
            ]
        ]

    )
    B, G, R = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    print(arr.shape)
    print(arr)
    print(B)
    print(G)
    print(R)

    print("\n===========================")
    B = preprocess(B)
    print(str(B))


arr = np.array([[10, 5, 8, 1, 8, 5, 8],
[5, 10, 8, 1, 10, 8, 1],
[1, 8, 5, 5, 1, 5, 1],
[1, 5, 5, 8, 10, 8, 8],
[10, 8, 5, 8, 8, 1, 10],
[8, 1, 1, 10, 1, 8, 8],
[5, 8, 5, 8, 8, 5, 10]])

framework = np.zeros((11, 11))

# 0 angle
for i in range(arr.shape[0]):
    for j in range(arr.shape[1] - 1):
        x = arr[i][j]
        y = arr[i][j+1]
        framework[x][y] += 1

# # 45 angle
# for i in range(1, arr.shape[0]):
#     for j in range(0, arr.shape[1]-1):
#         x = arr[i][j]
#         y = arr[i-1][j+1]
#         framework[x][y] += 1

# # 90 angle
# for i in range(1, arr.shape[0]):
#     for j in range(arr.shape[1]):
#         x = arr[i][j]
#         y = arr[i-1][j]
#         framework[x][y] += 1

# # 135 angle
# for i in range(1, arr.shape[0]):
#     for j in range(1, arr.shape[1]):
#         x = arr[i][j]
#         y = arr[i-1][j-1]
#         framework[x][y] += 1

temp = np.delete(framework, [0, 2, 3, 4, 6, 7, 9], 0)
temp = np.delete(temp, [0, 2, 3, 4, 6, 7, 9], 1)
print(framework)
print(temp)

n = 3  # Change this value to the desired dimension of the array
A = np.arange(1, n + 1)  # Create an array of integers from 1 to n

sum = np.einsum('ij,i,j->', A, np.arange(1, n + 1), np.arange(1, n + 1))  # Calculate the sum of (each elements times i times j) using np.einsum

print(sum)  # Print the sum