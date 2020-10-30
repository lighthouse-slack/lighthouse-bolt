const customReport = {
  type: "modal",
  title: {
    type: "plain_text",
    text: "Lighthouse",
  },
  submit: {
    type: "plain_text",
    text: "Submit",
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
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Which categories do you want to run?*",
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "checkboxes",
          options: [
            {
              text: {
                type: "mrkdwn",
                text: "*Accessibility*",
              },
              description: {
                type: "mrkdwn",
                text:
                  "*Can all users access content and navigate your site effectively?*",
              },
              value: "accessibility",
            },
            {
              text: {
                type: "mrkdwn",
                text: "*Progressive Web App (PWA)*",
              },
              description: {
                type: "mrkdwn",
                text:
                  "*Measure if your site is fast, reliable and installable.*",
              },
              value: "progressive",
            },
            {
              text: {
                type: "mrkdwn",
                text: "*Best Practices*",
              },
              description: {
                type: "mrkdwn",
                text:
                  "*Improve code health of your web page following these best practices*",
              },
              value: "value-2",
            },
            {
              text: {
                type: "mrkdwn",
                text: "*Performance*",
              },
              description: {
                type: "mrkdwn",
                text:
                  "*Measure performance and find opportunities to speed up page loads.*",
              },
              value: "value-2",
            },
            {
              text: {
                type: "mrkdwn",
                text: "*SEO*",
              },
              description: {
                type: "mrkdwn",
                text: "*How well can search engines understand your content?*",
              },
              value: "value-2",
            },
          ],
        },
      ],
    },
   
  ],
};

module.exports = customReport;
