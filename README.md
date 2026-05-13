# Reqres API Testing Portfolio

A focused API testing portfolio project for the Reqres demo API, covering Postman collection design, request validation, response contract checks, negative scenarios, boundary testing, regression coverage, evidence collection, Newman execution, and CI execution with GitHub Actions.

This project demonstrates how I approach API quality: understanding endpoints, mapping request and response behavior, validating status codes and contracts, documenting risks, organizing test evidence, and running automated checks safely through a CI pipeline.

## Quick Results

| Area | Result |
|---|---:|
| Postman collection requests | 58 |
| Test folders | 10 |
| API endpoints mapped | 27 |
| Full collection requests executed | 58 |
| Newman assertions executed | 290 |
| Failed assertions | 0 |
| Full collection result | 58 passed / 58 executed |
| CI tool | GitHub Actions |
| CI execution strategy | Full Postman collection |
| Report artifact | Newman JUnit and JSON reports |


The full Postman collection contains 58 API requests across smoke, pagination, single resource, create/update/delete, authentication, resources, boundary, contract, delayed response, and regression coverage.

The GitHub Actions workflow is configured to run the full exported Postman collection, not only the smoke folder.

The latest local Newman execution confirmed 58 requests, 290 assertions, and 0 failed assertions.

## API Under Test

| Item              | Details                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| API               | Reqres API                                                                                                           |
| Type              | Demo REST API                                                                                                        |
| Base URL          | `https://reqres.in`                                                                                                  |
| Authentication    | `x-api-key` header                                                                                                   |
| Environment       | `prod`                                                                                                               |
| Main flows tested | Users, resources, authentication, create, update, delete, pagination, negative responses, boundary values, contracts |

## What Is Covered

### API QA Coverage

The Postman collection covers the main API testing areas:

* Smoke validation for critical API flows
* User listing and pagination
* Single user retrieval
* Non-existing user validation
* User creation
* Full user update with `PUT`
* Partial user update with `PATCH`
* User deletion
* Login success and validation errors
* Register success and validation errors
* Resource listing
* Single resource retrieval
* Non-existing resource validation
* Boundary testing for invalid, zero, negative, and high values
* Contract testing for users, resources, authentication, and error responses
* Delayed response validation
* Regression test coverage for key flows

### Automation and CI Coverage

The automated API execution is handled with Newman and GitHub Actions.

The CI pipeline currently runs the full Postman collection, which includes all 10 folders:

1. `01 - Smoke Tests`
2. `02 - Users - List and Pagination`
3. `03 - Users - Single User`
4. `04 - Users - Create Update Delete`
5. `05 - Authentication`
6. `06 - Resources`
7. `07 - Boundary Tests`
8. `08 - Contract Tests`
9. `09 - Delayed Response`
10. `10 - Regression Tests`

The latest full Newman execution confirmed 58 requests, 290 assertions, and 0 failed assertions.

## Project Structure

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
│   │       └── newman/
│   │           ├── newman-results.json
│   │           └── newman-results.xml
│   │
│   ├── postman-runner/
│   │   └── postman-runner-summary.png
│   │
│   └── screenshots/
│       └── reqres-api-testing-portfolio/
│           ├── authentication/
│           ├── boundary-tests/
│           ├── contract-tests/
│           ├── create-update-delete/
│           ├── delayed-response/
│           ├── regression-tests/
│           ├── resources/
│           ├── single-user/
│           ├── smoke-tests/
│           └── users-list-pagination/
│
├── postman/
│   ├── reqres-api-collection.json
│   └── reqres-environment.json
│
├── .gitignore
└── README.md
```

Generated files such as Newman reports and temporary local artifacts should not be committed unless they are intentionally kept as evidence.

## Documentation

| Document                      | Purpose                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------- |
| `docs/test-plan.md`           | Test scope, objectives, approach, environment, risks, and deliverables       |
| `docs/test-strategy.md`       | API testing strategy, test levels, validation approach, and execution method |
| `docs/endpoint-mapping.md`    | Mapping between API endpoints and test coverage                              |
| `docs/test-cases.md`          | Manual/API test case documentation and expected results                      |
| `docs/smoke-tests.md`         | Critical smoke test scenarios                                                |
| `docs/regression-tests.md`    | Regression scenarios for stable API behavior                                 |
| `docs/contract-tests.md`      | Response contract validation scope                                           |
| `docs/traceability-matrix.md` | Relationship between requirements, endpoints, and test cases                 |
| `docs/bug-reports.md`         | API bug reports and observations documented during the project               |
| `docs/test-summary-report.md` | Execution summary and project status                                         |

## Postman Collection Structure

| Folder                              | Purpose                                                    |
| ----------------------------------- | ---------------------------------------------------------- |
| `01 - Smoke Tests`                  | Critical flow validation included in the full collection   |
| `02 - Users - List and Pagination`  | User listing, pagination, and page size validation         |
| `03 - Users - Single User`          | Existing and non-existing user retrieval                   |
| `04 - Users - Create Update Delete` | Create, update, partial update, and delete operations      |
| `05 - Authentication`               | Login and register success/error scenarios                 |
| `06 - Resources`                    | Resource listing, single resource, and not found scenarios |
| `07 - Boundary Tests`               | Boundary values for pages, IDs, and delete operations      |
| `08 - Contract Tests`               | Response structure and field contract validation           |
| `09 - Delayed Response`             | Delayed API response validation                            |
| `10 - Regression Tests`             | Key scenarios for regression confidence                    |

## Validation Approach

The request-level Postman scripts validate areas such as:

* Expected HTTP status codes
* `Content-Type` header behavior
* Required response fields
* Response data types
* Pagination fields
* User object contracts
* Resource object contracts
* Authentication token presence
* Error response structure
* Coherent error messages
* Absence of success-only fields in error responses
* Absence of internal implementation details in API responses

## Development and QA Tools

| Tool                | Purpose                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| Visual Studio Code  | Code editor used to edit the Postman collection, GitHub Actions workflow, and project documentation |
| Postman             | API request design, organization, and validation scripts                                            |
| Newman              | Command-line execution of the Postman collection                                                    |
| GitHub Actions      | CI execution of the full API test collection                                                        |
| GitHub Secrets      | Secure storage of the Reqres API key                                                                |
| Node.js             | Runtime used to execute Newman                                                                      |
| npm / npx           | Package execution and Newman command support                                                        |
| Git                 | Version control                                                                                     |
| GitHub              | Repository hosting and CI visibility                                                               |
| Git Bash / Terminal | Local command-line execution                                                                        |
| Markdown            | Documentation format                                                                                |
| Reqres              | API under test                                                                                      |

## Automation Stack

| Tool                 | Purpose                                |
| -------------------- | -------------------------------------- |
| Newman               | Postman collection runner              |
| Postman test scripts | API assertions and response validation |
| GitHub Actions       | Automated pipeline execution           |
| JUnit reporter       | CI test report artifact generation     |

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

### 5. Run the full collection with JUnit and JSON reports

```bash
mkdir -p evidence/reports/reqres-api-testing-portfolio/newman

npx newman run postman/reqres-api-collection.json \
  -e postman/reqres-environment.json \
  --env-var baseUrl="https://reqres.in" \
  --env-var apiKey="$REQRES_API_KEY" \
  --env-var reqresEnv="prod" \
  --delay-request 8000 \
  --timeout-request 20000 \
  --timeout 1200000 \
  --reporters cli,json,junit \
  --reporter-json-export evidence/reports/reqres-api-testing-portfolio/newman/newman-results.json \
  --reporter-junit-export evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml
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

* Pushes to `main`
* Pull requests targeting `main`
* Manual execution through `workflow_dispatch`

The pipeline:

1. Checks out the repository
2. Sets up Node.js 20
3. Installs Newman
4. Validates that the `REQRES_API_KEY` secret exists
5. Runs the full exported Postman collection
6. Generates JUnit and JSON reports
7. Uploads the Newman reports as GitHub Actions artifacts

The API key is stored securely as a GitHub Actions secret named:

```text
REQRES_API_KEY
```

No sensitive API key is committed to the repository.

## Evidence

Execution evidence is organized under the `evidence/` directory.

Path: `evidence/`

The project includes evidence for the API testing work, including:

- Postman execution screenshots
- Postman Runner summary
- Newman execution results
- Newman report artifacts
- GitHub Actions workflow artifact after CI execution
- Screenshots of successful executions

### Newman Reports

The project includes Newman reports generated from the full collection execution:

| Report | Purpose |
|---|---|
| `newman-results.xml` | JUnit report used as a CI-friendly test artifact. |
| `newman-results.json` | JSON execution report used to verify total requests, assertions, and failures. |

### Latest Full Newman Execution

| Metric | Result |
|---|---:|
| Requests executed | 58 |
| Assertions executed | 290 |
| Failed assertions | 0 |

The GitHub Actions workflow is configured to run the full exported Postman collection.

## Rate Limit Strategy

Reqres free-tier API keys may have request limits. The CI workflow runs the full 58-request collection because this portfolio is intended to demonstrate complete automated API coverage.

To reduce request pressure and avoid unstable runs, the Newman execution uses:

- `--delay-request 8000`
- `--timeout-request 20000`
- `--timeout 1200000`

If the API returns `429 Too Many Requests`, the workflow should be re-run later or executed with a higher delay between requests.

## Security Notes

This repository intentionally does not include real API keys.

The project uses:

- `{{apiKey}}` as a Postman environment variable
- `REQRES_API_KEY` as a protected GitHub Actions secret
- `--env-var apiKey="$REQRES_API_KEY"` during Newman execution

This prevents credential exposure while keeping the automated tests executable in CI.

## Current Limitations

The following areas are intentionally out of scope for this version:

* Load testing
* Performance benchmarking
* Database validation
* Real backend data persistence validation
* Security penetration testing
* Full authentication lifecycle testing
* Paid Reqres plan features

## What I Learned

Through this project, I practiced how to:

* Structure a Postman API testing collection 
* Map endpoints to test scenarios
* Write positive, negative, boundary, contract, smoke, and regression tests
* Validate status codes, headers, response bodies, and error contracts
* Keep API assertions readable and reusable
* Use environment variables for configurable test execution
* Protect API keys with GitHub Secrets
* Execute Postman collections with Newman
* Configure GitHub Actions for full API test automation
* Generate CI test artifacts
* Diagnose authentication failures such as `401` and `403`
* Diagnose rate limit failures such as `429 Too Many Requests`
* Adapt CI execution settings to external API limitations
* Present API testing work clearly in a GitHub portfolio

## Project Status

| Area                             | Status                                |
|----------------------------------|---------------------------------------|
| Postman collection               | Implemented                           |
| API documentation                | Implemented                           |
| Test plan and strategy           | Implemented                           |
| Endpoint mapping                 | Implemented                           |
| Smoke tests                      | Implemented                           |
| Regression tests                 | Implemented                           |
| Contract tests                   | Implemented                           |
| Boundary tests                   | Implemented                           |
| Newman full collection execution | Completed                             |
| GitHub Actions CI                | Configured to run the full collection |
| API key security                 | Protected with GitHub Secrets         |
| README                           | Completed                             |

## Final Status

This project is ready for portfolio review.

Reviewers can inspect the Postman collection, documentation, test strategy, and successful GitHub Actions execution without requiring access to any private API key.

Anyone who wants to run the project locally can do so safely by creating their own Reqres API key and exporting it as `REQRES_API_KEY`.
