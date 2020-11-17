include weights
#fc1 : const float[16][120]
#fc2 : const float[16]

def init() -> void:
    pass

@flow
def predict(features: float[120]) -> void:
    layer1_out: float[16]
    layer2_out: float[8]
    res: float
    fall: int
    layer1_out = fc1 * features + fc1_bias
    for i in range(0,16):
        layer1_out[i] = 1/(1+exp(-layer1_out[i]))
    layer2_out = fc2 * layer1_out + fc2_bias
    for i in range(0,8):
        layer2_out[i] = max(0, layer2_out[i])
    res = fc3 * layer2_out
    res = res + fc3_bias
    res = 1/(1+exp(-res))
    fall = round(res)
    if fall == 1:
        next()
