## Deployment

Run `make.sh` script to create the deployment pod with 4 binary classifiers and backend, with backend's port `8080` exposed on the node. Then create `LoadBalancer` service, to ensure availability.