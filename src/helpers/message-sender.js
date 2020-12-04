const sendMessage = async ({app, token, channel}, message) => {
  try {
    await app.client.chat.postMessage({
      token,
      channel,
      ...message,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendMessage };