const packageJson = require("../package.json");

function displayVersion() {
    console.log(packageJson.name);
    console.log("Version: " + packageJson.version);
    console.log("Created by Assaf Finkelshtein.");
}

module.exports = displayVersion;