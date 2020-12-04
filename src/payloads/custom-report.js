const { categories } = require("../constants");

const customReport = {
  type: "modal",
  callback_id: "view_custom_report",
  title: {
    type: "plain_text",
    text: "Lighthouse"
  },
  submit: {
    type: "plain_text",
    text: "Submit"
  },
  blocks: [
    {
      type: "input",
      block_id: "custom_report_url",
      element: {
        type: "plain_text_input",
        placeholder: {
          type: "plain_text",
          text: "Enter a website",
          emoji: true
        },
        action_id: "custom_report_input"
      },
      label: {
        type: "plain_text",
        text: "What's the website you want to audit?"
      }
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Which categories do you want to run?*"
      }
    },
    {
      type: "actions",
      block_id: "selected_categories",
      elements: [
        {
          type: "checkboxes",
          action_id: "categories",
          options: [
            {
              text: {
                type: "mrkdwn",
                text: "*Accessibility*"
              },
              description: {
                type: "mrkdwn",
                text:
                  "*Can all users access content and navigate your site effectively?*"
              },
              value: categories.ACCESSIBILITY
            },
            {
              text: {
                type: "mrkdwn",
                text: "*Progressive Web App (PWA)*"
              },
              description: {
                type: "mrkdwn",
                text:
                  "*Measure if your site is fast, reliable and installable.*"
              },
              value: categories.PWA
            },
            {
              text: {
                type: "mrkdwn",
                text: "*Best Practices*"
              },
              description: {
                type: "mrkdwn",
                text:
                  "*Improve code health of your web page following these best practices*"
              },
              value: categories.BEST_PRACTICES
            },
            {
              text: {
                type: "mrkdwn",
                text: "*Performance*"
              },
              description: {
                type: "mrkdwn",
                text:
                  "*Measure performance and find opportunities to speed up page loads.*"
              },
              value: categories.PERFORMANCE
            },
            {
              text: {
                type: "mrkdwn",
                text: "*SEO*"
              },
              description: {
                type: "mrkdwn",
                text: "*How well can search engines understand your content?*"
              },
              value: categories.SEO
            }
          ]
        }
      ]
    }
  ]
};

module.exports = customReport;
