echo off
where /q node || ECHO ERROR node.js not found && EXIT /B
where /q npm || ECHO ERROR NPM not found && EXIT /B
where /q yarn
if ERRORLEVEL 1 (
    npm i
    npm start
) else (
    yarn install
    yarn start
)
