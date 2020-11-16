weights2: const float[3][3] = [
[1,2,3],
[4,5,6],
[7,8,9]
]
weights: float[60][60]
vec1: float[60]

def init() -> void:
    Serial.begin(115200)
    vec1 = 0
    #pass

def process() -> void:
    #vec1 = 0 #initialization
    vec1 = 1
    vec1 = vec1 *weights + vec1 *weights#some processing
    printf("Address of vec1: %ld\n", uint64_t(vec1))
    next()
