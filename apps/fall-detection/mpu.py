mpu : Adafruit_MPU6050
a : sensors_event_t
g: sensors_event_t
temp: sensors_event_t

def init() -> void:
    Serial.begin(115200)
    mpu.begin()
    mpu.setAccelerometerRange(MPU6050_RANGE_8_G)
    mpu.setGyroRange(MPU6050_RANGE_500_DEG)
    mpu.setFilterBandwidth(MPU6050_BAND_94_HZ)

@flow
def acquire() -> void:
    mpu.getEvent(&a, &g, &temp)
    next(a.acceleration.x, a.acceleration.y, a.acceleration.z, a.gyro.x, a.gyro.y, a.gyro.z)
