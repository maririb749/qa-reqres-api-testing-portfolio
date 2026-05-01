# Traceability Matrix — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Traceability Matrix |
| Author | Mariana |
| Status | Completed |
| Version | 1.1 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md, docs/test-cases.md, docs/smoke-tests.md, docs/regression-tests.md, docs/contract-tests.md, docs/bug-reports.md, docs/test-summary-report.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to provide traceability between Reqres API endpoints, test cases, smoke tests, regression tests, contract tests and Postman collection folders.

This matrix helps confirm that the project has organized test coverage across:

- Positive scenarios
- Negative scenarios
- Boundary scenarios
- Smoke tests
- Regression tests
- Contract validations
- Basic response time observation
- Postman folder organization

This document does not create new test scenarios. It only maps the coverage already defined in the previous project documents.

---

## 3. Traceability Scope

This matrix connects the following identifiers:

| Identifier | Source Document |
|---|---|
| Endpoint IDs | docs/endpoint-mapping.md |
| Test Case IDs | docs/test-cases.md |
| Smoke IDs | docs/smoke-tests.md |
| Regression IDs | docs/regression-tests.md |
| Contract IDs | docs/contract-tests.md |
| Postman Folders | docs/test-strategy.md and docs/endpoint-mapping.md |

---

## 4. Coverage Summary

| Coverage Area | Status |
|---|---|
| Users list and pagination | Covered |
| Single user retrieval | Covered |
| User creation | Covered |
| User update | Covered |
| User partial update | Covered |
| User deletion | Covered |
| Authentication | Covered |
| Resources | Covered |
| Negative scenarios | Covered |
| Boundary scenarios | Covered |
| Smoke suite | Covered |
| Regression suite | Covered |
| Contract validations | Covered |
| Delayed response behavior | Covered |
| Bug report linkage | Prepared |
| Postman folder mapping | Covered |
| Newman execution | Covered |
| GitHub Actions execution | Covered |
| Postman Runner summary evidence | Covered |
| CI setup observation | Documented and resolved |

---

## 5. Main Traceability Matrix

| Endpoint ID | Method | Endpoint | Related Test Cases | Smoke ID | Regression ID | Contract ID | Test Types | Priority | Postman Folder |
|---|---|---|---|---|---|---|---|---|---|
| EP-001 | GET | /api/users?page=1 | TC-001, TC-040 | N/A | N/A | CON-001 | Positive, Functional, Contract | High | 02 - Users - List and Pagination, 08 - Contract Tests |
| EP-002 | GET | /api/users?page=2 | TC-002, TC-041 | SMK-001 | REG-001 | CON-002 | Positive, Functional, Smoke, Regression, Contract | High | 01 - Smoke Tests, 02 - Users - List and Pagination, 08 - Contract Tests, 10 - Regression Tests |
| EP-003 | GET | /api/users?per_page=3 | TC-003 | N/A | N/A | N/A | Positive, Functional, Boundary | Medium | 02 - Users - List and Pagination |
| EP-004 | GET | /api/users?page=1&per_page=3 | TC-004 | N/A | N/A | N/A | Positive, Functional, Boundary | Medium | 02 - Users - List and Pagination |
| EP-005 | GET | /api/users?page=0 | TC-023 | N/A | N/A | N/A | Boundary | Medium | 07 - Boundary Tests |
| EP-006 | GET | /api/users?page=-1 | TC-024 | N/A | N/A | N/A | Boundary | Medium | 07 - Boundary Tests |
| EP-007 | GET | /api/users?page=999 | TC-025 | N/A | N/A | N/A | Boundary | Medium | 07 - Boundary Tests |
| EP-008 | GET | /api/users?page=abc | TC-026 | N/A | N/A | N/A | Boundary, Negative | Medium | 07 - Boundary Tests |
| EP-009 | GET | /api/users/1 | TC-005, TC-042 | N/A | N/A | CON-003 | Positive, Functional, Contract | High | 03 - Users - Single User, 08 - Contract Tests |
| EP-010 | GET | /api/users/2 | TC-006, TC-043 | SMK-002 | REG-002 | CON-004 | Positive, Functional, Smoke, Regression, Contract | High | 01 - Smoke Tests, 03 - Users - Single User, 08 - Contract Tests, 10 - Regression Tests |
| EP-011 | GET | /api/users/23 | TC-015 | N/A | REG-008 | CON-012 | Negative, Regression, Error Contract | High | 03 - Users - Single User, 08 - Contract Tests, 10 - Regression Tests |
| EP-012 | GET | /api/users/0 | TC-027 | N/A | N/A | N/A | Boundary, Negative | Medium | 07 - Boundary Tests |
| EP-013 | GET | /api/users/-1 | TC-028 | N/A | N/A | N/A | Boundary, Negative | Medium | 07 - Boundary Tests |
| EP-014 | GET | /api/users/abc | TC-029 | N/A | N/A | N/A | Boundary, Negative, Error Guessing | Medium | 07 - Boundary Tests |
| EP-015 | POST | /api/users | TC-007 | SMK-003 | REG-003 | CON-007 | Positive, Functional, Smoke, Regression, Contract | High | 01 - Smoke Tests, 04 - Users - Create Update Delete, 08 - Contract Tests, 10 - Regression Tests |
| EP-016 | PUT | /api/users/2 | TC-008 | N/A | N/A | CON-008 | Positive, Functional, Contract | Medium | 04 - Users - Create Update Delete, 08 - Contract Tests |
| EP-017 | PATCH | /api/users/2 | TC-009 | N/A | N/A | CON-009 | Positive, Functional, Contract | Medium | 04 - Users - Create Update Delete, 08 - Contract Tests |
| EP-018 | DELETE | /api/users/2 | TC-010 | N/A | REG-004 | N/A | Positive, Functional, Regression | Medium | 04 - Users - Create Update Delete, 10 - Regression Tests |
| EP-019 | DELETE | /api/users/999999 | TC-030 | N/A | N/A | N/A | Boundary, Negative, Error Guessing | Low | 07 - Boundary Tests |
| EP-020 | GET | /api/unknown | TC-011, TC-044 | N/A | N/A | CON-005 | Positive, Functional, Contract | Medium | 06 - Resources, 08 - Contract Tests |
| EP-021 | GET | /api/unknown/2 | TC-012, TC-045 | N/A | REG-007 | CON-006 | Positive, Functional, Contract | Medium | 06 - Resources, 08 - Contract Tests, 10 - Regression Tests |
| EP-022 | GET | /api/unknown/23 | TC-016 | N/A | N/A | CON-013 | Negative, Error Contract | Medium | 06 - Resources, 08 - Contract Tests |
| EP-023 | POST | /api/login | TC-013 | SMK-004 | REG-005 | CON-010 | Positive, Functional, Smoke, Regression, Contract | High | 01 - Smoke Tests, 05 - Authentication, 08 - Contract Tests, 10 - Regression Tests |
| EP-024 | POST | /api/login | TC-017, TC-018, TC-019 | N/A | N/A | CON-014 | Negative, Error Contract | High | 05 - Authentication, 08 - Contract Tests |
| EP-025 | POST | /api/register | TC-014 | N/A | REG-006 | CON-011 | Positive, Functional, Regression, Contract | High | 05 - Authentication, 08 - Contract Tests, 10 - Regression Tests |
| EP-026 | POST | /api/register | TC-020, TC-021, TC-022 | N/A | N/A | CON-015 | Negative, Error Contract | High | 05 - Authentication, 08 - Contract Tests |
| EP-027 | GET | /api/users?delay=3 | TC-031 | N/A | N/A | N/A | Basic Response Time, Observation | Low | 09 - Delayed Response |

---

## 6. Traceability by Test Type

### 6.1 Positive and Functional Coverage

| Test Case ID | Endpoint ID | Method | Endpoint | Purpose |
|---|---|---|---|---|
| TC-001 | EP-001 | GET | /api/users?page=1 | List users from first page |
| TC-002 | EP-002 | GET | /api/users?page=2 | List users from second page |
| TC-003 | EP-003 | GET | /api/users?per_page=3 | List users with custom page size |
| TC-004 | EP-004 | GET | /api/users?page=1&per_page=3 | List users with page and custom page size |
| TC-005 | EP-009 | GET | /api/users/1 | Get first existing user |
| TC-006 | EP-010 | GET | /api/users/2 | Get existing user |
| TC-007 | EP-015 | POST | /api/users | Create user with valid body |
| TC-008 | EP-016 | PUT | /api/users/2 | Update user with valid body |
| TC-009 | EP-017 | PATCH | /api/users/2 | Partially update user |
| TC-010 | EP-018 | DELETE | /api/users/2 | Delete user |
| TC-011 | EP-020 | GET | /api/unknown | List resource data |
| TC-012 | EP-021 | GET | /api/unknown/2 | Get existing resource |
| TC-013 | EP-023 | POST | /api/login | Login with valid data |
| TC-014 | EP-025 | POST | /api/register | Register with valid data |

---

### 6.2 Negative Coverage

| Test Case ID | Endpoint ID | Method | Endpoint | Purpose |
|---|---|---|---|---|
| TC-015 | EP-011 | GET | /api/users/23 | Get non-existing user |
| TC-016 | EP-022 | GET | /api/unknown/23 | Get non-existing resource |
| TC-017 | EP-024 | POST | /api/login | Login without password |
| TC-018 | EP-024 | POST | /api/login | Login without email |
| TC-019 | EP-024 | POST | /api/login | Login with empty body |
| TC-020 | EP-026 | POST | /api/register | Register without password |
| TC-021 | EP-026 | POST | /api/register | Register without email |
| TC-022 | EP-026 | POST | /api/register | Register with empty body |

---

### 6.3 Boundary Coverage

| Test Case ID | Endpoint ID | Method | Endpoint | Purpose |
|---|---|---|---|---|
| TC-023 | EP-005 | GET | /api/users?page=0 | Validate page zero |
| TC-024 | EP-006 | GET | /api/users?page=-1 | Validate negative page value |
| TC-025 | EP-007 | GET | /api/users?page=999 | Validate very high page value |
| TC-026 | EP-008 | GET | /api/users?page=abc | Validate non-numeric page value |
| TC-027 | EP-012 | GET | /api/users/0 | Validate zero user ID |
| TC-028 | EP-013 | GET | /api/users/-1 | Validate negative user ID |
| TC-029 | EP-014 | GET | /api/users/abc | Validate non-numeric user ID |
| TC-030 | EP-019 | DELETE | /api/users/999999 | Validate delete non-existing user |

---

### 6.4 Contract Coverage

| Contract ID | Test Case ID | Endpoint ID | Method | Endpoint | Contract Purpose |
|---|---|---|---|---|---|
| CON-001 | TC-040 | EP-001 | GET | /api/users?page=1 | Validate users list response contract |
| CON-002 | TC-041 | EP-002 | GET | /api/users?page=2 | Validate users page 2 response contract |
| CON-003 | TC-042 | EP-009 | GET | /api/users/1 | Validate first user response contract |
| CON-004 | TC-043 | EP-010 | GET | /api/users/2 | Validate existing user response contract |
| CON-005 | TC-044 | EP-020 | GET | /api/unknown | Validate resource list response contract |
| CON-006 | TC-045 | EP-021 | GET | /api/unknown/2 | Validate single resource response contract |
| CON-007 | TC-007 | EP-015 | POST | /api/users | Validate create user response contract |
| CON-008 | TC-008 | EP-016 | PUT | /api/users/2 | Validate update user response contract |
| CON-009 | TC-009 | EP-017 | PATCH | /api/users/2 | Validate partial update response contract |
| CON-010 | TC-013 | EP-023 | POST | /api/login | Validate login success response contract |
| CON-011 | TC-014 | EP-025 | POST | /api/register | Validate register success response contract |
| CON-012 | TC-015 | EP-011 | GET | /api/users/23 | Validate user not found response contract |
| CON-013 | TC-016 | EP-022 | GET | /api/unknown/23 | Validate resource not found response contract |
| CON-014 | TC-017 | EP-024 | POST | /api/login | Validate login error response contract |
| CON-015 | TC-020 | EP-026 | POST | /api/register | Validate register error response contract |

---

### 6.5 Smoke Coverage

| Smoke ID | Test Case ID | Endpoint ID | Method | Endpoint | Purpose |
|---|---|---|---|---|---|
| SMK-001 | TC-002 | EP-002 | GET | /api/users?page=2 | Validate user list endpoint availability |
| SMK-002 | TC-006 | EP-010 | GET | /api/users/2 | Validate single user endpoint availability |
| SMK-003 | TC-007 | EP-015 | POST | /api/users | Validate create user endpoint availability |
| SMK-004 | TC-013 | EP-023 | POST | /api/login | Validate login endpoint availability |

---

### 6.6 Regression Coverage

| Regression ID | Test Case ID | Endpoint ID | Method | Endpoint | Purpose |
|---|---|---|---|---|---|
| REG-001 | TC-002 | EP-002 | GET | /api/users?page=2 | Validate core user listing behavior |
| REG-002 | TC-006 | EP-010 | GET | /api/users/2 | Validate core single user behavior |
| REG-003 | TC-007 | EP-015 | POST | /api/users | Validate simulated user creation behavior |
| REG-004 | TC-010 | EP-018 | DELETE | /api/users/2 | Validate delete behavior |
| REG-005 | TC-013 | EP-023 | POST | /api/login | Validate successful login behavior |
| REG-006 | TC-014 | EP-025 | POST | /api/register | Validate successful registration behavior |
| REG-007 | TC-012 | EP-021 | GET | /api/unknown/2 | Validate single resource behavior |
| REG-008 | TC-015 | EP-011 | GET | /api/users/23 | Validate important user not found behavior |

---

### 6.7 Basic Response Time Coverage

| Test Case ID | Endpoint ID | Method | Endpoint | Purpose |
|---|---|---|---|---|
| TC-031 | EP-027 | GET | /api/users?delay=3 | Validate delayed response behavior |

---

## 7. Postman Folder Traceability

| Postman Folder | Related Endpoint IDs | Related Test Cases | Purpose |
|---|---|---|---|
| 01 - Smoke Tests | EP-002, EP-010, EP-015, EP-023 | TC-002, TC-006, TC-007, TC-013 | Validate critical API availability before full execution |
| 02 - Users - List and Pagination | EP-001, EP-002, EP-003, EP-004 | TC-001, TC-002, TC-003, TC-004, TC-040, TC-041 | Validate user listing, pagination and related contracts |
| 03 - Users - Single User | EP-009, EP-010, EP-011 | TC-005, TC-006, TC-015, TC-042, TC-043 | Validate single user retrieval and not found behavior |
| 04 - Users - Create Update Delete | EP-015, EP-016, EP-017, EP-018 | TC-007, TC-008, TC-009, TC-010 | Validate simulated user CRUD behavior |
| 05 - Authentication | EP-023, EP-024, EP-025, EP-026 | TC-013, TC-014, TC-017, TC-018, TC-019, TC-020, TC-021, TC-022 | Validate login and registration scenarios |
| 06 - Resources | EP-020, EP-021, EP-022 | TC-011, TC-012, TC-016, TC-044, TC-045 | Validate resource/color endpoints |
| 07 - Boundary Tests | EP-005, EP-006, EP-007, EP-008, EP-012, EP-013, EP-014, EP-019 | TC-023 to TC-030 | Validate implemented pagination, user ID and delete edge cases |
| 08 - Contract Tests | EP-001, EP-002, EP-009, EP-010, EP-011, EP-015, EP-016, EP-017, EP-020, EP-021, EP-022, EP-023, EP-024, EP-025, EP-026 | TC-040 to TC-045 plus contract-related success and error cases | Validate response structure, JSON types, value constraints and error contracts |
| 09 - Delayed Response | EP-027 | TC-031 | Validate delayed response behavior |
| 10 - Regression Tests | EP-002, EP-010, EP-011, EP-015, EP-018, EP-021, EP-023, EP-025 | REG-001 to REG-008 | Validate high-value scenarios after changes |

---

## 8. Requirement-to-Test Coverage


| Requirement / Quality Goal | Covered By | Evidence |
|---|---|---|
| Validate API status codes | All implemented test cases | Postman screenshots, Newman JUnit report |
| Validate JSON response body | Positive, negative, contract and regression tests | Postman assertions, screenshots, Newman report |
| Validate positive scenarios | TC-001 to TC-014 | Postman execution screenshots |
| Validate negative scenarios | TC-015 to TC-022 | Postman execution screenshots |
| Validate boundary scenarios | TC-023 to TC-030 | Postman execution screenshots |
| Validate delayed response behavior | TC-031 | Delayed response screenshot and Newman execution |
| Validate response contracts | CON-001 to CON-015 | Contract execution screenshots |
| Validate smoke coverage | SMK-001 to SMK-004 | Smoke execution screenshots |
| Validate regression coverage | REG-001 to REG-008 | Regression execution screenshots |
| Validate error contract quality | CON-012 to CON-015 | Contract execution screenshots |
| Validate no success payload in error responses | Negative and error contract tests | Postman assertions |
| Validate no internal implementation leaks | Collection-level and request-level assertions | Postman assertions and Newman execution |
| Document defects and observations | docs/bug-reports.md | OBS-001 documented and resolved |
| Document Postman collection structure | postman/reqres-api-collection.json and documentation files | Postman collection export and docs |
| Execute collection with Newman | GitHub Actions workflow | Newman JUnit XML report |
| Execute CI workflow | .github/workflows/newman-tests.yml | GitHub Actions passed execution |
| Store CI evidence | evidence/reports/reqres-api-testing-portfolio/newman/ | newman-results.xml |
| Store Postman Runner evidence | evidence/reports/reqres-api-testing-portfolio/postman-runner/ | postman-runner-summary.png |

---

## 9. Coverage Gaps and Follow-Up

No open coverage gaps were identified for the current implemented project scope.

The planned API testing scope was completed and evidenced.

| Item | Current Status | Notes |
|---|---|---|
| Postman collection execution | Completed | 58 requests executed successfully |
| Evidence screenshots | Completed | 58 screenshots captured |
| Postman collection export | Completed | Stored in `postman/reqres-api-collection.json` |
| Postman environment export | Completed | Stored in `postman/reqres-environment.json` with safe placeholder values |
| Newman report | Completed | Stored in `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml` |
| GitHub Actions workflow | Completed | Stored in `.github/workflows/newman-tests.yml` |
| GitHub Actions execution | Passed | Newman workflow executed successfully |
| Confirmed application bugs | None found | Final execution found 0 confirmed application defects |
| CI setup observation | Resolved | OBS-001 documented invalid API key setup during CI configuration |

Future improvements may include:

- Adding exploratory tests with special characters, empty strings and very long values
- Adding Newman HTML reporting if useful later
- Adding README badges for GitHub Actions status
- Expanding API testing to another public API project

---

## 10. Maintenance Rules

This traceability matrix should be updated when:

- A new endpoint is added
- A new test case is created
- A test case is removed
- A smoke test is changed
- A regression test is changed
- A contract test is changed
- A Postman folder is renamed
- A bug report references a new endpoint or test case
- Newman execution scope changes
- GitHub Actions execution scope changes

Any change in this document should remain consistent with:

- docs/test-plan.md
- docs/test-strategy.md
- docs/endpoint-mapping.md
- docs/test-cases.md
- docs/smoke-tests.md
- docs/regression-tests.md
- docs/contract-tests.md
- docs/bug-reports.md
- docs/test-summary-report.md

---


## 11. Notes and Assumptions

- This matrix maps implemented coverage and actual execution results.
- Test execution status is reflected in docs/test-summary-report.md.
- Some Reqres API responses are simulated and may not persist data.
- The matrix does not create new scenarios; it connects existing endpoints, test cases, test suites and evidence.
- Postman scripts follow the project script quality standard.
- Evidence links reference the final evidence collection folders and reports.
- No confirmed application bugs were found during final execution.
- OBS-001 was documented as a resolved CI/environment setup observation.
- The Newman report and Postman Runner summary are included as execution evidence.

---

## 12. Completion Notes

This traceability matrix was finalized and validated on 2026-04-30.

All 27 endpoints are mapped to their corresponding test cases, smoke tests, regression tests, contract tests and Postman collection folders.

The following documents have been validated for consistency:

- Test Plan (docs/test-plan.md) — Completed
- Test Strategy (docs/test-strategy.md) — Completed
- Endpoint Mapping (docs/endpoint-mapping.md) — Completed
- Test Cases (docs/test-cases.md) — Completed
- Smoke Tests (docs/smoke-tests.md) — Completed
- Regression Tests (docs/regression-tests.md) — Completed
- Contract Tests (docs/contract-tests.md) — Completed
- Test Summary Report (docs/test-summary-report.md) — Completed
- Bug Reports (docs/bug-reports.md) — Completed
- GitHub Actions Workflow (.github/workflows/newman-tests.yml) — Completed
- Newman Report (evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml) — Completed
- Postman Runner Summary (evidence/reports/reqres-api-testing-portfolio/postman-runner/postman-runner-summary.png) — Completed

Final traceability status:

| Item | Result |
|---|---:|
| Endpoints mapped | 27 |
| Postman folders mapped | 10 |
| Postman requests mapped | 58 |
| Smoke tests mapped | 4 |
| Regression tests mapped | 8 |
| Contract tests mapped | 15 |
| Newman/GitHub Actions execution | Passed |
| Confirmed application bugs | 0 |
| CI/setup observation | OBS-001 resolved |

Final status:

```txt
COMPLETED
```