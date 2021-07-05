@echo off
title Installing Modules...
:top
cls
node install.js
pause
call npm install discord.js
call npm install chalk
pause
exit
goto :top