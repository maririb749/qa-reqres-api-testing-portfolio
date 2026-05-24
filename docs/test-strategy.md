# Test Strategy — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Test Strategy |
| Author | Mariana |
| Status | Completed |
| Version | 1.1 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/endpoint-mapping.md, docs/test-cases.md, docs/smoke-tests.md, docs/regression-tests.md, docs/contract-tests.md, docs/bug-reports.md, docs/test-summary-report.md, docs/traceability-matrix.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this test strategy is to define how the Reqres API was tested during this portfolio project.

While the Test Plan defines the overall scope, objectives, risks, deliverables and exit criteria, this Test Strategy defines the practical testing approach, test design techniques, prioritization, execution order, validation rules, CI execution strategy and evidence strategy.

This document ensures that API testing is performed in a structured, consistent, traceable and portfolio-ready way.

---

## 3. Testing Goals

The main goals of this strategy are:

- Validate the behavior of Reqres demo API endpoints
- Verify expected HTTP status codes
- Validate JSON response structure
- Validate required response fields
- Validate response data types
- Validate value constraints
- Cover positive, negative and boundary scenarios
- Validate important API contracts
- Organize requests clearly inside Postman
- Collect execution evidence
- Execute the Postman collection with Newman
- Run the Newman test suite through GitHub Actions
- Store manual and CI execution evidence in the project
- Demonstrate QA thinking through documentation, traceability and evidence

---

## 4. Testing Approach

The API is tested using Postman.

The testing approach is based on:

- Manual API execution in Postman
- Organized Postman collection folders
- Postman environment variables
- Test scripts inside Postman requests
- Reusable validation helpers
- Collection-level validation for internal implementation leaks
- Documented test cases
- Execution evidence
- Command-line execution with Newman
- CI execution with GitHub Actions
- GitHub Actions secret management for the Reqres API key

Each request includes validations when applicable:

- HTTP status code validation
- JSON response validation
- Response body validation
- Content-Type validation
- Contract validation
- Error message validation
- Response time validation
- Header validation
- Success payload leakage validation
- Internal implementation leak validation

---

## 5. Test Design Techniques

The following test design techniques are applied:

| Technique | Application in this Project |
|---|---|
| Positive Testing | Validate expected behavior with valid data |
| Negative Testing | Validate API behavior with missing, invalid or incomplete data |
| Boundary Value Analysis | Validate edge cases such as zero values, negative values, high values and non-numeric values |
| Error Guessing | Try inputs that could commonly cause failures |
| Contract Testing | Validate response structure, JSON data types and value constraints |
| Risk-Based Testing | Prioritize critical endpoints such as login, register and user retrieval |
| Smoke Testing | Validate that critical endpoints are available before broader execution |
| Regression Testing | Re-run selected tests after changes in collection, scripts, environment, Newman setup or CI pipeline |
| Basic Response Time Observation | Validate delayed response behavior with a controlled threshold |

---

## 6. Collection Organization Strategy

The Postman collection is organized by feature and test purpose.

Collection name:

```txt
Reqres API Testing Portfolio
```

Implemented folder structure:

| Folder | Purpose | Requests |
|---|---|---:|
| 01 - Smoke Tests | Critical API availability checks | 4 |
| 02 - Users - List and Pagination | User list and pagination scenarios | 4 |
| 03 - Users - Single User | Single user retrieval and not found behavior | 3 |
| 04 - Users - Create Update Delete | Simulated user create, update, patch and delete flows | 4 |
| 05 - Authentication | Login and registration success/error scenarios | 8 |
| 06 - Resources | Resource list, single resource and not found behavior | 3 |
| 07 - Boundary Tests | Boundary scenarios for pagination and user IDs | 8 |
| 08 - Contract Tests | Response contract validations | 15 |
| 09 - Delayed Response | Basic delayed response observation | 1 |
| 10 - Regression Tests | Critical regression coverage | 8 |
| 11 - Data Validation and Exploratory Negative Tests | Empty values, special characters, long strings and empty update body behavior | 5 |

Total implemented requests:

```txt
63
```

This organization demonstrates clear thinking, maintainability and professional API test structure.

---

## 7. Environment Strategy

A Postman environment is used to avoid hardcoded values.

Environment name:

```txt
Reqres API Environment
```

Main variables:

| Variable | Purpose |
|---|---|
| baseUrl | Stores the API base URL |
| apiKey | Stores the Reqres API key locally in Postman and is provided in CI through the GitHub Actions `REQRES_API_KEY` secret |
| reqresEnv | Stores the Reqres environment header value, using `prod` for local and CI execution |
| validUserId | Stores a valid user ID |
| firstUserId | Stores the first valid user ID |
| invalidUserId | Stores a non-existing user ID |
| zeroUserId | Stores zero as a boundary ID |
| negativeUserId | Stores a negative ID |
| nonNumericUserId | Stores a non-numeric ID |
| veryHighUserId | Stores a very high or non-existing user ID |
| validResourceId | Stores a valid resource ID |
| invalidResourceId | Stores an invalid resource ID |
| validEmail | Stores a valid email for authentication |
| validPassword | Stores a valid password for authentication |
| invalidEmail | Stores an invalid email format reserved for future expansion |
| pageOne | Stores first page number |
| pageTwo | Stores second page number |
| pageZero | Stores zero page value |
| negativePage | Stores negative page value |
| highPage | Stores a very high page value |
| nonNumericPage | Stores a non-numeric page value |
| perPage | Stores custom page size |
| delaySeconds | Stores delay value for delayed response testing |
| delayedMaxResponseTimeMs | Stores the maximum accepted response time for the delayed response test |
| testUserName | Stores user name used in create and update request bodies |
| testUserJob | Stores job value used in create request body |
| updatedUserJob | Stores job value used in full update request body |
| patchedUserJob | Stores job value used in partial update request body |

Requests should use variables such as:

```txt
{{baseUrl}}/api/users?page={{pageTwo}}
```

Instead of hardcoded values such as:

```txt
https://reqres.in/api/users?page=2
```

The real API key must never be committed to the repository. It should remain only in the local Postman environment or in GitHub Actions repository secrets.

---

## 8. Test Prioritization

Tests are prioritized based on API importance, execution value and risk.

| Priority | Test Area | Reason |
|---|---|---|
| High | Smoke tests | Confirm that critical endpoints are available |
| High | Login and register | Authentication endpoints are critical |
| High | User retrieval | Core API behavior |
| High | Important error handling | Negative scenarios can reveal poor API behavior |
| Medium | Create, update and delete users | Important simulated CRUD behavior |
| Medium | Resource endpoints | Useful secondary API coverage |
| Medium | Boundary tests | Validate edge cases and unusual input values |
| Medium | Contract tests | Validate response structure and response stability |
| Low | Delayed response | Useful for basic response time observation |

---

## 9. Positive Testing Strategy

Positive tests validate successful scenarios using valid data.

Examples:

| Scenario | Expected Result |
|---|---|
| List users using a valid page | API returns 200 and user list |
| Get an existing user | API returns 200 and user data |
| Create user with valid body | API returns 201 and created user data |
| Update user with valid body | API returns 200 and updated data |
| Partially update user | API returns 200 and updated field data |
| Delete user | API returns 204 with empty body |
| Login with valid data | API returns 200 and token |
| Register with valid data | API returns 200 and token/id |
| List resources | API returns 200 and resource list |
| Get existing resource | API returns 200 and resource data |

Positive tests confirm:

- Correct HTTP status code
- Valid JSON response when applicable
- Required fields
- Correct JSON data types
- Expected response content
- Non-empty important values
- Absence of internal implementation details

---

## 10. Negative Testing Strategy

Negative tests validate how the API behaves with missing, invalid or incomplete data.

Examples:

| Scenario | Expected Result |
|---|---|
| Get non-existing user | API returns 404 |
| Get non-existing resource | API returns 404 |
| Login without password | API returns 400 |
| Login without email | API returns 400 |
| Login with empty body | API returns 400 |
| Register without password | API returns 400 |
| Register without email | API returns 400 |
| Register with empty body | API returns 400 |

Negative tests confirm:

- API returns an appropriate error status
- Error response is valid JSON when applicable
- Error message is not empty when returned
- Error message is coherent with the scenario
- API does not return success payload for invalid requests
- API does not expose internal implementation details

---

## 11. Boundary Testing Strategy

Boundary tests validate edge cases and unusual input values.

Implemented boundary examples:

| Scenario | Purpose | Expected Status |
|---|---|---:|
| page=0 | Validate lower boundary behavior | 200 |
| page=-1 | Validate negative page value | 200 |
| page=999 | Validate very high page value | 200 |
| page=abc | Validate non-numeric page value | 200 |
| user ID = 0 | Validate invalid zero ID | 404 |
| user ID = -1 | Validate negative ID | 404 |
| user ID = abc | Validate non-numeric ID | 404 |
| delete non-existing user | Validate simulated delete behavior for unusual ID | 204 |

Boundary results were confirmed during Postman execution and documented with evidence screenshots.

Additional exploratory data validation scenarios with empty strings, special characters and very long strings were added to the Postman collection as TC-032 to TC-036. These scenarios document controlled demo API behavior and should be executed in the next evidence refresh.

Reqres is a public demo API, so some boundary behavior may differ from what would be expected in a production API. These behaviors are documented as observed behavior rather than automatically classified as defects.

---

## 12. Contract Testing Strategy

Contract tests validate the expected structure of API responses.

Contract validation focuses on:

- HTTP status code
- Content-Type header
- Valid JSON response when applicable
- Required fields
- Expected JSON data types
- Integer value constraints
- Non-empty string constraints
- Success payload structure
- Error payload structure
- Absence of success payload in error responses
- Absence of internal implementation details

For user-related responses, the following fields may be validated:

| Field | Expected JSON Type | Value Constraint |
|---|---|---|
| data.id | number | Integer value |
| data.email | string | Non-empty |
| data.first_name | string | Non-empty |
| data.last_name | string | Non-empty |
| data.avatar | string | Non-empty |
| support.url | string | Non-empty |
| support.text | string | Non-empty |

For list users responses, the following fields may be validated:

| Field | Expected Type | Value Constraint |
|---|---|---|
| page | number | Integer value |
| per_page | number | Integer value |
| total | number | Integer value |
| total_pages | number | Integer value |
| data | array | Can be empty or contain user objects |
| support | object | Must contain support metadata |

For resource responses, the following fields may be validated:

| Field | Expected Type | Value Constraint |
|---|---|---|
| data.id | number | Integer value |
| data.name | string | Non-empty |
| data.year | number | Integer value |
| data.color | string | Non-empty |
| data.pantone_value | string | Non-empty |

For authentication responses, the following fields may be validated:

| Scenario | Expected Fields |
|---|---|
| Login success | token |
| Register success | id, token |
| Login error | error |
| Register error | error |

The implemented contract suite contains 15 contract requests.

---

## 13. Smoke Testing Strategy

Smoke tests validate the minimum critical functionality before running broader tests.

Implemented smoke tests:

| ID | Method | Endpoint | Purpose | Status |
|---|---|---|---|---|
| SMK-001 | GET | /api/users?page=2 | Validate user list endpoint | Passed |
| SMK-002 | GET | /api/users/2 | Validate single user endpoint | Passed |
| SMK-003 | POST | /api/users | Validate create user endpoint | Passed |
| SMK-004 | POST | /api/login | Validate login endpoint | Passed |

Smoke tests should be quick, stable and focused on API availability.

The delayed response endpoint is not part of the smoke suite because it intentionally increases execution time.

---

## 14. Regression Testing Strategy

Regression tests are executed after changes in:

- Postman collection structure
- Postman test scripts
- Environment variables
- Newman setup
- GitHub Actions workflow
- Expected results
- Test data
- Documentation that affects expected behavior

Regression testing does not necessarily execute every single test every time.

The implemented regression suite focuses on relevant endpoints and high-value scenarios.

Regression test candidates:

| ID | Related Area | Reason | Status |
|---|---|---|---|
| REG-001 | List users from page 2 | Core user listing behavior | Passed |
| REG-002 | Get existing user | Core single user behavior | Passed |
| REG-003 | Create user | Simulated CRUD behavior | Passed |
| REG-004 | Delete existing user | Simulated delete behavior | Passed |
| REG-005 | Login valid | Authentication success | Passed |
| REG-006 | Register valid | Registration success | Passed |
| REG-007 | Get single resource | Resource behavior | Passed |
| REG-008 | Get non-existing user | Important error handling behavior | Passed |

The implemented regression suite contains 8 requests.

---

## 15. Delayed Response Testing Strategy

The delayed response endpoint is used for basic response time observation.

Endpoint:

```txt
GET /api/users?delay=3
```

Purpose:

- Validate that the API can return a delayed response
- Observe response time behavior
- Separate slow tests from smoke tests
- Ensure the delayed request remains below the configured threshold

This test should not be treated as a performance load test.

It is only a basic response time observation.

The delayed response request is intentionally excluded from the smoke and regression suites.

---

## 16. Header Validation Strategy

Header validation is applied when useful.

Validations include:

- Response contains Content-Type when applicable
- Content-Type includes `application/json` when response body is JSON
- Response headers are available
- Request headers include required project values when applicable

Request headers used in the project include:

| Header | Purpose |
|---|---|
| Accept: application/json | Requests JSON responses |
| Content-Type: application/json | Used for requests with JSON body |
| x-api-key: {{apiKey}} | Provides Reqres API key |
| X-Reqres-Env: {{reqresEnv}} | Identifies the project execution environment |

Header validation is intentionally kept practical because the main goal of the project is API functional, contract and regression testing.

---

## 17. Response Time Strategy

Basic response time checks are applied where useful.

The delayed response test uses a configured threshold through the Postman environment variable:

```txt
delayedMaxResponseTimeMs
```

Implemented delayed response threshold:

```txt
5000 ms
```

Response time validation is used as a basic observation only. This project does not include load, stress or full performance testing.

---

## 18. Evidence Strategy

Evidence is collected after executing tests in Postman and through CI execution with Newman and GitHub Actions.

Evidence includes:

- Postman request execution screenshots
- Postman Runner summary screenshot
- Newman JUnit XML report
- GitHub Actions successful workflow execution
- Evidence paths referenced in documentation

Evidence folders:

| Evidence Type | Location |
|---|---|
| Postman screenshots | evidence/screenshots/reqres-api-testing-portfolio/ |
| Newman report | evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml |
| Postman Runner summary | evidence/reports/reqres-api-testing-portfolio/postman-runner/postman-runner-summary.png |

Postman evidence is organized by collection area:

```txt
evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/
evidence/screenshots/reqres-api-testing-portfolio/users-list-pagination/
evidence/screenshots/reqres-api-testing-portfolio/single-user/
evidence/screenshots/reqres-api-testing-portfolio/create-update-delete/
evidence/screenshots/reqres-api-testing-portfolio/authentication/
evidence/screenshots/reqres-api-testing-portfolio/resources/
evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/
evidence/screenshots/reqres-api-testing-portfolio/contract-tests/
evidence/screenshots/reqres-api-testing-portfolio/delayed-response/
evidence/screenshots/reqres-api-testing-portfolio/regression-tests/
```

Recommended naming examples:

- `SMK-001-list-users-page-2-postman-passed.png`
- `TC-017-login-without-password-postman-passed.png`
- `REG-008-get-non-existing-user-regression-postman-passed.png`
- `CON-015-register-error-contract-postman-passed.png`
- `newman-results.xml`
- `postman-runner-summary.png`

---

## 19. Defect Handling Strategy

Unexpected behavior is documented in:

```txt
docs/bug-reports.md
```

A bug report should include:

- Bug ID
- Title
- Environment
- Endpoint
- Method
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Evidence
- Notes

No confirmed application defects were found during final documented execution.

One CI/environment setup issue was documented as an observation because the API correctly rejected requests with an invalid or missing API key.

Current defect result:

| Item | Result |
|---|---|
| Confirmed application bugs | 0 |
| Setup/configuration observation | OBS-001 |
| Observation status | Resolved |

---

## 20. Newman Strategy

Newman is configured to execute the exported Postman collection from the command line and through GitHub Actions.

Newman is used to:

- Run the full Postman collection
- Validate all implemented requests and assertions
- Generate CLI execution output
- Generate a JUnit XML report
- Support CI execution in GitHub Actions

Current Newman report location:

```txt
evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml
```

The Newman execution uses:

| Item | Location or Value |
|---|---|
| Postman collection | postman/reqres-api-collection.json |
| Postman environment | postman/reqres-environment.json |
| Base URL variable | baseUrl |
| Reqres environment variable | reqresEnv |
| API key variable | apiKey |
| CI secret | REQRES_API_KEY |

In CI, the API key is provided through the GitHub Actions repository secret:

```txt
REQRES_API_KEY
```

The API key must not be committed to the repository.

---

## 21. GitHub Actions Strategy

GitHub Actions is configured to run the Newman API test suite automatically.

The workflow is used to:

- Check out the repository
- Set up Node.js
- Install Newman
- Validate required CI variables and files
- Run the exported Postman collection
- Provide runtime environment variables
- Use the `REQRES_API_KEY` repository secret
- Generate a Newman JUnit XML report
- Upload the Newman result as a workflow artifact
- Validate the collection on push and pull request events

Workflow file location:

```txt
.github/workflows/newman-tests.yml
```

The workflow runs on:

- push to main
- pull request to main
- manual workflow dispatch

Current CI status:

```txt
PASSED
```

---

## 22. Traceability Strategy

Traceability is handled through:

- Endpoint IDs
- Test case IDs
- Smoke test IDs
- Regression test IDs
- Contract test IDs
- Postman folder mapping
- Evidence paths
- Related documentation files

The traceability matrix is documented in:

```txt
docs/traceability-matrix.md
```

The goal is to show which test cases cover each endpoint and which type of testing is applied.

---

## 23. Execution Order

Tests are organized and executed in the following Postman collection order:

1. 01 - Smoke Tests
2. 02 - Users - List and Pagination
3. 03 - Users - Single User
4. 04 - Users - Create Update Delete
5. 05 - Authentication
6. 06 - Resources
7. 07 - Boundary Tests
8. 08 - Contract Tests
9. 09 - Delayed Response
10. 10 - Regression Tests

This order ensures that critical API availability is checked before broader and more detailed validations.

The delayed response folder is intentionally kept outside the smoke and regression scope because it introduces an artificial wait time.

---

## 24. Maintenance Strategy

The test strategy should be updated when:

- New endpoints are added
- Test scope changes
- New test types are introduced
- Postman collection structure changes
- Newman execution changes
- GitHub Actions workflow changes
- GitHub Actions secrets or environment variables change
- Test data changes
- Expected API behavior changes
- Evidence structure changes
- Project documentation is reorganized

---

## 25. Conclusion

This test strategy defines how the Reqres API Testing Portfolio project was tested in a structured and professional way.

The strategy focuses on demonstrating QA thinking through organized test design, clear prioritization, positive and negative testing, boundary testing, contract validation, evidence collection and automated execution with Newman and GitHub Actions.

The project now includes both manual Postman evidence and CI evidence, making it suitable for a QA portfolio.
