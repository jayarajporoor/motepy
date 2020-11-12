weights: float[60][60]
vec1: float[60]

def init() -> void:
    vec1 = 0
    #pass

def process() -> void:
    #vec1 = 0 #initialization
    vec1 = 1
    vec1 = vec1 *weights + vec1 *weights#some processing
    printf("Address of vec1: %ld\n", uint64_t(vec1))
    next()
