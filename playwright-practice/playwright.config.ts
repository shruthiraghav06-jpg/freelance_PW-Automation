import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  // Directory where test files live
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build on CI if test.only is accidentally left in
  forbidOnly: !!process.env.CI,

  // Retry failed tests — 2 times on CI, 0 locally
  retries: process.env.CI ? 2 : 0,

  // Parallel workers — 2 on CI, 50% of CPUs locally
  workers: process.env.CI ? 2 : '50%',

  // Reporters
  reporter: [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['list']
  ],

  use: {
    // Base URL from .env — no test ever hardcodes a URL
    baseURL: process.env.BASE_URL,

    // Capture trace on first retry only — keeps CI artifacts lean
    trace: 'on-first-retry',

    // Screenshot only on failure
    screenshot: 'only-on-failure',

    // Video only on failure
    video: 'retain-on-failure',

    // Browser window size
    viewport: { width: 1280, height: 720 },

    // Slow down actions by 0ms locally — increase if debugging
    actionTimeout: 15000,

    // Navigation timeout
    navigationTimeout: 30000,

    launchOptions:{
      slowMo:1000
    }

  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Global timeout per test
  timeout: 60000,

  // Output folder for traces, screenshots, videos
  outputDir: 'test-results/',
});