import numpy as np

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

# Example usage
if __name__ == '__main__':
    # Create a sample 6x6 array
    sample_array = np.array([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                             [7, 8, 9, 10, 11, 12, 7, 8, 9],
                             [13, 14, 15, 16, 17, 18, 7, 8, 9],
                             [19, 20, 21, 22, 23, 24, 7, 8, 9],
                             [25, 26, 27, 28, 29, 30, 7, 8, 9],
                             [31, 32, 33, 34, 35, 36, 7, 8, 9],
                             [19, 20, 21, 22, 23, 24, 7, 8, 9],
                             [25, 26, 27, 28, 29, 30, 7, 8, 9],
                             [31, 32, 33, 34, 35, 36, 7, 8, 9]])

    n = 3  # Split into 2x2 regions
    subarrays = split_2d_array(sample_array, n)

    for i, subarray in enumerate(subarrays):
        print(f"Subarray {i + 1}:\n{subarray}\n")
