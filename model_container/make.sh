#!/bin/bash
if [[ -z $2 ]]; then
    echo "args are missing"
    echo "Usage: ./make.sh [PORT] [DICHOTOMY]"
    echo "e.g. ./make.sh 30001 EI"
    exit 0
fi

export PORT=$1
export DICHOTOMY=$2

docker_tag=$(echo "mrppdex/mbti_$DICHOTOMY" | awk '{print tolower($0)}')

docker build --tag=${docker_tag} .
docker push ${docker_tag}