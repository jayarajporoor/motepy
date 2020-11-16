//Adapted from example

#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>

Adafruit_MPU6050 mpu;

#define MAX_SAMPLES 400
float accel_x[MAX_SAMPLES];
float accel_y[MAX_SAMPLES];
float accel_z[MAX_SAMPLES];
float gyro_x[MAX_SAMPLES];
float gyro_y[MAX_SAMPLES];
float gyro_z[MAX_SAMPLES];


void print_array(const char *name, float data[]){
  Serial.print("\"");
  Serial.print(name);
  Serial.print("\": [");
  for(int i=0;i<MAX_SAMPLES;i++){
    if(i > 0){
      Serial.print(", ");
    }
    Serial.print(data[i]);
  }
  Serial.print("]");
}

void acquire() {
   sensors_event_t a, g, temp;
 
  /* Get new sensor events with the readings */
  for(int index=0;index<MAX_SAMPLES;index++){
    mpu.getEvent(&a, &g, &temp);
    accel_x[index] = a.acceleration.x;
    accel_y[index] = a.acceleration.y;
    accel_z[index] = a.acceleration.z;
    gyro_x[index] = g.gyro.x;
    gyro_y[index] = g.gyro.y;
    gyro_z[index] = g.gyro.z;
    index++;
  }
  Serial.println("{");
  print_array("accel_x", accel_x);
  Serial.println(",");
  print_array("accel_y", accel_y);
  Serial.println(",");
  print_array("accel_z", accel_z);  
  Serial.println(",");
  print_array("gyro_x", gyro_x);
  Serial.println(",");
  print_array("gyro_y", gyro_y);  
  Serial.println(",");
  print_array("gyro_z", gyro_z);  
  Serial.println("\n},");
}


void setup(void) {
  Serial.begin(115200);
  while (!Serial)
    delay(10); // will pause Zero, Leonardo, etc until serial console opens

  Serial.println("Adafruit MPU6050 test!");

  // Try to initialize!
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");

  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);
  Serial.print("Accelerometer range set to: ");
  switch (mpu.getAccelerometerRange()) {
  case MPU6050_RANGE_2_G:
    Serial.println("+-2G");
    break;
  case MPU6050_RANGE_4_G:
    Serial.println("+-4G");
    break;
  case MPU6050_RANGE_8_G:
    Serial.println("+-8G");
    break;
  case MPU6050_RANGE_16_G:
    Serial.println("+-16G");
    break;
  }
  mpu.setGyroRange(MPU6050_RANGE_500_DEG);
  Serial.print("Gyro range set to: ");
  switch (mpu.getGyroRange()) {
  case MPU6050_RANGE_250_DEG:
    Serial.println("+- 250 deg/s");
    break;
  case MPU6050_RANGE_500_DEG:
    Serial.println("+- 500 deg/s");
    break;
  case MPU6050_RANGE_1000_DEG:
    Serial.println("+- 1000 deg/s");
    break;
  case MPU6050_RANGE_2000_DEG:
    Serial.println("+- 2000 deg/s");
    break;
  }

  mpu.setFilterBandwidth(MPU6050_BAND_94_HZ);
  Serial.print("Filter bandwidth set to: ");
  switch (mpu.getFilterBandwidth()) {
  case MPU6050_BAND_260_HZ:
    Serial.println("260 Hz");
    break;
  case MPU6050_BAND_184_HZ:
    Serial.println("184 Hz");
    break;
  case MPU6050_BAND_94_HZ:
    Serial.println("94 Hz");
    break;
  case MPU6050_BAND_44_HZ:
    Serial.println("44 Hz");
    break;
  case MPU6050_BAND_21_HZ:
    Serial.println("21 Hz");
    break;
  case MPU6050_BAND_10_HZ:
    Serial.println("10 Hz");
    break;
  case MPU6050_BAND_5_HZ:
    Serial.println("5 Hz");
    break;
  }
  delay(100);

}


void loop(){
  Serial.println();
  //Serial.println("Waiting for user input for data acquisition...");

  while(!Serial.available() ){
  }

  acquire();

  
  while(Serial.available()){
    Serial.read();
  }
  //delay(1000);

}
