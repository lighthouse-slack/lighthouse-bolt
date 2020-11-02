"use strict";

const { generateFullReport } = require("../helpers/report-generator");
const { validateURL } = require("../helpers/url-helper");
const sendMessage = require("./send-message");

const sendLoadingMessage = async (sendMessageArgs) => {
  const message = "Running report...";
  const args = {
    ...sendMessageArgs,
    message,
  };
  await sendMessage(args);
};

const getReportMessage = async (sendMessageArgs, url) => {
  const reportURL = await generateFullReport(sendMessageArgs, url);
  return `You can view your report here: ${reportURL}`;
};

const runCommand = async (sendMessageArgs, payload, modalInput) => {
  const url = modalInput ? modalInput : payload.text.split(" ")[1];
  if (!validateURL(url)) {
    const args = {
      ...sendMessageArgs,
      message: `The URL you\'ve entered (${url}) is invalid. Please try again.`,
    };
    await sendMessage(args);
    return;
  }

  await sendLoadingMessage(sendMessageArgs);
  const reportMessage = await getReportMessage(sendMessageArgs, url);
  const args = { ...sendMessageArgs, message: reportMessage };
  await sendMessage(args);

  return;
};

module.exports = runCommand;
