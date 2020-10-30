'use strict'

const aws = require('aws-sdk');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const { v1: uuidv1 } = require('uuid');
const { deviceForms } = require('../constants');
const { shortenURL } = require('./url-helper');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION
});

const uploadFile = async (say, file) => {
  const uniqueId = uuidv1();
  const fileName = `report-${uniqueId}.html`;
  const fileType = 'text/html';
  const storageClass = 'STANDARD';
  const acl = 'public-read'

  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
    Body: file,
    StorageClass: storageClass,
    ContentType: fileType,
    ACL: acl
  };

  try {
    let data = await s3.upload(params).promise();
    return await shortenURL(say, data.Location);
  } catch (err) {
    await say('Something went wrong. Try again later.');
    return;
  }
};

const generateCustomizedReport = async (say, url, categoryList, deviceForm) => {

  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless']
  });

  const options = {
    output: 'html',
    onlyCategories: categoryList,
    emulatedFormFactor: deviceForm,
    port: chrome.port
  };
  
  const runnerResult = await lighthouse(url, options);
  const reportFile = Buffer.from(runnerResult.report, 'utf-8');
  const reportURL = await uploadFile(say, reportFile);

  await chrome.kill();

  return reportURL;
};

const generateFullReport = async (say, url) => {
  return await generateCustomizedReport(say, url, null, deviceForms.MOBILE);
};

module.exports = { generateFullReport, generateCustomizedReport };