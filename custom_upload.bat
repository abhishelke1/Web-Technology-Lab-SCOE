@echo off
set GIT_PATH="E:\Window Application\git\Git\cmd\git.exe"

echo ==========================================
echo      FORCE UPLOAD (Custom Git Path)
echo ==========================================
echo.

cd /d "e:\TY LABS SCOE\WTL"

echo 1. Removing old Git configuration...
if exist .git (
    rmdir /s /q .git
)

echo.
echo 2. Initializing new Git Repository...
%GIT_PATH% init

echo.
echo 3. Adding files...
%GIT_PATH% add .

echo.
echo 4. Committing changes...
%GIT_PATH% commit -m "Fresh Upload: JS Removed, Purple Theme"

echo.
echo 5. Setting Remote...
%GIT_PATH% branch -M main
%GIT_PATH% remote add origin https://github.com/abhishelke1/Web-Technology-Lab-SCOE.git

echo.
echo 6. Pushing to GitHub (Force)...
echo      (Please authenticate in the popup window if requested)
%GIT_PATH% push -u --force origin main

echo.
echo ==========================================
echo                 Finished
echo ==========================================
pause
