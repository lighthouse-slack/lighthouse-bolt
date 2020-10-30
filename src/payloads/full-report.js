const fullReport = {
  type: "modal",
  callback_id: "view_1",
  title: {
    type: "plain_text",
    text: "Lighthouse",
  },
  blocks: [
    {
      type: "input",
      element: {
        type: "plain_text_input",
        placeholder: {
          type: "plain_text",
          text: "Enter a website",
          emoji: true,
        },
        action_id: "plain_text_input-action",
      },
      label: {
        type: "plain_text",
        text: "What's the website you want to audit?",
      },
    },
  ],
  submit: {
    type: "plain_text",
    text: "Submit",
  },
};

module.exports = fullReport;
