const fs = require("fs");
const path = require("path");
const Ajv = require("ajv/dist/2020");
const addFormats = require("ajv-formats");

const reportPath = process.argv[2] || "evidence/reports/reqres-api-testing-portfolio/newman/newman-results.json";
const rootDir = path.resolve(__dirname, "..");

const schemaChecks = [
  {
    requestName: "GET - Contract - Validate users page 2 response",
    schemaPath: "postman/schemas/users-page.schema.json"
  },
  {
    requestName: "POST - Contract - Validate login success response",
    schemaPath: "postman/schemas/login-success.schema.json"
  },
  {
    requestName: "POST - Contract - Validate login error response",
    schemaPath: "postman/schemas/auth-error.schema.json"
  }
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function getResponseJson(execution) {
  const stream = execution && execution.response && execution.response.stream;
  if (!stream || !Array.isArray(stream.data)) {
    throw new Error(`Response body stream not found for ${execution && execution.item && execution.item.name}`);
  }

  const body = Buffer.from(stream.data).toString("utf8");
  return JSON.parse(body || "{}");
}

const absoluteReportPath = path.resolve(rootDir, reportPath);
const report = readJson(absoluteReportPath);
const executions = (report.run && report.run.executions) || [];

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

let failed = false;

for (const check of schemaChecks) {
  const execution = executions.find((item) => item.item && item.item.name === check.requestName);

  if (!execution) {
    console.error(`Schema check failed: request not found: ${check.requestName}`);
    failed = true;
    continue;
  }

  const schema = readJson(path.resolve(rootDir, check.schemaPath));
  const validate = ajv.compile(schema);
  const responseJson = getResponseJson(execution);
  const valid = validate(responseJson);

  if (!valid) {
    console.error(`Schema check failed: ${check.requestName}`);
    console.error(JSON.stringify(validate.errors, null, 2));
    failed = true;
    continue;
  }

  console.log(`Schema check passed: ${check.requestName}`);
}

if (failed) {
  process.exit(1);
}
