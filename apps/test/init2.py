res2 : float[60]
res3: float[30]
res4: float[30]

@address(1000)
res5: uint32[10]

def init() -> void:
    #res3[0] = 0
    value: float
    res2 = 0
    res2 = res2 + res2
    printf("Address res2 %p\n", res2)
    res3 = 0
    res4 = 0
    res3[0] = res3[0] + 1
    value = res4 * res4
    for i in range(0,3):
        res4[i] = exp(res4[i])
    printf("Address res4 %p\n", res4)
    printf("Address res3 %p\n", res3)
    #res3[0] = res3[0] + 1
