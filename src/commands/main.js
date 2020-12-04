const blocks = require("../payloads/main.js");
const { sendMessage } = require('../helpers/message-helper');

const mainCommand = async (credentials) => {
  await sendMessage(credentials, { blocks });
};

module.exports = mainCommand;
