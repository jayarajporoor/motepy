export MOTEPY=$HOME/dev/personal/hobby_dev/motepy
node $MOTEPY/src/mpcompiler.cjs $1 -config config.json -code out.cc
g++ $MOTEPY/src/code/main.c out.cc -o out.o
