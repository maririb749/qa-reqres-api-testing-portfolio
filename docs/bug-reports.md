# Bug Reports — Reqres API Testing Portfolio

## 1. Document Information

| Field | Value |
|---|---|
| Project Name | Reqres API Testing Portfolio |
| Document Type | Bug Reports |
| Author | Mariana |
| Status | Completed |
| Version | 1.1 |
| Created Date | 2026-04-28 |
| Related Documents | docs/test-plan.md, docs/test-strategy.md, docs/endpoint-mapping.md, docs/test-cases.md, docs/smoke-tests.md, docs/regression-tests.md, docs/contract-tests.md |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |

---

## 2. Purpose

The purpose of this document is to define how defects, unexpected behaviors, API inconsistencies and testing observations will be documented during the Reqres API Testing Portfolio project.

This document includes:

- Defect management approach
- Bug classification rules
- Severity and priority guidelines
- API bug report template
- Evidence standards
- Example bug report structure
- Notes for demo API limitations

Final execution did not identify confirmed application defects in the Reqres API.

One CI/environment configuration issue was observed during GitHub Actions setup and documented as an observation, not as an application bug.

---

## 3. Defect Management Approach

Defects will be documented when the actual API behavior differs from the expected behavior defined in:

- docs/test-plan.md
- docs/test-strategy.md
- docs/endpoint-mapping.md
- docs/test-cases.md
- docs/contract-tests.md
- Postman request documentation
- Observed API behavior during execution

Before classifying an issue as a bug, the following checks should be performed:

1. Confirm the endpoint and HTTP method are correct.
2. Confirm the Postman environment variables are correctly configured.
3. Confirm the request body is valid for the scenario.
4. Confirm the expected result is based on documentation or observed API behavior.
5. Re-run the request to confirm reproducibility.
6. Check whether the issue is a real defect, a limitation of the demo API, an observation or a test case update.

---

## 4. Bug vs Observation vs Limitation

Not every unexpected behavior should automatically be classified as a bug.

| Classification | Meaning | Example |
|---|---|---|
| Bug | Actual behavior differs from the expected behavior and negatively affects the API behavior or contract | API returns 200 for a clearly invalid required authentication request |
| Observation | Behavior is unusual but not necessarily wrong based on current information | API accepts extra fields and echoes them back |
| Demo API Limitation | Behavior is caused by Reqres being a simulated/demo API | Created user is not persisted after POST request |
| Test Case Update | The test expectation was incorrect or incomplete | Expected a bug, but requirements show the behavior is valid |
| Improvement Suggestion | Behavior works, but could be clearer or more robust | Error message could be more specific |

---

## 5. API Bug Reporting Principles

A good API bug report should be:

- Clear
- Reproducible
- Evidence-based
- Specific
- Objective
- Linked to a test case when possible
- Linked to an endpoint ID when possible
- Focused on impact
- Written without assumptions that cannot be supported

For API testing, a bug report should include:

- Endpoint
- HTTP method
- Request URL
- Request headers, when relevant
- Request body, when relevant
- Expected status code
- Actual status code
- Expected response body
- Actual response body
- Contract impact
- Steps to reproduce
- Evidence
- Severity
- Priority
- Reproducibility
- Notes

---

## 6. Severity Guide

Severity describes the technical or user impact of the defect.

| Severity | Meaning | API Example |
|---|---|---|
| Critical | Blocks a critical flow or makes the API unusable | Login endpoint is unavailable for all valid users |
| High | Breaks an important API behavior with significant impact | Valid authentication request returns an unexpected error |
| Medium | Affects functionality but has a workaround or limited impact | Error message is incorrect for a negative scenario |
| Low | Minor issue with limited impact | Response message is unclear but status and contract are valid |

---

## 7. Priority Guide

Priority describes how soon the defect should be addressed.

| Priority | Meaning | API Example |
|---|---|---|
| High | Should be fixed as soon as possible | Critical authentication or contract failure |
| Medium | Should be fixed in a planned cycle | Inconsistent validation response |
| Low | Can be fixed later | Minor wording issue in error message |

Severity and priority are related, but they are not the same.

Example:

- A typo in an error message may have low severity and low priority.
- A login endpoint returning 500 for valid users may have critical severity and high priority.
- A small contract inconsistency in a rarely used endpoint may have medium severity and low priority.

---

## 8. Bug Status Guide

| Status | Meaning |
|---|---|
| New | Bug has been identified and documented |
| Open | Bug is accepted and waiting for investigation or fix |
| In Progress | Bug is being investigated or fixed |
| Ready for Retest | Bug fix is ready for QA validation |
| Reopened | Bug failed retest and needs further work |
| Closed | Bug was fixed and retested successfully |
| Won't Fix | Bug is acknowledged but will not be fixed |
| Not a Bug | Reported behavior is expected or valid |
| Duplicate | Bug already exists in another report |
| Blocked | Bug cannot be validated due to an external issue |

---

## 9. API-Specific Defect Categories

| Category | Description | Example |
|---|---|---|
| Status Code Issue | API returns an unexpected HTTP status | Expected 400, actual 200 |
| Response Contract Issue | Response structure does not match expected contract | Missing required field token |
| Data Type Issue | Field JSON type does not match expected type | id returned as string when number is expected |
| Value Constraint Issue | Field value does not respect expected constraint | error field is empty |
| Header Issue | Missing or incorrect header | JSON response missing application/json Content-Type |
| Error Handling Issue | Error response is unclear or incomplete | Missing error message for invalid login |
| Success Payload Leakage | Error response contains success-only fields | Error response includes token |
| Internal Information Leak | Response exposes implementation details | Response contains stack trace or SQL error |
| Performance Observation | Response time is unexpectedly high | Normal request takes several seconds |
| Environment Issue | Issue caused by local setup or variables | Wrong baseUrl or invalid environment variable |

---

## 10. API Bug Report Template

Use this template for each confirmed bug.

### BUG-XXX — Short descriptive title

| Field | Value |
|---|---|
| Bug ID | BUG-XXX |
| Status | New |
| Severity | To be defined |
| Priority | To be defined |
| Reported By | Mariana |
| Reported Date | YYYY-MM-DD |
| Environment | Postman |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |
| Endpoint ID | EP-XXX |
| Related Test Case ID | TC-XXX |
| Related Contract ID | CON-XXX, if applicable |
| Method | GET / POST / PUT / PATCH / DELETE |
| Endpoint | /api/... |
| Reproducibility | Always / Intermittent / Once / Unable to reproduce |

#### Summary

Briefly describe the defect.

#### Preconditions

- Reqres API is available.
- Postman environment is selected.
- Required variables are configured.

#### Request Details

| Item | Value |
|---|---|
| Request URL | {{baseUrl}}/api/... |
| Method | GET / POST / PUT / PATCH / DELETE |
| Headers | Content-Type: application/json, if applicable |
| Request Body | N/A or JSON body |

#### Steps to Reproduce

1. Open Postman.
2. Select the Reqres API Environment.
3. Open the related request in the collection.
4. Send the request.
5. Observe the response status code and body.

#### Expected Result

Describe the expected API behavior.

Include expected status code and expected response contract when applicable.

#### Actual Result

Describe the actual API behavior.

Include actual status code and actual response body when applicable.

#### Contract Impact

Describe whether the issue affects:

- HTTP status
- Content-Type
- Required fields
- JSON data types
- Value constraints
- Error contract
- Success payload leakage
- Internal implementation leak

#### Evidence

| Evidence Type | File or Link |
|---|---|
| Screenshot | evidence/screenshots/BUG-XXX-description.png |
| Video | evidence/videos/BUG-XXX-description.mp4 |
| Newman Report | evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml |
| Postman Runner | evidence/reports/reqres-api-testing-portfolio/postman-runner/postman-runner-summary.png |

#### Impact Analysis

Explain the potential impact of the defect.

Example:

- Blocks authentication
- Breaks API contract
- Makes error handling unclear
- May confuse API consumers
- May expose internal implementation details

#### Notes

Add extra context, assumptions or investigation details.

---

## 11. Example Bug Report

This is an example only. It is not a confirmed bug found in the current execution.

### BUG-EXAMPLE-001 — Login error response returns empty error message

| Field | Value |
|---|---|
| Bug ID | BUG-EXAMPLE-001 |
| Status | Example |
| Severity | Medium |
| Priority | High |
| Reported By | Mariana |
| Reported Date | 2026-04-28 |
| Environment | Postman |
| Application Under Test | Reqres API |
| Base URL | https://reqres.in |
| Endpoint ID | EP-024 |
| Related Test Case ID | TC-017 |
| Related Contract ID | CON-014 |
| Method | POST |
| Endpoint | /api/login |
| Reproducibility | Always |

#### Summary

The login endpoint returns an error response with an empty error message when the password field is missing.

#### Preconditions

- Reqres API is available.
- Reqres API Environment is selected in Postman.
- baseUrl variable is configured.
- validEmail variable is configured.

#### Request Details

| Item | Value |
|---|---|
| Request URL | {{baseUrl}}/api/login |
| Method | POST |
| Headers | Content-Type: application/json |
| Request Body | {"email":"{{validEmail}}"} |

#### Steps to Reproduce

1. Open Postman.
2. Select the Reqres API Environment.
3. Open the request POST - Login without password.
4. Send the request with only the email field in the body.
5. Observe the response body.

#### Expected Result

The API should return status code 400.

The response body should include a non-empty error message coherent with the missing password scenario.

Example expected response:

    {
      "error": "Missing password"
    }

#### Actual Result

The API returns status code 400, but the error message is empty.

Example actual response:

    {
      "error": ""
    }

#### Contract Impact

| Contract Area | Impact |
|---|---|
| HTTP status | No impact |
| Content-Type | No impact |
| Error contract | Impacted |
| Error message | Impacted |
| Success payload leakage | No impact |
| Internal leak | No impact |

#### Evidence

| Evidence Type | File or Link |
|---|---|
| Screenshot | evidence/screenshots/BUG-EXAMPLE-001-login-empty-error.png |
| Postman Runner | evidence/screenshots/BUG-EXAMPLE-001-runner-result.png |

#### Impact Analysis

This issue may make the API harder to consume because clients do not receive a clear reason for the failed login request.

It may also reduce the quality of validation feedback for API consumers.

#### Notes

This example is included to demonstrate the expected bug report format.

This example should remain only as a reference format unless a confirmed defect is identified in future executions.

---

## 12. Observation Template

Use this template when the behavior is unusual but not confirmed as a bug.

### OBS-XXX — Short descriptive title

| Field | Value |
|---|---|
| Observation ID | OBS-XXX |
| Status | New |
| Reported By | Mariana |
| Reported Date | YYYY-MM-DD |
| Environment | Postman |
| Endpoint ID | EP-XXX |
| Related Test Case ID | TC-XXX |
| Method | GET / POST / PUT / PATCH / DELETE |
| Endpoint | /api/... |

#### Summary

Briefly describe the observed behavior.

#### Why This Is an Observation

Explain why this is not currently classified as a confirmed bug.

#### Expected or Assumed Behavior

Describe the behavior that was expected or assumed.

#### Observed Behavior

Describe what actually happened.

#### Evidence

| Evidence Type | File or Link |
|---|---|
| Screenshot | evidence/screenshots/OBS-XXX-description.png |
| Report | evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml |

#### Notes

Add context, assumptions or follow-up questions.

---

## 13. Demo API Limitation Template

Use this template when behavior is related to Reqres being a demo API.

### LIM-XXX — Short descriptive title

| Field | Value |
|---|---|
| Limitation ID | LIM-XXX |
| Status | Documented |
| Reported By | Mariana |
| Reported Date | YYYY-MM-DD |
| Endpoint ID | EP-XXX |
| Related Test Case ID | TC-XXX |
| Method | GET / POST / PUT / PATCH / DELETE |
| Endpoint | /api/... |

#### Summary

Briefly describe the limitation.

#### Explanation

Explain why this behavior is considered a demo API limitation.

#### Impact on Testing

Describe how this limitation affects test design or expected results.

#### Notes

Add any relevant assumptions.

---

## 14. Evidence Standards

Bug evidence should make the issue easy to understand and reproduce.

Evidence should include at least one of the following:

- Screenshot from Postman
- Postman Collection Runner result
- Newman JUnit XML report
- GitHub Actions execution evidence
- Short video when useful
- Request and response details

Recommended file naming:

| Evidence Type | Naming Pattern |
|---|---|
| Screenshot | BUG-XXX-short-description.png |
| Video | BUG-XXX-short-description.mp4 |
| Postman Runner | BUG-XXX-runner-result.png |
| Newman JUnit Report | newman-results.xml |
| Postman Runner Summary | postman-runner-summary.png |

Evidence should be stored in:

| Evidence Type | Location |
|---|---|
| Screenshots | evidence/screenshots/ |
| Reports | evidence/reports/ |
| Videos, if added later | evidence/videos/ |

Note:

If a videos folder is used later, it should be created before adding video evidence.

---

## 15. Postman Bug Documentation Standards

When documenting a bug found in Postman, include:

- Collection folder name
- Request name
- Request description
- Endpoint ID
- Test case ID
- Contract ID, when applicable
- Environment used
- Request body
- Response status
- Response body
- Failed test assertion
- Evidence file

Example Postman request reference:

| Item | Value |
|---|---|
| Collection | Reqres API Testing Portfolio |
| Folder | 05 - Authentication |
| Request | POST - Login without password |
| Related Test Case | TC-017 |
| Related Contract | CON-014 |

---

## 16. Defect Review Checklist

Before reporting a bug, confirm:

| Check | Yes/No |
|---|---|
| Endpoint is correct |  |
| HTTP method is correct |  |
| Environment variables are correct |  |
| Request body matches the scenario |  |
| Expected result is documented |  |
| Actual result is reproducible |  |
| Evidence was captured |  |
| Severity was assigned |  |
| Priority was assigned |  |
| Related test case ID was added |  |
| Related endpoint ID was added |  |
| Contract impact was checked |  |
| Internal leak check was performed |  |
| Success payload leakage was checked |  |

---

## 17. Current Bug Status

No confirmed application defects were found during the final documented execution.

The Reqres API behaved according to the expected results defined in the project documentation and implemented Postman assertions.

| Bug ID | Title | Severity | Priority | Status |
|---|---|---|---|---|
| N/A | No confirmed application bugs found | N/A | N/A | N/A |

Final execution summary:

| Evidence Type | Status |
|---|---|
| Postman request screenshots | Completed |
| Postman Runner summary evidence | Completed |
| Newman CI execution report | Completed |
| GitHub Actions execution | Passed |

---

## 18. Observations and Setup Issues

The following item was identified during project setup. It was not classified as an application bug because the API behavior was correct: requests with an invalid or missing API key were rejected.

### OBS-001 — GitHub Actions initially failed due to invalid Reqres API key configuration

| Field | Value |
|---|---|
| Observation ID | OBS-001 |
| Status | Resolved |
| Reported By | Mariana |
| Environment | GitHub Actions |
| Related Area | Newman CI execution |
| Classification | Environment / CI Configuration Issue |
| Application Under Test | Reqres API |
| Impact | Newman workflow failed before the API key was correctly configured |

#### Summary

During GitHub Actions setup, the Newman workflow initially failed because all API requests returned `403 Forbidden` with an `invalid_api_key` response.

#### Why This Is Not an Application Bug

This was not classified as a Reqres API defect because the API correctly rejected requests with an invalid or missing API key.

#### Root Cause

The `REQRES_API_KEY` repository secret was not correctly configured with the valid Reqres API key value.

#### Resolution

The valid Reqres API key was added as a GitHub Actions repository secret named `REQRES_API_KEY`.

The workflow was re-run successfully after the secret was corrected.

#### Evidence

| Evidence Type | File or Location |
|---|---|
| GitHub Actions | Successful Newman API Tests workflow run |
| Newman Report | `evidence/reports/reqres-api-testing-portfolio/newman/newman-results.xml` |

---

## 20. Notes and Assumptions

- Reqres is a demo API, so some behaviors may be simulated.
- Some create, update and delete operations may not persist data.
- A behavior should not be classified as a bug without checking the expected result.
- Some findings may be documented as observations or limitations instead of bugs.
- Error responses should be validated for message quality, success payload leakage and internal information leaks.
- Bug reports should be updated if future executions identify confirmed defects.
- Evidence should reference the final Postman, Newman and GitHub Actions execution artifacts when applicable.
