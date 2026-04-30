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
| Related Document | docs/test-plan.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this test strategy is to define how the Reqres API will be tested during this portfolio project.

While the Test Plan defines the overall scope, objectives, risks, deliverables and exit criteria, this Test Strategy defines the practical testing approach, test design techniques, prioritization, execution order, validation rules and evidence strategy.

This document ensures that API testing is performed in a structured, consistent and traceable way.

---

## 3. Testing Goals

The main goals of this strategy are:

- Validate the behavior of Reqres demo API endpoints
- Verify expected HTTP status codes
- Validate JSON response structure
- Validate required response fields
- Validate response data types
- Cover positive, negative and boundary scenarios
- Validate important API contracts
- Organize requests clearly inside Postman
- Collect execution evidence
- Prepare the project for Newman execution
- Prepare the project for GitHub Actions execution

---

## 4. Testing Approach

The API will be tested using Postman.

The testing approach will be based on:

- Manual API execution in Postman
- Organized Postman collection folders
- Environment variables
- Test scripts inside Postman requests
- Documented test cases
- Evidence collection
- Future command-line execution with Newman
- Future CI execution with GitHub Actions

Each request will include validations when applicable:

- Status code validation
- JSON response validation
- Response body validation
- Contract validation
- Error message validation
- Response time validation
- Header validation

---

## 5. Test Design Techniques

The following test design techniques will be applied:

| Technique | Application in this Project |
|---|---|
| Positive Testing | Validate expected behavior with valid data |
| Negative Testing | Validate API behavior with missing, invalid or incomplete data |
| Boundary Value Analysis | Validate edge cases such as zero, negative values, high values and empty fields |
| Error Guessing | Try inputs that could commonly cause failures |
| Contract Testing | Validate response structure, JSON data types and value constraints |
| Risk-Based Testing | Prioritize critical endpoints such as login, register and user retrieval |
| Regression Testing | Re-run selected tests after changes in collection, scripts or CI pipeline |

---

## 6. Collection Organization Strategy

The Postman collection will be organized by feature and test purpose.

Collection name:

Reqres API Testing Portfolio

Recommended folder structure:

- 01 - Smoke Tests
- 02 - Users - List and Pagination
- 03 - Users - Single User
- 04 - Users - Create Update Delete
- 05 - Authentication
- 06 - Resources
- 07 - Boundary Tests
- 08 - Contract Tests
- 09 - Delayed Response
- 10 - Regression Tests

This organization helps demonstrate clear thinking, maintainability and professional test structure.

---

## 7. Environment Strategy

A Postman environment will be used to avoid hardcoded values.

Environment name:

Reqres API Environment

Main variables:

| Variable | Purpose |
|---|---|
| baseUrl | Stores the API base URL |
| apiKey | Optional variable if an API key is required |
| validUserId | Stores a valid user ID |
| firstUserId | Stores the first valid user ID |
| invalidUserId | Stores a non-existing user ID |
| zeroUserId | Stores zero as a boundary ID |
| negativeUserId | Stores a negative ID |
| nonNumericUserId | Stores a non-numeric ID |
| validResourceId | Stores a valid resource ID |
| invalidResourceId | Stores an invalid resource ID |
| validEmail | Stores a valid email for authentication |
| validPassword | Stores a valid password for authentication |
| invalidEmail | Stores an invalid email format |
| pageOne | Stores first page number |
| pageTwo | Stores second page number |
| pageZero | Stores zero page value |
| negativePage | Stores negative page value |
| highPage | Stores a very high page value |
| perPage | Stores custom page size |
| delaySeconds | Stores delay value for delayed response testing |

Requests should use variables such as:

    {{baseUrl}}/api/users?page={{pageTwo}}

Instead of hardcoded values such as:

    https://reqres.in/api/users?page=2

---

## 8. Test Prioritization

Tests will be prioritized based on business relevance, API importance and risk.

| Priority | Test Area | Reason |
|---|---|---|
| High | Smoke tests | Confirm that critical endpoints are available |
| High | Login and register | Authentication endpoints are critical |
| High | Get users | Core API behavior |
| Medium | Create, update and delete users | Important CRUD behavior |
| Medium | Negative tests | Validate error handling |
| Medium | Boundary tests | Validate edge cases |
| Medium | Contract tests | Validate response structure |
| Low | Delayed response | Useful for basic response time observation |

---

## 9. Positive Testing Strategy

Positive tests will validate successful scenarios using valid data.

Examples:

| Scenario | Expected Result |
|---|---|
| List users using a valid page | API returns 200 and user list |
| Get an existing user | API returns 200 and user data |
| Create user with valid body | API returns 201 and created user data |
| Update user with valid body | API returns 200 and updated data |
| Delete user | API returns 204 |
| Login with valid data | API returns 200 and token |
| Register with valid data | API returns 200 and token/id |

Positive tests should confirm:

- Correct HTTP status code
- Valid JSON response
- Required fields
- Correct data types
- Expected response content

---

## 10. Negative Testing Strategy

Negative tests will validate how the API behaves with invalid, missing or incomplete data.

Examples:

| Scenario | Expected Result |
|---|---|
| Get non-existing user | API returns 404 |
| Get non-existing resource | API returns 404 |
| Login without password | API returns 400 |
| Login without email | API returns 400 |
| Register without password | API returns 400 |
| Register without email | API returns 400 |

Negative tests should confirm:

- API returns an appropriate error status
- Error response is valid JSON when applicable
- Error message is clear
- API does not return successful status for invalid requests

---

## 11. Boundary Testing Strategy

Boundary tests will validate edge cases and unusual input values.

Examples:

| Scenario | Purpose |
|---|---|
| page=0 | Validate lower boundary behavior |
| page=-1 | Validate negative page value |
| page=999 | Validate very high page value |
| page=abc | Validate non-numeric page value |
| user ID = 0 | Validate invalid zero ID |
| user ID = -1 | Validate negative ID |
| user ID = abc | Validate non-numeric ID |
| empty request body | Validate behavior with missing fields |
| empty strings | Validate input boundary |
| special characters | Validate unusual but possible input |
| very long strings | Validate large input handling |

Some boundary results will be marked as "To be observed" until actual execution in Postman.

This is intentional because public demo APIs may not behave exactly like production APIs.

---

## 12. Contract Testing Strategy

Contract tests will validate the expected structure of API responses.

For user-related responses, the following fields may be validated:

| Field | Expected JSON Type | Value Constraint |
|---|---|---|
| data.id | number | Integer value |
| data.email | string | Non-empty, email-like value |
| data.first_name | string | Non-empty |
| data.last_name | string | Non-empty |
| data.avatar | string | Non-empty, URL-like value |
| support.url | string |
| support.text | string |

For list users responses, the following fields may be validated:

| Field | Expected Type |
|---|---|
| page | number |
| per_page | number |
| total | number |
| total_pages | number |
| data | array |
| support | object |

For resource responses, the following fields may be validated:

| Field | Expected Type |
|---|---|
| data.id | number |
| data.name | string |
| data.year | number |
| data.color | string |
| data.pantone_value | string |

Contract tests should validate:

- Response is valid JSON
- Required objects exist
- Required fields exist
- Field data types are correct
- Arrays are returned where expected
- Objects are returned where expected

---

## 13. Smoke Testing Strategy

Smoke tests will validate the minimum critical functionality before running broader tests.

Smoke test candidates:

| ID | Method | Endpoint | Purpose |
|---|---|---|---|
| SMK-001 | GET | /api/users?page=2 | Validate user list endpoint |
| SMK-002 | GET | /api/users/2 | Validate single user endpoint |
| SMK-003 | POST | /api/users | Validate create user endpoint |
| SMK-004 | POST | /api/login | Validate login endpoint |

Smoke tests should be quick, stable and focused on API availability.

The delayed response endpoint should not be part of the smoke suite because it intentionally increases execution time.

---

## 14. Regression Testing Strategy

Regression tests will be executed after changes in:

- Postman collection structure
- Postman test scripts
- Environment variables
- Newman setup
- GitHub Actions workflow
- Expected results
- Test data

Regression testing will not necessarily execute every single test every time.

The regression suite should focus on the most relevant endpoints and high-risk scenarios.

Regression test candidates:

| ID | Related Area | Reason |
|---|---|---|
| REG-001 | List users | Core endpoint |
| REG-002 | Get single user | Core endpoint |
| REG-003 | User not found | Error handling |
| REG-004 | Create user | CRUD behavior |
| REG-005 | Login valid | Authentication success |
| REG-006 | Register valid | Registration success |
| REG-007 | Get single resource | Resource behavior |

---

## 15. Delayed Response Testing Strategy

The delayed response endpoint will be used for basic response time observation.

Endpoint:

    GET /api/users?delay=3

Purpose:

- Validate that the API can return a delayed response
- Observe response time behavior
- Separate slow tests from smoke tests
- Prepare future Newman execution with realistic timing awareness

This test should not be treated as a performance load test.

It is only a basic response time observation.

---

## 16. Header Validation Strategy

Header validation will be applied when useful.

Possible validations:

- Response contains Content-Type
- Content-Type includes application/json when response body is JSON
- Response headers are available
- Authentication-related headers are handled if required

Header validation should not be overcomplicated in this project because the main goal is API functional testing.

---

## 17. Response Time Strategy

Basic response time checks will be added to selected requests.

Suggested rule:

| Request Type | Expected Response Time |
|---|---|
| Regular API requests | Less than 1000 ms |
| Delayed response request | Expected to be slower due to delay parameter |

Example validation idea:

    Response time should be below 1000 ms for normal requests.

For the delayed response endpoint, the expected time should be handled separately.

---

## 18. Evidence Strategy

Evidence will be collected after executing tests in Postman and later with Newman.

Evidence may include:

- Postman collection overview screenshot
- Smoke test execution screenshot
- Positive test execution screenshot
- Negative test execution screenshot
- Boundary test execution screenshot
- Contract test execution screenshot
- Newman HTML report
- Newman JSON report
- GitHub Actions execution screenshot

Evidence folders:

| Evidence Type | Location |
|---|---|
| Screenshots | evidence/screenshots/ |
| Reports | evidence/reports/ |

Evidence should be named clearly.

Recommended examples:

- postman-collection-overview.png
- smoke-tests-execution.png
- positive-tests-execution.png
- negative-tests-execution.png
- boundary-tests-execution.png
- contract-tests-execution.png
- newman-report.html
- newman-report.json
- github-actions-run.png

---

## 19. Defect Handling Strategy

Unexpected behavior will be documented in:

    docs/bug-reports.md

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

If no critical bugs are found, the bug report file will still include a professional bug report template.

This demonstrates readiness to document defects properly.

---

## 20. Newman Strategy

Newman will be added after the Postman collection is completed and exported.

Newman will be used to:

- Run the Postman collection from the command line
- Generate CLI output
- Generate HTML report
- Generate JSON report
- Prepare the project for CI execution

Expected future command:

    npx newman run postman/reqres-api-collection.json -e postman/reqres-environment.json

Expected future report command:

    npx newman run postman/reqres-api-collection.json -e postman/reqres-environment.json -r cli,htmlextra,json --reporter-htmlextra-export evidence/reports/newman-report.html --reporter-json-export evidence/reports/newman-report.json

---

## 21. GitHub Actions Strategy

GitHub Actions will be added after Newman is working locally.

The CI workflow will be used to:

- Install project dependencies
- Run Newman tests automatically
- Validate the Postman collection on push
- Validate the Postman collection on pull request

Workflow file location:

    .github/workflows/newman-tests.yml

The workflow should run on:

- push to main
- pull request to main

---

## 22. Traceability Strategy

Traceability will be handled through:

- Endpoint IDs
- Test case IDs
- Test type classification
- Related documentation files

The traceability matrix will be documented in:

    docs/traceability-matrix.md

The goal is to show which test cases cover each endpoint and which type of testing is applied.

---

## 23. Execution Order

Tests will be executed in the following order:

1. Smoke tests
2. Positive tests
3. Negative tests
4. Boundary tests
5. Resource tests
6. Contract tests
7. Delayed response test
8. Regression tests

This order ensures that critical API availability is checked before broader and more detailed validations.

---

## 24. Maintenance Strategy

The test strategy should be updated when:

- New endpoints are added
- Test scope changes
- New test types are introduced
- Postman collection structure changes
- Newman execution is added
- GitHub Actions workflow is added
- Test data changes
- Expected API behavior changes

---

## 25. Conclusion

This test strategy defines how the Reqres API Testing Portfolio project will be tested in a structured and professional way.

The strategy focuses on demonstrating QA thinking through organized test design, clear prioritization, positive and negative testing, boundary testing, contract validation, evidence collection and future automation with Newman and GitHub Actions.

---

## 26. Completion Notes

This test strategy was finalized and validated against all project documents on 2026-04-30.

All testing approaches, design techniques, priorities, execution orders and evidence strategies are documented and aligned with:

- Test Plan (docs/test-plan.md)
- Endpoint Mapping (docs/endpoint-mapping.md)
- Test Cases (docs/test-cases.md)
- Smoke Tests (docs/smoke-tests.md)
- Regression Tests (docs/regression-tests.md)
- Contract Tests (docs/contract-tests.md)

Final status:

\`\`\`txt
COMPLETED
\`\`\`