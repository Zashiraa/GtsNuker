@echo off
:title Setting Up GhostsNuker...
:top
cls
node setup.js
pause
call npm init 
call npm install discord.js
call npm install chalk
call npm install fs
pause
exit
goto :top
