FRAME_SIZE: const int = 120
features : float[FRAME_SIZE]

def init() -> void:
    pass

@flow
def featurize(ax: float[100], ay: float[100], az: float[100], gx: float[100], gy: float[100], gz: float[100]) -> void:
    value: float
    idx: int
    features = 0.0
    for i in range(0, 100):
        value = round(10 + ax[i]*10/8.0)
        idx = min(value, 19)
        idx = max(idx, 0)
        features[idx] = features[idx] + 1

        value = round(10 + ay[i]*10/8.0)
        idx = min(value, 19)
        idx = max(idx, 0)
        features[idx+20] = features[idx+20] + 1

        value = round(10 + az[i]*10/8.0)
        idx = min(value, 19)
        idx = max(idx, 0)
        features[idx+40] = features[idx+40] + 1

        value = round(10 + gx[i]*10/6.28)
        idx = min(value, 19)
        idx = max(idx, 0)
        features[idx+60] = features[idx+60] + 1

        value = round(10 + gy[i]*10/6.28)
        idx = min(value, 19)
        idx = max(idx, 0)
        features[idx+80] = features[idx+80] + 1

        value = round(10 + gz[i]*10/6.28)
        idx = min(value, 19)
        idx = max(idx, 0)
        features[idx+100] = features[idx+100] + 1

    next(features)
