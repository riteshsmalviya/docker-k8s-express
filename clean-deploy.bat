@echo off
echo === CLEANING UP OLD DEPLOYMENTS ===

REM Delete the deployment completely
echo Deleting existing deployment...
kubectl delete deployment express-deployment --ignore-not-found=true

REM Wait a moment for cleanup
timeout /t 5 /nobreak > nul

REM Apply fresh deployment with latest image
echo Applying fresh deployment...
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

REM Wait for deployment to be ready
echo Waiting for deployment to be ready...
kubectl wait --for=condition=available --timeout=300s deployment/express-deployment

REM Show final status
echo === FINAL STATUS ===
kubectl get pods -l app=express-app
kubectl get services express-service
kubectl get deployment express-deployment