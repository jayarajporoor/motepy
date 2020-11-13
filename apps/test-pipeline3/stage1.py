weights: float[60][60]
vec1: float[60]
vec2: float[30]

def init() -> void:
    pass

def process() -> void:
    #vec1 = 0 #initialization
    vec1 = 1
    #vec1 = vec1 + vec2
    vec1 = vec1 *weights + vec2
