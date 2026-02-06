# How to Upload Your Project to GitHub

It appears that **Git is not installed** (or not found) on your computer. To upload your project, please follow these steps:

## Step 1: Install Git
1.  Download Git from the official website: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2.  Run the installer.
3.  **Important**: During installation, ensure you select the option **"Git from the command line and also from 3rd-party software"** (this adds Git to your PATH).
4.  Restart your computer (or at least your terminal/VS Code) after installation.

## Step 2: Run the Upload Script
Once Git is installed:
1.  Navigate to your project folder: `e:\TY LABS SCOE\WTL\`
2.  Double-click the file named **`fresh_upload.bat`**.
3.  This script will automatically:
    - Initialize the repository.
    - Commit your changes (JS removal & Purple theme).
    - Force push to your GitHub link.

## Troubleshooting
If the script closes immediately or shows errors:
-   Open a Command Prompt.
-   Type `git --version`. If it says "command not found", Git is still not installed correctly.
