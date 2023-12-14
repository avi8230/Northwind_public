const fs = require("fs");

function safeDelete(fullPath) {
    try {
        if (!fullPath || !fs.existsSync(fullPath)) return;
        fs.unlinkSync(fullPath);
    }
    catch (err) { }
}

module.exports = safeDelete;