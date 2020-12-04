"use strict";

const { App } = require("@slack/bolt");
const mainCommand = require("./commands/main");
const runCommand = require("./commands/run");
const dotenv = require("dotenv");
const openFullReportModal = require("./commands/full-report-modal");
const openCustomReportModal = require("./commands/custom-report-modal");
const { sendMessage } = require('./helpers/message-sender');

const ENV = process.env.NODE_ENV || "development";
if (ENV === "development") dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: {
    events: "/slack/events",
    commands: "/slack/commands",
  },
});

app.command("/lighthouse", async ({ ack, payload, context }) => {
  await ack();

  const credentials = {
    app,
    token: context.botToken,
    channel: payload.channel_id
  };

  if (payload.text) {
    if (payload.text.match(/run\s+.*/)) {
      const url = payload.text.split(' ')[1];
      await runCommand(credentials, url);
    } else {
      const errorMessage = "Enter a valid command.";
      await sendMessage(credentials, { text: errorMessage });
    }
  } else {
    mainCommand(credentials);
  }

});

app.action("custom_report", async ({ ack, body, context }) => {
  ack();
  await openCustomReportModal(app, body, context);
});

app.action("full_report", async ({ ack, body, context }) => {
  ack();
  await openFullReportModal(app, body, context);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();