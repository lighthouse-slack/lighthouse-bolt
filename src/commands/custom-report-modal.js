const customReport = require("../payloads/custom-report.js");

const openCustomReportModal = async (app, body, context) => {
  try {
    const result = await app.client.views.open({
      token: context.botToken,
      trigger_id: body.trigger_id,
      view: customReport,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = openCustomReportModal;
