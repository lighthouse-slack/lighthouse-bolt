const fullReport = require("../payloads/full-report.js");

const openFullReportModal = async (app, body, client) => {
  try {
    const result = await app.client.views.open({
      token: client.botToken,
      trigger_id: body.trigger_id,
      view: fullReport,
    });
    console.log(body);
  } catch (error) {
    console.error(error);
  }
};

module.exports = openFullReportModal;
