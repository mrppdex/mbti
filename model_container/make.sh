#!/bin/bash
if ([ -z $1 ] || [ -z $2 ])
then
    echo "args are missing"
    echo "Usage: ./make.sh [PORT] [DICHOTOMY]"
    echo "e.g. ./make.sh 30001 EI"
    exit 0
fi

export PORT=$1
export DICHOTOMY=$2

docker build --tag=mrppdex/mbti_$DICHOTOMY .