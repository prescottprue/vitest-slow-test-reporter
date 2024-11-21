# vitest-slow-test-reporter

> Vitest reporter for identifying slow tests

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Build Status][build-status-image]][build-status-url]
[![License][license-image]][license-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

## Usage

### Pre-Setup

1. If you do not already have it installed, install `vitest`

### Setup
1. Install vitest-slow-test-reporter: `npm i --save-dev vitest-slow-test-reporter` or `yarn add -D vitest-slow-test-reporter`
1. Use `vitest-slow-test-reporter` by calling vitest with reporter flag:
    ```bash
    npx vitest --reporter=vitest-slow-test-reporter
    ```
    or add vitest-slow-test-reporter to your config in `vitest.config.js`:

    ```ts
    import { defineConfig } from 'vitest/config';
    import { VitestSlowTestReporter } from 'vitest-slow-test-reporter'

    export default defineConfig({
      test: {
        reporters: [new VitestSlowTestReporter()],
      },
    });
    ```

[npm-image]: https://img.shields.io/npm/v/vitest-slow-test-reporter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/vitest-slow-test-reporter
[npm-downloads-image]: https://img.shields.io/npm/dm/vitest-slow-test-reporter.svg?style=flat-square
[build-status-image]: https://img.shields.io/github/actions/workflow/status/prescottprue/vitest-slow-test-reporter/publish.yml?branch=main&style=flat-square
[build-status-url]: https://github.com/prescottprue/vitest-slow-test-reporter/actions/workflows/publish.yml
[license-image]: https://img.shields.io/npm/l/vitest-slow-test-reporter.svg?style=flat-square
[license-url]: https://github.com/prescottprue/vitest-slow-test-reporter/blob/master/LICENSE
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release