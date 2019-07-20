#!/bin/bash
if ( [ -n $1 ] || [ -d $2] )
then
    python mtbi.etl.dense.py
    python mtbi.feature_eng.dense.py $1
    python mtbi.model_def.dense.py
    python mtbi.model_train.dense.py

    cp *.pkl ../model_container/data/
    cp trained_model.h5 ../model_container/data
    exit 0
fi

echo "args are missing"
echo "Usage: ./make.sh [ EI | SN | FT | PJ ] [model data dir]"
echo "e.g. ./make.sh EI /mnt/c/mbti_docker/model_container/data"
