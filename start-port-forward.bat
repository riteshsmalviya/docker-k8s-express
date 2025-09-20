@echo off
echo Starting port forwarding for express app...
kind get kubeconfig --name dev > temp_kubeconfig
set KUBECONFIG=%CD%\temp_kubeconfig
kubectl config use-context kind-dev
echo Port forwarding started! Access your app at: http://localhost:3000
echo Press Ctrl+C to stop port forwarding
kubectl port-forward service/express-service 3000:3000