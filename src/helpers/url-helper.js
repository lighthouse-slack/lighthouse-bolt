"use strict";

const TinyURL = require('tinyurl');
const { sendMessage } = require('./message-helper');

const addHttpProtocol = (url) => {
  const protocolRegEx = /^(https?:\/\/|ftps?:\/\/)/;
  if (!protocolRegEx.test(url)) {
    url = `http://${url}`;
  }
  return url;
}

const validateURL = (url) => {
  const regEx = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
  return regEx.test(url);
};

const shortenURL = async (credentials, url) => {
  let shortURL;
  try {
    shortURL = await TinyURL.shorten(url);
    return shortURL;
  } catch (err) {
    const errorMessage = "Something went wrong. Try again later.";
    await sendMessage(credentials, { text: errorMessage });
    return;
  }
};

module.exports = { addHttpProtocol, validateURL, shortenURL };
