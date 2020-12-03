"use strict";

const { generateFullReport } = require('../helpers/report-generator');
const {sendTextMessage } = require('../helpers/message-sender');
const { validateURL } = require('../helpers/url-helper');

const sendLoadingMessage = async (app, payload, context) => {
  if (payload) {
    const loadingMessage = 'Running report...';
    await sendTextMessage(app, context.botToken, payload.channel_id, loadingMessage);
  }
};

const getReportMessage = async (app, payload, context, url) => {
  const reportURL = await generateFullReport(app, payload, context, url);
  return `You can view your report here: ${reportURL}`;
};

const runCommand = async (app, payload, context) => {

  const url = payload.text.split(' ')[1];
  
  if (!(validateURL(url))) {
    const errorMessage = `The URL you\'ve entered (${url}) is invalid. Please try again.`;
    await sendTextMessage(app, context.botToken, payload.channel_id, errorMessage);
    return;
  }
  await sendLoadingMessage(app, payload, context);
  const reportMessage = await getReportMessage(app, payload, context, url);
  await sendTextMessage(app, context.botToken, payload.channel_id, reportMessage);
  return;
};

module.exports = runCommand;
