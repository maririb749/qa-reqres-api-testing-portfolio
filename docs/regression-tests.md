# Regression Tests — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Regression Tests |
| Author | Mariana |
| Status | Draft |
| Version | 1.0 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md, docs/test-cases.md, docs/smoke-tests.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to define the regression test suite for the Reqres API Testing Portfolio project.

Regression testing ensures that existing API behavior continues to work after changes are made to the project, such as updates to:

- Postman collection structure
- Postman request scripts
- Postman environment variables
- Test data
- Expected results
- Newman setup
- GitHub Actions workflow

Regression testing is not the same as testing every scenario again every time. The goal is to select relevant tests based on impact and risk.

---

## 3. Regression Testing Definition

Regression testing validates that existing functionality still works after a change, bug fix or configuration update.

In this project, regression tests will be used to confirm that the most important Reqres API scenarios continue to behave as expected after changes in documentation, Postman scripts, Newman execution or CI pipeline.

---

## 4. Regression Scope

### In Scope

The regression suite will include:

- Core user listing scenario
- Single user retrieval
- User not found behavior
- User creation
- User update
- Partial user update
- User deletion
- Successful login
- Login error handling
- Successful registration
- Register error handling
- Important response contract validation

### Out of Scope

The regression suite will not include every boundary or exploratory scenario by default.

The following scenarios are excluded from the default regression suite:

- Delayed response endpoint
- All pagination boundary variations
- All invalid ID variations
- All long string input scenarios
- Exploratory checks
- Full performance testing

These scenarios can still be executed when the changed area is related to them.

---

## 5. Regression Selection Criteria

A test case can be included in the regression suite when it meets one or more of the following criteria:

| Criteria | Description |
|---|---|
| High business relevance | The endpoint represents an important API behavior |
| High technical relevance | The endpoint validates a core HTTP method or response pattern |
| Risk of breaking existing behavior | The scenario may be affected by script, collection or environment changes |
| Error handling importance | The scenario validates an important negative behavior |
| Contract stability | The scenario validates expected response structure |
| CI value | The scenario is useful for automated execution with Newman and GitHub Actions |

---

## 6. Regression Test Suite

| Regression ID | Test Case ID | Endpoint ID | Method | Endpoint | Scenario | Expected Status | Priority | Reason |
|---|---|---|---|---|---|---|---|---|
| REG-001 | TC-002 | EP-002 | GET | /api/users?page=2 | List users from second page | 200 | High | Core user listing behavior |
| REG-002 | TC-006 | EP-010 | GET | /api/users/2 | Get existing user | 200 | High | Core single user behavior |
| REG-003 | TC-015 | EP-011 | GET | /api/users/23 | Get non-existing user | 404 | High | Important not found behavior |
| REG-004 | TC-007 | EP-015 | POST | /api/users | Create user with valid body | 201 | High | Core create behavior |
| REG-005 | TC-008 | EP-016 | PUT | /api/users/2 | Update user with valid body | 200 | Medium | Validates full update behavior |
| REG-006 | TC-009 | EP-017 | PATCH | /api/users/2 | Partially update user | 200 | Medium | Validates partial update behavior |
| REG-007 | TC-010 | EP-018 | DELETE | /api/users/2 | Delete user | 204 | Medium | Validates delete behavior |
| REG-008 | TC-013 | EP-023 | POST | /api/login | Login with valid data | 200 | High | Critical authentication success behavior |
| REG-009 | TC-017 | EP-024 | POST | /api/login | Login without password | 400 | High | Critical authentication error handling |
| REG-010 | TC-014 | EP-025 | POST | /api/register | Register with valid data | 200 | High | Critical registration success behavior |
| REG-011 | TC-020 | EP-026 | POST | /api/register | Register without password | 400 | High | Critical registration error handling |
| REG-012 | TC-043 | EP-010 | GET | /api/users/2 | Validate existing user response contract | 200 | High | Validates single user response contract stability |

---

## 7. Detailed Regression Scenarios

### REG-001 — List users from second page

| Field | Value |
|---|---|
| Related Test Case | TC-002 |
| Endpoint ID | EP-002 |
| Method | GET |
| Endpoint | /api/users?page=2 |
| Expected Status | 200 |
| Priority | High |
| Reason | This scenario validates the core user listing endpoint used in smoke, regression and contract checks |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- Response contains pagination fields
- Response contains data array
- Response does not expose internal errors

---

### REG-002 — Get existing user

| Field | Value |
|---|---|
| Related Test Case | TC-006 |
| Endpoint ID | EP-010 |
| Method | GET |
| Endpoint | /api/users/2 |
| Expected Status | 200 |
| Priority | High |
| Reason | This scenario validates the core single user retrieval behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- Response contains user data object
- User fields match the expected minimum contract
- Response does not expose internal errors

---

### REG-003 — Get non-existing user

| Field | Value |
|---|---|
| Related Test Case | TC-015 |
| Endpoint ID | EP-011 |
| Method | GET |
| Endpoint | /api/users/23 |
| Expected Status | 404 |
| Priority | High |
| Reason | This scenario validates important not found behavior |

Validation focus:

- HTTP status is 404
- Response does not return a successful user payload
- Response does not expose internal errors
- API handles missing resource consistently

---

### REG-004 — Create user with valid body

| Field | Value |
|---|---|
| Related Test Case | TC-007 |
| Endpoint ID | EP-015 |
| Method | POST |
| Endpoint | /api/users |
| Request Body | {"name":"Mariana","job":"QA Tester"} |
| Expected Status | 201 |
| Priority | High |
| Reason | This scenario validates simulated user creation behavior |

Validation focus:

- HTTP status is 201
- Response is valid JSON
- Content-Type includes application/json
- Response contains name
- Response contains job
- Response contains id
- Response contains createdAt
- Response does not expose internal errors

---

### REG-005 — Update user with valid body

| Field | Value |
|---|---|
| Related Test Case | TC-008 |
| Endpoint ID | EP-016 |
| Method | PUT |
| Endpoint | /api/users/2 |
| Request Body | {"name":"Mariana","job":"Senior QA Tester"} |
| Expected Status | 200 |
| Priority | Medium |
| Reason | This scenario validates full update behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- Response contains updated user fields
- Response contains updatedAt
- Response does not expose internal errors

---

### REG-006 — Partially update user

| Field | Value |
|---|---|
| Related Test Case | TC-009 |
| Endpoint ID | EP-017 |
| Method | PATCH |
| Endpoint | /api/users/2 |
| Request Body | {"job":"QA Automation Tester"} |
| Expected Status | 200 |
| Priority | Medium |
| Reason | This scenario validates partial update behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- Response contains updated field
- Response contains updatedAt
- Response does not expose internal errors

---

### REG-007 — Delete user

| Field | Value |
|---|---|
| Related Test Case | TC-010 |
| Endpoint ID | EP-018 |
| Method | DELETE |
| Endpoint | /api/users/2 |
| Expected Status | 204 |
| Priority | Medium |
| Reason | This scenario validates delete behavior |

Validation focus:

- HTTP status is 204
- Response body is empty or handled as expected
- Response does not expose internal errors

---

### REG-008 — Login with valid data

| Field | Value |
|---|---|
| Related Test Case | TC-013 |
| Endpoint ID | EP-023 |
| Method | POST |
| Endpoint | /api/login |
| Request Body | {"email":"{{validEmail}}","password":"{{validPassword}}"} |
| Expected Status | 200 |
| Priority | High |
| Reason | This scenario validates critical authentication success behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- Response contains token
- Token is not empty
- Response does not expose internal errors

---

### REG-009 — Login without password

| Field | Value |
|---|---|
| Related Test Case | TC-017 |
| Endpoint ID | EP-024 |
| Method | POST |
| Endpoint | /api/login |
| Request Body | {"email":"{{validEmail}}"} |
| Expected Status | 400 |
| Priority | High |
| Reason | This scenario validates critical authentication error handling |

Validation focus:

- HTTP status is 400
- Content-Type includes application/json
- Error response follows the minimum error contract
- Error message is not empty
- Error message is coherent with missing password scenario
- Error response does not contain success payload
- Error response does not expose internal implementation details

---

### REG-010 — Register with valid data

| Field | Value |
|---|---|
| Related Test Case | TC-014 |
| Endpoint ID | EP-025 |
| Method | POST |
| Endpoint | /api/register |
| Request Body | {"email":"{{validEmail}}","password":"{{validPassword}}"} |
| Expected Status | 200 |
| Priority | High |
| Reason | This scenario validates critical registration success behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- Response contains id
- Response contains token
- Token is not empty
- Response does not expose internal errors

---

### REG-011 — Register without password

| Field | Value |
|---|---|
| Related Test Case | TC-020 |
| Endpoint ID | EP-026 |
| Method | POST |
| Endpoint | /api/register |
| Request Body | {"email":"{{validEmail}}"} |
| Expected Status | 400 |
| Priority | High |
| Reason | This scenario validates critical registration error handling |

Validation focus:

- HTTP status is 400
- Content-Type includes application/json
- Error response follows the minimum error contract
- Error message is not empty
- Error message is coherent with missing password scenario
- Error response does not contain success payload
- Error response does not expose internal implementation details

---

### REG-012 — Validate existing user response contract

| Field | Value |
|---|---|
| Related Test Case | TC-043 |
| Endpoint ID | EP-010 |
| Method | GET |
| Endpoint | /api/users/2 |
| Expected Status | 200 |
| Priority | High |
| Reason | This scenario validates that the response structure remains stable |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- data object exists
- data.id is a number
- data.email is a string
- data.first_name is a string
- data.last_name is a string
- data.avatar is a string
- support object exists
- Response does not expose internal errors

---

## 8. Postman Collection Documentation

The regression tests will be organized in the following Postman folder:

| Postman Folder | Description |
|---|---|
| 10 - Regression Tests | This folder contains selected high-value scenarios used to confirm that existing API behavior continues to work after changes in scripts, environment, collection structure, Newman setup or CI workflow. |

Each regression request in Postman must include:

- Clear request name
- Request description
- Related test case ID
- Expected status code
- Expected response body summary
- Test script with reusable validations
- Evidence after execution when applicable

---

## 9. Postman Request Naming Standard

Recommended request names:

| Request Name | Related Regression ID |
|---|---|
| GET - Regression - List users from page 2 | REG-001 |
| GET - Regression - Get existing user by ID | REG-002 |
| GET - Regression - Get non-existing user | REG-003 |
| POST - Regression - Create user with valid data | REG-004 |
| PUT - Regression - Update user with valid data | REG-005 |
| PATCH - Regression - Partially update user | REG-006 |
| DELETE - Regression - Delete existing user | REG-007 |
| POST - Regression - Login with valid credentials | REG-008 |
| POST - Regression - Login without password | REG-009 |
| POST - Regression - Register with valid data | REG-010 |
| POST - Regression - Register without password | REG-011 |
| GET - Regression - Validate single user contract | REG-012 |

---

## 10. Postman Script Quality Standard

Regression request scripts must follow the project script quality standard:

| Standard | Description |
|---|---|
| Parse response once | Parse the response body only once per script when a body exists |
| Reusable helpers | Use helper functions for repeated validations |
| HTTP validation | Validate the expected HTTP status code |
| Content-Type validation | Validate application/json when a JSON body is expected |
| Error contract validation | Validate the minimum error response contract in negative scenarios |
| Non-empty error message | Validate that error messages are not empty |
| Scenario coherence | Validate that error messages are coherent with the tested scenario |
| No success payload in errors | Ensure error responses do not include token, id, createdAt or updatedAt |
| No internal leaks | Ensure responses do not expose stack traces, SQL errors, exceptions or internal details |

For 204 responses, scripts should not force JSON parsing because DELETE responses may return no body.

---

## 11. When to Run Regression Tests

Regression tests should be executed after:

- Updating Postman request scripts
- Changing reusable helper logic
- Updating environment variables
- Changing expected response contracts
- Updating test data
- Exporting a new Postman collection
- Adding Newman execution
- Adding or changing GitHub Actions workflow
- Fixing a failed script assertion
- Refactoring the collection structure

---

## 12. Impact-Based Regression Approach

Regression testing should be selected based on impact.

Examples:

| Change | Recommended Regression Scope |
|---|---|
| Change in environment variables | Run authentication and user retrieval regression tests |
| Change in helper validations | Run full regression suite |
| Change in error validation helpers | Run REG-009 and REG-011 |
| Change in success response helpers | Run REG-001, REG-002, REG-004, REG-008 and REG-010 |
| Change in Newman setup | Run full regression suite |
| Change in GitHub Actions workflow | Run full regression suite in CI |
| Change in contract assertions | Run REG-012 and related contract tests |

---

## 13. Execution Steps

1. Open Postman.
2. Select the Reqres API Environment.
3. Confirm that required environment variables are configured.
4. Open the Reqres API Testing Portfolio collection.
5. Open the folder 10 - Regression Tests.
6. Execute the selected regression tests.
7. Validate status codes.
8. Validate response body and contracts when applicable.
9. Validate error contracts for negative scenarios.
10. Confirm no internal details are exposed.
11. Capture evidence when required.
12. Update results in the test summary report.

---

## 14. Pass and Fail Criteria

### Pass Criteria

A regression test passes when:

- The endpoint returns the expected HTTP status code
- The response body matches the expected minimum contract
- Required fields are present
- Required values are not empty when applicable
- Error responses contain coherent error messages
- Error responses do not include success payload
- No internal implementation details are exposed
- Existing behavior remains stable after project changes

### Fail Criteria

A regression test fails when:

- The endpoint returns an unexpected HTTP status code
- The response contract changes unexpectedly
- Required fields are missing
- Error messages are empty or incoherent
- Error responses contain success payload
- Internal implementation details are exposed
- Existing behavior breaks after a project change

---

## 15. Evidence Strategy

Regression evidence will be stored in:

| Evidence Type | Location |
|---|---|
| Screenshots | evidence/screenshots/ |
| Reports | evidence/reports/ |

Recommended evidence files:

| File | Purpose |
|---|---|
| regression-tests-execution.png | Screenshot of regression test execution in Postman |
| postman-regression-folder.png | Screenshot of the Regression Tests folder organization |
| regression-tests-runner-result.png | Screenshot of collection runner result for regression tests |
| newman-regression-report.html | Future Newman HTML report, if regression is executed separately |

---

## 16. Relationship With Other Documents

| Document | Relationship |
|---|---|
| docs/test-plan.md | Defines regression testing as part of the project scope |
| docs/test-strategy.md | Defines the regression approach and prioritization |
| docs/endpoint-mapping.md | Maps endpoints selected for regression |
| docs/test-cases.md | Defines the test cases referenced by the regression suite |
| docs/smoke-tests.md | Defines the smaller critical suite executed before regression |
| docs/test-summary-report.md | Will include final regression execution results |

---

## 17. Notes and Assumptions

- Regression testing is impact-based, not always full-suite.
- The default regression suite focuses on high-value API behavior.
- Some Reqres operations are simulated and may not persist data.
- DELETE responses with status 204 should not be parsed as JSON.
- Negative regression scenarios must validate error quality, not only status code.
- Regression tests will later be useful for Newman and GitHub Actions execution.
- If a change affects boundary behavior, selected boundary tests should be added to the regression execution for that change.

---

## 18. Next Step

The next document to be created is:

docs/contract-tests.md

The contract test document will define the expected response structures, required fields and data types for the most important Reqres API responses.