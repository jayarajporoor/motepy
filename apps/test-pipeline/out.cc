/********************************************************************************
This code is automatically generated by the VerticalThings compiler. DO NOT EDIT!
********************************************************************************/
#include <stdio.h>
#include <stdint.h>
#include <math.h>
#include <stdlib.h>
/*Managed memory variables*/
uint32_t __vtmem[1920];
float (*model_layer0_p)[60][30]= (float (*)[60][30]) &__vtmem[0];
#define model_layer0 (*model_layer0_p)
float (*model_layer1_p)[30]= (float (*)[30]) &__vtmem[1800];
#define model_layer1 (*model_layer1_p)
float (*datasource_data_p)[60]= (float (*)[60]) &__vtmem[1830];
#define datasource_data (*datasource_data_p)
float (*model_predict_tmp_p)[30]= (float (*)[30]) &__vtmem[1890];
#define model_predict_tmp (*model_predict_tmp_p)
/*End of managed memory variables*/
/*Module vars for datasource*/
/*End of module vars for datasource*/
/*Module vars for model*/
const int32_t model_N=60;
const int32_t model_M=30;
/*End of module vars for model*/
float (*model_predict_features_p)[60];
#define model_predict_features (*model_predict_features_p)
typedef enum { __datasource_acquire, __model_predict}  __pipeline;
 __pipeline __state = __datasource_acquire;
void _datasource_init()
{
    {
    }
}
void _datasource_acquire()
{
    {
        for(int i=0; i<60; i++)
        {
            datasource_data[i]=(( (float) (rand()))/RAND_MAX);
        }
        printf("Next\n");
        model_predict_features_p = &(datasource_data); __state = __model_predict;
    }
}
void _model_random_weights()
{
    {
        for(int j=0; j<model_M; j++)
        {
            for(int i=0; i<model_N; i++)
            {
                model_layer0[i][j]=(( (float) (rand()))/RAND_MAX);
            }
            model_layer1[j]=(( (float) (rand()))/RAND_MAX);
        }
    }
}
void _model_init()
{
    {
        _model_random_weights();
    }
}
void _model_predict()
{
    float model_predict_res;
    float __t0;
    float __t1;
    {
        printf("Prediction\n");
        __t1=0;
        for(int __i=0; __i<30; __i++)
        {
            __t0=0;
            for(int __j=0; __j<60; __j++)
            {
                __t0=((model_predict_features[__j]*model_layer0[__j][__i])+__t0);
            }
            model_predict_tmp[__i]=__t0;
            __t1=((model_predict_tmp[__i]*model_layer1[__i])+__t1);
        }
        model_predict_res=__t1;
        printf("Result %f\n", model_predict_res);
    }
}
void loop()
{
    switch(__state)
    {
        case __datasource_acquire:
        __state = __datasource_acquire;
        _datasource_acquire();
        break;
        case __model_predict:
        __state = __datasource_acquire;
        _model_predict();
        break;
        default :
        __state = __datasource_acquire;
    }
}
void setup()
{
    _datasource_init();
    _model_init();
}