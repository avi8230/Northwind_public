const args = require("./args");

function validate() {

    switch (args.count) {
    
        case 0:
            return true;

        case 1:
            if (!args.isFirstHelp() && !args.isFirstVersion()) {
                return error();
            }
            return true;

        default:
            return error();
    }
}

function error() {
    console.log("Wrong Usage. For help, run: northwind --help");
}

module.exports = validate;