"use strict";

const { App } = require("@slack/bolt");
const mainCommand = require("./commands/main");
const runCommand = require("./commands/run");
const dotenv = require("dotenv");
const openFullReportModal = require("./commands/full-report-modal");
const openCustomReportModal = require("./commands/custom-report-modal");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: {
    events: "/slack/events",
    commands: "/slack/commands",
  },
});

const ENV = process.env.NODE_ENV || "development";
if (ENV === "development") dotenv.config();

app.command("/lighthouse", async ({ ack, say, payload, context }) => {
  await ack();

  if (payload.text) {
    if (payload.text.match(/run\s+.*/)) {
      const sendMessageArgs = {
        app,
        botToken: context.botToken,
        channel: payload.channel_id,
      };
      await runCommand(sendMessageArgs, payload);
    } else {
      await say("Enter a valid command.");
    }
  } else {
    mainCommand(app, payload, context);
  }
});

app.action("full_report", async ({ ack, body, context }) => {
  ack();
  await openFullReportModal(app, body, context);
});

app.view("view_full_report", async ({ ack, view, body, context }) => {
  await ack();
  const modalInput = view.state.values.full_report.full_report_input.value;
  const user = body.user.id;
  const sendMessageArgs = {
    app,
    botToken: context.botToken,
    channel: user,
  };

  await runCommand(sendMessageArgs, undefined, modalInput);
});

app.action("custom_report", async ({ ack, body, context }) => {
  ack();
  await openCustomReportModal(app, body, context);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
