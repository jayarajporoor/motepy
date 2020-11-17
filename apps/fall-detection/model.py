include weights
#fc1 : const float[16][300]
#fc2 : const float[8][16]
#fc3 : const float[8]

def init() -> void:
    pass

@flow
def predict(ax: float[50], ay: float[50], az: float[50], gx: float[50], gy: float[50], gz: float[50]) -> void:
    data: float[300]
    layer1_out : float[16]
    layer2_out: float[8]
    res: float
    fall: int
    for i in range(0,50):
        data[i] = ax[i]
        data[i+50] = ay[i]
        data[i+100] = az[i]
        data[i+150] = gx[i]
        data[i+200] = gy[i]
        data[i+250] = gz[i]
    layer1_out = fc1 * data
    for i in range(0,16): #ReLU
        layer1_out[i] = max(layer1_out[i], 0)
    layer2_out = fc2 * layer1_out
    for i in range(0,8): #ReLU
        layer2_out[i] = max(layer2_out[i], 0)
    res = fc3 * layer2_out
    res = tanh(res)
    fall = round(res)
    if fall == 1:
        next()
