# Contract Tests — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Contract Tests |
| Author | Mariana |
| Status | Draft |
| Version | 1.0 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md, docs/test-cases.md, docs/smoke-tests.md, docs/regression-tests.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to define the response contracts that will be validated in the Reqres API Testing Portfolio project.

Contract testing ensures that API responses follow an expected structure, including required fields, JSON data types, value constraints, successful response payloads and error response payloads.

This document also prepares the project for future Postman test scripts by defining what each important response should contain and what it should not expose.

---

## 3. Contract Testing Objective

The objective of contract testing in this project is to validate that important Reqres API responses remain stable and predictable.

The contract checks will focus on:

- HTTP status code
- Content-Type header
- Valid JSON response when applicable
- Required fields
- Expected JSON data types
- Value constraints
- Non-empty important values
- Success payload structure
- Error payload structure
- Absence of success payload in error responses
- Absence of internal implementation details

---

## 4. Contract Testing Scope

### 4.1 In Scope

The following response contracts are included:

- List users response
- Single user response
- Resource list response
- Single resource response
- Create user response
- Update user response
- Partial update response
- Login success response
- Register success response
- Not found response
- Authentication error response
- Registration error response

### 4.2 Out of Scope

The following areas are not part of contract testing in this project:

- Full schema validation using external schema files
- Consumer-driven contract testing
- Load testing
- Security penetration testing
- Database schema validation
- Real persistence validation
- Production API monitoring

---

## 5. Contract Test Candidates

| Contract ID | Test Case ID | Endpoint ID | Method | Endpoint | Contract Type | Priority |
|---|---|---|---|---|---|---|
| CON-001 | TC-040 | EP-001 | GET | /api/users?page=1 | List users success contract | High |
| CON-002 | TC-041 | EP-002 | GET | /api/users?page=2 | List users success contract | High |
| CON-003 | TC-042 | EP-009 | GET | /api/users/1 | Single user success contract | High |
| CON-004 | TC-043 | EP-010 | GET | /api/users/2 | Single user success contract | High |
| CON-005 | TC-044 | EP-020 | GET | /api/unknown | Resource list success contract | Medium |
| CON-006 | TC-045 | EP-021 | GET | /api/unknown/2 | Single resource success contract | Medium |
| CON-007 | TC-007 | EP-015 | POST | /api/users | Create user success contract | High |
| CON-008 | TC-008 | EP-016 | PUT | /api/users/2 | Update user success contract | Medium |
| CON-009 | TC-009 | EP-017 | PATCH | /api/users/2 | Partial update success contract | Medium |
| CON-010 | TC-013 | EP-023 | POST | /api/login | Login success contract | High |
| CON-011 | TC-014 | EP-025 | POST | /api/register | Register success contract | High |
| CON-012 | TC-015 | EP-011 | GET | /api/users/23 | User not found contract | High |
| CON-013 | TC-016 | EP-022 | GET | /api/unknown/23 | Resource not found contract | Medium |
| CON-014 | TC-017 | EP-024 | POST | /api/login | Login error contract | High |
| CON-015 | TC-020 | EP-026 | POST | /api/register | Register error contract | High |

---

## 6. Common Contract Validation Rules

These validation rules should be applied when relevant.

| Rule | Description |
|---|---|
| HTTP status validation | Response must return the expected status code |
| Content-Type validation | JSON responses must include application/json in Content-Type |
| JSON validation | Response body must be valid JSON when a JSON body is expected |
| Required fields validation | Required fields must exist in the response |
| JSON type validation | Fields must use the expected JSON data types |
| Value constraint validation | Fields must respect expected value constraints such as integer value, non-empty string or array |
| Success payload validation | Success responses must contain the expected success fields |
| Error contract validation | Error responses must follow the minimum expected error structure |
| No success payload in error | Error responses must not contain success-only fields |
| No internal leak validation | Response must not expose stack traces, SQL errors, exceptions or internal implementation details |

---

## 7. Success Response Contracts

### 7.1 CON-001 and CON-002 — List Users Contract

Endpoints:

- GET /api/users?page=1
- GET /api/users?page=2

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | Users list returned successfully |

Expected top-level fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| page | number | Integer value | Yes | Current page |
| per_page | number | Integer value | Yes | Number of users per page |
| total | number | Integer value | Yes | Total number of users |
| total_pages | number | Integer value | Yes | Total number of pages |
| data | array | Can be empty or contain user objects | Yes | List of users |
| support | object | Must contain url and text | Yes | Support information |

Expected user object inside data array:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | User ID |
| email | string | Non-empty, email-like value | Yes | User email |
| first_name | string | Non-empty | Yes | User first name |
| last_name | string | Non-empty | Yes | User last name |
| avatar | string | Non-empty, URL-like value | Yes | Avatar URL |

Expected support object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| url | string | Non-empty, URL-like value | Yes | Support URL |
| text | string | Non-empty | Yes | Support text |

Validation focus:

- Status code is 200
- Content-Type includes application/json
- Response body is a JSON object
- Pagination fields are numbers with integer values
- data is an array
- Each user object contains id, email, first_name, last_name and avatar
- User id is a number with integer value
- User string fields are not empty
- Response does not expose internal implementation details

---

### 7.2 CON-003 and CON-004 — Single User Contract

Endpoints:

- GET /api/users/1
- GET /api/users/2

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | User returned successfully |

Expected top-level fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| data | object | Must contain user fields | Yes | User data |
| support | object | Must contain url and text | Yes | Support information |

Expected data object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | User ID |
| email | string | Non-empty, email-like value | Yes | User email |
| first_name | string | Non-empty | Yes | User first name |
| last_name | string | Non-empty | Yes | User last name |
| avatar | string | Non-empty, URL-like value | Yes | Avatar URL |

Expected support object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| url | string | Non-empty, URL-like value | Yes | Support URL |
| text | string | Non-empty | Yes | Support text |

Validation focus:

- Status code is 200
- Content-Type includes application/json
- Response body is a JSON object
- data object exists
- data.id is a number with integer value
- data.email is a non-empty string
- data.first_name is a non-empty string
- data.last_name is a non-empty string
- data.avatar is a non-empty string
- support object exists
- Response does not expose internal implementation details

---

### 7.3 CON-005 — Resource List Contract

Endpoint:

- GET /api/unknown

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | Resource list returned successfully |

Expected top-level fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| page | number | Integer value | Yes | Current page |
| per_page | number | Integer value | Yes | Number of resources per page |
| total | number | Integer value | Yes | Total number of resources |
| total_pages | number | Integer value | Yes | Total number of pages |
| data | array | Can be empty or contain resource objects | Yes | List of resources |
| support | object | Must contain url and text | Yes | Support information |

Expected resource object inside data array:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | Resource ID |
| name | string | Non-empty | Yes | Resource name |
| year | number | Integer value | Yes | Resource year |
| color | string | Non-empty, color-like value | Yes | Color value |
| pantone_value | string | Non-empty | Yes | Pantone value |

Validation focus:

- Status code is 200
- Content-Type includes application/json
- Response body is a JSON object
- Pagination fields are numbers with integer values
- data is an array
- Resource objects contain id, name, year, color and pantone_value
- Resource id and year are numbers with integer values
- Resource string fields are not empty
- Response does not expose internal implementation details

---

### 7.4 CON-006 — Single Resource Contract

Endpoint:

- GET /api/unknown/2

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | Resource returned successfully |

Expected top-level fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| data | object | Must contain resource fields | Yes | Resource data |
| support | object | Must contain url and text | Yes | Support information |

Expected data object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | Resource ID |
| name | string | Non-empty | Yes | Resource name |
| year | number | Integer value | Yes | Resource year |
| color | string | Non-empty, color-like value | Yes | Color value |
| pantone_value | string | Non-empty | Yes | Pantone value |

Expected support object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| url | string | Non-empty, URL-like value | Yes | Support URL |
| text | string | Non-empty | Yes | Support text |

Validation focus:

- Status code is 200
- Content-Type includes application/json
- Response body is a JSON object
- data object exists
- data.id is a number with integer value
- data.name is a non-empty string
- data.year is a number with integer value
- data.color is a non-empty string
- data.pantone_value is a non-empty string
- Response does not expose internal implementation details

---

### 7.5 CON-007 — Create User Contract

Endpoint:

- POST /api/users

Expected status:

| Status Code | Meaning |
|---|---|
| 201 | User created successfully |

Request body:

    {
      "name": "Mariana",
      "job": "QA Tester"
    }

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| name | string | Non-empty, matches request body | Yes | Name sent in request |
| job | string | Non-empty, matches request body | Yes | Job sent in request |
| id | string | Non-empty | Yes | Simulated created ID |
| createdAt | string | Non-empty, date-time-like value | Yes | Creation timestamp |

Validation focus:

- Status code is 201
- Content-Type includes application/json
- Response body is a JSON object
- name matches the request body
- job matches the request body
- id exists and is not empty
- createdAt exists and is not empty
- Response does not expose internal implementation details

Note:

Reqres returns the created id as a string in this simulated creation response. The contract should follow the actual API response format observed during execution.

---

### 7.6 CON-008 — Update User Contract

Endpoint:

- PUT /api/users/2

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | User updated successfully |

Request body:

    {
      "name": "Mariana",
      "job": "Senior QA Tester"
    }

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| name | string | Non-empty, matches request body | Yes | Updated name |
| job | string | Non-empty, matches request body | Yes | Updated job |
| updatedAt | string | Non-empty, date-time-like value | Yes | Update timestamp |

Validation focus:

- Status code is 200
- Content-Type includes application/json
- Response body is a JSON object
- name matches the request body
- job matches the request body
- updatedAt exists and is not empty
- Response does not expose internal implementation details

---

### 7.7 CON-009 — Partial Update User Contract

Endpoint:

- PATCH /api/users/2

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | User partially updated successfully |

Request body:

    {
      "job": "QA Automation Tester"
    }

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| job | string | Non-empty, matches request body | Yes | Updated job |
| updatedAt | string | Non-empty, date-time-like value | Yes | Update timestamp |

Validation focus:

- Status code is 200
- Content-Type includes application/json
- Response body is a JSON object
- job matches the request body
- updatedAt exists and is not empty
- Response does not expose internal implementation details

---

### 7.8 CON-010 — Login Success Contract

Endpoint:

- POST /api/login

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | Login completed successfully |

Request body:

    {
      "email": "{{validEmail}}",
      "password": "{{validPassword}}"
    }

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| token | string | Non-empty | Yes | Authentication token |

Validation focus:

- Status code is 200
- Content-Type includes application/json
- Response body is a JSON object
- token exists
- token is a non-empty string
- Response does not expose internal implementation details

---

### 7.9 CON-011 — Register Success Contract

Endpoint:

- POST /api/register

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | Registration completed successfully |

Request body:

    {
      "email": "{{validEmail}}",
      "password": "{{validPassword}}"
    }

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | Registered user ID |
| token | string | Non-empty | Yes | Authentication token |

Validation focus:

- Status code is 200
- Content-Type includes application/json
- Response body is a JSON object
- id exists
- id is a number with integer value
- token exists
- token is a non-empty string
- Response does not expose internal implementation details

---

## 8. Error Response Contracts

### 8.1 General Error Contract Rules

Error responses should be validated beyond the HTTP status code.

For error scenarios, validations should confirm:

- Expected HTTP status code
- Content-Type includes application/json when a JSON body is returned
- Error response follows the minimum expected contract when applicable
- Error message is not empty when an error field exists
- Error message is coherent with the scenario
- Error response does not contain success-only fields
- Error response does not expose internal implementation details

Success-only fields that should not appear in error responses:

| Field | Reason |
|---|---|
| token | Token should only appear in successful authentication responses |
| id | Created or registered ID should not appear in failed responses |
| createdAt | Creation timestamp should not appear in failed responses |
| updatedAt | Update timestamp should not appear in failed responses |
| name | User creation payload should not appear in authentication errors |
| job | User creation payload should not appear in authentication errors |

Internal details that should not appear:

| Internal Detail | Reason |
|---|---|
| stack | Stack traces expose implementation details |
| trace | Trace details expose internals |
| exception | Exception names expose implementation details |
| sql | SQL errors may expose database information |
| database | Database references should not be exposed |
| internal server | Internal server details should not be exposed |
| node_modules | Dependency paths should not be exposed |
| file path | File paths should not be exposed |

---

### 8.2 CON-012 — User Not Found Contract

Endpoint:

- GET /api/users/23

Expected status:

| Status Code | Meaning |
|---|---|
| 404 | User not found |

Expected response behavior:

| Validation | Expected Result |
|---|---|
| HTTP status | 404 |
| Success user payload | Should not be returned |
| data object | Should not contain a valid user object |
| token | Should not exist |
| createdAt | Should not exist |
| updatedAt | Should not exist |
| Internal leak | Should not exist |

Validation focus:

- Status code is 404
- Response does not return a valid user payload
- Response does not contain authentication token
- Response does not expose internal implementation details

Note:

Reqres may return an empty object for some 404 responses. In that case, the contract should validate that no success payload is returned and no internal details are leaked.

---

### 8.3 CON-013 — Resource Not Found Contract

Endpoint:

- GET /api/unknown/23

Expected status:

| Status Code | Meaning |
|---|---|
| 404 | Resource not found |

Expected response behavior:

| Validation | Expected Result |
|---|---|
| HTTP status | 404 |
| Success resource payload | Should not be returned |
| data object | Should not contain a valid resource object |
| token | Should not exist |
| createdAt | Should not exist |
| updatedAt | Should not exist |
| Internal leak | Should not exist |

Validation focus:

- Status code is 404
- Response does not return a valid resource payload
- Response does not contain success-only fields
- Response does not expose internal implementation details

Note:

Reqres may return an empty object for some 404 responses. In that case, the contract should validate absence of success payload and absence of internal leaks.

---

### 8.4 CON-014 — Login Error Contract

Endpoint:

- POST /api/login

Scenario:

- Login without password

Expected status:

| Status Code | Meaning |
|---|---|
| 400 | Bad request |

Request body:

    {
      "email": "{{validEmail}}"
    }

Expected error fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| error | string | Non-empty, coherent with missing password scenario | Yes | Error message |

Validation focus:

- Status code is 400
- Content-Type includes application/json
- Response body is a JSON object
- error field exists
- error is a non-empty string
- error message is coherent with missing password scenario
- Response does not contain token
- Response does not contain id
- Response does not contain createdAt
- Response does not contain updatedAt
- Response does not expose internal implementation details

---

### 8.5 CON-015 — Register Error Contract

Endpoint:

- POST /api/register

Scenario:

- Register without password

Expected status:

| Status Code | Meaning |
|---|---|
| 400 | Bad request |

Request body:

    {
      "email": "{{validEmail}}"
    }

Expected error fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| error | string | Non-empty, coherent with missing password scenario | Yes | Error message |

Validation focus:

- Status code is 400
- Content-Type includes application/json
- Response body is a JSON object
- error field exists
- error is a non-empty string
- error message is coherent with missing password scenario
- Response does not contain token
- Response does not contain id
- Response does not contain createdAt
- Response does not contain updatedAt
- Response does not expose internal implementation details

---

## 9. Postman Collection Documentation

The contract tests will be organized in the following Postman folder:

| Postman Folder | Description |
|---|---|
| 08 - Contract Tests | This folder contains response structure validations used to confirm that important Reqres API payloads keep the expected fields, JSON data types, value constraints and error contracts. |

Each contract request in Postman must include:

- Clear request name
- Request description
- Related contract ID
- Related test case ID
- Expected status code
- Expected response body structure
- Expected JSON data types
- Expected value constraints
- Expected error contract when applicable
- Test script following the project technical quality standard

---

## 10. Postman Request Naming Standard

Recommended request names:

| Request Name | Related Contract ID |
|---|---|
| GET - Contract - Validate users list response | CON-001 |
| GET - Contract - Validate users page 2 response | CON-002 |
| GET - Contract - Validate first user response | CON-003 |
| GET - Contract - Validate existing user response | CON-004 |
| GET - Contract - Validate resource list response | CON-005 |
| GET - Contract - Validate single resource response | CON-006 |
| POST - Contract - Validate create user response | CON-007 |
| PUT - Contract - Validate update user response | CON-008 |
| PATCH - Contract - Validate partial update response | CON-009 |
| POST - Contract - Validate login success response | CON-010 |
| POST - Contract - Validate register success response | CON-011 |
| GET - Contract - Validate user not found response | CON-012 |
| GET - Contract - Validate resource not found response | CON-013 |
| POST - Contract - Validate login error response | CON-014 |
| POST - Contract - Validate register error response | CON-015 |

---

## 11. Postman Script Quality Standard

All contract test scripts must follow the project technical quality standard.

| Standard | Description |
|---|---|
| Parse response once | Parse the response body only once per script when a JSON body exists |
| Reusable helpers | Use helper functions for repeated validations |
| HTTP validation | Validate the expected HTTP status code |
| Content-Type validation | Validate application/json when a JSON body is expected |
| Contract validation | Validate required fields, expected JSON data types and value constraints |
| Error contract validation | Validate minimum error response structure in negative scenarios |
| Non-empty error message | Validate that error messages are not empty |
| Scenario coherence | Validate that error messages match the tested scenario |
| No success payload in errors | Ensure error responses do not include token, id, createdAt or updatedAt |
| No internal leaks | Ensure responses do not expose stack traces, SQL errors, exceptions or internal details |

Important note:

For 204 responses or responses with an empty body, scripts should not force JSON parsing.

Contract scripts should parse the response only when a JSON response body is expected.

---

## 12. Recommended Reusable Helpers

The future Postman scripts should use reusable helper functions.

Recommended helpers:

| Helper | Purpose |
|---|---|
| parseJsonResponse | Parse response body once when JSON is expected |
| expectStatus | Validate expected HTTP status |
| expectJsonContentType | Validate Content-Type includes application/json |
| expectObject | Validate that a value is an object |
| expectArray | Validate that a value is an array |
| expectField | Validate that a field exists |
| expectNumber | Validate that a field is a number |
| expectInteger | Validate that a numeric field contains an integer value |
| expectString | Validate that a field is a string |
| expectNonEmptyString | Validate that a field is a non-empty string |
| expectNoSuccessPayload | Validate that error responses do not include success fields |
| expectNoInternalLeak | Validate that response does not expose internal implementation details |
| expectErrorContract | Validate minimum error response contract |

---

## 13. Recommended Script Logic for Success Contracts

Success contract scripts should follow this logic:

1. Validate expected HTTP status.
2. Validate Content-Type when JSON is expected.
3. Parse the response body only once.
4. Validate top-level response structure.
5. Validate required fields.
6. Validate expected JSON data types.
7. Validate value constraints.
8. Validate non-empty important values.
9. Validate absence of internal leaks.

Example logic:

    const response = pm.response.json();

    expectStatus(200);
    expectJsonContentType();
    expectNoInternalLeak();

    pm.test("Response contains expected contract", function () {
        pm.expect(response).to.be.an("object");
        pm.expect(response).to.have.property("data");
    });

    pm.test("User id is a number with integer value", function () {
        pm.expect(response.data.id).to.be.a("number");
        pm.expect(Number.isInteger(response.data.id)).to.be.true;
    });

---

## 14. Recommended Script Logic for Error Contracts

Error contract scripts should follow this logic:

1. Validate expected HTTP error status.
2. Validate Content-Type when JSON is expected.
3. Parse the response body only once when body exists.
4. Validate minimum error contract when applicable.
5. Validate error message is not empty when error field exists.
6. Validate error message is coherent with the scenario.
7. Validate absence of success payload.
8. Validate absence of internal implementation details.

Example logic:

    const response = pm.response.json();

    expectStatus(400);
    expectJsonContentType();
    expectErrorContract(response);

    pm.test("Error message is coherent with missing password scenario", function () {
        pm.expect(response.error.toLowerCase()).to.include("password");
    });

    expectNoSuccessPayload(response);
    expectNoInternalLeak();

---

## 15. Execution Steps

1. Open Postman.
2. Select the Reqres API Environment.
3. Confirm that required environment variables are configured.
4. Open the Reqres API Testing Portfolio collection.
5. Open the folder 08 - Contract Tests.
6. Execute each contract request.
7. Validate HTTP status.
8. Validate Content-Type when applicable.
9. Validate response structure.
10. Validate required fields.
11. Validate expected JSON data types.
12. Validate value constraints.
13. Validate error contracts for negative scenarios.
14. Validate absence of success payload in error responses.
15. Validate absence of internal implementation details.
16. Capture evidence when required.
17. Update results in the test summary report.

---

## 16. Pass and Fail Criteria

### Pass Criteria

A contract test passes when:

- The endpoint returns the expected HTTP status code
- Content-Type is valid when JSON is expected
- Response body is valid JSON when a JSON body is expected
- Required fields are present
- Field JSON types match the expected contract
- Value constraints are respected
- Important values are not empty
- Numeric integer fields contain integer values
- Error responses follow the minimum error contract
- Error messages are coherent with the scenario
- Error responses do not include success payload
- No internal implementation details are exposed

### Fail Criteria

A contract test fails when:

- The endpoint returns an unexpected HTTP status code
- Content-Type is missing or incorrect when JSON is expected
- Response body is not valid JSON when JSON is expected
- Required fields are missing
- Field JSON types do not match the expected contract
- Value constraints are not respected
- Important values are empty
- Numeric integer fields contain decimal values when integers are expected
- Error response does not follow the minimum contract
- Error message is empty or incoherent
- Error response contains success payload
- Response exposes internal implementation details

---

## 17. Evidence Strategy

Contract test evidence will be stored in:

| Evidence Type | Location |
|---|---|
| Screenshots | evidence/screenshots/ |
| Reports | evidence/reports/ |

Recommended evidence files:

| File | Purpose |
|---|---|
| contract-tests-execution.png | Screenshot of contract test execution in Postman |
| postman-contract-folder.png | Screenshot of the Contract Tests folder organization |
| contract-tests-runner-result.png | Screenshot of collection runner result for contract tests |
| contract-validation-failure-example.png | Screenshot of any contract validation failure, if found |

---

## 18. Relationship With Other Documents

| Document | Relationship |
|---|---|
| docs/test-plan.md | Defines contract testing as part of the project scope |
| docs/test-strategy.md | Defines the contract testing strategy |
| docs/endpoint-mapping.md | Maps endpoints selected for contract testing |
| docs/test-cases.md | Defines contract-related test cases TC-040 to TC-045 and related scenarios |
| docs/smoke-tests.md | References basic contract validation for critical endpoints |
| docs/regression-tests.md | Uses contract validation as part of response stability checks |
| docs/test-summary-report.md | Will include final contract execution results |

---

## 19. Notes and Assumptions

- Reqres is a demo API, so some responses may be simulated.
- Create, update and delete operations may not persist data.
- Some 404 responses may return an empty object.
- Empty 404 responses should still be validated for absence of success payload and absence of internal leaks.
- JSON uses number as the numeric type, but this project documents integer expectations as value constraints.
- Contract tests should not overfit to values that may change unless the value is part of the expected behavior.
- Contract tests should focus on structure, required fields, JSON data types, value constraints and important non-empty values.
- Future Postman scripts must avoid parsing the response body multiple times.
- Future Postman scripts must use reusable helper functions where possible.

---

## 20. Next Step

The next document to be created is:

docs/bug-reports.md

The bug report document will define the template used to document defects, unexpected behavior, evidence, severity, priority and reproduction steps.