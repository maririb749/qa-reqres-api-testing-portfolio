# Test Cases — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Test Cases |
| Author | Mariana |
| Status | Completed |
| Version | 1.1 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md, docs/smoke-tests.md, docs/regression-tests.md, docs/contract-tests.md, docs/test-summary-report.md, docs/traceability-matrix.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to define and track the implemented test cases for the Reqres API Testing Portfolio project.

These test cases are based on the endpoints mapped in `docs/endpoint-mapping.md` and follow the testing approach defined in `docs/test-plan.md` and `docs/test-strategy.md`.

This document includes:

- Positive test cases
- Negative test cases
- Boundary test cases
- Contract test coverage
- Smoke test coverage
- Regression test coverage
- Basic delayed response test case
- Evidence paths for executed tests

---

## 3. Test Case Status Legend

| Status | Description |
|---|---|
| Not Run | Test case has not been executed yet |
| Passed | Actual result matched the expected result |
| Failed | Actual result did not match the expected result |
| Blocked | Test could not be executed due to an external issue |
| Not Implemented | Scenario is documented but not included in the current implemented Postman collection |

---

## 4. Priority Legend

| Priority | Description |
|---|---|
| High | Critical API behavior or important validation |
| Medium | Important scenario, but not critical |
| Low | Additional validation or observation scenario |

---

## 5. Positive Test Cases

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | EP-001 | GET | `/api/users?page=1` | List users from first page | Positive, Functional | High | N/A | 200 | API returns a valid users list from page 1 with pagination fields and data array | Passed | `evidence/screenshots/reqres-api-testing-portfolio/users-list-pagination/TC-001-list-users-page-1-postman-passed.png` |
| TC-002 | EP-002 | GET | `/api/users?page=2` | List users from second page | Positive, Functional, Smoke, Regression | High | N/A | 200 | API returns a valid users list from page 2 with pagination fields and data array | Passed | `evidence/screenshots/reqres-api-testing-portfolio/users-list-pagination/TC-002-list-users-page-2-postman-passed.png` |
| TC-003 | EP-003 | GET | `/api/users?per_page=3` | List users with custom page size | Positive, Functional | Medium | N/A | 200 | API returns users using the requested page size and data length does not exceed the requested value | Passed | `evidence/screenshots/reqres-api-testing-portfolio/users-list-pagination/TC-003-list-users-custom-page-size-postman-passed.png` |
| TC-004 | EP-004 | GET | `/api/users?page=1&per_page=3` | List users using page and custom page size | Positive, Functional | Medium | N/A | 200 | API returns users from page 1 with the requested custom page size | Passed | `evidence/screenshots/reqres-api-testing-portfolio/users-list-pagination/TC-004-list-users-page-and-custom-size-postman-passed.png` |
| TC-005 | EP-009 | GET | `/api/users/1` | Get first existing user | Positive, Functional | High | N/A | 200 | API returns data and support objects for user ID 1 | Passed | `evidence/screenshots/reqres-api-testing-portfolio/single-user/TC-005-get-first-existing-user-postman-passed.png` |
| TC-006 | EP-010 | GET | `/api/users/2` | Get existing user | Positive, Functional, Smoke, Regression | High | N/A | 200 | API returns data and support objects for user ID 2 | Passed | `evidence/screenshots/reqres-api-testing-portfolio/single-user/TC-006-get-existing-user-postman-passed.png` |
| TC-007 | EP-015 | POST | `/api/users` | Create user with valid body | Positive, Functional, Smoke, Regression | High | `{"name":"{{testUserName}}","job":"{{testUserJob}}"}` | 201 | API returns created user data with name, job, id and createdAt | Passed | `evidence/screenshots/reqres-api-testing-portfolio/create-update-delete/TC-007-create-user-valid-data-postman-passed.png` |
| TC-008 | EP-016 | PUT | `/api/users/2` | Update user with valid body | Positive, Functional | Medium | `{"name":"{{testUserName}}","job":"{{updatedUserJob}}"}` | 200 | API returns updated user data with name, job and updatedAt | Passed | `evidence/screenshots/reqres-api-testing-portfolio/create-update-delete/TC-008-update-user-valid-data-postman-passed.png` |
| TC-009 | EP-017 | PATCH | `/api/users/2` | Partially update user job | Positive, Functional | Medium | `{"job":"{{patchedUserJob}}"}` | 200 | API returns partially updated user data with job and updatedAt | Passed | `evidence/screenshots/reqres-api-testing-portfolio/create-update-delete/TC-009-partial-update-user-job-postman-passed.png` |
| TC-010 | EP-018 | DELETE | `/api/users/2` | Delete existing user | Positive, Functional, Regression | Medium | N/A | 204 | API returns no content after delete request | Passed | `evidence/screenshots/reqres-api-testing-portfolio/create-update-delete/TC-010-delete-existing-user-postman-passed.png` |
| TC-011 | EP-020 | GET | `/api/unknown` | List resource data | Positive, Functional | Medium | N/A | 200 | API returns a valid list of resources with pagination fields, data array and support object | Passed | `evidence/screenshots/reqres-api-testing-portfolio/resources/TC-011-list-resources-postman-passed.png` |
| TC-012 | EP-021 | GET | `/api/unknown/2` | Get existing resource | Positive, Functional, Regression | Medium | N/A | 200 | API returns data and support objects for resource ID 2 | Passed | `evidence/screenshots/reqres-api-testing-portfolio/resources/TC-012-get-single-resource-postman-passed.png` |
| TC-013 | EP-023 | POST | `/api/login` | Login with valid credentials | Positive, Functional, Smoke, Regression | High | `{"email":"{{validEmail}}","password":"{{validPassword}}"}` | 200 | API returns authentication token | Passed | `evidence/screenshots/reqres-api-testing-portfolio/authentication/TC-013-login-valid-credentials-postman-passed.png` |
| TC-014 | EP-025 | POST | `/api/register` | Register with valid data | Positive, Functional, Regression | High | `{"email":"{{validEmail}}","password":"{{validPassword}}"}` | 200 | API returns id and token | Passed | `evidence/screenshots/reqres-api-testing-portfolio/authentication/TC-014-register-valid-data-postman-passed.png` |

---

## 6. Negative Test Cases

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-015 | EP-011 | GET | `/api/users/23` | Get non-existing user | Negative, Regression | High | N/A | 404 | API returns controlled not found response without valid user payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/single-user/TC-015-get-non-existing-user-postman-passed.png` |
| TC-016 | EP-022 | GET | `/api/unknown/23` | Get non-existing resource | Negative | Medium | N/A | 404 | API returns controlled not found response without valid resource payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/resources/TC-016-get-non-existing-resource-postman-passed.png` |
| TC-017 | EP-024 | POST | `/api/login` | Login without password | Negative | High | `{"email":"{{validEmail}}"}` | 400 | API returns error message for missing password without success payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/authentication/TC-017-login-without-password-postman-passed.png` |
| TC-018 | EP-024 | POST | `/api/login` | Login without email | Negative | High | `{"password":"{{validPassword}}"}` | 400 | API returns error message for missing email or username without success payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/authentication/TC-018-login-without-email-postman-passed.png` |
| TC-019 | EP-024 | POST | `/api/login` | Login with empty body | Negative, Boundary | High | `{}` | 400 | API returns error message for missing required login data without success payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/authentication/TC-019-login-empty-body-postman-passed.png` |
| TC-020 | EP-026 | POST | `/api/register` | Register without password | Negative | High | `{"email":"{{validEmail}}"}` | 400 | API returns error message for missing password without success payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/authentication/TC-020-register-without-password-postman-passed.png` |
| TC-021 | EP-026 | POST | `/api/register` | Register without email | Negative | High | `{"password":"{{validPassword}}"}` | 400 | API returns error message for missing email or username without success payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/authentication/TC-021-register-without-email-postman-passed.png` |
| TC-022 | EP-026 | POST | `/api/register` | Register with empty body | Negative, Boundary | High | `{}` | 400 | API returns error message for missing required registration data without success payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/authentication/TC-022-register-empty-body-postman-passed.png` |

---

## 7. Boundary Test Cases

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-023 | EP-005 | GET | `/api/users?page=0` | List users using page zero | Boundary | Medium | N/A | 200 | API returns controlled JSON response with pagination structure and data array | Passed | `evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/TC-023-boundary-page-zero-postman-passed.png` |
| TC-024 | EP-006 | GET | `/api/users?page=-1` | List users using negative page value | Boundary | Medium | N/A | 200 | API returns controlled JSON response with pagination structure and data array | Passed | `evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/TC-024-boundary-negative-page-postman-passed.png` |
| TC-025 | EP-007 | GET | `/api/users?page=999` | List users using very high page value | Boundary | Medium | N/A | 200 | API returns controlled JSON response and data array without internal error | Passed | `evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/TC-025-boundary-high-page-postman-passed.png` |
| TC-026 | EP-008 | GET | `/api/users?page=abc` | List users using non-numeric page value | Boundary, Negative | Medium | N/A | 200 | API handles non-numeric page value with controlled JSON response | Passed | `evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/TC-026-boundary-non-numeric-page-postman-passed.png` |
| TC-027 | EP-012 | GET | `/api/users/0` | Get user using zero ID | Boundary, Negative | Medium | N/A | 404 | API returns controlled not found response without valid user payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/TC-027-boundary-zero-user-id-postman-passed.png` |
| TC-028 | EP-013 | GET | `/api/users/-1` | Get user using negative ID | Boundary, Negative | Medium | N/A | 404 | API returns controlled not found response without valid user payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/TC-028-boundary-negative-user-id-postman-passed.png` |
| TC-029 | EP-014 | GET | `/api/users/abc` | Get user using non-numeric ID | Boundary, Negative | Medium | N/A | 404 | API returns controlled not found response without valid user payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/TC-029-boundary-non-numeric-user-id-postman-passed.png` |
| TC-030 | EP-019 | DELETE | `/api/users/999999` | Delete non-existing user | Boundary, Negative | Low | N/A | 204 | API returns simulated no-content delete response with empty body | Passed | `evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/TC-030-boundary-delete-non-existing-user-postman-passed.png` |

---

## 8. Delayed Response Test Case

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-031 | EP-027 | GET | `/api/users?delay=3` | Validate delayed response behavior | Basic Response Time, Observation | Low | N/A | 200 | API returns a valid delayed users list response below the configured response time threshold | Passed | `evidence/screenshots/reqres-api-testing-portfolio/delayed-response/TC-031-delayed-list-users-postman-passed.png` |

---

## 9. Exploratory Negative Data Test Cases

These cases strengthen the project with invalid, empty, special-character and long-string payloads against the simulated Reqres create/update endpoints. Because Reqres is a demo API, the current expected result documents controlled observed behavior instead of assuming production-grade validation rules.

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-032 | EP-015 | POST | `/api/users` | Create user with empty name | Exploratory, Negative Data | Medium | `{"name":"{{emptyUserName}}","job":"{{testUserJob}}"}` | 201 | Demo API returns controlled created response and echoes empty name without internal error | Passed | `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml` |
| TC-033 | EP-015 | POST | `/api/users` | Create user with empty job | Exploratory, Negative Data | Medium | `{"name":"{{testUserName}}","job":"{{emptyUserJob}}"}` | 201 | Demo API returns controlled created response and echoes empty job without internal error | Passed | `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml` |
| TC-034 | EP-015 | POST | `/api/users` | Create user with special characters | Exploratory, Negative Data | Medium | `{"name":"{{specialCharsName}}","job":"{{testUserJob}}"}` | 201 | Demo API returns controlled created response and preserves special characters | Passed | `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml` |
| TC-035 | EP-015 | POST | `/api/users` | Create user with very long job | Exploratory, Boundary Data | Medium | `{"name":"{{testUserName}}","job":"{{longString}}"}` | 201 | Demo API returns controlled created response and preserves the long string value | Passed | `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml` |
| TC-036 | EP-016 | PUT | `/api/users/2` | Update user with empty body | Exploratory, Negative Data | Medium | `{}` | 200 | Demo API returns controlled update metadata and does not expose internal error details | Passed | `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml` |

---

## 10. Contract Test Cases

| Contract ID | Related Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CON-001 | TC-001 | EP-001 | GET | `/api/users?page=1` | Validate users list response contract | Contract | High | 200 | Response contains pagination fields, data array, valid user objects when present and support object | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-001-users-list-contract-postman-passed.png` |
| CON-002 | TC-002 | EP-002 | GET | `/api/users?page=2` | Validate users page 2 response contract | Contract | High | 200 | Response contains valid pagination fields, page 2, data array and support object | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-002-users-page-2-contract-postman-passed.png` |
| CON-003 | TC-005 | EP-009 | GET | `/api/users/1` | Validate first user response contract | Contract | High | 200 | Response contains data object with id, email, first_name, last_name, avatar and support object | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-003-first-user-contract-postman-passed.png` |
| CON-004 | TC-006 | EP-010 | GET | `/api/users/2` | Validate existing user response contract | Contract | High | 200 | Response contains expected user fields with correct JSON types and value constraints | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-004-existing-user-contract-postman-passed.png` |
| CON-005 | TC-011 | EP-020 | GET | `/api/unknown` | Validate resource list response contract | Contract | Medium | 200 | Response contains pagination fields, data array, valid resource objects when present and support object | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-005-resource-list-contract-postman-passed.png` |
| CON-006 | TC-012 | EP-021 | GET | `/api/unknown/2` | Validate single resource response contract | Contract | Medium | 200 | Response contains resource fields id, name, year, color, pantone_value and support object | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-006-single-resource-contract-postman-passed.png` |
| CON-007 | TC-007 | EP-015 | POST | `/api/users` | Validate create user response contract | Contract | High | 201 | Response contains submitted name/job plus generated id and createdAt | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-007-create-user-contract-postman-passed.png` |
| CON-008 | TC-008 | EP-016 | PUT | `/api/users/2` | Validate update user response contract | Contract | Medium | 200 | Response contains submitted name/job plus updatedAt | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-008-update-user-contract-postman-passed.png` |
| CON-009 | TC-009 | EP-017 | PATCH | `/api/users/2` | Validate partial update response contract | Contract | Medium | 200 | Response contains submitted job plus updatedAt | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-009-partial-update-contract-postman-passed.png` |
| CON-010 | TC-013 | EP-023 | POST | `/api/login` | Validate login success response contract | Contract | High | 200 | Response contains non-empty authentication token | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-010-login-success-contract-postman-passed.png` |
| CON-011 | TC-014 | EP-025 | POST | `/api/register` | Validate register success response contract | Contract | High | 200 | Response contains integer id and non-empty token | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-011-register-success-contract-postman-passed.png` |
| CON-012 | TC-015 | EP-011 | GET | `/api/users/23` | Validate user not found response contract | Contract, Negative | High | 404 | Response does not contain valid user payload or success-only fields | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-012-user-not-found-contract-postman-passed.png` |
| CON-013 | TC-016 | EP-022 | GET | `/api/unknown/23` | Validate resource not found response contract | Contract, Negative | Medium | 404 | Response does not contain valid resource payload or success-only fields | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-013-resource-not-found-contract-postman-passed.png` |
| CON-014 | TC-017 | EP-024 | POST | `/api/login` | Validate login error response contract | Contract, Negative | High | 400 | Response contains non-empty error message coherent with missing password and no success payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-014-login-error-contract-postman-passed.png` |
| CON-015 | TC-020 | EP-026 | POST | `/api/register` | Validate register error response contract | Contract, Negative | High | 400 | Response contains non-empty error message coherent with missing password and no success payload | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-015-register-error-contract-postman-passed.png` |

---

## 11. Smoke Test Coverage

| Smoke ID | Related Test Case ID | Endpoint ID | Method | Endpoint | Reason | Status | Evidence |
|---|---|---|---|---|---|---|---|
| SMK-001 | TC-002 | EP-002 | GET | `/api/users?page=2` | Validates user list endpoint availability | Passed | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-001-list-users-page-2-postman-passed.png` |
| SMK-002 | TC-006 | EP-010 | GET | `/api/users/2` | Validates single user endpoint availability | Passed | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-002-get-existing-user-postman-passed.png` |
| SMK-003 | TC-007 | EP-015 | POST | `/api/users` | Validates create user endpoint availability | Passed | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-003-create-user-valid-data-postman-passed.png` |
| SMK-004 | TC-013 | EP-023 | POST | `/api/login` | Validates login endpoint availability | Passed | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/SMK-004-login-valid-credentials-postman-passed.png` |

---

## 12. Regression Test Coverage

| Regression ID | Related Test Case ID | Endpoint ID | Method | Endpoint | Reason | Status | Evidence |
|---|---|---|---|---|---|---|---|
| REG-001 | TC-002 | EP-002 | GET | `/api/users?page=2` | Core user listing behavior | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-001-list-users-page-2-regression-postman-passed.png` |
| REG-002 | TC-006 | EP-010 | GET | `/api/users/2` | Core single user behavior | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-002-get-existing-user-regression-postman-passed.png` |
| REG-003 | TC-007 | EP-015 | POST | `/api/users` | Simulated user creation behavior | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-003-create-user-regression-postman-passed.png` |
| REG-004 | TC-010 | EP-018 | DELETE | `/api/users/2` | Simulated delete behavior | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-004-delete-existing-user-regression-postman-passed.png` |
| REG-005 | TC-013 | EP-023 | POST | `/api/login` | Successful login behavior | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-005-login-valid-credentials-regression-postman-passed.png` |
| REG-006 | TC-014 | EP-025 | POST | `/api/register` | Successful registration behavior | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-006-register-valid-data-regression-postman-passed.png` |
| REG-007 | TC-012 | EP-021 | GET | `/api/unknown/2` | Core single resource behavior | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-007-get-single-resource-regression-postman-passed.png` |
| REG-008 | TC-015 | EP-011 | GET | `/api/users/23` | Important user not found behavior | Passed | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/REG-008-get-non-existing-user-regression-postman-passed.png` |

---

## 13. General Execution Steps

These steps apply to all API test cases:

1. Open Postman.
2. Select the Reqres API Environment.
3. Confirm that the `baseUrl` variable is configured.
4. Confirm that the `apiKey` variable is configured locally in the Postman environment.
For CI execution, the API key is provided through the GitHub Actions repository secret `REQRES_API_KEY`.
5. Open the related request in the Postman collection.
6. Send the request or execute the folder using Collection Runner.
7. Validate the response status code.
8. Validate the response body when applicable.
9. Validate response headers when applicable.
10. Validate response time when applicable.
11. Compare the actual result with the expected result.
12. Confirm test status.
13. Save evidence in the matching evidence folder.

---

## 14. Notes and Assumptions

- Reqres is a demo API, so create, update, patch and delete operations return simulated responses.
- Some responses are not persisted permanently.
- DELETE scenarios return `204 No Content`; these tests intentionally avoid JSON parsing.
- Boundary tests are included to demonstrate QA thinking and controlled handling of unusual values.
- The delayed response test is not included in the smoke or regression suite because it introduces an intentional delay.
- Contract tests validate response structure, JSON data types and value constraints.
- JSON numeric fields expected to be integer values are validated as `number` type with an integer value constraint.
- Error responses are validated to confirm they do not contain success-only payloads.
- The collection includes a global validation to check that responses do not expose internal implementation details.
- Evidence screenshots were captured after successful Postman execution for the original 58-request suite. The 5 exploratory negative data tests are now covered by Newman XML/JSON/HTML execution evidence.
- Newman execution is configured through GitHub Actions.
- The Newman CI execution report is stored in `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml`.
- Postman Runner summary evidence is stored in `evidence/reports/reqres-api-testing-portfolio/postman-runner/postman-runner-summary.png`.
- The real API key should remain only in the local Postman environment or GitHub Actions repository secrets and should never be committed to the repository.

---

## 15. Completion Notes

All implemented Postman test cases were executed successfully and documented with Postman screenshots, Postman Runner summary evidence and the GitHub Actions Newman execution report.

The implemented coverage includes:

- 14 positive/functional test cases
- 8 negative test cases
- 8 boundary test cases
- 1 delayed response test case
- 15 contract validation checks
- 4 smoke test checks
- 8 regression test checks
- 1 Newman CI execution report
- 1 Postman Runner summary evidence
- GitHub Actions/Newman execution passed

Final execution result:

```txt
PASSED
```