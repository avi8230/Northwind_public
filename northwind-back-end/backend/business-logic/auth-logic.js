const jwt = require("jsonwebtoken");
const dal = require("../data-access-layer/dal");

async function isUsernameTaken(username) {
    const users = await dal.getAllUsersAsync();
    const index = users.findIndex(u => u.username === username);
    return index !== -1;
}

async function registerAsync(user) {
    const users = await dal.getAllUsersAsync();
    const maxId = users.reduce((maxId, u) => u.id > maxId ? u.id : maxId, 0);
    user.id = maxId + 1;
    users.push(user);
    await dal.saveAllUsersAsync(users);
    delete user.password;
    const token = jwt.sign({ user }, config.jwtKey, { expiresIn: "5h" });
    return token;
};

async function loginAsync(credentials) {
    const users = await dal.getAllUsersAsync();
    const user = users.find(u => u.username === credentials.username && u.password === credentials.password);
    if(!user) return null;
    delete user.password;
    const token = jwt.sign({ user }, config.jwtKey, { expiresIn: "5h" });
    return token;
}

module.exports = {
    isUsernameTaken,
    registerAsync,
    loginAsync
};