vec2: float[60]
vec3: float[60]

def init() -> void:
    pass

def process() -> void:
    vec2 = 0 #initialization
    vec2 = vec2 + vec2
    printf("Address of vec2: %ld\n", uint64_t(vec2))
    vec3 = 0
    vec3 = vec3 + vec3
    printf("Address of vec3: %ld\n", uint64_t(vec3))
