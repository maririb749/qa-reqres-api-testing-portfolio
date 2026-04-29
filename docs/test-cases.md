# Test Cases — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Test Cases |
| Author | Mariana |
| Status | Draft |
| Version | 1.0 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to define the test cases for the Reqres API Testing Portfolio project.

These test cases are based on the endpoints mapped in docs/endpoint-mapping.md and follow the testing approach defined in docs/test-plan.md and docs/test-strategy.md.

This document includes:

- Positive test cases
- Negative test cases
- Boundary test cases
- Contract test cases
- Smoke test candidates
- Regression test candidates
- Basic response time test case

---

## 3. Test Case Status Legend

| Status | Description |
|---|---|
| Not Run | Test case has not been executed yet |
| Passed | Actual result matched the expected result |
| Failed | Actual result did not match the expected result |
| Blocked | Test could not be executed due to an external issue |
| To Be Updated | Result will be updated after execution |

---

## 4. Priority Legend

| Priority | Description |
|---|---|
| High | Critical API behavior or important validation |
| Medium | Important scenario, but not critical |
| Low | Additional validation or exploratory scenario |

---

## 5. Positive Test Cases

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | EP-001 | GET | /api/users?page=1 | List users from first page | Positive, Functional | High | N/A | 200 | API returns a valid list of users from page 1 | Not Run | To be updated |
| TC-002 | EP-002 | GET | /api/users?page=2 | List users from second page | Positive, Functional, Smoke, Regression | High | N/A | 200 | API returns a valid list of users from page 2 | Not Run | To be updated |
| TC-003 | EP-003 | GET | /api/users?per_page=3 | List users with custom page size | Positive, Functional | Medium | N/A | 200 | API returns users using the requested page size | Not Run | To be updated |
| TC-004 | EP-004 | GET | /api/users?page=1&per_page=3 | List users using page and custom page size | Positive, Functional | Medium | N/A | 200 | API returns users from page 1 with custom page size | Not Run | To be updated |
| TC-005 | EP-009 | GET | /api/users/1 | Get first existing user | Positive, Functional | High | N/A | 200 | API returns data for user ID 1 | Not Run | To be updated |
| TC-006 | EP-010 | GET | /api/users/2 | Get existing user | Positive, Functional, Smoke, Regression | High | N/A | 200 | API returns data for user ID 2 | Not Run | To be updated |
| TC-007 | EP-015 | POST | /api/users | Create user with valid body | Positive, Functional, Smoke, Regression | High | {"name":"Mariana","job":"QA Tester"} | 201 | API returns created user data with id and createdAt | Not Run | To be updated |
| TC-008 | EP-016 | PUT | /api/users/2 | Update user with valid body | Positive, Functional, Regression | Medium | {"name":"Mariana","job":"Senior QA Tester"} | 200 | API returns updated user data with updatedAt | Not Run | To be updated |
| TC-009 | EP-017 | PATCH | /api/users/2 | Partially update user | Positive, Functional, Regression | Medium | {"job":"QA Automation Tester"} | 200 | API returns partially updated user data with updatedAt | Not Run | To be updated |
| TC-010 | EP-018 | DELETE | /api/users/2 | Delete user | Positive, Functional, Regression | Medium | N/A | 204 | API returns no content after delete request | Not Run | To be updated |
| TC-011 | EP-020 | GET | /api/unknown | List resource data | Positive, Functional | Medium | N/A | 200 | API returns a list of resources | Not Run | To be updated |
| TC-012 | EP-021 | GET | /api/unknown/2 | Get existing resource | Positive, Functional | Medium | N/A | 200 | API returns data for resource ID 2 | Not Run | To be updated |
| TC-013 | EP-023 | POST | /api/login | Login with valid data | Positive, Functional, Smoke, Regression | High | {"email":"{{validEmail}}","password":"{{validPassword}}"} | 200 | API returns authentication token | Not Run | To be updated |
| TC-014 | EP-025 | POST | /api/register | Register with valid data | Positive, Functional, Regression | High | {"email":"{{validEmail}}","password":"{{validPassword}}"} | 200 | API returns id and token | Not Run | To be updated |

---

## 6. Negative Test Cases

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-015 | EP-011 | GET | /api/users/23 | Get non-existing user | Negative, Regression | High | N/A | 404 | API returns not found response | Not Run | To be updated |
| TC-016 | EP-022 | GET | /api/unknown/23 | Get non-existing resource | Negative, Regression | Medium | N/A | 404 | API returns not found response | Not Run | To be updated |
| TC-017 | EP-024 | POST | /api/login | Login without password | Negative, Regression | High | {"email":"{{validEmail}}"} | 400 | API returns error message for missing password | Not Run | To be updated |
| TC-018 | EP-024 | POST | /api/login | Login without email | Negative | High | {"password":"{{validPassword}}"} | 400 | API returns error message for missing email or user not found | Not Run | To be updated |
| TC-019 | EP-024 | POST | /api/login | Login with empty body | Negative, Boundary | High | {} | 400 | API returns error message for missing required fields | Not Run | To be updated |
| TC-020 | EP-026 | POST | /api/register | Register without password | Negative, Regression | High | {"email":"{{validEmail}}"} | 400 | API returns error message for missing password | Not Run | To be updated |
| TC-021 | EP-026 | POST | /api/register | Register without email | Negative | High | {"password":"{{validPassword}}"} | 400 | API returns error message for missing email or password | Not Run | To be updated |
| TC-022 | EP-026 | POST | /api/register | Register with empty body | Negative, Boundary | High | {} | 400 | API returns error message for missing required fields | Not Run | To be updated |

---

## 7. Boundary Test Cases

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-023 | EP-005 | GET | /api/users?page=0 | List users using page zero | Boundary | Medium | N/A | To be observed | API should return a consistent handled response and should not break | Not Run | To be updated |
| TC-024 | EP-006 | GET | /api/users?page=-1 | List users using negative page value | Boundary | Medium | N/A | To be observed | API should return a consistent handled response and should not break | Not Run | To be updated |
| TC-025 | EP-007 | GET | /api/users?page=999 | List users using very high page value | Boundary | Medium | N/A | 200 or handled response | API should return an empty or handled response without breaking | Not Run | To be updated |
| TC-026 | EP-008 | GET | /api/users?page=abc | List users using non-numeric page value | Boundary, Negative | Medium | N/A | To be observed | API should handle non-numeric page value consistently | Not Run | To be updated |
| TC-027 | EP-012 | GET | /api/users/0 | Get user using zero ID | Boundary, Negative | Medium | N/A | 404 or handled response | API should not return an existing user for ID zero | Not Run | To be updated |
| TC-028 | EP-013 | GET | /api/users/-1 | Get user using negative ID | Boundary, Negative | Medium | N/A | 404 or handled response | API should handle negative ID consistently | Not Run | To be updated |
| TC-029 | EP-014 | GET | /api/users/abc | Get user using non-numeric ID | Boundary, Negative | Medium | N/A | 404 or handled response | API should handle non-numeric ID consistently | Not Run | To be updated |
| TC-030 | EP-019 | DELETE | /api/users/999999 | Delete non-existing user | Boundary, Negative | Low | N/A | 204 or handled response | API should handle deletion of non-existing user consistently | Not Run | To be updated |
| TC-031 | EP-015 | POST | /api/users | Create user with empty body | Boundary, Negative | Medium | {} | To be observed | API should handle missing fields consistently | Not Run | To be updated |
| TC-032 | EP-015 | POST | /api/users | Create user with empty name | Boundary | Medium | {"name":"","job":"QA Tester"} | To be observed | API should handle empty name consistently | Not Run | To be updated |
| TC-033 | EP-015 | POST | /api/users | Create user with empty job | Boundary | Medium | {"name":"Mariana","job":""} | To be observed | API should handle empty job consistently | Not Run | To be updated |
| TC-034 | EP-015 | POST | /api/users | Create user with special characters | Boundary | Low | {"name":"Mariana @#$%","job":"QA Tester & API Analyst"} | To be observed | API should handle special characters without breaking | Not Run | To be updated |
| TC-035 | EP-015 | POST | /api/users | Create user with very long strings | Boundary | Low | name and job with long string values | To be observed | API should handle long input consistently | Not Run | To be updated |
| TC-036 | EP-024 | POST | /api/login | Login with invalid email format | Boundary, Negative | Medium | {"email":"{{invalidEmail}}","password":"{{validPassword}}"} | To be observed | API should reject or handle invalid email format consistently | Not Run | To be updated |
| TC-037 | EP-024 | POST | /api/login | Login with empty email | Boundary, Negative | Medium | {"email":"","password":"{{validPassword}}"} | To be observed | API should handle empty email consistently | Not Run | To be updated |
| TC-038 | EP-026 | POST | /api/register | Register with invalid email format | Boundary, Negative | Medium | {"email":"{{invalidEmail}}","password":"{{validPassword}}"} | To be observed | API should reject or handle invalid email format consistently | Not Run | To be updated |
| TC-039 | EP-026 | POST | /api/register | Register with empty password | Boundary, Negative | Medium | {"email":"{{validEmail}}","password":""} | To be observed | API should handle empty password consistently | Not Run | To be updated |

---

## 8. Contract Test Cases

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-040 | EP-001 | GET | /api/users?page=1 | Validate list users response contract | Contract | High | N/A | 200 | Response contains page, per_page, total, total_pages, data array and support object | Not Run | To be updated |
| TC-041 | EP-002 | GET | /api/users?page=2 | Validate list users page 2 response contract | Contract, Regression | High | N/A | 200 | Response contains valid pagination fields and data array | Not Run | To be updated |
| TC-042 | EP-009 | GET | /api/users/1 | Validate single user response contract | Contract | High | N/A | 200 | Response contains data object with id, email, first_name, last_name and avatar | Not Run | To be updated |
| TC-043 | EP-010 | GET | /api/users/2 | Validate existing user response contract | Contract, Regression | High | N/A | 200 | Response contains expected user fields with correct JSON data types and value constraints | Not Run | To be updated |
| TC-044 | EP-020 | GET | /api/unknown | Validate resource list response contract | Contract | Medium | N/A | 200 | Response contains pagination fields, data array and support object | Not Run | To be updated |
| TC-045 | EP-021 | GET | /api/unknown/2 | Validate single resource response contract | Contract | Medium | N/A | 200 | Response contains resource fields id, name, year, color and pantone_value | Not Run | To be updated |

---

## 9. Basic Response Time Test Case

| Test Case ID | Endpoint ID | Method | Endpoint | Title | Type | Priority | Request Data | Expected Status | Expected Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-046 | EP-027 | GET | /api/users?delay=3 | Validate delayed response behavior | Basic Response Time, Observation | Low | N/A | 200 | API returns a valid response after the configured delay | Not Run | To be updated |

---

## 10. Smoke Test Candidates

| Smoke ID | Related Test Case ID | Endpoint ID | Method | Endpoint | Reason |
|---|---|---|---|---|---|
| SMK-001 | TC-002 | EP-002 | GET | /api/users?page=2 | Validates user list endpoint availability |
| SMK-002 | TC-006 | EP-010 | GET | /api/users/2 | Validates single user endpoint availability |
| SMK-003 | TC-007 | EP-015 | POST | /api/users | Validates create user endpoint availability |
| SMK-004 | TC-013 | EP-023 | POST | /api/login | Validates login endpoint availability |

---

## 11. Regression Test Candidates

| Regression ID | Related Test Case ID | Endpoint ID | Method | Endpoint | Reason |
|---|---|---|---|---|---|
| REG-001 | TC-002 | EP-002 | GET | /api/users?page=2 | Core user listing behavior |
| REG-002 | TC-006 | EP-010 | GET | /api/users/2 | Core single user behavior |
| REG-003 | TC-015 | EP-011 | GET | /api/users/23 | Important not found behavior |
| REG-004 | TC-007 | EP-015 | POST | /api/users | User creation behavior |
| REG-005 | TC-008 | EP-016 | PUT | /api/users/2 | User update behavior |
| REG-006 | TC-009 | EP-017 | PATCH | /api/users/2 | Partial update behavior |
| REG-007 | TC-010 | EP-018 | DELETE | /api/users/2 | Delete behavior |
| REG-008 | TC-013 | EP-023 | POST | /api/login | Successful login behavior |
| REG-009 | TC-017 | EP-024 | POST | /api/login | Login error handling |
| REG-010 | TC-014 | EP-025 | POST | /api/register | Successful registration behavior |
| REG-011 | TC-020 | EP-026 | POST | /api/register | Register error handling |
| REG-012 | TC-043 | EP-010 | GET | /api/users/2 | Contract stability for single user |

---

## 12. General Execution Steps

These steps apply to all API test cases:

1. Open Postman.
2. Select the Reqres API Environment.
3. Confirm that the baseUrl variable is configured.
4. Open the related request in the Postman collection.
5. Send the request.
6. Validate the response status code.
7. Validate the response body when applicable.
8. Validate response headers when applicable.
9. Validate response time when applicable.
10. Compare the actual result with the expected result.
11. Update the test status.
12. Save evidence if required.

---

## 13. Notes and Assumptions

- Some results are marked as "To be observed" because they will be confirmed during real execution in Postman.
- Reqres is a demo API, so some create, update and delete operations may return simulated responses.
- Some responses may not persist data permanently.
- Boundary tests are included to demonstrate QA thinking, even when the API accepts unusual values.
- The delayed response test should not be included in the smoke test suite.
- Evidence will be added after test execution.
- Actual results and final statuses will be updated after running the collection.

---

## 14. Next Step

The next document to be created is:

docs/smoke-tests.md

The smoke test document will define the minimum critical test suite used to validate that the main API endpoints are available before running the full test suite.