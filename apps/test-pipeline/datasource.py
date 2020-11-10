data: float[60]

def init() -> void:
    pass

@flow
def acquire() -> void:
    for i in range(0, 60):
        data[i] = float(rand())/RAND_MAX
    printf("Next\n")
    next(data)
