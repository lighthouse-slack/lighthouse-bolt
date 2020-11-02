const sendMessage = async ({ app, channel, botToken, message }) => {
  try {
    await app.client.chat.postMessage({
      token: botToken,
      channel,
      text: message,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendMessage;
