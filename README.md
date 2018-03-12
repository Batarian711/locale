# EF Locale

[![CircleCI][circleci-badge]][circleci]
[![Code Coverage][codecov-badge]][codecov]
[![Greenkeeper][greenkeeper-badge]][greenkeeper]
[![NPM Version][npm-version-badge]][npm]
[![License][license-badge]][license]
[![NPM Weekly Downloads][npm-downloads-week-badge]][npm]
[![NPM Monthly Downloads][npm-downloads-month-badge]][npm]
[![NPM Yearly Downloads][npm-downloads-year-badge]][npm]
[![NPM Total Downloads][npm-downloads-total-badge]][npm]
[![Node Version][node-version-badge]][node-version]
[![Semantic Release][semantic-release-badge]][semantic-release]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![Conventional Commits][coventional-commits-badge]][coventional-commits]

> Provides TypeScript interfaces, class and defines for understanding a language locale.

---

**WARNING:** Project is under heavy development but follows semantic versioning, expect breakage until this warning is removed.

---

## Usage

```
yarn add @ef-carbon/locale
```

Read the [documentation][docs] for API guidance.

## Development

The project attempts to make the workflow as frictionless as possible. Any suggestions to improve the work processes are
welcomed :metal:

### Getting Started

Get up and running using [yarn][yarn]:

```
yarn install
yarn build
```

### IDE

Install [Atom][atom] [IDE][atom-ide] with the [TypeScript][atom-ide-typescript] and [XTerm][atom-xterm] plugins

### Hacking

Run `yarn watch:test`. Unit tests will re-run after any changes to the source code.

### Testing

The unit tests use [Jest][jest].

### Releases

Releases are performed automatically via [`semantic-release`][semantic-release]. When commits are merged to `master`
the [Conventional Commits][coventional-commits] are read and version number determined automatically.

### Scripts

There are various scripts available that provide the workflow steps for the project:

| Name               | Description                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `commit`           | Starts the [commitizen][commitizen] CLI                                                         |
| `distclean`        | Returns the project to initial state                                                            |
| `clean`            | Returns the project to postinstall state                                                        |
| `build`            | Builds the project                                                                              |
| `build:ts`         | Builds the TypeScript files into the JavaScript output                                          |
| `build:rollup`     | Rollups the ECMAscript modules in CommonJS modules                                              |
| `format`           | Formats the project                                                                             |
| `lint`             | Lints the project                                                                               |
| `lint:fix`         | Fixes up simple linting rule violations automatically                                           |
| `lint:ci`          | Validates the CI configuration file                                                             |
| `lint:ts`          | Performs linting of TypeScript files                                                            |
| `lint:ts:fix`      | Fixes up simple rule violations in TypeScript files                                             |
| `lint:format`      | Checks the formatting of the TypeScript source code                                             |
| `lint:format:fix`  | Automatically fixes up formatting violations                                                    |
| `lint:commit`      | Makes sure the commits follow the [conventional commits][coventional-commits] style             |
| `watch:ts`         | Watches the TypeScript source files for changes                                                 |
| `watch:test`       | Re-runs unit tests on any file changes                                                          |
| `test`             | Tests the project                                                                               |
| `coverage`         | Provides test coverage statistics for the project                                               |
| `ci`               | Runs a set of commands that are needed to pass the CI workflow                                  |
| `fix`              | Performs formatting and linting fixes                                                           |
| `docs`             | Builds API documentation                                                                        |
| `docs:open`        | Opens up the built API documentation in the default browser                                     |
| `generate`         | Generates TypeScript files using the built binary                                               |

## Reports

### Coverage

[![Code Coverage Graph][codecov-graph]][codecov]

[greenkeeper]: https://greenkeeper.io/
[greenkeeper-badge]: https://badges.greenkeeper.io/ef-carbon/locale.svg
[docs]: https://ef-carbon.github.io/locale/
[yarn]: https://yarnpkg.com
[npm]: https://www.npmjs.com/package/@ef-carbon/locale
[codecov]: https://codecov.io/gh/ef-carbon/locale
[codecov-badge]: https://img.shields.io/codecov/c/token/Re0IsMvcF1/github/ef-carbon/locale.svg
[codecov-graph]: https://codecov.io/gh/ef-carbon/locale/branch/master/graphs/commits.svg
[npm-version-badge]: https://img.shields.io/npm/v/@ef-carbon/locale.svg
[npm-downloads-week-badge]: https://img.shields.io/npm/dw/@ef-carbon/locale.svg
[npm-downloads-month-badge]: https://img.shields.io/npm/dm/@ef-carbon/locale.svg
[npm-downloads-year-badge]: https://img.shields.io/npm/dy/@ef-carbon/locale.svg
[npm-downloads-total-badge]: https://img.shields.io/npm/dt/@ef-carbon/locale.svg
[license]: https://choosealicense.com/licenses/mit/
[license-badge]: https://img.shields.io/npm/l/@ef-carbon/locale.svg
[node-version]: https://nodejs.org/en/download/releases/
[node-version-badge]: https://img.shields.io/node/v/@ef-carbon/locale.svg
[github-commits-badge]: https://img.shields.io/github/commits-since/ef-carbon/locale/latest.svg
[atom]: https://atom.io/
[atom-ide]: https://ide.atom.io/
[jest]: https://facebook.github.io/jest/
[atom-ide-typescript]: https://github.com/atom/ide-typescript
[atom-xterm]: https://atom.io/packages/atom-xterm
[circleci]: https://circleci.com/gh/ef-carbon/locale/tree/master
[circleci-badge]: https://img.shields.io/circleci/project/github/ef-carbon/locale.svg
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[coventional-commits]: https://conventionalcommits.org
[coventional-commits-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
