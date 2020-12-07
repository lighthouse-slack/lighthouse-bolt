"use strict";

const {
  generateFullReport,
  generateCustomizedReport
} = require("../helpers/report-generator");
const { sendMessage, deleteMessage } = require("../helpers/message-helper");
const { addHttpProtocol, validateURL } = require("../helpers/url-helper");

const sendLoadingMessage = async (credentials) => {
  if (credentials.channel) {
    const loadingMessage = "Running report...";
    return await sendMessage(credentials, { text: loadingMessage });
  }
};

const getReportMessage = async (credentials, url, categoryList) => {
  const reportURL = categoryList
    ? await generateCustomizedReport(credentials, url, categoryList)
    : await generateFullReport(credentials, url);

  return `You can view your report here: ${reportURL}`;
};

const runCommand = async (credentials, url, categoryList) => {
  url = addHttpProtocol(url);

  if (!validateURL(url)) {
    const errorMessage = `The URL you\'ve entered (${url}) is invalid. Please try again.`;
    await sendMessage(credentials, { text: errorMessage });
    return;
  }
  const loadingMessageTS = (await sendLoadingMessage(credentials)).ts;
  const reportMessage = await getReportMessage(credentials, url, categoryList);
  await sendMessage(credentials, { text: reportMessage });
  await deleteMessage(credentials, loadingMessageTS);

  return;
};

module.exports = runCommand;
