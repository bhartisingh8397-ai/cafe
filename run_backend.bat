@echo off
echo ===================================================================
echo   ☕ Sudha Cafe Backend Server Launcher
echo   BCA 5th Semester Minor Project
echo ===================================================================

cd /d "%~dp0backend"

echo Checking for packaged JAR...
if not exist "target\sudha-cafe-backend-1.0.0.jar" (
    echo Compiling and packaging backend...
    call "C:\Users\bharti\apache-maven-3.9.16\bin\mvn.cmd" package -DskipTests
)

echo.
echo Select Mode:
echo [1] Run with MySQL Database (Default: localhost:3306, DB: sudha_cafe)
echo [2] Run with In-Memory H2 Database (Instant offline viva demo mode)
echo.
set /p MODE="Enter choice [1 or 2] (Default 1): "

if "%MODE%"=="2" (
    echo.
    echo Starting Spring Boot with in-memory H2 profile...
    java -jar target\sudha-cafe-backend-1.0.0.jar --spring.profiles.active=h2
) else (
    echo.
    echo Starting Spring Boot with MySQL...
    java -jar target\sudha-cafe-backend-1.0.0.jar
)

pause
