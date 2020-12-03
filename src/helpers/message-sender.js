const sendTextMessage = async (app, token, channel, text) => {
  try {
    await app.client.chat.postMessage({
      token,
      channel,
      text,
    });
  } catch (error) {
    console.error(error);
  }
};

const sendBlockMessage = async (app, token, channel, blocks) => {
  try {
    await app.client.chat.postMessage({
      token,
      channel,
      blocks,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendTextMessage, sendBlockMessage };