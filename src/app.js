'use strict'

const { App } = require("@slack/bolt");
const mainCommand = require("./commands/main");
const runCommand = require("./commands/run");
const dotenv = require('dotenv');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: {
    events: "/slack/events",
    commands: "/slack/commands",
  }
});

const ENV = process.env.NODE_ENV || "development";
if (ENV === "development") dotenv.config();

app.command("/lighthouse-bolt", async ({ ack, payload, context }) => {
  ack(); // Acknowledge the command request
  await mainCommand(app, payload, context);
});

app.command("/lighthouse-bolt-run", async ({ ack, say, payload, context }) => {
  await ack();

  if (payload.text) {
    if (payload.text.match(/run\s+.*/)) {
      await runCommand(say, payload);
    } else {
      await say('Enter a valid command.');
    }
  } else {
    mainCommand(app, payload, context);
  }

});

app.action("full_report", async ({ ack, body, context }) => {
  ack();
  await openFullReportModal(app, body, context);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
