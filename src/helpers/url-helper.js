'use strict'

const { URL, parse } = require('url');
const TinyURL = require('tinyurl');
const { sendMessage } = require('../helpers/message-sender');

const validateURL = (url) => {
  const protocols = ['http', 'https'];
  try {
    new URL(url);
    const parsed = parse(url);
    return protocols
      ? parsed.protocol
        ? protocols.map(x => `${x.toLowerCase()}:`).includes(parsed.protocol)
        : false
      : true;
  } catch (err) {
    return false;
  }
};

const shortenURL = async (credentials, url) => {
  let shortURL;
  try {
    shortURL = await TinyURL.shorten(url);
    return shortURL;
  } catch (err) {
    const errorMessage = 'Something went wrong. Try again later.';
    await sendMessage(credentials, { text: errorMessage });
    return;
  }
};

module.exports = { validateURL, shortenURL };