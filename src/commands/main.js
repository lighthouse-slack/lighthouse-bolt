const blocks = require("../payloads/main.js");
const { sendBlockMessage } = require('../helpers/message-sender');

const mainCommand = async (app, payload, context) => {
  await sendBlockMessage(app, context.botToken, payload.channel_id, blocks);
};

module.exports = mainCommand;
