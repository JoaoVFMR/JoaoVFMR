matrizA = [
    [2, -3, 1],
    [3, -1, 3],
    [1, 2, -2]
]

B = [9, 8, 5]

detA = (
    matrizA[0][0] * matrizA[1][1] * matrizA[2][2] +
    matrizA[0][1] * matrizA[1][2] * matrizA[2][0] +
    matrizA[0][2] * matrizA[1][0] * matrizA[2][1] - 
    matrizA[0][2] * matrizA[1][1] * matrizA[2][0] - 
    matrizA[0][1] * matrizA[1][0] * matrizA[2][2] - 
    matrizA[0][0] * matrizA[1][2] * matrizA[2][1]
)
print(f"Determinante de A: {detA}")

matrizX = [
        [B[0], matrizA[0][1], matrizA[0][2]],
        [B[1], matrizA[1][1], matrizA[1][2]],
        [B[2], matrizA[2][1], matrizA[2][2]]
    ]

det_X = (
        matrizX[0][0] * matrizX[1][1] * matrizX[2][2] + 
        matrizX[0][1] * matrizX[1][2] * matrizX[2][0] + 
        matrizX[0][2] * matrizX[1][0] * matrizX[2][1] - 
        matrizX[0][2] * matrizX[1][1] * matrizX[2][0] - 
        matrizX[0][1] * matrizX[1][0] * matrizX[2][2] - 
        matrizX[0][0] * matrizX[1][2] * matrizX[2][1]
)
print(f"Determinante de X: {det_X}")

matrizY = [
        [matrizA[0][0], B[0], matrizA[0][2]],
        [matrizA[1][0], B[1], matrizA[1][2]],
        [matrizA[2][0], B[2], matrizA[2][2]]
    ]

det_Y = (
        matrizY[0][0] * matrizY[1][1] * matrizY[2][2] + 
        matrizY[0][1] * matrizY[1][2] * matrizY[2][0] + 
        matrizY[0][2] * matrizY[1][0] * matrizY[2][1] - 
        matrizY[0][2] * matrizY[1][1] * matrizY[2][0] - 
        matrizY[0][1] * matrizY[1][0] * matrizY[2][2] - 
        matrizY[0][0] * matrizY[1][2] * matrizY[2][1]
)
print(f"Determinante de Y: {det_Y}")


matrizZ = [
        [matrizA[0][0], matrizA[0][1], B[0]],
        [matrizA[1][0], matrizA[1][1], B[1]],
        [matrizA[2][0], matrizA[2][1], B[2]]
    ]

det_Z = (
        matrizZ[0][0] * matrizZ[1][1] * matrizZ[2][2] + 
        matrizZ[0][1] * matrizZ[1][2] * matrizZ[2][0] + 
        matrizZ[0][2] * matrizZ[1][0] * matrizZ[2][1] - 
        matrizZ[0][2] * matrizZ[1][1] * matrizZ[2][0] - 
        matrizZ[0][1] * matrizZ[1][0] * matrizZ[2][2] - 
        matrizZ[0][0] * matrizZ[1][2] * matrizZ[2][1]
)
print(f"Determinante de Z: {det_Z}")


if detA == 0:    
    if det_X == 0 and det_Y == 0 and det_Z == 0:
        print("O sistema é indeterminado (infinitas soluções).")
    else:
        print("O sistema não tem solução (é impossível).")    
else:
    x = det_X / detA
    y = det_Y / detA
    z = det_Z / detA
    
print(f"Solução: X = {x}, Y = {y}, Z = {z}")

# EXEMPLO DE MATRIZ DETERMINADA (UMA ÚNICA SOLUÇÃO)
# matrizA = [
#     [2, -3, 1],
#     [3, -1, 3],
#     [1, 2, -2]
# ]
# B = [9, 8, 5]

# EXEMPLO DE MATRIZ INDETERMINADA (INFINITAS SOLUÇÕES)
# matrizA = [
#     [2, -1, 3],
#     [1, 2, -1],
#     [4, -2, 6]
# ]
# B = [-4, 5, -8]

# EXEMPLO DE MATRIZ SEM SOLUÇÃO (IMPOSSIVEL)
# matrizA = [
#     [1, 3, -2],
#     [5, 1, 4],
#     [3, 2, 1]
# ]
# B = [8, 12, 4]