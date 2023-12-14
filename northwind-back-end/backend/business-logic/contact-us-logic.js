const dal = require("../data-access-layer/dal");

async function getAllContactUsMessagesAsync() {
    const contactUsMessages = await dal.getAllContactUsMessagesAsync();
    return contactUsMessages;
};

async function addContactUsMsgAsync(contactUsMsg) {
    const contactUsMessages = await dal.getAllContactUsMessagesAsync();
    const maxId = contactUsMessages.reduce((maxId, msg) => msg.id > maxId ? msg.id : maxId, 0);
    contactUsMsg.id = maxId + 1;
    contactUsMessages.push(contactUsMsg);
    await dal.saveAllContactUsMessagesAsync(contactUsMessages);
    return contactUsMsg;
};

module.exports = {
    getAllContactUsMessagesAsync,
    addContactUsMsgAsync
};