# Myers-Briggs Personality Type Predictor

In this project we are predicting Myers-Briggs personality type based on a provided text. 

It consists of 4 binary classifiers predicting 4 different pairs of Dictotomies (e.g Introversion-Extraversion). Every classifier runs on a separate container and is connected to the outside of the kubernetes pod through the backend.

Models are trained on a [Myers-Briggs dataset](https://www.kaggle.com/datasnaek/mbti-type). Every original row of the dataset is split into concatenated comments up to 512 words of total length.

Resources:

+ `backend` node.js backend
+ `create_files` pipeline to create transformation objects in pickle format, and train model
+ `model_container` python scipts and Docker file used to build the model's Docker container
+ `k8s_manifests` kubernetes deployment and service manifests
