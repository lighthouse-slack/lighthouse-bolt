const { App } = require("@slack/bolt");
const mainCommand = require("./src/commands/main");

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

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
