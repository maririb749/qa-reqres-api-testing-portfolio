# Test Plan — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Test Plan |
| Author | Mariana |
| Status | Completed |
| Version | 1.1 |
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
- Newman CLI execution
- GitHub Actions CI execution

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

```txt
https://reqres.in
```

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
- Validating error responses
- Validating absence of success payload in error responses
- Validating absence of internal implementation details
- Creating positive test scenarios
- Creating negative test scenarios
- Creating boundary test scenarios
- Creating smoke test scenarios
- Creating regression test scenarios
- Creating contract validation scenarios
- Capturing execution evidence
- Exporting the Postman collection
- Preparing a sanitized Postman environment file
- Executing the Postman collection with Newman
- Running the Newman test suite through GitHub Actions

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
- Testing private project API endpoints that require a real project setup
- Full performance testing beyond a basic delayed response observation

---

## 5. Endpoints Covered

| ID | Method | Endpoint | Description | Main Expected Status |
|---|---|---|---|---|
| EP-001 | GET | /api/users?page=1 | List users from first page | 200 |
| EP-002 | GET | /api/users?page=2 | List users from second page | 200 |
| EP-003 | GET | /api/users?per_page=3 | List users using custom page size | 200 |
| EP-004 | GET | /api/users?page=1&per_page=3 | List users using page and custom page size | 200 |
| EP-005 | GET | /api/users?page=0 | List users using page zero | 200 |
| EP-006 | GET | /api/users?page=-1 | List users using negative page value | 200 |
| EP-007 | GET | /api/users?page=999 | List users using very high page value | 200 |
| EP-008 | GET | /api/users?page=abc | List users using non-numeric page value | 200 |
| EP-009 | GET | /api/users/1 | Get first existing user | 200 |
| EP-010 | GET | /api/users/2 | Get existing user | 200 |
| EP-011 | GET | /api/users/23 | Get non-existing user | 404 |
| EP-012 | GET | /api/users/0 | Get user using zero ID | 404 |
| EP-013 | GET | /api/users/-1 | Get user using negative ID | 404 |
| EP-014 | GET | /api/users/abc | Get user using non-numeric ID | 404 |
| EP-015 | POST | /api/users | Create user | 201 |
| EP-016 | PUT | /api/users/2 | Update user | 200 |
| EP-017 | PATCH | /api/users/2 | Partially update user | 200 |
| EP-018 | DELETE | /api/users/2 | Delete user | 204 |
| EP-019 | DELETE | /api/users/999999 | Delete non-existing user | 204 |
| EP-020 | GET | /api/unknown | List resource data | 200 |
| EP-021 | GET | /api/unknown/2 | Get existing resource | 200 |
| EP-022 | GET | /api/unknown/23 | Get non-existing resource | 404 |
| EP-023 | POST | /api/login | Login user with valid data | 200 |
| EP-024 | POST | /api/login | Login user with missing or invalid data | 400 |
| EP-025 | POST | /api/register | Register user with valid data | 200 |
| EP-026 | POST | /api/register | Register user with missing or invalid data | 400 |
| EP-027 | GET | /api/users?delay=3 | Validate delayed response behavior | 200 |

Note: Boundary scenarios were initially marked for observation, but their behavior was later confirmed during Postman execution and documented through evidence screenshots.

---

## 6. Test Types

| Test Type | Description |
|---|---|
| Functional Testing | Validate that each endpoint behaves according to its expected purpose |
| Positive Testing | Validate successful scenarios using valid data |
| Negative Testing | Validate API behavior using invalid or missing data |
| Boundary Testing | Validate edge cases such as zero values, invalid IDs, negative values, non-numeric values and very high values |
| Smoke Testing | Validate that the most critical endpoints are available and working |
| Regression Testing | Re-run selected high-value tests after changes in collection, scripts, environment or CI pipeline |
| Contract Testing | Validate response structure, required fields, JSON data types and value constraints |
| Basic Performance Checks | Validate whether delayed response time remains within an acceptable threshold |
| Header Validation | Validate response headers when applicable |

---

## 7. Test Approach

The API is tested using Postman.

Each request includes validations when applicable:

- Expected HTTP status code
- JSON response format
- Content-Type header
- Required response fields
- JSON data types
- Integer value constraints for numeric fields
- Non-empty string constraints
- Error message content
- Absence of success payload in error responses
- Absence of internal implementation details
- Response time threshold for delayed response scenarios
- Contract validation

The tests are organized into logical groups inside the Postman collection:

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

## 8. Postman Collection Structure

The Postman collection is organized into 10 folders, each focused on a specific API testing area.

| Folder | Area | Requests |
|---|---|---:|
| 01 - Smoke Tests | Critical API availability checks | 4 |
| 02 - Users - List and Pagination | User list and pagination scenarios | 4 |
| 03 - Users - Single User | Single user retrieval and not found behavior | 3 |
| 04 - Users - Create Update Delete | Simulated user create, update, patch and delete flows | 4 |
| 05 - Authentication | Login and registration success/error scenarios | 8 |
| 06 - Resources | Resource list, single resource and not found behavior | 3 |
| 07 - Boundary Tests | Boundary scenarios for pagination and user IDs | 8 |
| 08 - Contract Tests | Response contract validations | 15 |
| 09 - Delayed Response | Basic delayed response observation | 1 |
| 10 - Regression Tests | Critical regression coverage | 8 |

Total planned Postman requests:

```txt
58
```

---

## 9. Test Environment

| Item | Value |
|---|---|
| API | Reqres |
| Base URL | https://reqres.in |
| Tool | Postman |
| CLI Tool | Newman |
| CI Tool | GitHub Actions |
| Response Format | JSON |
| Operating System | Windows 11 |
| Browser | Not applicable |
| Database Access | Not applicable |

---

## 10. Postman Environment Variables

| Variable | Example Value | Description |
|---|---|---|
| baseUrl | https://reqres.in | API base URL |
| apiKey | YOUR_API_KEY | Reqres API key stored locally in Postman and provided in CI through the GitHub Actions `REQRES_API_KEY` secret |
| reqresEnv | prod | Reqres environment header value used during local and CI execution |
| validUserId | 2 | Existing user ID used in tests |
| firstUserId | 1 | First existing user ID used in tests |
| invalidUserId | 23 | Non-existing user ID used in negative tests |
| zeroUserId | 0 | Zero ID used in boundary tests |
| negativeUserId | -1 | Negative ID used in boundary tests |
| nonNumericUserId | abc | Non-numeric ID used in boundary tests |
| veryHighUserId | 999999 | Very high or non-existing user ID used in delete boundary tests |
| validResourceId | 2 | Existing resource ID used in tests |
| invalidResourceId | 23 | Non-existing resource ID used in negative tests |
| validEmail | eve.holt@reqres.in | Valid email used for authentication tests |
| validPassword | cityslicka | Valid password used for authentication tests — public Reqres demo credential, not sensitive |
| invalidEmail | invalid-email | Invalid email format reserved for negative or boundary scenarios |
| pageOne | 1 | First page |
| pageTwo | 2 | Second page |
| pageZero | 0 | Boundary page value |
| negativePage | -1 | Negative page value |
| highPage | 999 | Very high page value |
| nonNumericPage | abc | Non-numeric page value |
| perPage | 3 | Custom number of records per page |
| delaySeconds | 3 | Delay value used for delayed response behavior |
| delayedMaxResponseTimeMs | 5000 | Maximum accepted response time for delayed response test |
| testUserName | Mariana | User name used in create/update request bodies |
| testUserJob | QA Tester | Job value used in create request body |
| updatedUserJob | Senior QA Tester | Job value used in full update request body |
| patchedUserJob | API QA Analyst | Job value used in partial update request body |

Note: The real API key must be configured only in the local Postman environment or in GitHub Actions repository secrets. It should never be committed to the repository.

---

## 11. Test Data

The implemented test data includes:

- Valid user IDs
- Invalid user IDs
- Zero ID
- Negative ID
- Non-numeric ID
- Very high user ID
- Valid resource IDs
- Invalid resource IDs
- Valid page values
- Boundary page values
- Non-numeric page values
- Empty request bodies
- Missing required fields
- Valid authentication credentials
- Delayed response query parameter

Additional exploratory data such as empty strings, special characters, very long strings and invalid email formats may be considered for future expansion, but they are not part of the current implemented Postman request count.

Example valid user creation data:

```json
{
  "name": "Mariana",
  "job": "QA Tester"
}
```

Example update data:

```json
{
  "name": "Mariana",
  "job": "Senior QA Tester"
}
```

Example partial update data:

```json
{
  "job": "API QA Analyst"
}
```

Example boundary data:

```json
{
  "name": "",
  "job": ""
}
```

Example special character data:

```json
{
  "name": "Mariana @#$%",
  "job": "QA Tester & API Analyst"
}
```

Example invalid email:

```json
{
  "email": "invalid-email",
  "password": "test123"
}
```

---

## 12. Entry Criteria

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

## 13. Exit Criteria

Testing can be considered complete when:

- All planned Postman requests are implemented
- All planned test folders are executed
- Positive scenarios are validated
- Negative scenarios are validated
- Boundary scenarios are validated
- Resource scenarios are validated
- Delayed response scenario is validated
- Contract validations are executed
- Regression scenarios are executed
- Execution evidence is saved
- Bugs or unexpected behaviors are documented, if found
- Test summary report is completed
- Postman collection is exported
- Postman environment is prepared with safe placeholder values
- Newman execution report is generated
- GitHub Actions workflow is configured and passing

---

## 14. Pass and Fail Criteria

### Pass Criteria

A test case will be marked as passed when:

- The API returns the expected status code
- The response body matches the expected structure
- Required fields are present
- Field JSON data types and value constraints are correct
- Error messages match the expected behavior when applicable
- Error responses do not include success-only payloads
- Response time is within the defined limit when applicable
- No internal implementation details are exposed
- No unexpected behavior is observed

### Fail Criteria

A test case will be marked as failed when:

- The API returns an unexpected status code
- The response body is missing required fields
- The response contains incorrect data types
- The response violates expected value constraints
- The API returns an unexpected error
- The API does not handle invalid input properly
- Error responses expose success-only payloads
- Response time exceeds the defined limit when applicable
- Internal implementation details are exposed
- The API behavior differs from the expected result

---

## 15. Risks and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| API behavior changes | Tests may fail unexpectedly | Review Reqres documentation and update expected results |
| Authentication requirement changes | Requests may return 401 or 403 | Use the `apiKey` variable locally and the `REQRES_API_KEY` GitHub Actions secret in CI |
| Network instability | Requests may fail intermittently | Re-run failed requests and document the result |
| Public API limitations | Some edge cases may not behave like a real production API | Document observations clearly |
| No real data persistence | Create/update/delete tests may return simulated responses | Mention this limitation in the summary report |
| Missing official business requirements | Expected results may require assumptions | Document assumptions in test cases |
| Delayed response may increase execution time | Tests may take longer in Newman or CI | Keep delayed response test separated from smoke and regression tests |
| API key exposure risk | Sensitive data may be committed accidentally | Store the real API key only in the local Postman environment or GitHub Actions repository secrets and use placeholders in repository files |

---

## 16. Assumptions

The following assumptions are considered for this project:

- Reqres API is available during test execution
- The API returns JSON responses for the covered endpoints
- Public demo endpoints are suitable for API testing practice
- Some responses are simulated and not persisted
- Test results are documented based on observed behavior
- Any unexpected behavior will be recorded as an observation or potential defect
- Boundary scenario results are confirmed during actual Postman execution
- The delayed response endpoint is used only for basic response time observation
- Contract tests validate response shape, JSON data types and value constraints, not business persistence

---

## 17. Deliverables

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
| Newman JUnit Report | evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml |
| Postman Runner Summary | evidence/reports/reqres-api-testing-portfolio/postman-runner/postman-runner-summary.png |
| GitHub Actions Workflow | .github/workflows/newman-tests.yml |

---

## 18. Defect Management

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

## 19. Evidence Strategy

Evidence is collected during test execution.

Evidence may include:

- Postman execution screenshots
- Collection runner screenshots
- Failed request screenshots, when applicable
- Newman JUnit XML report
- Postman Runner summary screenshot
- GitHub Actions successful workflow execution

Evidence is stored in:

```txt
evidence/screenshots/
evidence/reports/
```

The Postman evidence is organized by collection area:

```txt
evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/
evidence/screenshots/reqres-api-testing-portfolio/users-list-pagination/
evidence/screenshots/reqres-api-testing-portfolio/single-user/
evidence/screenshots/reqres-api-testing-portfolio/create-update-delete/
evidence/screenshots/reqres-api-testing-portfolio/authentication/
evidence/screenshots/reqres-api-testing-portfolio/resources/
evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/
evidence/screenshots/reqres-api-testing-portfolio/contract-tests/
evidence/screenshots/reqres-api-testing-portfolio/delayed-response/
evidence/screenshots/reqres-api-testing-portfolio/regression-tests/

Newman and Postman Runner report evidence is stored in:

evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml
evidence/reports/reqres-api-testing-portfolio/postman-runner/postman-runner-summary.png
```

---

## 20. Test Execution Order

Tests are organized and executed in the following Postman collection order:

1. 01 - Smoke Tests
2. 02 - Users - List and Pagination
3. 03 - Users - Single User
4. 04 - Users - Create Update Delete
5. 05 - Authentication
6. 06 - Resources
7. 07 - Boundary Tests
8. 08 - Contract Tests
9. 09 - Delayed Response
10. 10 - Regression Tests

The delayed response folder is intentionally kept outside the smoke and regression scope because it introduces an artificial wait time.

---

## 21. Completion Notes

This test plan was updated to reflect the completed Postman collection structure, implemented request coverage, confirmed boundary behavior, environment variables, evidence organization, Newman execution and GitHub Actions workflow.

Final project execution status:

| Item | Result |
|---|---:|
| Postman folders implemented | 10 |
| Postman requests implemented | 58 |
| Postman Runner execution | Passed |
| Newman/GitHub Actions execution | Passed |
| Confirmed application bugs | 0 |
| CI/setup observation | OBS-001 resolved |

Future updates may be required if the scope, tools, endpoints or execution strategy changes.