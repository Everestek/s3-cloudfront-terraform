#!/usr/bin/env node

const shell = require("shelljs");

const config = {
  deploy: {
    bucketUrl: "s3://<your-bucket-name>",
    cloudFrontDistributionId: "<your-cloudfront-distribution-id>",
    cacheControlMaxAge: 31536000,
  },
};
console.log("config deploy:", config.deploy.bucketUrl);

const tryShell = (command) => {
  shell.exec(command);
  if (shell.error()) process.exit(1);
};

// upload
console.log("going for fix content-type:---------->");
tryShell(`aws s3 sync --delete ../build ${config.deploy.bucketUrl}`);

console.log("going for invalidate cloudfront cache:---------->");
// invalidate cloudfront cache
tryShell(
  `aws configure set preview.cloudfront true && aws cloudfront create-invalidation --distribution-id ${config.deploy.cloudFrontDistributionId} --paths "/*"`
);
