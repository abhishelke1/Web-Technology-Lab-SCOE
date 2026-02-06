@echo off
echo ==========================================
echo      FORCE UPLOAD TO GITHUB
echo   (Discarding old history/conflicts)
echo ==========================================
echo.

cd /d "e:\TY LABS SCOE\WTL"

echo 1. Removing old Git configuration (if any)...
if exist .git (
    rmdir /s /q .git
)

echo.
echo 2. Initializing new Git Repository...
git init

echo.
echo 3. Adding files...
git add .

echo.
echo 4. Committing changes...
git commit -m "Fresh Upload: JS Removed, Purple Theme Applied"

echo.
echo 5. Setting Remote...
git branch -M main
git remote add origin https://github.com/abhishelke1/Web-Technology-Lab-SCOE.git

echo.
echo 6. Pushing to GitHub (Force)...
echo.
echo NOTE: This will OVERWRITE the remote repository.
git push -u --force origin main

echo.
echo ==========================================
echo                 Finished
echo ==========================================
pause
