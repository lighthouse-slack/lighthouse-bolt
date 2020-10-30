const blocks = require("../payloads/main.js");

const mainCommand = async (app, payload, context) => {
  try {
    const result = await app.client.chat.postMessage({
      token: context.botToken,
      channel: payload.channel_id,
      blocks,
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = mainCommand;
