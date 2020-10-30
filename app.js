const { App } = require("@slack/bolt");
const mainCommand = require("./src/commands/main");
const openFullReportModal = require("./src/commands/full-report-modal");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: {
    events: "/slack/events",
    commands: "/slack/commands",
  },
});

app.command("/lighthouse-bolt", async ({ ack, payload, context }) => {
  ack(); // Acknowledge the command request
  await mainCommand(app, payload, context);
});

app.action("full_report", async ({ ack, body, context }) => {
  ack();
  await openFullReportModal(app, body, context);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
