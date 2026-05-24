# Smoke Tests — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Smoke Tests |
| Author | Mariana |
| Status | Completed |
| Version | 1.1 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md, docs/test-cases.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to define and document the smoke test suite for the Reqres API Testing Portfolio project.

Smoke tests are a small set of critical API checks used to confirm that the main endpoints are available and responding as expected before running the full test suite.

The smoke suite was implemented in the Postman collection under:

```txt
01 - Smoke Tests
```

---

## 3. Smoke Testing Objective

The smoke suite validates that the most important API areas are working at a basic level:

- User listing
- Single user retrieval
- User creation
- Login

These scenarios were selected because they represent core API behavior and provide a fast confidence check before executing the broader positive, negative, boundary, contract, delayed response and regression suites.

---

## 4. Smoke Test Selection Criteria

A test case can be included in the smoke suite when it meets the following criteria:

| Criteria | Description |
|---|---|
| Critical endpoint | The endpoint validates an important API feature |
| Stable behavior | The expected result should be predictable |
| Fast execution | The test should execute quickly |
| Clear expected result | The expected status and response structure should be clear |
| Useful failure signal | If the test fails, it may indicate a major issue with the API, environment or collection setup |

---

## 5. Out of Scope for Smoke Testing

The following scenarios are intentionally excluded from the smoke suite:

- Boundary tests
- Negative authentication tests
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

| Smoke ID | Test Case ID | Endpoint ID | Method | Endpoint | Postman Request | Expected Status | Priority | Status | Evidence |
|---|---|---|---|---|---|---:|---|---|---|
| SMK-001 | TC-002 | EP-002 | GET | `/api/users?page=2` | GET - Smoke - List users from page 2 | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-001-list-users-page-2-postman-passed.png` |
| SMK-002 | TC-006 | EP-010 | GET | `/api/users/2` | GET - Smoke - Get existing user by ID | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-002-get-existing-user-postman-passed.png` |
| SMK-003 | TC-007 | EP-015 | POST | `/api/users` | POST - Smoke - Create user with valid data | 201 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-003-create-user-valid-data-postman-passed.png` |
| SMK-004 | TC-013 | EP-023 | POST | `/api/login` | POST - Smoke - Login with valid credentials | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-004-login-valid-credentials-postman-passed.png` |

---

## 7. Detailed Smoke Test Scenarios

### SMK-001 — Validate user list endpoint availability

| Field | Value |
|---|---|
| Related Test Case | TC-002 |
| Endpoint ID | EP-002 |
| Method | GET |
| Endpoint | `/api/users?page=2` |
| Postman Request | GET - Smoke - List users from page 2 |
| Test Type | Smoke, Positive, Functional |
| Priority | High |
| Request Body | N/A |
| Expected Status | 200 |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-001-list-users-page-2-postman-passed.png` |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains pagination fields
- Pagination numeric fields use JSON `number` type with integer value constraints
- Response contains `data` array
- Response does not expose internal implementation details

---

### SMK-002 — Validate single user endpoint availability

| Field | Value |
|---|---|
| Related Test Case | TC-006 |
| Endpoint ID | EP-010 |
| Method | GET |
| Endpoint | `/api/users/2` |
| Postman Request | GET - Smoke - Get existing user by ID |
| Test Type | Smoke, Positive, Functional |
| Priority | High |
| Request Body | N/A |
| Expected Status | 200 |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-002-get-existing-user-postman-passed.png` |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains `data` object
- User object contains `id`, `email`, `first_name`, `last_name` and `avatar`
- Required fields follow expected JSON types and value constraints
- Response does not expose internal implementation details

---

### SMK-003 — Validate create user endpoint availability

| Field | Value |
|---|---|
| Related Test Case | TC-007 |
| Endpoint ID | EP-015 |
| Method | POST |
| Endpoint | `/api/users` |
| Postman Request | POST - Smoke - Create user with valid data |
| Test Type | Smoke, Positive, Functional |
| Priority | High |
| Request Body | `{"name":"{{testUserName}}","job":"{{testUserJob}}"}` |
| Expected Status | 201 |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-003-create-user-valid-data-postman-passed.png` |

Validation focus:

- HTTP status is 201
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains `name`
- Response contains `job`
- Response contains generated `id`
- Response contains `createdAt`
- Returned `name` matches the request body
- Returned `job` matches the request body
- Response does not expose internal implementation details

---

### SMK-004 — Validate login endpoint availability

| Field | Value |
|---|---|
| Related Test Case | TC-013 |
| Endpoint ID | EP-023 |
| Method | POST |
| Endpoint | `/api/login` |
| Postman Request | POST - Smoke - Login with valid credentials |
| Test Type | Smoke, Positive, Functional |
| Priority | High |
| Request Body | `{"email":"{{validEmail}}","password":"{{validPassword}}"}` |
| Expected Status | 200 |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-004-login-valid-credentials-postman-passed.png` |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains `token`
- Token is a non-empty string
- Response does not expose internal implementation details

---

## 8. Postman Collection Documentation

The smoke tests are organized in the following Postman folder:

| Postman Folder | Description |
|---|---|
| 01 - Smoke Tests | Contains the minimum critical API checks used to confirm that the main Reqres endpoints are available before running the full test suite. |

Each smoke request in Postman includes:

- Clear request name
- Request description
- Related IDs
- Purpose
- Expected status code
- Expected response body summary
- Commented test script
- Reusable validation helpers
- Evidence after execution

---

## 9. Postman Request Documentation Standards

Each request follows this naming pattern:

```txt
METHOD - Smoke - Short scenario description
```

Implemented examples:

- GET - Smoke - List users from page 2
- GET - Smoke - Get existing user by ID
- POST - Smoke - Create user with valid data
- POST - Smoke - Login with valid credentials

Each request description includes:

- Related endpoint/test/smoke IDs
- Purpose
- Expected status code
- Expected response structure
- Required validations
- Internal implementation leak validation through the global collection script

---

## 10. Postman Script Quality Standard

All smoke test scripts follow the project technical quality standard.

| Standard | Description |
|---|---|
| Parse response once | The response body is parsed only one time per script |
| Reusable helpers | Common validations are implemented as reusable helper functions |
| HTTP validation | Each request validates the expected HTTP status |
| Content-Type validation | JSON responses validate that Content-Type includes `application/json` |
| Contract validation | Success responses validate the minimum expected response contract |
| Non-empty value validation | Required string fields are validated as non-empty |
| Integer value constraint | Numeric integer fields are validated as JSON `number` with integer value constraint |
| No internal leaks | Responses are checked globally to avoid exposing stack traces, SQL errors, exceptions or internal server details |

For smoke tests, the main focus is positive validation, but the no-internal-leak check is still included as a defensive quality check through the collection-level test script.

---

## 11. Implemented Smoke Validation Helpers

The smoke request scripts use reusable helpers such as:

| Helper | Purpose |
|---|---|
| `expectStatus` | Validate the expected HTTP status code |
| `expectJsonContentType` | Validate JSON Content-Type |
| `expectIntegerNumber` | Validate JSON number type with integer value constraint |
| `expectNonEmptyString` | Validate that a field is a non-empty string |
| User contract validation | Validate required user fields when applicable |
| Create response validation | Validate returned creation fields and submitted data |
| Authentication validation | Validate returned token |

The global collection script validates that responses do not expose internal implementation details.

---

## 12. Execution Steps

1. Open Postman.
2. Select the Reqres API Environment.
3. Confirm that `baseUrl` is configured.
4. Confirm that `apiKey` is configured locally in the Postman environment.
5. Open the Reqres API Testing Portfolio collection.
6. Open the folder `01 - Smoke Tests`.
7. Run the smoke folder or execute each smoke request individually.
8. Validate status codes and response bodies.
9. Review script assertions.
10. Capture execution evidence.
11. Save evidence under the smoke test evidence folder.

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

Smoke test evidence is stored in:

```txt
evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/
```

Implemented evidence files:

| File | Purpose |
|---|---|
| `SMK-001-list-users-page-2-postman-passed.png` | Evidence that the users list smoke test passed |
| `SMK-002-get-existing-user-postman-passed.png` | Evidence that the single user smoke test passed |
| `SMK-003-create-user-valid-data-postman-passed.png` | Evidence that the create user smoke test passed |
| `SMK-004-login-valid-credentials-postman-passed.png` | Evidence that the login smoke test passed |

Additional execution evidence is also available in:

```txt
evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml
```

This report was generated by the GitHub Actions Newman workflow after the full Postman collection execution passed successfully.

Postman Runner summary evidence is also available in:

```txt
evidence/reports/reqres-api-testing-portfolio/postman-runner/postman-runner-summary.png
```

---

## 16. Notes and Assumptions

- Smoke tests are not intended to validate all API behaviors.
- Smoke tests should remain small and fast.
- Boundary and delayed response tests are intentionally excluded.
- Smoke tests should be executed before the full test suite.
- If a smoke test fails, broader execution should be reviewed before continuing.
- Reqres create operations are simulated and do not persist real data.
- Postman test scripts follow the script quality standard defined for this project.
- The real API key should remain only in the local Postman environment or GitHub Actions repository secrets and should never be committed to the repository.
