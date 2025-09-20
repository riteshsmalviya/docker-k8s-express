@echo off
echo Stopping port forwarding...
taskkill /F /IM kubectl.exe 2>nul || echo No kubectl processes found
echo Port forwarding stopped.