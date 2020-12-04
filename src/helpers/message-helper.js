const sendMessage = async ({app, token, channel}, message) => {
  try {
    return await app.client.chat.postMessage({
      token,
      channel,
      ...message,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteMessage = async ({app, token, channel}, ts) => {
  try {
    await app.client.chat.delete({
      token,
      channel,
      ts,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendMessage, deleteMessage };