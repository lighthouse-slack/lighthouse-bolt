const blocks = require("../payloads/main.js");

const mainCommand = async (app, payload, context) => {
  try {
    await app.client.chat.postMessage({
      token: context.botToken,
      channel: payload.channel_id,
      blocks,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = mainCommand;
