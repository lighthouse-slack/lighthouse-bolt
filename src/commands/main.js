const mainCommand = async (app, payload, context) => {
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
    console.log("\nPAYLOAD:\n", payload, "\nRESULTS:\n", result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = mainCommand;
