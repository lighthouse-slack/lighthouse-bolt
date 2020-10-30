const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: {
    events: "/slack/events",
    commands: "/slack/commands",
  },
});

app.command("/lighthouse-bolt", async ({ ack, payload, context }) => {
  // Acknowledge the command request
  ack();

  try {
    const result = await app.client.views.open({
      token: context.botToken,
      trigger_id: payload.trigger_id, // Pass a valid trigger_id within 3 seconds of receiving it
      view: {
        type: "modal",
        callback_id: "view_1",
        title: {
          type: "plain_text",
          text: "Modal title",
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Welcome to a modal with _blocks_",
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click me!",
              },
              action_id: "button_abc",
            },
          },
          {
            type: "input",
            block_id: "test_input",
            label: {
              type: "plain_text",
              text: "What are your hopes and dreams?",
            },
            element: {
              type: "plain_text_input",
              action_id: "dreamy_input",
              multiline: true,
            },
          },
        ],
        submit: {
          type: "plain_text",
          text: "Submit",
        },
      },
    });
    console.log("\nPAYLOAD:\n", payload);
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
