vec1: float[60]

def init() -> void:
    vec1 = 0
    #pass

def process() -> void:
    #vec1 = 0 #initialization
    vec1 = vec1 + vec1 #some processing
    printf("Address of vec1: %ld\n", uint64_t(vec1))
    next()
