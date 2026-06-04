# Learn Automation — Playwright Tests

End-to-end UI tests for the [Learn Automation Courses](https://freelance-learn-automation.vercel.app)
demo app, written with [Playwright](https://playwright.dev) and TypeScript using the
Page Object Model (POM).

## Prerequisites

- [Node.js](https://nodejs.org) 18 or newer
- npm (ships with Node)

## Setup

Install dependencies and the Playwright browsers:

```bash
npm install
npx playwright install
```

## Running the tests

```bash
# run every test (headless)
npx playwright test

# run one spec
npx playwright test tests/freelance_loginTest.spec.ts

# watch the browser while it runs
npx playwright test --headed

# step through interactively (great for debugging)
npx playwright test --ui

# run a flow a few times to check it's not flaky
npx playwright test tests/freelance_loginTest.spec.ts --repeat-each=5
```

## Viewing the report

After a run, open the HTML report:

```bash
npx playwright show-report
```

On failure the report includes a screenshot, a video, and — on the first retry — a
full trace you can step through frame by frame in the trace viewer.

## Project structure

```
.
├── config/        # environment / config readers
├── fixtures/      # custom Playwright fixtures (injected page objects, login, etc.)
├── pages/         # Page Object Model classes (one per page or region)
├── testdata/      # JSON test data (users, enrollment details)
├── tests/         # spec files — the actual tests
├── utils/         # helpers (e.g. test-data generation)
├── playwright.config.ts
└── package.json
```

## Conventions

- **`baseURL`** is set in `playwright.config.ts`, so specs use relative paths like
  `page.goto('/cart')` instead of the full URL.
- **Page objects** hold locators and actions; **specs** own the assertions. Waits and
  preconditions may live in page objects; the test's verdict stays in the test.
- **Secrets are gitignored.** Never commit `.auth/`, `storageState.json`, or `.env` —
  they can contain live session tokens.

## CI

Tests run on every push via the GitHub Actions workflow in `.github/`.
Retries and single-worker mode are enabled automatically on CI (see `playwright.config.ts`).
