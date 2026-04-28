# Endpoint Mapping — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Endpoint Mapping |
| Author | Mariana |
| Status | Draft |
| Version | 1.0 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to map the Reqres API endpoints that will be tested in this project.

This mapping helps organize the API coverage before creating detailed test cases.

The document defines:

- Endpoint ID
- HTTP method
- Endpoint path
- Description
- Expected status
- Planned test types
- Priority
- Suggested Postman folder
- Notes or assumptions

Detailed test cases will be documented later in:

- docs/test-cases.md

Full traceability between endpoints and test cases will be documented later in:

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
| Contract validation candidates | Covered |
| Delayed response behavior | Covered |

---

## 4. Endpoint Mapping

| ID | Method | Endpoint | Description | Main Expected Status | Planned Test Types | Priority | Postman Folder |
|---|---|---|---|---|---|---|---|
| EP-001 | GET | /api/users?page=1 | List users from first page | 200 | Positive, Functional, Contract | High | 02 - Users - List and Pagination |
| EP-002 | GET | /api/users?page=2 | List users from second page | 200 | Positive, Functional, Smoke, Regression, Contract | High | 02 - Users - List and Pagination |
| EP-003 | GET | /api/users?per_page=3 | List users using custom page size | 200 | Positive, Functional, Boundary, Contract | Medium | 02 - Users - List and Pagination |
| EP-004 | GET | /api/users?page=1&per_page=3 | List users using page and custom page size | 200 | Positive, Functional, Boundary, Contract | Medium | 02 - Users - List and Pagination |
| EP-005 | GET | /api/users?page=0 | List users using page zero | To be observed | Boundary, Error Guessing | Medium | 07 - Boundary Tests |
| EP-006 | GET | /api/users?page=-1 | List users using negative page value | To be observed | Boundary, Error Guessing | Medium | 07 - Boundary Tests |
| EP-007 | GET | /api/users?page=999 | List users using very high page value | 200 or handled response | Boundary, Error Guessing | Medium | 07 - Boundary Tests |
| EP-008 | GET | /api/users?page=abc | List users using non-numeric page value | To be observed | Boundary, Negative, Error Guessing | Medium | 07 - Boundary Tests |
| EP-009 | GET | /api/users/1 | Get first existing user | 200 | Positive, Functional, Contract | High | 03 - Users - Single User |
| EP-010 | GET | /api/users/2 | Get existing user | 200 | Positive, Functional, Smoke, Regression, Contract | High | 03 - Users - Single User |
| EP-011 | GET | /api/users/23 | Get non-existing user | 404 | Negative, Regression | High | 03 - Users - Single User |
| EP-012 | GET | /api/users/0 | Get user using zero ID | 404 or handled response | Boundary, Negative | Medium | 07 - Boundary Tests |
| EP-013 | GET | /api/users/-1 | Get user using negative ID | 404 or handled response | Boundary, Negative | Medium | 07 - Boundary Tests |
| EP-014 | GET | /api/users/abc | Get user using non-numeric ID | 404 or handled response | Boundary, Negative, Error Guessing | Medium | 07 - Boundary Tests |
| EP-015 | POST | /api/users | Create user | 201 | Positive, Functional, Smoke, Regression | High | 04 - Users - Create Update Delete |
| EP-016 | PUT | /api/users/2 | Update user | 200 | Positive, Functional, Regression | Medium | 04 - Users - Create Update Delete |
| EP-017 | PATCH | /api/users/2 | Partially update user | 200 | Positive, Functional, Regression | Medium | 04 - Users - Create Update Delete |
| EP-018 | DELETE | /api/users/2 | Delete user | 204 | Positive, Functional, Regression | Medium | 04 - Users - Create Update Delete |
| EP-019 | DELETE | /api/users/999999 | Delete non-existing user | 204 or handled response | Boundary, Negative, Error Guessing | Low | 07 - Boundary Tests |
| EP-020 | GET | /api/unknown | List resource data | 200 | Positive, Functional, Contract | Medium | 06 - Resources |
| EP-021 | GET | /api/unknown/2 | Get existing resource | 200 | Positive, Functional, Contract | Medium | 06 - Resources |
| EP-022 | GET | /api/unknown/23 | Get non-existing resource | 404 | Negative, Regression | Medium | 06 - Resources |
| EP-023 | POST | /api/login | Login user with valid data | 200 | Positive, Functional, Smoke, Regression | High | 05 - Authentication |
| EP-024 | POST | /api/login | Login user with missing or invalid data | 400 | Negative, Boundary, Regression | High | 05 - Authentication |
| EP-025 | POST | /api/register | Register user with valid data | 200 | Positive, Functional, Regression | High | 05 - Authentication |
| EP-026 | POST | /api/register | Register user with missing or invalid data | 400 | Negative, Boundary, Regression | High | 05 - Authentication |
| EP-027 | GET | /api/users?delay=3 | Validate delayed response behavior | 200 | Functional, Basic Response Time, Observation | Low | 09 - Delayed Response |

---

## 5. Postman Folder Mapping

| Postman Folder | Related Endpoint IDs | Purpose |
|---|---|---|
| 01 - Smoke Tests | EP-002, EP-010, EP-015, EP-023 | Validate critical API availability |
| 02 - Users - List and Pagination | EP-001, EP-002, EP-003, EP-004 | Validate user listing and query parameters |
| 03 - Users - Single User | EP-009, EP-010, EP-011 | Validate single user retrieval and not found behavior |
| 04 - Users - Create Update Delete | EP-015, EP-016, EP-017, EP-018 | Validate simulated CRUD operations |
| 05 - Authentication | EP-023, EP-024, EP-025, EP-026 | Validate login and register scenarios |
| 06 - Resources | EP-020, EP-021, EP-022 | Validate resource/color endpoints |
| 07 - Boundary Tests | EP-005, EP-006, EP-007, EP-008, EP-012, EP-013, EP-014, EP-019 | Validate edge cases and unusual values |
| 08 - Contract Tests | EP-001, EP-002, EP-009, EP-010, EP-020, EP-021 | Validate response structure and data types |
| 09 - Delayed Response | EP-027 | Validate delayed response behavior |
| 10 - Regression Tests | EP-002, EP-010, EP-011, EP-015, EP-016, EP-017, EP-018, EP-023, EP-024, EP-025, EP-026 | Re-run important scenarios after changes |

---

## 6. Coverage by Test Type

| Test Type | Endpoint IDs |
|---|---|
| Positive Testing | EP-001, EP-002, EP-003, EP-004, EP-009, EP-010, EP-015, EP-016, EP-017, EP-018, EP-020, EP-021, EP-023, EP-025 |
| Negative Testing | EP-008, EP-011, EP-012, EP-013, EP-014, EP-019, EP-022, EP-024, EP-026 |
| Boundary Testing | EP-003, EP-004, EP-005, EP-006, EP-007, EP-008, EP-012, EP-013, EP-014, EP-019, EP-024, EP-026 |
| Smoke Testing | EP-002, EP-010, EP-015, EP-023 |
| Regression Testing | EP-002, EP-010, EP-011, EP-015, EP-016, EP-017, EP-018, EP-023, EP-024, EP-025, EP-026 |
| Contract Testing | EP-001, EP-002, EP-009, EP-010, EP-020, EP-021 |
| Basic Response Time | EP-027 |
| Error Guessing | EP-005, EP-006, EP-007, EP-008, EP-014, EP-019 |

---

## 7. Priority Summary

| Priority | Endpoint IDs | Reason |
|---|---|---|
| High | EP-001, EP-002, EP-009, EP-010, EP-011, EP-015, EP-023, EP-024, EP-025, EP-026 | Core API behavior, authentication and important error handling |
| Medium | EP-003, EP-004, EP-005, EP-006, EP-007, EP-008, EP-012, EP-013, EP-014, EP-016, EP-017, EP-018, EP-020, EP-021, EP-022 | Pagination, boundary behavior, CRUD operations and resource validation |
| Low | EP-019, EP-027 | Additional edge case and delayed response observation |

---

## 8. Notes and Assumptions

- Some endpoints are part of the Reqres Demo API and may return simulated responses.
- Create, update and delete operations may not persist data permanently.
- Boundary scenarios marked as "To be observed" will be confirmed during Postman execution.
- The delayed response endpoint is used only for basic response time observation.
- The delayed response endpoint should not be part of the smoke test suite.
- Detailed test case IDs will be created in docs/test-cases.md.
- Full traceability between endpoints and test cases will be completed in docs/traceability-matrix.md.
- If the API requires authentication or an API key during execution, the Postman environment will use the apiKey variable.
- Expected results may be updated after real execution in Postman.

---

## 9. Next Step

The next document to be created is:

docs/test-cases.md

This document will include detailed positive, negative, boundary and contract test cases based on this endpoint mapping.