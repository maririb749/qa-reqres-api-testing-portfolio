# Contract Tests - Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Contract Tests |
| Author | Mariana |
| Status | Completed |
| Version | 1.2 |
| Created Date | 2026-04-28 |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

This document defines the API response contracts covered by the Postman collection and the selected JSON Schema checks executed with Ajv. Detailed step-by-step cases remain in `docs/test-cases.md`; this file focuses on contract scope, rules, schema coverage, evidence and maintenance expectations.

---

## 3. Contract Scope

Contract validation covers:

- Success responses for users, resources, create, update, patch, login and register.
- Error responses for not found, login error and register error scenarios.
- HTTP status, JSON content type, required fields, data types and value constraints.
- Absence of success-only payload in error responses.
- Absence of internal implementation details such as stack traces, SQL errors or exceptions.

Out of scope:

- Consumer-driven contract testing.
- Load, stress or penetration testing.
- Database schema validation.
- Real persistence validation, because Reqres is a demo API.

---

## 4. Implemented Contract Suite

| Contract ID | Related Test Case ID | Endpoint ID | Method | Endpoint | Contract Type | Expected Status | Status |
|---|---|---|---|---|---|---:|---|
| CON-001 | TC-001 | EP-001 | GET | `/api/users?page=1` | Users list success | 200 | Passed |
| CON-002 | TC-002 | EP-002 | GET | `/api/users?page=2` | Users list success | 200 | Passed |
| CON-003 | TC-005 | EP-009 | GET | `/api/users/1` | Single user success | 200 | Passed |
| CON-004 | TC-006 | EP-010 | GET | `/api/users/2` | Single user success | 200 | Passed |
| CON-005 | TC-011 | EP-020 | GET | `/api/unknown` | Resource list success | 200 | Passed |
| CON-006 | TC-012 | EP-021 | GET | `/api/unknown/2` | Single resource success | 200 | Passed |
| CON-007 | TC-007 | EP-015 | POST | `/api/users` | Create user success | 201 | Passed |
| CON-008 | TC-008 | EP-016 | PUT | `/api/users/2` | Update user success | 200 | Passed |
| CON-009 | TC-009 | EP-017 | PATCH | `/api/users/2` | Partial update success | 200 | Passed |
| CON-010 | TC-013 | EP-023 | POST | `/api/login` | Login success | 200 | Passed |
| CON-011 | TC-014 | EP-025 | POST | `/api/register` | Register success | 200 | Passed |
| CON-012 | TC-015 | EP-011 | GET | `/api/users/23` | User not found | 404 | Passed |
| CON-013 | TC-016 | EP-022 | GET | `/api/unknown/23` | Resource not found | 404 | Passed |
| CON-014 | TC-017 | EP-024 | POST | `/api/login` | Login error | 400 | Passed |
| CON-015 | TC-020 | EP-026 | POST | `/api/register` | Register error | 400 | Passed |

---

## 5. Validation Rules

| Area | Rule |
|---|---|
| HTTP | Response returns the expected status code. |
| Headers | JSON responses include `application/json` in `Content-Type`. |
| Body | JSON body is parseable when a body is expected. |
| Required fields | Required fields exist for the selected response type. |
| Types | Fields use the expected JSON types. |
| Values | Important strings are non-empty and numeric IDs are integer values. |
| Error payload | Error responses do not include success-only fields such as `token`, `id`, `createdAt`, `updatedAt`, `name` or `job`. |
| Internal leakage | Responses do not expose stack traces, exceptions, SQL/database errors, dependency paths or raw internal server details. |

---

## 6. Response Contract Summary

| Contract Area | Required Structure |
|---|---|
| Users list | `page`, `per_page`, `total`, `total_pages`, `data[]`, `support`; user objects include `id`, `email`, `first_name`, `last_name`, `avatar`. |
| Single user | `data` user object and `support` object. |
| Resource list | Pagination fields, `data[]`, `support`; resource objects include `id`, `name`, `year`, `color`, `pantone_value`. |
| Single resource | `data` resource object and `support` object. |
| Create user | Echoed `name` and `job`, generated `id`, generated `createdAt`. |
| Update user | Echoed `name` and `job`, generated `updatedAt`. |
| Partial update | Echoed `job`, generated `updatedAt`. |
| Login success | Non-empty `token`. |
| Register success | Integer `id` and non-empty `token`. |
| Not found | No valid success payload and no success-only fields. |
| Auth errors | Non-empty `error` message coherent with the missing required field. |

Reqres may include an optional `_meta` object in some responses. The Ajv schemas allow it while keeping the core contract strict.

---

## 7. Ajv JSON Schema Coverage

Selected contracts are validated with external JSON Schema files after the Newman full run:

| Schema File | Related Request | Purpose |
|---|---|---|
| `postman/schemas/users-page.schema.json` | GET - Contract - Validate users page 2 response | Validates users list pagination, user objects and support object. |
| `postman/schemas/login-success.schema.json` | POST - Contract - Validate login success response | Validates login token response. |
| `postman/schemas/auth-error.schema.json` | POST - Contract - Validate login error response | Validates authentication error payload. |

Execution command:

```bash
npm run test:api:contracts
```

---

## 8. Evidence

| Evidence Type | Location |
|---|---|
| Postman contract screenshots | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/` |
| Newman JSON report | `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.json` |
| Newman JUnit report | `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml` |
| Newman HTML report | `evidence/reports/reqres-api-testing-portfolio/html/full-report.html` |
| Ajv schemas | `postman/schemas/` |

---

## 9. Maintenance Notes

Update this document when:

- A contract request is added, removed or renamed.
- A response field becomes required or optional.
- A schema file changes.
- Newman execution scope changes.
- Reqres changes response shape, especially optional metadata fields.

Current contract result: **15 contract requests passed, 3 Ajv schema checks passed, 0 failures**.
