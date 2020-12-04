"use strict";

const { generateFullReport } = require('../helpers/report-generator');
const {sendMessage } = require('../helpers/message-sender');
const { validateURL } = require('../helpers/url-helper');

const sendLoadingMessage = async (credentials) => {
  if (credentials.channel) {
    const loadingMessage = 'Running report...';
    await sendMessage(credentials, { text: loadingMessage });
  }
};

const getReportMessage = async (credentials, url) => {
  const reportURL = await generateFullReport(credentials, url);
  return `You can view your report here: ${reportURL}`;
};

const runCommand = async (credentials, url) => {
  if (!(validateURL(url))) {
    const errorMessage = `The URL you\'ve entered (${url}) is invalid. Please try again.`;
    await sendMessage(credentials, { text: errorMessage });
    return;
  }
  await sendLoadingMessage(credentials);
  const reportMessage = await getReportMessage(credentials, url);
  await sendMessage(credentials, { text: reportMessage });
  return;
};

module.exports = runCommand;
