"use strict";

const { generateFullReport } = require('../helpers/report-generator');
const { validateURL } = require('../helpers/url-helper');

const sendLoadingMessage = async (say, payload) => {
  if (payload) {
    await say('Running report...');
  } 
};

const getReportMessage = async (say, url) => {
  const reportURL = await generateFullReport(say, url);
  return `You can view your report here: ${reportURL}`;
};

const runCommand = async (say, payload) => {

  const url = payload.text.split(' ')[1];
  
  if (!(validateURL(url))) {
    await say(`The URL you\'ve entered (${url}) is invalid. Please try again.`)
    return;
  }

  await sendLoadingMessage(say, payload);
  const reportMessage = await getReportMessage(say, url);
  await say(reportMessage);

  return;
};

module.exports = runCommand;
