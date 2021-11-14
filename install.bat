@echo off
title Installing Modules...
:top
cls
node install.js
pause
call npm install discord.js@12.5.3
call npm install chalk
call npm install fs
pause
exit
goto :top
