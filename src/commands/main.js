const blocks = require("../payloads/main.js");
const { sendMessage } = require('../helpers/message-sender');

const mainCommand = async (credentials) => {
  await sendMessage(credentials, { blocks });
};

module.exports = mainCommand;
