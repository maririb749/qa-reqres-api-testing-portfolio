# Smoke Tests — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Smoke Tests |
| Author | Mariana |
| Status | Draft |
| Version | 1.0 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md, docs/test-cases.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to define the smoke test suite for the Reqres API Testing Portfolio project.

Smoke tests are a small set of critical checks used to confirm that the main API endpoints are available and responding as expected before running the full test suite.

This document also prepares the smoke test structure for the future Postman collection documentation.

---

## 3. Smoke Testing Objective

The smoke suite validates that the most important API areas are working at a basic level:

- User listing
- Single user retrieval
- User creation
- Login

These scenarios were selected because they represent core API behavior and are useful as a first execution layer before positive, negative, boundary, contract and regression tests.

---

## 4. Smoke Test Selection Criteria

A test case can be included in the smoke suite when it meets the following criteria:

| Criteria | Description |
|---|---|
| Critical endpoint | The endpoint validates an important API feature |
| Stable behavior | The expected result should be predictable |
| Fast execution | The test should execute quickly |
| Clear expected result | The expected status and response structure should be clear |
| Useful failure signal | If the test fails, it may indicate a major issue with the API or setup |

---

## 5. Out of Scope for Smoke Testing

The following scenarios are intentionally excluded from the smoke suite:

- Boundary tests
- Non-numeric ID tests
- Negative pagination tests
- Very high page values
- Contract-only validations
- Delayed response tests
- Full regression suite
- Exploratory checks

The delayed response endpoint is excluded because it intentionally increases execution time and should not block the initial smoke validation.

---

## 6. Smoke Test Suite

| Smoke ID | Test Case ID | Endpoint ID | Method | Endpoint | Scenario | Expected Status | Priority |
|---|---|---|---|---|---|---|---|
| SMK-001 | TC-002 | EP-002 | GET | /api/users?page=2 | Validate user list endpoint availability | 200 | High |
| SMK-002 | TC-006 | EP-010 | GET | /api/users/2 | Validate single user endpoint availability | 200 | High |
| SMK-003 | TC-007 | EP-015 | POST | /api/users | Validate create user endpoint availability | 201 | High |
| SMK-004 | TC-013 | EP-023 | POST | /api/login | Validate login endpoint availability | 200 | High |

---

## 7. Detailed Smoke Test Scenarios

### SMK-001 — Validate user list endpoint availability

| Field | Value |
|---|---|
| Related Test Case | TC-002 |
| Endpoint ID | EP-002 |
| Method | GET |
| Endpoint | /api/users?page=2 |
| Test Type | Smoke, Positive, Functional |
| Priority | High |
| Request Body | N/A |
| Expected Status | 200 |
| Expected Result | API returns a valid JSON response containing pagination data and a users array |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- Response contains pagination fields
- Response contains data array
- Response does not expose internal errors

---

### SMK-002 — Validate single user endpoint availability

| Field | Value |
|---|---|
| Related Test Case | TC-006 |
| Endpoint ID | EP-010 |
| Method | GET |
| Endpoint | /api/users/2 |
| Test Type | Smoke, Positive, Functional |
| Priority | High |
| Request Body | N/A |
| Expected Status | 200 |
| Expected Result | API returns a valid JSON response containing user data |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- Response contains data object
- User object contains id, email, first_name, last_name and avatar
- Response does not expose internal errors

---

### SMK-003 — Validate create user endpoint availability

| Field | Value |
|---|---|
| Related Test Case | TC-007 |
| Endpoint ID | EP-015 |
| Method | POST |
| Endpoint | /api/users |
| Test Type | Smoke, Positive, Functional |
| Priority | High |
| Request Body | {"name":"Mariana","job":"QA Tester"} |
| Expected Status | 201 |
| Expected Result | API returns created user data with id and createdAt |

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

### SMK-004 — Validate login endpoint availability

| Field | Value |
|---|---|
| Related Test Case | TC-013 |
| Endpoint ID | EP-023 |
| Method | POST |
| Endpoint | /api/login |
| Test Type | Smoke, Positive, Functional |
| Priority | High |
| Request Body | {"email":"{{validEmail}}","password":"{{validPassword}}"} |
| Expected Status | 200 |
| Expected Result | API returns an authentication token |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes application/json
- Response contains token
- Token is not empty
- Response does not expose internal errors

---

## 8. Postman Collection Documentation

The smoke tests will be organized in the following Postman folder:

| Postman Folder | Description |
|---|---|
| 01 - Smoke Tests | This folder contains the minimum critical API checks used to confirm that the main Reqres endpoints are available before running the full test suite. |

Each smoke request in Postman must include:

- Clear request name
- Request description
- Expected status code
- Expected response body summary
- Test script with reusable validations
- Evidence after execution

---

## 9. Postman Request Documentation Standards

Each request must follow this documentation pattern inside Postman.

### Request name pattern

METHOD - Short scenario description

Examples:

- GET - List users from page 2
- GET - Get existing user by ID
- POST - Create user with valid data
- POST - Login with valid credentials

### Request description pattern

Each request description should explain:

- What the request validates
- Why the scenario exists
- What the expected status code is
- What response fields should be present

Example:

Name:
GET - List users from page 2

Description:
Validates that the API returns a successful response when requesting the second page of users.

Expected:
- Status code 200
- Response body is valid JSON
- Response contains pagination fields
- Response contains a data array
- Response does not expose internal implementation details

---

## 10. Postman Script Quality Standard

All Postman scripts created for this project must follow the technical quality standard defined for the portfolio.

Required standards:

| Standard | Description |
|---|---|
| Parse response once | The response body should be parsed only one time per script |
| Reusable helpers | Common validations should be implemented as reusable helper functions |
| HTTP validation | Each request must validate the expected HTTP status |
| Content-Type validation | JSON responses must validate Content-Type includes application/json |
| Error contract validation | Error responses must validate the minimum error contract |
| Non-empty error message | Error messages must not be empty |
| Scenario coherence | Error messages must be coherent with the tested scenario |
| No success payload in errors | Error responses must not contain success fields such as token, id, createdAt or updatedAt |
| No internal leaks | Responses must not expose stack traces, SQL errors, exceptions or internal server details |

For smoke tests, the main focus is positive validation, but the no-internal-leak check should still be included as a defensive quality check.

---

## 11. Recommended Smoke Validation Helpers

The future Postman scripts for smoke tests should include reusable helpers such as:

| Helper | Purpose |
|---|---|
| expectStatus | Validate the expected HTTP status code |
| expectJsonContentType | Validate JSON Content-Type |
| expectNoInternalLeak | Validate that the response does not expose internal details |
| expectObject | Validate that the parsed response is an object |
| expectField | Validate that a required field exists |
| expectNonEmptyString | Validate that a field is a non-empty string |
| expectArray | Validate that a field is an array |

These helpers will be implemented later inside the Postman request scripts.

---

## 12. Execution Steps

1. Open Postman.
2. Select the Reqres API Environment.
3. Confirm that the baseUrl variable is configured.
4. Open the Reqres API Testing Portfolio collection.
5. Open the folder 01 - Smoke Tests.
6. Run SMK-001.
7. Run SMK-002.
8. Run SMK-003.
9. Run SMK-004.
10. Validate status codes and response bodies.
11. Review script assertions.
12. Capture execution evidence.
13. Update the test status after execution.

---

## 13. Pass and Fail Criteria

### Pass Criteria

A smoke test passes when:

- The API returns the expected HTTP status code
- The response body is valid JSON when applicable
- Content-Type is valid when applicable
- Required response fields are present
- Required fields have valid values
- No internal implementation details are leaked
- The response matches the expected basic behavior

### Fail Criteria

A smoke test fails when:

- The API returns an unexpected HTTP status code
- The response body is not valid JSON when JSON is expected
- Required fields are missing
- Required fields are empty when they should not be
- The endpoint returns an unexpected error
- The response exposes internal implementation details
- The response behavior blocks the execution of broader tests

---

## 14. Evidence Strategy

Smoke test evidence will be stored in:

| Evidence Type | Location |
|---|---|
| Screenshots | evidence/screenshots/ |
| Reports | evidence/reports/ |

Recommended evidence files:

| File | Purpose |
|---|---|
| smoke-tests-execution.png | Screenshot of smoke test execution in Postman |
| postman-smoke-folder.png | Screenshot of the Smoke Tests folder organization |
| smoke-tests-runner-result.png | Screenshot of collection runner result for smoke tests |

Evidence will be updated after manual execution in Postman.

---

## 15. Relationship With Other Documents

| Document | Relationship |
|---|---|
| docs/test-plan.md | Defines that smoke testing is part of the project scope |
| docs/test-strategy.md | Defines the smoke testing strategy and execution order |
| docs/endpoint-mapping.md | Maps the smoke endpoints and Postman folder |
| docs/test-cases.md | Defines the detailed test cases used by this smoke suite |
| docs/test-summary-report.md | Will include final smoke execution results |

---

## 16. Notes and Assumptions

- Smoke tests are not intended to validate all API behaviors.
- Smoke tests should remain small and fast.
- Boundary and delayed response tests are intentionally excluded.
- Smoke tests should be executed before the full test suite.
- If a smoke test fails, broader execution should be reviewed before continuing.
- Postman request descriptions will be added when the collection is created.
- Postman test scripts will follow the official script quality standard defined for this project.

---

## 17. Next Step

The next document to be created is:

docs/regression-tests.md

The regression test document will define which scenarios should be re-executed after changes in the Postman collection, scripts, environment, Newman setup or GitHub Actions workflow.