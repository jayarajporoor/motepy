res2 : float[30]
@address(100)
res3: float[30]
def init() -> void:
    res3[0] = 0
    res2 = 0
    res2 = res2 + res2
    res3[0] = res3[0] + 1
