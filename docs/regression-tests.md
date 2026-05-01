# Regression Tests — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Regression Tests |
| Author | Mariana |
| Status | Completed |
| Version | 1.1 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md, docs/test-cases.md, docs/smoke-tests.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to define and document the regression test suite implemented for the Reqres API Testing Portfolio project.

Regression testing ensures that existing API behavior continues to work after changes are made to the project, such as updates to:

- Postman collection structure
- Postman request scripts
- Postman environment variables
- Test data
- Expected results
- Newman setup
- GitHub Actions workflow

Regression testing is not the same as testing every scenario again every time. The goal is to select relevant tests based on impact, stability and risk.

The implemented regression suite is available in the Postman collection under:

```txt
10 - Regression Tests
```

---

## 3. Regression Testing Definition

Regression testing validates that existing functionality still works after a change, bug fix or configuration update.

In this project, regression tests are used to confirm that the most important Reqres API scenarios continue to behave as expected after changes in documentation, Postman scripts, exported collection files, environment variables, Newman execution or CI pipeline setup.

---

## 4. Regression Scope

### 4.1 In Scope

The implemented regression suite includes:

- Core user listing scenario
- Single user retrieval
- Simulated user creation
- Simulated user deletion
- Successful login
- Successful registration
- Single resource retrieval
- User not found behavior

### 4.2 Out of Scope

The default regression suite does not include every scenario from the full collection.

The following scenarios are intentionally excluded from the default regression suite:

- Delayed response endpoint
- All pagination boundary variations
- All invalid ID boundary variations
- Full authentication negative matrix
- Full contract test suite
- Full create/update/patch coverage
- Long string input scenarios
- Exploratory checks
- Full performance testing

These scenarios can still be executed separately when the changed area is related to them.

---

## 5. Regression Selection Criteria

A test case can be included in the regression suite when it meets one or more of the following criteria:

| Criteria | Description |
|---|---|
| High functional relevance | The endpoint represents an important API behavior |
| High technical relevance | The endpoint validates a core HTTP method or response pattern |
| Stable behavior | The expected result is predictable and suitable for repeated execution |
| Risk of breaking existing behavior | The scenario may be affected by script, collection or environment changes |
| Error handling importance | The scenario validates an important negative behavior |
| CI value | The scenario is useful for future automated execution with Newman and GitHub Actions |
| Execution speed | The scenario can run quickly without intentionally delayed responses |

---

## 6. Implemented Regression Test Suite

| Regression ID | Test Case ID | Endpoint ID | Method | Endpoint | Postman Request | Expected Status | Priority | Status | Evidence |
|---|---|---|---|---|---|---:|---|---|---|
| REG-001 | TC-002 | EP-002 | GET | `/api/users?page=2` | GET - Regression - List users from page 2 | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-001-list-users-page-2-regression-postman-passed.png` |
| REG-002 | TC-006 | EP-010 | GET | `/api/users/2` | GET - Regression - Get existing user by ID | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-002-get-existing-user-regression-postman-passed.png` |
| REG-003 | TC-007 | EP-015 | POST | `/api/users` | POST - Regression - Create user with valid data | 201 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-003-create-user-regression-postman-passed.png` |
| REG-004 | TC-010 | EP-018 | DELETE | `/api/users/2` | DELETE - Regression - Delete existing user | 204 | Medium | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-004-delete-existing-user-regression-postman-passed.png` |
| REG-005 | TC-013 | EP-023 | POST | `/api/login` | POST - Regression - Login with valid credentials | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-005-login-valid-credentials-regression-postman-passed.png` |
| REG-006 | TC-014 | EP-025 | POST | `/api/register` | POST - Regression - Register with valid data | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-006-register-valid-data-regression-postman-passed.png` |
| REG-007 | TC-012 | EP-021 | GET | `/api/unknown/2` | GET - Regression - Get single resource | 200 | Medium | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-007-get-single-resource-regression-postman-passed.png` |
| REG-008 | TC-015 | EP-011 | GET | `/api/users/23` | GET - Regression - Get non-existing user | 404 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-008-get-non-existing-user-regression-postman-passed.png` |

---

## 7. Detailed Regression Scenarios

### REG-001 — List users from page 2

| Field | Value |
|---|---|
| Related Test Case | TC-002 |
| Endpoint ID | EP-002 |
| Method | GET |
| Endpoint | `/api/users?page=2` |
| Postman Request | GET - Regression - List users from page 2 |
| Expected Status | 200 |
| Priority | High |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-001-list-users-page-2-regression-postman-passed.png` |
| Reason | Validates core user listing behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains pagination fields
- Response page matches the `pageTwo` environment variable
- Response contains `data` array
- User objects follow the minimum user contract when present
- Response does not expose internal implementation details

---

### REG-002 — Get existing user by ID

| Field | Value |
|---|---|
| Related Test Case | TC-006 |
| Endpoint ID | EP-010 |
| Method | GET |
| Endpoint | `/api/users/2` |
| Postman Request | GET - Regression - Get existing user by ID |
| Expected Status | 200 |
| Priority | High |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-002-get-existing-user-regression-postman-passed.png` |
| Reason | Validates core single user retrieval behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains `data` object
- User ID matches the `validUserId` environment variable
- User fields follow expected JSON types and value constraints
- Response contains `support` object
- Response does not expose internal implementation details

---

### REG-003 — Create user with valid data

| Field | Value |
|---|---|
| Related Test Case | TC-007 |
| Endpoint ID | EP-015 |
| Method | POST |
| Endpoint | `/api/users` |
| Postman Request | POST - Regression - Create user with valid data |
| Request Body | `{"name":"{{testUserName}}","job":"{{testUserJob}}"}` |
| Expected Status | 201 |
| Priority | High |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-003-create-user-regression-postman-passed.png` |
| Reason | Validates simulated user creation behavior |

Validation focus:

- HTTP status is 201
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains submitted `name`
- Response contains submitted `job`
- Response contains generated `id`
- Response contains `createdAt`
- Response does not expose internal implementation details

---

### REG-004 — Delete existing user

| Field | Value |
|---|---|
| Related Test Case | TC-010 |
| Endpoint ID | EP-018 |
| Method | DELETE |
| Endpoint | `/api/users/2` |
| Postman Request | DELETE - Regression - Delete existing user |
| Expected Status | 204 |
| Priority | Medium |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-004-delete-existing-user-regression-postman-passed.png` |
| Reason | Validates simulated delete behavior |

Validation focus:

- HTTP status is 204
- Response body is empty
- Script does not force JSON parsing
- Response does not expose internal implementation details

---

### REG-005 — Login with valid credentials

| Field | Value |
|---|---|
| Related Test Case | TC-013 |
| Endpoint ID | EP-023 |
| Method | POST |
| Endpoint | `/api/login` |
| Postman Request | POST - Regression - Login with valid credentials |
| Request Body | `{"email":"{{validEmail}}","password":"{{validPassword}}"}` |
| Expected Status | 200 |
| Priority | High |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-005-login-valid-credentials-regression-postman-passed.png` |
| Reason | Validates successful authentication behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains `token`
- Token is a non-empty string
- Response does not expose internal implementation details

---

### REG-006 — Register with valid data

| Field | Value |
|---|---|
| Related Test Case | TC-014 |
| Endpoint ID | EP-025 |
| Method | POST |
| Endpoint | `/api/register` |
| Postman Request | POST - Regression - Register with valid data |
| Request Body | `{"email":"{{validEmail}}","password":"{{validPassword}}"}` |
| Expected Status | 200 |
| Priority | High |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-006-register-valid-data-regression-postman-passed.png` |
| Reason | Validates successful registration behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains `id`
- `id` is a JSON number with integer value constraint
- Response contains `token`
- Token is a non-empty string
- Response does not expose internal implementation details

---

### REG-007 — Get single resource

| Field | Value |
|---|---|
| Related Test Case | TC-012 |
| Endpoint ID | EP-021 |
| Method | GET |
| Endpoint | `/api/unknown/2` |
| Postman Request | GET - Regression - Get single resource |
| Expected Status | 200 |
| Priority | Medium |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-007-get-single-resource-regression-postman-passed.png` |
| Reason | Validates core single resource behavior |

Validation focus:

- HTTP status is 200
- Response is valid JSON
- Content-Type includes `application/json`
- Response contains `data` object
- Resource ID matches the `validResourceId` environment variable
- Resource fields follow expected JSON types and value constraints
- Response contains `support` object
- Response does not expose internal implementation details

---

### REG-008 — Get non-existing user

| Field | Value |
|---|---|
| Related Test Case | TC-015 |
| Endpoint ID | EP-011 |
| Method | GET |
| Endpoint | `/api/users/23` |
| Postman Request | GET - Regression - Get non-existing user |
| Expected Status | 404 |
| Priority | High |
| Status | Passed |
| Evidence | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-008-get-non-existing-user-regression-postman-passed.png` |
| Reason | Validates important user not found behavior |

Validation focus:

- HTTP status is 404
- Response is valid JSON when a body is returned
- Response does not include a valid user payload
- Response does not include success-only fields
- Response does not expose internal implementation details

---

## 8. Postman Collection Documentation

The regression tests are organized in the following Postman folder:

| Postman Folder | Description |
|---|---|
| 10 - Regression Tests | Contains selected high-value scenarios used to confirm existing API behavior after changes in scripts, environment, collection structure, Newman setup or CI workflow. |

Each regression request in Postman includes:

- Clear request name
- Request description
- Related regression/test case/endpoint IDs
- Purpose
- Expected status code
- Expected response body summary
- Commented test script
- Reusable validations
- Evidence after execution

---

## 9. Postman Request Naming Standard

Implemented request names:

| Request Name | Regression ID |
|---|---|
| GET - Regression - List users from page 2 | REG-001 |
| GET - Regression - Get existing user by ID | REG-002 |
| POST - Regression - Create user with valid data | REG-003 |
| DELETE - Regression - Delete existing user | REG-004 |
| POST - Regression - Login with valid credentials | REG-005 |
| POST - Regression - Register with valid data | REG-006 |
| GET - Regression - Get single resource | REG-007 |
| GET - Regression - Get non-existing user | REG-008 |

---

## 10. Postman Script Quality Standard

Regression request scripts follow the project script quality standard:

| Standard | Description |
|---|---|
| Parse response once | Parse the response body only once per script when a body exists |
| Reusable helpers | Use helper functions for repeated validations |
| HTTP validation | Validate the expected HTTP status code |
| Content-Type validation | Validate `application/json` when a JSON body is expected |
| Success contract validation | Validate the minimum expected response contract for successful scenarios |
| Error payload validation | Validate that error responses do not include success-only fields |
| No internal leaks | Ensure responses do not expose stack traces, SQL errors, exceptions or internal details |

For `204 No Content` responses, scripts do not force JSON parsing because DELETE responses return no body.

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
| Change in success response helpers | Run REG-001, REG-002, REG-003, REG-005, REG-006 and REG-007 |
| Change in not found validation | Run REG-008 and related negative/contract tests |
| Change in Newman setup | Run full regression suite |
| Change in GitHub Actions workflow | Run full regression suite in CI |
| Change in contract assertions | Run related contract tests plus the impacted regression tests |

---

## 13. Execution Steps

1. Open Postman.
2. Select the Reqres API Environment.
3. Confirm that required environment variables are configured.
4. Open the Reqres API Testing Portfolio collection.
5. Open the folder `10 - Regression Tests`.
6. Execute the regression folder or selected regression requests.
7. Validate status codes.
8. Validate response body and contracts when applicable.
9. Validate error contracts for negative scenarios.
10. Confirm no internal details are exposed.
11. Capture evidence when required.
12. Save evidence in the regression evidence folder.
13. Update results in the test summary report.

---

## 14. Pass and Fail Criteria

### Pass Criteria

A regression test passes when:

- The endpoint returns the expected HTTP status code
- The response body matches the expected minimum contract
- Required fields are present
- Required values are not empty when applicable
- Error responses do not include success payload
- No internal implementation details are exposed
- Existing behavior remains stable after project changes

### Fail Criteria

A regression test fails when:

- The endpoint returns an unexpected HTTP status code
- The response contract changes unexpectedly
- Required fields are missing
- Required values are empty when they should not be
- Error responses contain success payload
- Internal implementation details are exposed
- Existing behavior breaks after a project change

---

## 15. Evidence Strategy

Regression evidence is stored in:

```txt
evidence/screenshots/reqres-api-testing-portfolio/regression-tests/
```

Implemented evidence files:

| File | Purpose |
|---|---|
| `REG-001-list-users-page-2-regression-postman-passed.png` | Evidence that the users list regression test passed |
| `REG-002-get-existing-user-regression-postman-passed.png` | Evidence that the existing user regression test passed |
| `REG-003-create-user-regression-postman-passed.png` | Evidence that the create user regression test passed |
| `REG-004-delete-existing-user-regression-postman-passed.png` | Evidence that the delete user regression test passed |
| `REG-005-login-valid-credentials-regression-postman-passed.png` | Evidence that the login regression test passed |
| `REG-006-register-valid-data-regression-postman-passed.png` | Evidence that the register regression test passed |
| `REG-007-get-single-resource-regression-postman-passed.png` | Evidence that the single resource regression test passed |
| `REG-008-get-non-existing-user-regression-postman-passed.png` | Evidence that the non-existing user regression test passed |

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

## 16. Relationship With Other Documents

| Document | Relationship |
|---|---|
| docs/test-plan.md | Defines regression testing as part of the project scope |
| docs/test-strategy.md | Defines the regression approach and prioritization |
| docs/endpoint-mapping.md | Maps endpoints selected for regression |
| docs/test-cases.md | Defines the test cases referenced by the regression suite |
| docs/smoke-tests.md | Defines the smaller critical suite executed before regression |
| docs/test-summary-report.md | Includes final regression execution results |

---

## 17. Notes and Assumptions

- Regression testing is impact-based, not always full-suite.
- The default regression suite focuses on high-value API behavior.
- Some Reqres operations are simulated and may not persist data.
- DELETE responses with status `204` should not be parsed as JSON.
- The delayed response endpoint is intentionally excluded from the regression suite.
- Boundary and full contract tests can be executed separately when the changed area requires broader coverage.
- Regression tests are included in the Newman and GitHub Actions execution flow.
- The real API key should remain only in the local Postman environment or GitHub Actions repository secrets and should never be committed to the repository.

---

## 18. Completion Notes

The regression test suite was implemented, executed and evidenced successfully through Postman evidence screenshots and the GitHub Actions Newman execution report.

Final regression coverage:

| Metric | Result |
|---|---:|
| Regression requests implemented | 8 |
| Regression requests executed | 8 |
| Regression requests passed | 8 |
| Regression requests failed | 0 |
| Evidence screenshots captured | 8 |
| Newman/GitHub Actions execution | Passed |

Final result:

```txt
PASSED
```