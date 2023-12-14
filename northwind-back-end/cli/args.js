const count = process.argv.length - 2;
const first = process.argv[2];

function isFirstHelp() {
    return first === "--help" || first === "-h";
}

function isFirstVersion() {
    return first === "--version" || first === "-v";
}

module.exports = {
    count, first,
    isFirstHelp, isFirstVersion
};