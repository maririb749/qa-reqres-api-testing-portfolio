# Contract Tests — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Contract Tests |
| Author | Mariana |
| Status | Completed |
| Version | 1.1 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md, docs/test-cases.md, docs/smoke-tests.md, docs/regression-tests.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to define and document the response contracts validated in the Reqres API Testing Portfolio project.

Contract testing ensures that API responses follow an expected structure, including required fields, JSON data types, value constraints, successful response payloads and error response payloads.

The implemented contract tests are available in the Postman collection under:

```txt
08 - Contract Tests
```

---

## 3. Contract Testing Objective

The objective of contract testing in this project is to validate that important Reqres API responses remain stable and predictable.

The contract checks focus on:

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
- Users page 2 response
- First user response
- Existing user response
- Resource list response
- Single resource response
- Create user response
- Update user response
- Partial update response
- Login success response
- Register success response
- User not found response
- Resource not found response
- Login error response
- Register error response

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

## 5. Implemented Contract Test Suite

| Contract ID | Related Test Case ID | Endpoint ID | Method | Endpoint | Postman Request | Contract Type | Expected Status | Priority | Status | Evidence |
|---|---|---|---|---|---|---|---:|---|---|---|
| CON-001 | TC-040 | EP-001 | GET | `/api/users?page=1` | GET - Contract - Validate users list response | Users list success contract | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-001-users-list-contract-postman-passed.png` |
| CON-002 | TC-041 | EP-002 | GET | `/api/users?page=2` | GET - Contract - Validate users page 2 response | Users list success contract | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-002-users-page-2-contract-postman-passed.png` |
| CON-003 | TC-042 | EP-009 | GET | `/api/users/1` | GET - Contract - Validate first user response | Single user success contract | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-003-first-user-contract-postman-passed.png` |
| CON-004 | TC-043 | EP-010 | GET | `/api/users/2` | GET - Contract - Validate existing user response | Single user success contract | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-004-existing-user-contract-postman-passed.png` |
| CON-005 | TC-044 | EP-020 | GET | `/api/unknown` | GET - Contract - Validate resource list response | Resource list success contract | 200 | Medium | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-005-resource-list-contract-postman-passed.png` |
| CON-006 | TC-045 | EP-021 | GET | `/api/unknown/2` | GET - Contract - Validate single resource response | Single resource success contract | 200 | Medium | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-006-single-resource-contract-postman-passed.png` |
| CON-007 | TC-007 | EP-015 | POST | `/api/users` | POST - Contract - Validate create user response | Create user success contract | 201 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-007-create-user-contract-postman-passed.png` |
| CON-008 | TC-008 | EP-016 | PUT | `/api/users/2` | PUT - Contract - Validate update user response | Update user success contract | 200 | Medium | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-008-update-user-contract-postman-passed.png` |
| CON-009 | TC-009 | EP-017 | PATCH | `/api/users/2` | PATCH - Contract - Validate partial update response | Partial update success contract | 200 | Medium | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-009-partial-update-contract-postman-passed.png` |
| CON-010 | TC-013 | EP-023 | POST | `/api/login` | POST - Contract - Validate login success response | Login success contract | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-010-login-success-contract-postman-passed.png` |
| CON-011 | TC-014 | EP-025 | POST | `/api/register` | POST - Contract - Validate register success response | Register success contract | 200 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-011-register-success-contract-postman-passed.png` |
| CON-012 | TC-015 | EP-011 | GET | `/api/users/23` | GET - Contract - Validate user not found response | User not found contract | 404 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-012-user-not-found-contract-postman-passed.png` |
| CON-013 | TC-016 | EP-022 | GET | `/api/unknown/23` | GET - Contract - Validate resource not found response | Resource not found contract | 404 | Medium | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-013-resource-not-found-contract-postman-passed.png` |
| CON-014 | TC-017 | EP-024 | POST | `/api/login` | POST - Contract - Validate login error response | Login error contract | 400 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-014-login-error-contract-postman-passed.png` |
| CON-015 | TC-020 | EP-026 | POST | `/api/register` | POST - Contract - Validate register error response | Register error contract | 400 | High | Passed | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/CON-015-register-error-contract-postman-passed.png` |

---

## 6. Common Contract Validation Rules

These validation rules are applied when relevant.

| Rule | Description |
|---|---|
| HTTP status validation | Response must return the expected status code |
| Content-Type validation | JSON responses must include `application/json` in Content-Type |
| JSON validation | Response body must be valid JSON when a JSON body is expected |
| Required fields validation | Required fields must exist in the response |
| JSON type validation | Fields must use the expected JSON data types |
| Value constraint validation | Fields must respect expected value constraints such as integer value, non-empty string or array |
| Success payload validation | Success responses must contain the expected success fields |
| Error contract validation | Error responses must follow the minimum expected error structure when applicable |
| No success payload in error | Error responses must not contain success-only fields |
| No internal leak validation | Response must not expose stack traces, SQL errors, exceptions or internal implementation details |

---

## 7. Success Response Contracts

### 7.1 CON-001 and CON-002 — List Users Contract

Endpoints:

- `GET /api/users?page=1`
- `GET /api/users?page=2`

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

Expected user object inside `data` array:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | User ID |
| email | string | Non-empty | Yes | User email |
| first_name | string | Non-empty | Yes | User first name |
| last_name | string | Non-empty | Yes | User last name |
| avatar | string | Non-empty | Yes | Avatar URL |

Expected support object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| url | string | Non-empty | Yes | Support URL |
| text | string | Non-empty | Yes | Support text |

Validation focus:

- Status code is 200
- Content-Type includes `application/json`
- Response body is a JSON object
- Pagination fields are numbers with integer values
- `data` is an array
- User objects contain `id`, `email`, `first_name`, `last_name` and `avatar` when present
- User string fields are not empty
- Support object contains `url` and `text`
- Response does not expose internal implementation details

---

### 7.2 CON-003 and CON-004 — Single User Contract

Endpoints:

- `GET /api/users/1`
- `GET /api/users/2`

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | User returned successfully |

Expected top-level fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| data | object | Must contain user fields | Yes | User data |
| support | object | Must contain url and text | Yes | Support information |

Expected `data` object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | User ID |
| email | string | Non-empty | Yes | User email |
| first_name | string | Non-empty | Yes | User first name |
| last_name | string | Non-empty | Yes | User last name |
| avatar | string | Non-empty | Yes | Avatar URL |

Expected support object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| url | string | Non-empty | Yes | Support URL |
| text | string | Non-empty | Yes | Support text |

Validation focus:

- Status code is 200
- Content-Type includes `application/json`
- Response body is a JSON object
- `data` object exists
- `data.id` is a number with integer value
- User string fields are not empty
- Support object exists
- Response does not expose internal implementation details

---

### 7.3 CON-005 — Resource List Contract

Endpoint:

- `GET /api/unknown`

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

Expected resource object inside `data` array:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | Resource ID |
| name | string | Non-empty | Yes | Resource name |
| year | number | Integer value | Yes | Resource year |
| color | string | Non-empty | Yes | Color value |
| pantone_value | string | Non-empty | Yes | Pantone value |

Validation focus:

- Status code is 200
- Content-Type includes `application/json`
- Response body is a JSON object
- Pagination fields are numbers with integer values
- `data` is an array
- Resource objects contain `id`, `name`, `year`, `color` and `pantone_value` when present
- Resource `id` and `year` are numbers with integer values
- Resource string fields are not empty
- Support object exists
- Response does not expose internal implementation details

---

### 7.4 CON-006 — Single Resource Contract

Endpoint:

- `GET /api/unknown/2`

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | Resource returned successfully |

Expected top-level fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| data | object | Must contain resource fields | Yes | Resource data |
| support | object | Must contain url and text | Yes | Support information |

Expected `data` object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | Resource ID |
| name | string | Non-empty | Yes | Resource name |
| year | number | Integer value | Yes | Resource year |
| color | string | Non-empty | Yes | Color value |
| pantone_value | string | Non-empty | Yes | Pantone value |

Expected support object:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| url | string | Non-empty | Yes | Support URL |
| text | string | Non-empty | Yes | Support text |

Validation focus:

- Status code is 200
- Content-Type includes `application/json`
- Response body is a JSON object
- `data` object exists
- `data.id` is a number with integer value
- `data.name` is a non-empty string
- `data.year` is a number with integer value
- `data.color` is a non-empty string
- `data.pantone_value` is a non-empty string
- Support object exists
- Response does not expose internal implementation details

---

### 7.5 CON-007 — Create User Contract

Endpoint:

- `POST /api/users`

Expected status:

| Status Code | Meaning |
|---|---|
| 201 | User created successfully |

Request body:

```json
{
  "name": "{{testUserName}}",
  "job": "{{testUserJob}}"
}
```

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| name | string | Matches request body | Yes | Name sent in request |
| job | string | Matches request body | Yes | Job sent in request |
| id | string | Non-empty | Yes | Simulated created ID |
| createdAt | string | Non-empty | Yes | Creation timestamp |

Validation focus:

- Status code is 201
- Content-Type includes `application/json`
- Response body is a JSON object
- `name` matches the request body
- `job` matches the request body
- `id` exists and is not empty
- `createdAt` exists and is not empty
- Response does not expose internal implementation details

Note:

Reqres returns the created id as a string in this simulated creation response. The contract follows the actual API response format observed during execution.

---

### 7.6 CON-008 — Update User Contract

Endpoint:

- `PUT /api/users/2`

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | User updated successfully |

Request body:

```json
{
  "name": "{{testUserName}}",
  "job": "{{updatedUserJob}}"
}
```

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| name | string | Matches request body | Yes | Updated name |
| job | string | Matches request body | Yes | Updated job |
| updatedAt | string | Non-empty | Yes | Update timestamp |

Validation focus:

- Status code is 200
- Content-Type includes `application/json`
- Response body is a JSON object
- `name` matches the request body
- `job` matches the request body
- `updatedAt` exists and is not empty
- Response does not expose internal implementation details

---

### 7.7 CON-009 — Partial Update User Contract

Endpoint:

- `PATCH /api/users/2`

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | User partially updated successfully |

Request body:

```json
{
  "job": "{{patchedUserJob}}"
}
```

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| job | string | Matches request body | Yes | Updated job |
| updatedAt | string | Non-empty | Yes | Update timestamp |

Validation focus:

- Status code is 200
- Content-Type includes `application/json`
- Response body is a JSON object
- `job` matches the request body
- `updatedAt` exists and is not empty
- Response does not expose internal implementation details

---

### 7.8 CON-010 — Login Success Contract

Endpoint:

- `POST /api/login`

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | Login completed successfully |

Request body:

```json
{
  "email": "{{validEmail}}",
  "password": "{{validPassword}}"
}
```

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| token | string | Non-empty | Yes | Authentication token |

Validation focus:

- Status code is 200
- Content-Type includes `application/json`
- Response body is a JSON object
- `token` exists
- `token` is a non-empty string
- Response does not expose internal implementation details

---

### 7.9 CON-011 — Register Success Contract

Endpoint:

- `POST /api/register`

Expected status:

| Status Code | Meaning |
|---|---|
| 200 | Registration completed successfully |

Request body:

```json
{
  "email": "{{validEmail}}",
  "password": "{{validPassword}}"
}
```

Expected response fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| id | number | Integer value | Yes | Registered user ID |
| token | string | Non-empty | Yes | Authentication token |

Validation focus:

- Status code is 200
- Content-Type includes `application/json`
- Response body is a JSON object
- `id` exists
- `id` is a number with integer value
- `token` exists
- `token` is a non-empty string
- Response does not expose internal implementation details

---

## 8. Error Response Contracts

### 8.1 General Error Contract Rules

Error responses are validated beyond the HTTP status code.

For error scenarios, validations confirm:

- Expected HTTP status code
- Content-Type includes `application/json` when a JSON body is returned
- Error response follows the minimum expected contract when applicable
- Error message is not empty when an `error` field exists
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

---

### 8.2 CON-012 — User Not Found Contract

Endpoint:

- `GET /api/users/23`

Expected status:

| Status Code | Meaning |
|---|---|
| 404 | User not found |

Expected response behavior:

| Validation | Expected Result |
|---|---|
| HTTP status | 404 |
| Success user payload | Should not be returned |
| Valid data object | Should not contain a valid user object |
| Success-only fields | Should not exist |
| Internal leak | Should not exist |

Validation focus:

- Status code is 404
- Response does not return a valid user payload
- Response does not contain success-only fields
- Response does not expose internal implementation details

Note:

Reqres may return an empty object for some 404 responses. In that case, the contract validates that no success payload is returned and no internal details are leaked.

---

### 8.3 CON-013 — Resource Not Found Contract

Endpoint:

- `GET /api/unknown/23`

Expected status:

| Status Code | Meaning |
|---|---|
| 404 | Resource not found |

Expected response behavior:

| Validation | Expected Result |
|---|---|
| HTTP status | 404 |
| Success resource payload | Should not be returned |
| Valid data object | Should not contain a valid resource object |
| Success-only fields | Should not exist |
| Internal leak | Should not exist |

Validation focus:

- Status code is 404
- Response does not return a valid resource payload
- Response does not contain success-only fields
- Response does not expose internal implementation details

Note:

Reqres may return an empty object for some 404 responses. In that case, the contract validates absence of success payload and absence of internal leaks.

---

### 8.4 CON-014 — Login Error Contract

Endpoint:

- `POST /api/login`

Scenario:

- Login without password

Expected status:

| Status Code | Meaning |
|---|---|
| 400 | Bad request |

Request body:

```json
{
  "email": "{{validEmail}}"
}
```

Expected error fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| error | string | Non-empty, coherent with missing password scenario | Yes | Error message |

Validation focus:

- Status code is 400
- Content-Type includes `application/json`
- Response body is a JSON object
- `error` field exists
- `error` is a non-empty string
- Error message is coherent with missing password scenario
- Response does not contain success-only fields
- Response does not expose internal implementation details

---

### 8.5 CON-015 — Register Error Contract

Endpoint:

- `POST /api/register`

Scenario:

- Register without password

Expected status:

| Status Code | Meaning |
|---|---|
| 400 | Bad request |

Request body:

```json
{
  "email": "{{validEmail}}"
}
```

Expected error fields:

| Field | Expected JSON Type | Value Constraint | Required | Notes |
|---|---|---|---|---|
| error | string | Non-empty, coherent with missing password scenario | Yes | Error message |

Validation focus:

- Status code is 400
- Content-Type includes `application/json`
- Response body is a JSON object
- `error` field exists
- `error` is a non-empty string
- Error message is coherent with missing password scenario
- Response does not contain success-only fields
- Response does not expose internal implementation details

---

## 9. Postman Collection Documentation

The contract tests are organized in the following Postman folder:

| Postman Folder | Description |
|---|---|
| 08 - Contract Tests | Contains response structure validations used to confirm that important Reqres API payloads keep the expected fields, JSON data types, value constraints and error contracts. |

Each contract request in Postman includes:

- Clear request name
- Request description
- Related contract ID
- Related test case ID
- Related endpoint ID
- Purpose
- Expected status code
- Expected response body structure
- Expected JSON data types
- Expected value constraints
- Expected error contract when applicable
- Commented test script following the project technical quality standard

---

## 10. Postman Request Naming Standard

Implemented request names:

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

All contract test scripts follow the project technical quality standard.

| Standard | Description |
|---|---|
| Parse response once | Parse the response body only once per script when a JSON body exists |
| Reusable helpers | Use helper functions for repeated validations |
| HTTP validation | Validate the expected HTTP status code |
| Content-Type validation | Validate `application/json` when a JSON body is expected |
| Contract validation | Validate required fields, expected JSON data types and value constraints |
| Error contract validation | Validate minimum error response structure in negative scenarios |
| Non-empty error message | Validate that error messages are not empty |
| Scenario coherence | Validate that error messages match the tested scenario |
| No success payload in errors | Ensure error responses do not include `token`, `id`, `createdAt`, `updatedAt`, `name` or `job` |
| No internal leaks | Ensure responses do not expose stack traces, SQL errors, exceptions or internal details |

Important note:

For `204 No Content` responses or responses with an empty body, scripts should not force JSON parsing.

Contract scripts parse the response only when a JSON response body is expected.

---

## 12. Implemented Reusable Validation Helpers

The Postman scripts use reusable helper functions such as:

| Helper | Purpose |
|---|---|
| `expectStatus` | Validate expected HTTP status |
| `expectJsonContentType` | Validate Content-Type includes `application/json` |
| `expectJsonContentTypeWhenBodyExists` | Validate JSON Content-Type only when a response body exists |
| `expectIntegerNumber` | Validate JSON number type with integer value constraint |
| `expectNonEmptyString` | Validate that a field is a non-empty string |
| `expectNoSuccessPayload` | Validate that error responses do not include success-only fields |
| `expectErrorContract` | Validate minimum error response contract |
| User contract helper | Validate required user fields and value constraints |
| Resource contract helper | Validate required resource fields and value constraints |
| Support contract helper | Validate support metadata |

The global collection script validates that responses do not expose internal implementation details.

---

## 13. Script Logic for Success Contracts

Success contract scripts follow this logic:

1. Validate expected HTTP status.
2. Validate Content-Type when JSON is expected.
3. Parse the response body only once.
4. Validate top-level response structure.
5. Validate required fields.
6. Validate expected JSON data types.
7. Validate value constraints.
8. Validate non-empty important values.
9. Validate absence of internal leaks through the global collection script.

---

## 14. Script Logic for Error Contracts

Error contract scripts follow this logic:

1. Validate expected HTTP error status.
2. Validate Content-Type when JSON is expected or when a response body exists.
3. Parse the response body only once when body exists.
4. Validate minimum error contract when applicable.
5. Validate error message is not empty when an `error` field exists.
6. Validate error message is coherent with the scenario.
7. Validate absence of success payload.
8. Validate absence of internal implementation details through the global collection script.

---

## 15. Execution Steps

1. Open Postman.
2. Select the Reqres API Environment.
3. Confirm that required environment variables are configured.
4. Open the Reqres API Testing Portfolio collection.
5. Open the folder `08 - Contract Tests`.
6. Execute each contract request or run the full folder.
7. Validate HTTP status.
8. Validate Content-Type when applicable.
9. Validate response structure.
10. Validate required fields.
11. Validate expected JSON data types.
12. Validate value constraints.
13. Validate error contracts for negative scenarios.
14. Validate absence of success payload in error responses.
15. Validate absence of internal implementation details.
16. Capture evidence.
17. Save evidence in the contract test evidence folder.

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
- Error responses follow the minimum error contract when applicable
- Error messages are coherent with the scenario when applicable
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
- Error response does not follow the minimum contract when applicable
- Error message is empty or incoherent
- Error response contains success payload
- Response exposes internal implementation details

---

## 17. Evidence Strategy

Contract test evidence is stored in:

```txt
evidence/screenshots/reqres-api-testing-portfolio/contract-tests/
```

Implemented evidence files:

| File | Purpose |
|---|---|
| `CON-001-users-list-contract-postman-passed.png` | Evidence that the users list contract test passed |
| `CON-002-users-page-2-contract-postman-passed.png` | Evidence that the users page 2 contract test passed |
| `CON-003-first-user-contract-postman-passed.png` | Evidence that the first user contract test passed |
| `CON-004-existing-user-contract-postman-passed.png` | Evidence that the existing user contract test passed |
| `CON-005-resource-list-contract-postman-passed.png` | Evidence that the resource list contract test passed |
| `CON-006-single-resource-contract-postman-passed.png` | Evidence that the single resource contract test passed |
| `CON-007-create-user-contract-postman-passed.png` | Evidence that the create user contract test passed |
| `CON-008-update-user-contract-postman-passed.png` | Evidence that the update user contract test passed |
| `CON-009-partial-update-contract-postman-passed.png` | Evidence that the partial update contract test passed |
| `CON-010-login-success-contract-postman-passed.png` | Evidence that the login success contract test passed |
| `CON-011-register-success-contract-postman-passed.png` | Evidence that the register success contract test passed |
| `CON-012-user-not-found-contract-postman-passed.png` | Evidence that the user not found contract test passed |
| `CON-013-resource-not-found-contract-postman-passed.png` | Evidence that the resource not found contract test passed |
| `CON-014-login-error-contract-postman-passed.png` | Evidence that the login error contract test passed |
| `CON-015-register-error-contract-postman-passed.png` | Evidence that the register error contract test passed |

Additional execution evidence is also available in:

```txt
evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml
```

This report was generated by the GitHub Actions Newman workflow after the full Postman collection execution passed successfully.

---

## 18. Relationship With Other Documents

| Document | Relationship |
|---|---|
| docs/test-plan.md | Defines contract testing as part of the project scope |
| docs/test-strategy.md | Defines the contract testing strategy |
| docs/endpoint-mapping.md | Maps endpoints selected for contract testing |
| docs/test-cases.md | Defines contract-related scenarios and evidence |
| docs/smoke-tests.md | References basic contract validation for critical endpoints |
| docs/regression-tests.md | Uses contract-style validation as part of response stability checks |
| docs/test-summary-report.md | Includes final contract execution results |

---

## 19. Notes and Assumptions

- Reqres is a demo API, so some responses are simulated.
- Create, update and delete operations may not persist data.
- Some 404 responses may return an empty object.
- Empty 404 responses are validated for absence of success payload and absence of internal leaks.
- JSON uses `number` as the numeric type, but this project documents integer expectations as value constraints.
- Contract tests should not overfit to values that may change unless the value is part of the expected behavior.
- Contract tests focus on structure, required fields, JSON data types, value constraints and important non-empty values.
- Postman scripts avoid parsing the response body multiple times.
- Postman scripts use reusable helper functions where useful.
- The real API key should remain only in the local Postman environment or GitHub Actions repository secrets and should never be committed to the repository.

---

## 20. Completion Notes

The contract test suite was implemented, executed and evidenced successfully through Postman evidence screenshots and the GitHub Actions Newman execution report.

Final contract coverage:

| Metric | Result |
|---|---:|
| Contract requests implemented | 15 |
| Contract requests executed | 15 |
| Contract requests passed | 15 |
| Contract requests failed | 0 |
| Evidence screenshots captured | 15 |
| Newman/GitHub Actions execution | Passed |

Final result:

```txt
PASSED
```