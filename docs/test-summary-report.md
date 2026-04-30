# Test Summary Report — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Test Summary Report |
| Author | Mariana |
| Status | Completed |
| Version | 1.0 |
| Created Date | 2026-04-28 |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |
| Testing Tool | Postman |
| Execution Type | Manual execution using Postman |
| Evidence Type | Postman execution screenshots |

---

## 2. Purpose

The purpose of this document is to summarize the final execution results of the Reqres API Testing Portfolio project.

This report confirms that the planned Postman API test folders were implemented, executed and evidenced successfully.

The project demonstrates practical API testing skills, including:

- Smoke testing
- Positive functional testing
- Negative testing
- Boundary testing
- Contract testing
- Basic delayed response observation
- Regression testing
- Evidence organization
- Postman collection documentation
- Environment-based test data usage

---

## 3. Application Under Test

Reqres is a public demo REST API used for testing, QA practice and learning purposes.

Base URL:

```txt
https://reqres.in
```

The API was used to validate endpoints related to:

- Users list and pagination
- Single user retrieval
- User create, update, patch and delete simulation
- Authentication
- Resources
- Boundary values
- Contract stability
- Delayed response behavior
- Regression coverage

---

## 4. Test Execution Summary

| Folder | Test Area | Requests Executed | Passed | Failed | Status |
|---|---|---:|---:|---:|---|
| 01 - Smoke Tests | Critical API availability checks | 4 | 4 | 0 | Passed |
| 02 - Users - List and Pagination | User list and pagination scenarios | 4 | 4 | 0 | Passed |
| 03 - Users - Single User | Single user retrieval and not found behavior | 3 | 3 | 0 | Passed |
| 04 - Users - Create Update Delete | Simulated create, update, patch and delete flows | 4 | 4 | 0 | Passed |
| 05 - Authentication | Login and registration success/error scenarios | 8 | 8 | 0 | Passed |
| 06 - Resources | Resource list, single resource and not found behavior | 3 | 3 | 0 | Passed |
| 07 - Boundary Tests | Boundary scenarios for pagination and user IDs | 8 | 8 | 0 | Passed |
| 08 - Contract Tests | Response contract validations | 15 | 15 | 0 | Passed |
| 09 - Delayed Response | Basic delayed response observation | 1 | 1 | 0 | Passed |
| 10 - Regression Tests | Critical regression coverage | 8 | 8 | 0 | Passed |

---

## 5. Overall Execution Results

| Metric | Result |
|---|---:|
| Total Postman folders executed | 10 |
| Total Postman requests executed | 58 |
| Total passed requests | 58 |
| Total failed requests | 0 |
| Total blocked requests | 0 |
| Evidence screenshots captured | 58 |
| Final execution status | Passed |

Final result:

```txt
PASSED
```

---

## 6. Coverage Summary

The executed test suite covered the following areas:

| Area | Coverage Status |
|---|---|
| Users list and pagination | Covered |
| Single user retrieval | Covered |
| User not found behavior | Covered |
| User creation simulation | Covered |
| User update simulation | Covered |
| User partial update simulation | Covered |
| User deletion simulation | Covered |
| Login success | Covered |
| Login error handling | Covered |
| Register success | Covered |
| Register error handling | Covered |
| Resource list | Covered |
| Single resource retrieval | Covered |
| Resource not found behavior | Covered |
| Pagination boundary values | Covered |
| User ID boundary values | Covered |
| Delete non-existing user behavior | Covered |
| Response contract validation | Covered |
| Error contract validation | Covered |
| Basic delayed response behavior | Covered |
| Regression coverage | Covered |

---

## 7. Validation Types Executed

The Postman scripts validated:

- Expected HTTP status codes
- JSON response format
- `Content-Type` header containing `application/json`
- Required response fields
- JSON data types
- Integer value constraints for numeric fields
- Non-empty string constraints
- Pagination response structure
- User response contracts
- Resource response contracts
- Create/update/patch response contracts
- Authentication success contracts
- Error response contracts
- Absence of success payload in error responses
- Absence of internal implementation details
- Empty response body for `204 No Content`
- Basic delayed response time threshold

---

## 8. Evidence Summary

All evidence screenshots are stored under:

```txt
evidence/screenshots/reqres-api-testing-portfolio/
```

Evidence folders:

| Area | Evidence Folder |
|---|---|
| Smoke Tests | `evidence/screenshots/reqres-api-testing-portfolio/smoke-tests/` |
| Users List and Pagination | `evidence/screenshots/reqres-api-testing-portfolio/users-list-pagination/` |
| Single User | `evidence/screenshots/reqres-api-testing-portfolio/single-user/` |
| Create Update Delete | `evidence/screenshots/reqres-api-testing-portfolio/create-update-delete/` |
| Authentication | `evidence/screenshots/reqres-api-testing-portfolio/authentication/` |
| Resources | `evidence/screenshots/reqres-api-testing-portfolio/resources/` |
| Boundary Tests | `evidence/screenshots/reqres-api-testing-portfolio/boundary-tests/` |
| Contract Tests | `evidence/screenshots/reqres-api-testing-portfolio/contract-tests/` |
| Delayed Response | `evidence/screenshots/reqres-api-testing-portfolio/delayed-response/` |
| Regression Tests | `evidence/screenshots/reqres-api-testing-portfolio/regression-tests/` |

---

## 9. Executed Smoke Tests

| Smoke ID | Related Test Case | Endpoint | Expected Status | Status | Evidence |
|---|---|---|---:|---|---|
| SMK-001 | TC-002 | `/api/users?page=2` | 200 | Passed | `SMK-001-list-users-page-2-postman-passed.png` |
| SMK-002 | TC-006 | `/api/users/2` | 200 | Passed | `SMK-002-get-existing-user-postman-passed.png` |
| SMK-003 | TC-007 | `/api/users` | 201 | Passed | `SMK-003-create-user-valid-data-postman-passed.png` |
| SMK-004 | TC-013 | `/api/login` | 200 | Passed | `SMK-004-login-valid-credentials-postman-passed.png` |

---

## 10. Executed Functional and Negative Tests

| Test Case Range | Area | Requests | Status |
|---|---|---:|---|
| TC-001 to TC-004 | Users list and pagination | 4 | Passed |
| TC-005 to TC-006, TC-015 | Single user retrieval and not found behavior | 3 | Passed |
| TC-007 to TC-010 | Create, update, patch and delete simulation | 4 | Passed |
| TC-011 to TC-012, TC-016 | Resource scenarios | 3 | Passed |
| TC-013 to TC-014, TC-017 to TC-022 | Authentication success and error scenarios | 8 | Passed |

---

## 11. Executed Boundary Tests

| Test Case ID | Scenario | Expected Status | Status |
|---|---|---:|---|
| TC-023 | List users using page zero | 200 | Passed |
| TC-024 | List users using negative page value | 200 | Passed |
| TC-025 | List users using very high page value | 200 | Passed |
| TC-026 | List users using non-numeric page value | 200 | Passed |
| TC-027 | Get user using zero ID | 404 | Passed |
| TC-028 | Get user using negative ID | 404 | Passed |
| TC-029 | Get user using non-numeric ID | 404 | Passed |
| TC-030 | Delete non-existing user | 204 | Passed |

---

## 12. Executed Delayed Response Test

| Test Case ID | Endpoint | Expected Status | Validation Focus | Status |
|---|---|---:|---|---|
| TC-031 | `/api/users?delay=3` | 200 | Valid delayed users list response below configured threshold | Passed |

The delayed response test is intentionally separated from smoke and regression suites because it introduces an artificial wait time.

---

## 13. Executed Contract Tests

| Contract ID | Area | Expected Status | Status |
|---|---|---:|---|
| CON-001 | Users list response contract | 200 | Passed |
| CON-002 | Users page 2 response contract | 200 | Passed |
| CON-003 | First user response contract | 200 | Passed |
| CON-004 | Existing user response contract | 200 | Passed |
| CON-005 | Resource list response contract | 200 | Passed |
| CON-006 | Single resource response contract | 200 | Passed |
| CON-007 | Create user response contract | 201 | Passed |
| CON-008 | Update user response contract | 200 | Passed |
| CON-009 | Partial update response contract | 200 | Passed |
| CON-010 | Login success response contract | 200 | Passed |
| CON-011 | Register success response contract | 200 | Passed |
| CON-012 | User not found response contract | 404 | Passed |
| CON-013 | Resource not found response contract | 404 | Passed |
| CON-014 | Login error response contract | 400 | Passed |
| CON-015 | Register error response contract | 400 | Passed |

---

## 14. Executed Regression Tests

| Regression ID | Related Test Case | Endpoint | Expected Status | Status |
|---|---|---|---:|---|
| REG-001 | TC-002 | `/api/users?page=2` | 200 | Passed |
| REG-002 | TC-006 | `/api/users/2` | 200 | Passed |
| REG-003 | TC-007 | `/api/users` | 201 | Passed |
| REG-004 | TC-010 | `/api/users/2` | 204 | Passed |
| REG-005 | TC-013 | `/api/login` | 200 | Passed |
| REG-006 | TC-014 | `/api/register` | 200 | Passed |
| REG-007 | TC-012 | `/api/unknown/2` | 200 | Passed |
| REG-008 | TC-015 | `/api/users/23` | 404 | Passed |

---

## 15. Observations

- Reqres is a demo API, so create, update, patch and delete operations return simulated responses.
- Create/update/delete operations do not persist real data.
- DELETE requests return `204 No Content`; therefore, the scripts intentionally avoid JSON parsing for these responses.
- Boundary pagination scenarios returned controlled `200` responses.
- Invalid user ID boundary scenarios returned controlled `404` responses.
- Delete non-existing user returned the simulated `204 No Content` response.
- Some `404` responses may return an empty object; the tests validate absence of success payload and absence of internal details.
- JSON uses `number` as the numeric type; integer expectations are validated as value constraints.
- The delayed response scenario is treated as a basic response time observation, not as full performance testing.
- The real API key should remain only in the local Postman environment and should not be committed to the repository.

---

## 16. Defects and Unexpected Behavior

No defects were found during the final documented Postman execution.

| Defect ID | Summary | Status |
|---|---|---|
| N/A | No defects identified | N/A |

---

## 17. Risks and Limitations

| Risk or Limitation | Impact | Notes |
|---|---|---|
| Public demo API behavior may change | Tests may need updates | Expected results should be reviewed if Reqres changes behavior |
| Simulated persistence | Create/update/delete results are not stored permanently | Documented as a known limitation |
| Network instability | Requests may fail intermittently | Re-run may be required if caused by connectivity |
| Delayed response execution time | May slow down full execution | Kept outside smoke and regression suites |
| API key exposure risk | Sensitive data could be committed accidentally | Use placeholders in exported environment files |

---

## 18. Deliverables Completed

| Deliverable | Status |
|---|---|
| Postman collection | Completed |
| Postman environment | Completed |
| Smoke test folder | Completed |
| Users list and pagination folder | Completed |
| Single user folder | Completed |
| Create/update/delete folder | Completed |
| Authentication folder | Completed |
| Resources folder | Completed |
| Boundary tests folder | Completed |
| Contract tests folder | Completed |
| Delayed response folder | Completed |
| Regression tests folder | Completed |
| Evidence screenshots | Completed |
| Test plan alignment | Completed |
| Test cases alignment | Completed |
| Endpoint mapping alignment | Completed |
| Smoke tests documentation alignment | Completed |
| Regression tests documentation alignment | Completed |
| Contract tests documentation alignment | Completed |
| Test summary report | Completed |

---

## 19. Final Conclusion

All planned Postman API test folders were implemented, executed and evidenced successfully.

The project demonstrates structured API testing practice with:

- Clear Postman collection organization
- Documented requests
- Reusable validation logic
- Commented Postman scripts
- Positive and negative scenarios
- Boundary checks
- Contract validations
- Regression coverage
- Evidence-based execution
- Professional QA documentation

Final result:

```txt
PASSED
```