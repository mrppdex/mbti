#!/bin/bash
if ([ -z $1 ] || [ -z $2 ])
then
    echo "args are missing"
    echo "Usage: ./make.sh [PORT] [DICHOTOMY]"
    echo "e.g. ./make.sh 30001 EI"
    exit 0
fi

python mtbi.etl.dense.py
python mtbi.feature_eng.dense.py $2
python mtbi.model_def.dense.py
python mtbi.model_train.dense.py

cp *.pkl ../model_container/data/
cp trained_model.h5 ../model_container/data

export PORT=$1
export DICHOTOMY=$2

docker_tag=$(echo "mrppdex/mbti_$DICHOTOMY" | awk '{print tolower($0)}')

docker build --tag=$docker_tag ../model_container/.
docker push $docker_tag