@echo off
cd /d C:\Users\tomas.beltran\Downloads\ProjectCalc-Hub
git add -A
git commit -F .git\COMMIT_MSG.tmp
del .git\COMMIT_MSG.tmp
git status -sb
git log -1 --oneline
git remote -v
