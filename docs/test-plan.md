# Test Plan — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Test Plan |
| Author | Mariana |
| Status | Draft |
| Version | 1.0 |
| Created Date | 2026-04-28 |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Objective

The objective of this test plan is to define the testing scope, approach, test types, tools, risks, deliverables and execution criteria for the Reqres API Testing Portfolio project.

This project aims to demonstrate API testing skills using Postman, including:

- HTTP method validation
- Status code validation
- JSON response validation
- Positive test scenarios
- Negative test scenarios
- Boundary test scenarios
- Contract validation
- Smoke testing
- Regression testing
- Basic response time validation
- Evidence collection
- Test documentation

---

## 3. Application Under Test

Reqres is a REST API used for testing, QA practice and learning purposes.

It provides endpoints that allow testers and developers to practice API requests such as:

- Listing users
- Retrieving a single user
- Creating users
- Updating users
- Deleting users
- Registering users
- Logging in
- Listing resource data
- Testing delayed API responses

Base URL:

    https://reqres.in

---

## 4. Scope

### 4.1 In Scope

The following areas are included in this project:

- Testing public demo API endpoints from Reqres
- Testing user listing endpoints
- Testing user retrieval endpoints
- Testing user creation endpoint
- Testing user update endpoint
- Testing user partial update endpoint
- Testing user deletion endpoint
- Testing authentication demo endpoints
- Testing resource endpoints
- Testing pagination query parameters
- Testing delayed response behavior
- Creating and organizing a Postman collection
- Creating a Postman environment
- Validating expected HTTP status codes
- Validating JSON response body
- Validating required fields
- Validating response JSON data types
- Validating value constraints such as integer values, non-empty strings and arrays
- Validating response JSON data types and value      constraints
- Validating error responses
- Creating positive test scenarios
- Creating negative test scenarios
- Creating boundary test scenarios
- Creating smoke test scenarios
- Creating regression test scenarios
- Creating contract validation scenarios
- Capturing execution evidence
- Exporting Postman collection and environment
- Preparing the project for Newman execution
- Preparing the project for GitHub Actions execution

### 4.2 Out of Scope

The following areas are not included in this project:

- Security penetration testing
- Load testing
- Stress testing
- Database validation
- Frontend/UI testing
- Mobile testing
- Real user account management
- Real data persistence validation
- Production monitoring
- Business analytics validation
- Testing private Project API endpoints that require a real project setup

---

## 5. Endpoints Covered

| ID | Method | Endpoint | Description | Main Expected Status |
|---|---|---|---|---|
| EP-001 | GET | /api/users?page=1 | List users from first page | 200 |
| EP-002 | GET | /api/users?page=2 | List users from second page | 200 |
| EP-003 | GET | /api/users?per_page=3 | List users using custom page size | 200 |
| EP-004 | GET | /api/users?page=1&per_page=3 | List users using page and custom page size | 200 |
| EP-005 | GET | /api/users?page=0 | List users using page zero | To be observed |
| EP-006 | GET | /api/users?page=-1 | List users using negative page value | To be observed |
| EP-007 | GET | /api/users?page=999 | List users using very high page value | 200 or handled response |
| EP-008 | GET | /api/users?page=abc | List users using non-numeric page value | To be observed |
| EP-009 | GET | /api/users/1 | Get first existing user | 200 |
| EP-010 | GET | /api/users/2 | Get existing user | 200 |
| EP-011 | GET | /api/users/23 | Get non-existing user | 404 |
| EP-012 | GET | /api/users/0 | Get user using zero ID | 404 or handled response |
| EP-013 | GET | /api/users/-1 | Get user using negative ID | 404 or handled response |
| EP-014 | GET | /api/users/abc | Get user using non-numeric ID | 404 or handled response |
| EP-015 | POST | /api/users | Create user | 201 |
| EP-016 | PUT | /api/users/2 | Update user | 200 |
| EP-017 | PATCH | /api/users/2 | Partially update user | 200 |
| EP-018 | DELETE | /api/users/2 | Delete user | 204 |
| EP-019 | DELETE | /api/users/999999 | Delete non-existing user | 204 or handled response |
| EP-020 | GET | /api/unknown | List resource data | 200 |
| EP-021 | GET | /api/unknown/2 | Get existing resource | 200 |
| EP-022 | GET | /api/unknown/23 | Get non-existing resource | 404 |
| EP-023 | POST | /api/login | Login user with valid data | 200 |
| EP-024 | POST | /api/login | Login user with missing or invalid data | 400 |
| EP-025 | POST | /api/register | Register user with valid data | 200 |
| EP-026 | POST | /api/register | Register user with missing or invalid data | 400 |
| EP-027 | GET | /api/users?delay=3 | Validate delayed response behavior | 200 |

Note: Some boundary scenarios are marked as "To be observed" because the actual API behavior will be confirmed during Postman execution.

---

## 6. Test Types

| Test Type | Description |
|---|---|
| Functional Testing | Validate that each endpoint behaves according to its expected purpose |
| Positive Testing | Validate successful scenarios using valid data |
| Negative Testing | Validate API behavior using invalid or missing data |
| Boundary Testing | Validate edge cases such as empty values, invalid IDs, negative values, non-numeric values and very high values |
| Smoke Testing | Validate that the most critical endpoints are available and working |
| Regression Testing | Re-run selected tests after changes in collection, scripts, environment or CI pipeline |
| Contract Testing | Validate response structure, required fields and data types |
| Basic Performance Checks | Validate whether response time remains within an acceptable limit |
| Header Validation | Validate response headers when applicable |

---

## 7. Test Approach

The API will be tested using Postman.

Each request will include validations when applicable:

- Expected HTTP status code
- JSON response format
- Required response fields
- Data types
- Error message content
- Response time
- Header validation
- Contract validation

The tests will be organized into logical groups inside the Postman collection:

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

---

## 8. Test Environment

| Item | Value |
|---|---|
| API | Reqres |
| Base URL | https://reqres.in |
| Tool | Postman |
| Future CLI Tool | Newman |
| Future CI Tool | GitHub Actions |
| Response Format | JSON |
| Operating System | To be updated |
| Browser | Not applicable |
| Database Access | Not applicable |

---

## 9. Postman Environment Variables

| Variable | Example Value | Description |
|---|---|---|
| baseUrl | https://reqres.in | API base URL |
| apiKey | To be updated if required | Optional API key |
| validUserId | 2 | Existing user ID used in tests |
| firstUserId | 1 | First existing user ID used in tests |
| invalidUserId | 23 | Non-existing user ID used in negative tests |
| zeroUserId | 0 | Zero ID used in boundary tests |
| negativeUserId | -1 | Negative ID used in boundary tests |
| nonNumericUserId | abc | Non-numeric ID used in boundary tests |
| validResourceId | 2 | Existing resource ID used in tests |
| invalidResourceId | 23 | Non-existing resource ID used in negative tests |
| validEmail | To be updated | Valid email used for authentication tests |
| validPassword | To be updated | Valid password used for authentication tests |
| invalidEmail | invalid-email | Invalid email format used in boundary tests |
| pageOne | 1 | First page |
| pageTwo | 2 | Second page |
| pageZero | 0 | Boundary page value |
| negativePage | -1 | Negative page value |
| highPage | 999 | Very high page value |
| perPage | 3 | Custom number of records per page |
| delaySeconds | 3 | Delay value used for basic response time behavior |

---

## 10. Test Data

The test data will include:

- Valid user IDs
- Invalid user IDs
- Zero ID
- Negative ID
- Non-numeric ID
- Valid resource IDs
- Invalid resource IDs
- Valid page values
- Invalid page values
- Empty request bodies
- Missing required fields
- Invalid email formats
- Empty strings
- Special characters
- Very long strings
- Negative numeric values
- Very high numeric values
- Delayed response query parameter

Example valid user creation data:

    {
      "name": "Mariana",
      "job": "QA Tester"
    }

Example update data:

    {
      "name": "Mariana",
      "job": "Senior QA Tester"
    }

Example boundary data:

    {
      "name": "",
      "job": ""
    }

Example special character data:

    {
      "name": "Mariana @#$%",
      "job": "QA Tester & API Analyst"
    }

Example invalid email:

    {
      "email": "invalid-email",
      "password": "test123"
    }

---

## 11. Entry Criteria

Testing can start when:

- The project repository is created
- The folder structure is created
- The test plan is documented
- The endpoints are mapped
- Postman is installed
- The API is available
- The Postman environment is configured
- Initial test cases are documented

---

## 12. Exit Criteria

Testing can be considered complete when:

- All planned test cases are executed
- Positive scenarios are validated
- Negative scenarios are validated
- Boundary scenarios are validated
- Resource scenarios are validated
- Delayed response scenario is validated
- Contract validations are executed
- Execution evidence is saved
- Bugs or unexpected behaviors are documented
- Test summary report is completed
- Postman collection is exported
- Postman environment is exported
- Newman report is generated, when applicable
- GitHub Actions workflow is configured, when applicable

---

## 13. Pass and Fail Criteria

### Pass Criteria

A test case will be marked as passed when:

- The API returns the expected status code
- The response body matches the expected structure
- Required fields are present
- Field JSON data types and value constraints are correct
- Error messages match the expected behavior
- Response time is within the defined limit
- No unexpected behavior is observed

### Fail Criteria

A test case will be marked as failed when:

- The API returns an unexpected status code
- The response body is missing required fields
- The response contains incorrect data types
- The API returns an unexpected error
- The API does not handle invalid input properly
- Response time exceeds the defined limit
- The API behavior differs from the expected result

---

## 14. Risks and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| API behavior changes | Tests may fail unexpectedly | Review Reqres documentation and update expected results |
| Authentication requirement changes | Requests may return 401 or 403 | Prepare optional apiKey variable in Postman |
| Network instability | Requests may fail intermittently | Re-run failed requests and document the result |
| Public API limitations | Some edge cases may not behave like a real production API | Document observations clearly |
| No real data persistence | Create/update/delete tests may return simulated responses | Mention this limitation in the summary report |
| Missing official business requirements | Expected results may require assumptions | Document assumptions in test cases |
| Delayed response may increase execution time | Tests may take longer in Newman or CI | Keep delayed response test separated from smoke tests |

---

## 15. Assumptions

The following assumptions are considered for this project:

- Reqres API is available during test execution
- The API returns JSON responses
- Public demo endpoints are suitable for API testing practice
- Some responses may be simulated and not persisted
- Test results will be documented based on observed behavior
- Any unexpected behavior will be recorded as an observation or potential defect
- Edge case results will be confirmed during actual Postman execution
- The delayed response endpoint will be used only for basic response time observation

---

## 16. Deliverables

| Deliverable | Location |
|---|---|
| Test Plan | docs/test-plan.md |
| Test Strategy | docs/test-strategy.md |
| Endpoint Mapping | docs/endpoint-mapping.md |
| Test Cases | docs/test-cases.md |
| Smoke Tests | docs/smoke-tests.md |
| Regression Tests | docs/regression-tests.md |
| Contract Tests | docs/contract-tests.md |
| Bug Reports | docs/bug-reports.md |
| Traceability Matrix | docs/traceability-matrix.md |
| Test Summary Report | docs/test-summary-report.md |
| Postman Collection | postman/reqres-api-collection.json |
| Postman Environment | postman/reqres-environment.json |
| Execution Screenshots | evidence/screenshots/ |
| Newman Reports | evidence/reports/ |
| GitHub Actions Workflow | .github/workflows/newman-tests.yml |

---

## 17. Defect Management

Any defect or unexpected behavior found during testing will be documented in:

- docs/bug-reports.md

Each bug report should include:

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

---

## 18. Evidence Strategy

Evidence will be collected during test execution.

Evidence may include:

- Postman execution screenshots
- Collection runner screenshots
- Failed request screenshots
- Newman HTML report
- Newman JSON report
- GitHub Actions execution screenshot

Evidence will be stored in:

- evidence/screenshots/
- evidence/reports/

---

## 19. Test Execution Order

Tests will be executed in the following order:

1. Smoke tests
2. Positive tests
3. Negative tests
4. Boundary tests
5. Resource tests
6. Contract tests
7. Delayed response test
8. Regression tests

---

## 20. Completion Notes

This test plan will be updated if the scope, tools, endpoints or execution strategy change during the project.