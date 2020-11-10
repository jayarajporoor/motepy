N : const int32_t = 60
M : const int32_t = 30
layer0 : float[N][M]
layer1 : float[M]

def random_weights() -> void:
    for j in range(0, M):
        for i in range(0, N):
            layer0[i][j] = float(rand())/RAND_MAX
        layer1[j] = float(rand())/RAND_MAX

def init() -> void:
    random_weights()

@flow
def predict(features: float[N]) -> void:
    res: float
    tmp : float[30]
    printf("Prediction\n")
    tmp = features * layer0
    res = tmp * layer1
    #res = exp(res)
    printf("Result %f\n", res)
