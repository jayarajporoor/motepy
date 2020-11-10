#include <stdlib.h>
void setup();
void loop();

int main(int argc, char *argv[]){
	setup();
    int i =0;
    int limit =0;
    if(argc > 1){
        limit = atoi(argv[1]);
    }
	while(1){
		loop();
        i++;
        if(limit > 0 and i > limit){
            break;
        }
	}
    return 0;
}
