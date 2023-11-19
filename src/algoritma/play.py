
R = 255
G = 0
B = 255

def rgb_to_hsv(R, G, B):

    r = R / 255.0
    g = G / 255.0
    b = B / 255.0

    Cmax = max(r, g, b)
    Cmin = min(r, g, b)
    delta = Cmax - Cmin

    print(f"R: {R}\t\t | G: {G}\t\t | B: {B}")
    print(f"r: {r} | g: {g} | b\t: {b}")
    print(f"Cmax\t- {Cmax}")
    print(f"Cmin\t- {Cmin}")
    print(f"delta\t- {delta}")

    # Cmax is Red
    h = 0
    if(delta != 0):
        if(Cmax == r):
            h = (60 * ((g - b) / delta) + 360) % 360
        elif (Cmax == g):
            h = (60 * ((b - r) / delta) + 120) % 360
        elif (Cmax == b):
            h = (60 * ((r - g) / delta) + 240) % 360
    
    s = 0
    if(Cmax != 0):
        s = delta / Cmax
    v = Cmax

    # print(f"h: {h}")
    # print(f"s: {s}")
    # print(f"v: {v}")
    return h, s, v

def hsv_to_rgb(h, s, v):
    c = v * s
    x = c * (1 - abs((h / (60 / 2*pi)) % 2 - 1))
    m = v - c

    print(x)

    print(f"b: {(0 + m) * 255}\tg: {(x + m) * 55}\tr: {(c + m) * 255}")

rgb_to_hsv(R, G, B)