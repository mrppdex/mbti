#!/bin/bash

echo "Usage: ./make.sh [ EI | SN | FT | PJ ] <model data dir>"
echo "[] - REQUIRED, <> - OPTIONAL"

if [[ -z ${1} ]]; then
  exit 1
fi

DATA_DIR=${2}
DATA_DIR=${DATA_DIR:='../model_container/data/'}
if [[ -d ${DATA_DIR} ]]
then
    python mtbi.etl.dense.py
    python mtbi.feature_eng.dense.py $1
    python mtbi.model_def.dense.py
    python mtbi.model_train.dense.py

    cp *.pkl ${DATA_DIR}
    cp trained_model.h5 ${DATA_DIR}
    exit 0
fi

echo "args are missing"