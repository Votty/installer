// (c) Votty

const colors = require("colors");
const path = require("path");
const git = require("simple-git")(__dirname);

console.log("Welcome to Votty!".green);
console.log("Checking submodules...");

git.submoduleInit().then(_ => git.submoduleUpdate()).then(_ => {

    console.log("Submodule checking completed.");

});
