@echo off
echo.
echo ==================================================
echo   Hotel Reservation System - Yaoundé
echo ==================================================
echo.
echo Starting frontend (Vite) on port 5173...
echo.

REM Naviguer au répertoire principal
cd /d "%~dp0"

REM Installer les dépendances si nécessaire
if not exist "node_modules" (
    echo Installing frontend dependencies...
    call npm install
)

REM Lancer le frontend
echo Launching Vite server...
start cmd /k "npm run dev"

echo.
echo Frontend will start in 5 seconds...
timeout /t 5 /nobreak

REM Ouvrir le répertoire backend dans une nouvelle fenêtre
echo.
echo Starting backend (Express) on port 5000...
echo.

REM Naviguer au backend et lancer
start cmd /k "cd backend && npm install --loglevel=error && npm run dev"

echo.
echo ✓ Frontend: http://localhost:5173
echo ✓ Backend:  http://localhost:5000
echo.
echo Press Ctrl+C in each terminal to stop the servers.
echo.
