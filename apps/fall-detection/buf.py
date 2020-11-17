accel_x:  float ring[100]
accel_y: float ring[100]
accel_z: float ring[100]
gyro_x: float ring[100]
gyro_y: float ring[100]
gyro_z: float ring[100]
prev_ax: float
prev_ay: float
prev_az: float
prev_gx: float
prev_gy: float
prev_gz: float
STRIDE: const int = 5
delta: int

def init() -> void:
    prev_ax = 0
    prev_ay = 0
    prev_az = 0
    prev_gx = 0
    prev_gy = 0
    prev_gz = 0

@flow
def put(ax: float, ay: float, az: float, gx: float, gy: float, gz: float) -> void:
    accel_x.push(ax)
    accel_y.push(ay)
    accel_z.push(az)
    gyro_x.push(gx )
    gyro_y.push(gy )
    gyro_z.push(gz)
    prev_ax = ax
    prev_ay = ay
    prev_az = az
    prev_gx = gx
    prev_gy = gy
    prev_gz = gz
    delta = delta + 1
    if delta >= STRIDE:
        delta = 0
        next(accel_x, accel_y, accel_z, gyro_x, gyro_y, gyro_z)
