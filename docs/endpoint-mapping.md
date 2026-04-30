# Endpoint Mapping — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Endpoint Mapping |
| Author | Mariana |
| Status | Completed |
| Version | 1.1 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/test-cases.md, docs/smoke-tests.md, docs/regression-tests.md, docs/contract-tests.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to map the Reqres API endpoints tested in this project.

This mapping helps organize API coverage and connects endpoints to the implemented Postman collection structure, test types, priorities and expected results.

The document defines:

- Endpoint ID
- HTTP method
- Endpoint path
- Description
- Expected status
- Implemented test types
- Priority
- Related Postman folder
- Notes or assumptions

Detailed test cases are documented in:

- docs/test-cases.md

Full traceability between endpoints, test cases, Postman folders and evidence is documented in:

- docs/traceability-matrix.md

---

## 3. Endpoint Coverage Summary

| Area | Coverage |
|---|---|
| Users list and pagination | Covered |
| Single user retrieval | Covered |
| User creation | Covered |
| User update | Covered |
| User partial update | Covered |
| User deletion | Covered |
| Authentication | Covered |
| Resources | Covered |
| Boundary scenarios | Covered |
| Contract validation | Covered |
| Delayed response behavior | Covered |
| Regression coverage | Covered |

Overall implementation summary:

| Item | Total |
|---|---:|
| Endpoint definitions mapped | 27 |
| Postman folders implemented | 10 |
| Postman requests implemented | 58 |
| Evidence folders created | 10 |

---

## 4. Endpoint Mapping

| ID | Method | Endpoint | Description | Main Expected Status | Implemented Test Types | Priority | Main Postman Folder |
|---|---|---|---|---|---|---|---|
| EP-001 | GET | `/api/users?page=1` | List users from first page | 200 | Positive, Functional, Contract | High | 02 - Users - List and Pagination |
| EP-002 | GET | `/api/users?page=2` | List users from second page | 200 | Positive, Functional, Smoke, Regression, Contract | High | 02 - Users - List and Pagination |
| EP-003 | GET | `/api/users?per_page=3` | List users using custom page size | 200 | Positive, Functional | Medium | 02 - Users - List and Pagination |
| EP-004 | GET | `/api/users?page=1&per_page=3` | List users using page and custom page size | 200 | Positive, Functional | Medium | 02 - Users - List and Pagination |
| EP-005 | GET | `/api/users?page=0` | List users using page zero | 200 | Boundary, Error Guessing | Medium | 07 - Boundary Tests |
| EP-006 | GET | `/api/users?page=-1` | List users using negative page value | 200 | Boundary, Error Guessing | Medium | 07 - Boundary Tests |
| EP-007 | GET | `/api/users?page=999` | List users using very high page value | 200 | Boundary, Error Guessing | Medium | 07 - Boundary Tests |
| EP-008 | GET | `/api/users?page=abc` | List users using non-numeric page value | 200 | Boundary, Negative, Error Guessing | Medium | 07 - Boundary Tests |
| EP-009 | GET | `/api/users/1` | Get first existing user | 200 | Positive, Functional, Contract | High | 03 - Users - Single User |
| EP-010 | GET | `/api/users/2` | Get existing user | 200 | Positive, Functional, Smoke, Regression, Contract | High | 03 - Users - Single User |
| EP-011 | GET | `/api/users/23` | Get non-existing user | 404 | Negative, Regression, Contract | High | 03 - Users - Single User |
| EP-012 | GET | `/api/users/0` | Get user using zero ID | 404 | Boundary, Negative | Medium | 07 - Boundary Tests |
| EP-013 | GET | `/api/users/-1` | Get user using negative ID | 404 | Boundary, Negative | Medium | 07 - Boundary Tests |
| EP-014 | GET | `/api/users/abc` | Get user using non-numeric ID | 404 | Boundary, Negative, Error Guessing | Medium | 07 - Boundary Tests |
| EP-015 | POST | `/api/users` | Create user | 201 | Positive, Functional, Smoke, Regression, Contract | High | 04 - Users - Create Update Delete |
| EP-016 | PUT | `/api/users/2` | Update user | 200 | Positive, Functional, Contract | Medium | 04 - Users - Create Update Delete |
| EP-017 | PATCH | `/api/users/2` | Partially update user | 200 | Positive, Functional, Contract | Medium | 04 - Users - Create Update Delete |
| EP-018 | DELETE | `/api/users/2` | Delete user | 204 | Positive, Functional, Regression | Medium | 04 - Users - Create Update Delete |
| EP-019 | DELETE | `/api/users/999999` | Delete non-existing user | 204 | Boundary, Negative, Error Guessing | Low | 07 - Boundary Tests |
| EP-020 | GET | `/api/unknown` | List resource data | 200 | Positive, Functional, Contract | Medium | 06 - Resources |
| EP-021 | GET | `/api/unknown/2` | Get existing resource | 200 | Positive, Functional, Regression, Contract | Medium | 06 - Resources |
| EP-022 | GET | `/api/unknown/23` | Get non-existing resource | 404 | Negative, Contract | Medium | 06 - Resources |
| EP-023 | POST | `/api/login` | Login user with valid data | 200 | Positive, Functional, Smoke, Regression, Contract | High | 05 - Authentication |
| EP-024 | POST | `/api/login` | Login user with missing or invalid data | 400 | Negative, Boundary, Contract | High | 05 - Authentication |
| EP-025 | POST | `/api/register` | Register user with valid data | 200 | Positive, Functional, Regression, Contract | High | 05 - Authentication |
| EP-026 | POST | `/api/register` | Register user with missing or invalid data | 400 | Negative, Boundary, Contract | High | 05 - Authentication |
| EP-027 | GET | `/api/users?delay=3` | Validate delayed response behavior | 200 | Functional, Basic Response Time, Observation | Low | 09 - Delayed Response |

---

## 5. Postman Folder Mapping

| Postman Folder | Related Endpoint IDs | Requests Implemented | Purpose |
|---|---|---:|---|
| 01 - Smoke Tests | EP-002, EP-010, EP-015, EP-023 | 4 | Validate critical API availability |
| 02 - Users - List and Pagination | EP-001, EP-002, EP-003, EP-004 | 4 | Validate user listing and query parameters |
| 03 - Users - Single User | EP-009, EP-010, EP-011 | 3 | Validate single user retrieval and not found behavior |
| 04 - Users - Create Update Delete | EP-015, EP-016, EP-017, EP-018 | 4 | Validate simulated user create, update, patch and delete operations |
| 05 - Authentication | EP-023, EP-024, EP-025, EP-026 | 8 | Validate login and register success/error scenarios |
| 06 - Resources | EP-020, EP-021, EP-022 | 3 | Validate resource/color endpoints |
| 07 - Boundary Tests | EP-005, EP-006, EP-007, EP-008, EP-012, EP-013, EP-014, EP-019 | 8 | Validate edge cases and unusual values |
| 08 - Contract Tests | EP-001, EP-002, EP-009, EP-010, EP-011, EP-015, EP-016, EP-017, EP-020, EP-021, EP-022, EP-023, EP-024, EP-025, EP-026 | 15 | Validate response structure, JSON types, value constraints and error contracts |
| 09 - Delayed Response | EP-027 | 1 | Validate delayed response behavior and basic response time threshold |
| 10 - Regression Tests | EP-002, EP-010, EP-011, EP-015, EP-018, EP-021, EP-023, EP-025 | 8 | Re-run selected high-value scenarios after changes |

---

## 6. Coverage by Test Type

| Test Type | Endpoint IDs |
|---|---|
| Positive Testing | EP-001, EP-002, EP-003, EP-004, EP-009, EP-010, EP-015, EP-016, EP-017, EP-018, EP-020, EP-021, EP-023, EP-025 |
| Negative Testing | EP-008, EP-011, EP-012, EP-013, EP-014, EP-019, EP-022, EP-024, EP-026 |
| Boundary Testing | EP-005, EP-006, EP-007, EP-008, EP-012, EP-013, EP-014, EP-019, EP-024, EP-026 |
| Smoke Testing | EP-002, EP-010, EP-015, EP-023 |
| Regression Testing | EP-002, EP-010, EP-011, EP-015, EP-018, EP-021, EP-023, EP-025 |
| Contract Testing | EP-001, EP-002, EP-009, EP-010, EP-011, EP-015, EP-016, EP-017, EP-020, EP-021, EP-022, EP-023, EP-024, EP-025, EP-026 |
| Basic Response Time | EP-027 |
| Error Guessing | EP-005, EP-006, EP-007, EP-008, EP-014, EP-019 |

---

## 7. Priority Summary

| Priority | Endpoint IDs | Reason |
|---|---|---|
| High | EP-001, EP-002, EP-009, EP-010, EP-011, EP-015, EP-023, EP-024, EP-025, EP-026 | Core API behavior, authentication and important error handling |
| Medium | EP-003, EP-004, EP-005, EP-006, EP-007, EP-008, EP-012, EP-013, EP-014, EP-016, EP-017, EP-018, EP-020, EP-021, EP-022 | Pagination, boundary behavior, simulated CRUD operations and resource validation |
| Low | EP-019, EP-027 | Additional edge case and delayed response observation |

---

## 8. Endpoint-to-Test Case Mapping

| Endpoint ID | Related Test Case IDs |
|---|---|
| EP-001 | TC-001, CON-001 |
| EP-002 | TC-002, SMK-001, CON-002, REG-001 |
| EP-003 | TC-003 |
| EP-004 | TC-004 |
| EP-005 | TC-023 |
| EP-006 | TC-024 |
| EP-007 | TC-025 |
| EP-008 | TC-026 |
| EP-009 | TC-005, CON-003 |
| EP-010 | TC-006, SMK-002, CON-004, REG-002 |
| EP-011 | TC-015, CON-012, REG-008 |
| EP-012 | TC-027 |
| EP-013 | TC-028 |
| EP-014 | TC-029 |
| EP-015 | TC-007, SMK-003, CON-007, REG-003 |
| EP-016 | TC-008, CON-008 |
| EP-017 | TC-009, CON-009 |
| EP-018 | TC-010, REG-004 |
| EP-019 | TC-030 |
| EP-020 | TC-011, CON-005 |
| EP-021 | TC-012, CON-006, REG-007 |
| EP-022 | TC-016, CON-013 |
| EP-023 | TC-013, SMK-004, CON-010, REG-005 |
| EP-024 | TC-017, TC-018, TC-019, CON-014 |
| EP-025 | TC-014, CON-011, REG-006 |
| EP-026 | TC-020, TC-021, TC-022, CON-015 |
| EP-027 | TC-031 |

---

## 9. Notes and Assumptions

- Reqres is a demo API, so some responses are simulated and not persisted permanently.
- Create, update, patch and delete operations do not represent real database persistence.
- Boundary scenarios were initially planned as observation scenarios, but the final observed behavior was confirmed during Postman execution.
- Page boundary scenarios returned controlled `200` responses.
- Invalid user ID boundary scenarios returned controlled `404` responses.
- Delete non-existing user returned the simulated `204 No Content` response.
- DELETE responses with status `204` should not be parsed as JSON.
- The delayed response endpoint is used only for basic response time observation.
- The delayed response endpoint is intentionally excluded from the smoke and regression suites.
- Contract tests reuse several endpoints already covered by functional tests, but their purpose is different: validating response structure, JSON types and value constraints.
- The real API key should remain only in the local Postman environment and should not be committed to the repository.

---

## 10. Completion Notes

This endpoint mapping was updated to reflect the completed Postman collection structure and executed test coverage.

Final coverage includes:

| Area | Result |
|---|---:|
| Endpoint definitions mapped | 27 |
| Postman folders implemented | 10 |
| Postman requests implemented | 58 |
| Smoke requests | 4 |
| Functional positive requests | 14 |
| Negative requests | 8 |
| Boundary requests | 8 |
| Contract requests | 15 |
| Delayed response requests | 1 |
| Regression requests | 8 |

Final result:

```txt
PASSED
```