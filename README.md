# Reqres API Testing Portfolio

[![Newman API Tests](https://github.com/maririb749/qa-reqres-api-testing-portfolio/actions/workflows/newman-tests.yml/badge.svg)](https://github.com/maririb749/qa-reqres-api-testing-portfolio/actions/workflows/newman-tests.yml)

A focused API testing portfolio project for the Reqres demo API, covering Postman collection design, request validation, response contract checks, negative scenarios, boundary testing, regression coverage, Newman execution, evidence collection, and CI execution with GitHub Actions.

This project demonstrates how I approach API quality: mapping endpoints, validating request and response behavior, documenting risks, organizing test evidence, and running automated checks safely through a CI pipeline.

## What This Project Demonstrates

| Skill | How It Is Demonstrated |
|---|---|
| API testing | Positive, negative, boundary, contract, smoke, delayed response, and regression scenarios |
| Postman automation | 63 organized requests with request-level validation scripts |
| Newman execution | Full Postman collection executed from the command line |
| Contract validation | Response structure, field presence, data types, headers, and error contracts checked |
| Authentication testing | Login and register success/error scenarios covered |
| Boundary testing | Invalid, zero, negative, and high values validated across relevant endpoints |
| Traceability | Requirements, endpoints, test cases, and execution evidence documented |
| CI/CD | GitHub Actions workflow runs the full Postman collection |
| Evidence management | Newman reports, Postman Runner evidence, and execution screenshots organized under `evidence/` |
| Security awareness | API key handled through environment variables and GitHub Secrets |

## API Under Test

| Item | Details |
|---|---|
| API | Reqres API |
| Type | Demo REST API |
| Base URL | `https://reqres.in` |
| Authentication | `x-api-key` header |
| Environment | `prod` |
| Tested interface | REST API |
| Main flows tested | Users, resources, authentication, create, update, delete, pagination, negative responses, boundary values, contracts |

Reqres is a public demo API used for practicing and demonstrating API testing workflows. The project focuses on validating request behavior, response consistency, error handling, and regression stability.

## Execution Snapshot

| Area | Result |
|---|---:|
| Postman collection requests | 63 |
| Test folders | 11 |
| API endpoints mapped | 27 |
| Full collection requests executed | 63 |
| Newman assertions executed | 315 |
| Failed assertions | 0 |
| Full collection result | 63 passed / 63 executed |
| CI tool | GitHub Actions |
| CI execution strategy | Full Postman collection |
| Report artifact | Newman JUnit and JSON reports |

The latest full Newman execution confirmed 63 requests, 315 assertions, and 0 failed assertions.

## Tested Scope

| Area | Coverage |
|---|---|
| Smoke tests | Critical API flow validation |
| Users | List users, pagination, single user, and non-existing user validation |
| Create / Update / Delete | Create, full update, partial update, and delete operations |
| Authentication | Login and register success and validation errors |
| Resources | Resource listing, single resource, and non-existing resource validation |
| Boundary testing | Invalid, zero, negative, and high values |
| Contract testing | Users, resources, authentication, and error response contracts |
| Delayed response | Delayed API response validation |
| Regression testing | Stable scenarios for regression confidence |

Scenario coverage includes positive, negative, boundary, contract, smoke, delayed response, and regression-oriented API testing.

## Postman Collection Structure

The Postman collection is organized into 11 folders:

| Folder | Purpose |
|---|---|
| `01 - Smoke Tests` | Critical flow validation included in the full collection |
| `02 - Users - List and Pagination` | User listing, pagination, and page size validation |
| `03 - Users - Single User` | Existing and non-existing user retrieval |
| `04 - Users - Create Update Delete` | Create, update, partial update, and delete operations |
| `05 - Authentication` | Login and register success/error scenarios |
| `06 - Resources` | Resource listing, single resource, and not found scenarios |
| `07 - Boundary Tests` | Boundary values for pages, IDs, and delete operations |
| `08 - Contract Tests` | Response structure and field contract validation |
| `09 - Delayed Response` | Delayed API response validation |
| `10 - Regression Tests` | Key scenarios for regression confidence |
| `11 - Data Validation and Exploratory Negative Tests` | Empty values, special characters, long strings and empty update body behavior |

## Validation Approach

The request-level Postman scripts validate areas such as:

- Expected HTTP status codes
- `Content-Type` header behavior
- Required response fields
- Response data types
- Pagination fields
- User object contracts
- Resource object contracts
- Authentication token presence
- Error response structure
- Coherent error messages
- Absence of success-only fields in error responses

## Automation Overview

| Area | Details |
|---|---|
| Test design tool | Postman |
| Automation runner | Newman |
| Collection location | `postman/reqres-api-collection.json` |
| Environment file | `postman/reqres-environment.json` |
| CI workflow | `.github/workflows/newman-tests.yml` |
| Report outputs | JSON, JUnit, HTML reports and Ajv schema validation |
| Evidence location | `evidence/` |

The automated API execution is handled with Newman and GitHub Actions. The CI pipeline runs the full exported Postman collection, not only the smoke folder.

## Running the Tests Locally

The Reqres API requires an API key. For security reasons, no real API key is committed to this repository.

To run the project locally, create your own Reqres API key and export it as an environment variable.

### 1. Clone the repository

```bash
git clone https://github.com/maririb749/qa-reqres-api-testing-portfolio.git
cd qa-reqres-api-testing-portfolio
```

### 2. Export your Reqres API key

```bash
export REQRES_API_KEY="your_reqres_api_key_here"
```

### 3. Validate the API key with one request

```bash
curl -i "https://reqres.in/api/users?page=2" \
  -H "x-api-key: $REQRES_API_KEY" \
  -H "X-Reqres-Env: prod" \
  -H "User-Agent: reqres-api-testing-portfolio/1.0"
```

Expected result:

```text
HTTP/1.1 200 OK
```

### 4. Run the full collection

```bash
npx newman run postman/reqres-api-collection.json \
  -e postman/reqres-environment.json \
  --env-var baseUrl="https://reqres.in" \
  --env-var apiKey="$REQRES_API_KEY" \
  --env-var reqresEnv="prod" \
  --delay-request 8000 \
  --timeout-request 20000 \
  --timeout 1200000
```

### Optional: run only the smoke folder locally

Use this only for a quick local sanity check:

```bash
npx newman run postman/reqres-api-collection.json \
  -e postman/reqres-environment.json \
  --folder "01 - Smoke Tests" \
  --env-var baseUrl="https://reqres.in" \
  --env-var apiKey="$REQRES_API_KEY" \
  --env-var reqresEnv="prod" \
  --delay-request 8000 \
  --timeout-request 20000
```

## Continuous Integration

The project includes a GitHub Actions workflow located at:

```text
.github/workflows/newman-tests.yml
```

The workflow runs on:

- Pushes to `main`
- Pull requests targeting `main`
- Manual execution through `workflow_dispatch`

The pipeline:

1. Checks out the repository
2. Sets up Node.js 20
3. Installs Newman
4. Validates that required collection and environment files exist
5. Validates that the `REQRES_API_KEY` secret exists
6. Runs the full exported Postman collection
7. Generates JUnit and JSON reports
8. Uploads the Newman reports as GitHub Actions artifacts

The API key is stored securely as a GitHub Actions secret named:

```text
REQRES_API_KEY
```

## Documentation Map

| Document | Purpose |
|---|---|
| `docs/test-plan.md` | Test scope, objectives, approach, environment, risks, and deliverables |
| `docs/test-strategy.md` | API testing strategy, test levels, validation approach, and execution method |
| `docs/endpoint-mapping.md` | Mapping between API endpoints and test coverage |
| `docs/test-cases.md` | Manual/API test case documentation and expected results |
| `docs/smoke-tests.md` | Critical smoke test scenarios |
| `docs/regression-tests.md` | Regression scenarios for stable API behavior |
| `docs/contract-tests.md` | Response contract validation scope |
| `docs/traceability-matrix.md` | Relationship between requirements, endpoints, and test cases |
| `docs/bug-reports.md` | API bug reports and observations documented during the project |
| `docs/test-summary-report.md` | Execution summary and project status |

## Evidence

Execution evidence is organized under the `evidence/` directory.

| Evidence Area | Path | Status |
|---|---|---|
| Newman reports | `evidence/reports/reqres-api-testing-portfolio/newman/` | Evidence captured |
| HTML reports | `evidence/reports/reqres-api-testing-portfolio/html/` | Generated by CI after execution |
| Postman Runner summary | `evidence/reports/reqres-api-testing-portfolio/postman-runner/postman-runner-summary.png` | Evidence captured |
| API screenshots | `evidence/screenshots/reqres-api-testing-portfolio/` | Evidence captured |

The project includes evidence for the API testing work, including:

- Postman execution screenshots
- Postman Runner summary
- Newman execution results
- Newman report artifacts
- GitHub Actions workflow artifact after CI execution
- Screenshots of successful executions

### Newman Reports

| Report | Purpose |
|---|---|
| `newman-results.xml` | JUnit report used as a CI-friendly test artifact |
| `newman-results.json` | JSON execution report used to verify total requests, assertions, and failures |

## Repository Structure

```text
qa-reqres-api-testing-portfolio/
├── .github/
│   └── workflows/
│       └── newman-tests.yml
│
├── docs/
│   ├── bug-reports.md
│   ├── contract-tests.md
│   ├── endpoint-mapping.md
│   ├── regression-tests.md
│   ├── smoke-tests.md
│   ├── test-cases.md
│   ├── test-plan.md
│   ├── test-strategy.md
│   ├── test-summary-report.md
│   └── traceability-matrix.md
│
├── evidence/
│   ├── reports/
│   │   └── reqres-api-testing-portfolio/
│   │       ├── newman/
│   │       └── postman-runner/
│   └── screenshots/
│       └── reqres-api-testing-portfolio/
├── postman/
│   ├── reqres-api-collection.json
│   └── reqres-environment.json
│
├── .gitignore
└── README.md
```

Generated files such as Newman reports and temporary local artifacts should not be committed unless they are intentionally kept as evidence.

## Tools Used

| Tool | Purpose |
|---|---|
| Visual Studio Code | Editing the Postman collection, GitHub Actions workflow, and documentation |
| Postman | API request design, organization, and validation scripts |
| Newman | Command-line execution of the Postman collection |
| GitHub Actions | CI execution of the full API test collection |
| GitHub Secrets | Secure storage of the Reqres API key |
| Node.js | Runtime used to execute Newman |
| npm / npx | Package execution and Newman command support |
| Git | Version control |
| GitHub | Repository hosting and CI visibility |
| Git Bash / Terminal | Local command-line execution |
| Markdown | Documentation format |
| Reqres | API under test |

## Security Notes

This repository intentionally does not include real API keys.

The project uses:

- `{{apiKey}}` as a Postman environment variable
- `REQRES_API_KEY` as a protected GitHub Actions secret
- `--env-var apiKey="$REQRES_API_KEY"` during Newman execution

This prevents credential exposure while keeping the automated tests executable in CI.

The Reqres demo password `cityslicka` is a public demo credential used only for authentication test scenarios. It is documented as non-sensitive and should not be treated as a private project secret.

## Rate Limit Strategy

Reqres free-tier API keys may have request limits. The CI workflow now runs a faster smoke folder for quick validation and a full 63-request collection outside pull requests for complete automated coverage.

To reduce request pressure and avoid unstable runs, the Newman execution uses:

- `--delay-request 8000`
- `--timeout-request 20000`
- `--timeout 1200000`

If the API returns `429 Too Many Requests`, the workflow should be re-run later or executed with a higher delay between requests.

## Current Limitations

The following areas are intentionally out of scope for this version:

- Load testing
- Performance benchmarking
- Database validation
- Real backend data persistence validation
- Security penetration testing
- Full authentication lifecycle testing
- Paid Reqres plan features

## What I Learned

Through this project, I practiced how to:

- Structure a maintainable Postman API testing collection
- Map endpoints to positive, negative, boundary, contract, smoke, and regression scenarios
- Validate status codes, headers, response bodies, and error contracts
- Use environment variables and GitHub Secrets safely
- Execute Postman collections with Newman
- Configure GitHub Actions for API regression execution
- Generate CI-friendly Newman artifacts
- Diagnose authentication failures such as `401` and `403`
- Diagnose rate limit failures such as `429 Too Many Requests`
- Adapt CI execution settings to external API limitations
- Present API testing work clearly in a GitHub portfolio

## Project Status

| Area | Status |
|---|---|
| Postman collection | Implemented, expanded to 63 requests |
| API documentation | Implemented |
| Test plan and strategy | Implemented |
| Endpoint mapping | Implemented |
| Smoke tests | Implemented |
| Regression tests | Implemented |
| Contract tests | Implemented |
| Boundary tests | Implemented |
| Newman full collection execution | Completed |
| GitHub Actions CI | Configured to run the full collection |
| API key security | Protected with GitHub Secrets |
| README | Completed |
