const fullReport = require("../payloads/full-report.js");

const openFullReportModal = async (app, body, context) => {
  try {
    await app.client.views.open({
      token: context.botToken,
      trigger_id: body.trigger_id,
      view: fullReport
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = openFullReportModal;
