<h3 align="center">
	<img width="380" src="https://github.com/DeviantJS/angular-seed-ultimate/blob/master/.github/assets/webpack-multi-logo.png" alt="Angular2 Seed Ultimate">
	<br>
</h3>

## Angular2 Seed Ultimate
Reactive Angular2 Multi-Platform Seed with tooling for Web, Mobile Native Platforms **powered by** [Webpack2](https://webpack.github.io).
> &nbsp;&nbsp;**Build Status (#master):** &nbsp;&nbsp;[![CircleCI](https://circleci.com/gh/DeviantJS/angular-seed-ultimate.svg?style=svg)](https://circleci.com/gh/DeviantJS/angular-seed-ultimate)

> &nbsp;&nbsp;**Coverage (#master):** &nbsp;&nbsp;[![Test Coverage](https://codeclimate.com/repos/57f0e0791705f46ca20008da/badges/8f54abf5258572962d91/coverage.svg)](https://codeclimate.com/repos/57f0e0791705f46ca20008da/coverage)

> &nbsp;&nbsp;**Code Quality Score:** &nbsp;&nbsp;[![Code Climate](https://codeclimate.com/repos/57f0e0791705f46ca20008da/badges/8f54abf5258572962d91/gpa.svg)](https://codeclimate.com/repos/57f0e0791705f46ca20008da/feed)

> &nbsp;&nbsp;**Code Issues:** &nbsp;&nbsp;[![Issue Count](https://codeclimate.com/repos/57f0e0791705f46ca20008da/badges/8f54abf5258572962d91/issue_count.svg)](https://codeclimate.com/repos/57f0e0791705f46ca20008da/feed)

## Table of Contents
- [What's Inside](#whats-inside)
- [Up and Running](#up-and-running)
- [Development Experience](#development-experience)
- [Supported Versions](#supported-versions)
- [Usage](#usage)
- [Testing](#testing)
- [Debugging](#debugging)
- [Security & Updates](#security--updates)
- [Changelog & Release](#changelog--release)

#### What's inside?:
- [Angular2](https://github.com/angular/angular): Angular is a development platform for building mobile and desktop web applications.
  - [ngrx/store](https://github.com/ngrx/store): RxJS powered state management, inspired by **Redux**.
- [Angular Universal](https://github.com/angular/universal): Universal (isomorphic) javascript support for Angular2.
- [NativeScript](https://www.nativescript.org/): Cross platform mobile (w/ native UI) apps.
- [Webpack2](https://github.com/webpack/webpack): A bundler for javascript and friends.
  - [Tree Shaking](https://github.com/webpack/webpack/issues/2867): Keeping those deps tidy ( when it's not broken :/ )
  - [DLL Plugin](https://github.com/webpack/webpack/tree/master/examples/dll): for faster development builds.
  - [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html): a feature to inject updated modules into the active runtime.
  - [Http2 Aggressive Splitting](https://github.com/webpack/webpack/tree/master/examples/http2-aggressive-splitting): Because faster is better.
- [SCSS](http://sass-lang.com/): CSS extension language.

Please note this is not an `all the things` starter project. Libs like `Material2 & Bootstrap` will not be added though adding a Wiki page for integration instructions is always welcome.
What you see listed above is the limit of what will be added, we want this concise and as lean as possible allowing for the developer to choose what libs best meet his/her requirements.

#### Up and Running
This build supports Yarn. To get this build up and running, run the following commands.

```
yarn
yarn start
```
Navigate to `http://localhost:4200/` and you are good to go!


#### Development Experience

#### Supported Versions

Please check the [Supported Versions](https://github.com/DeviantJS/angular2-webpack-multiplatform/blob/master/.github/SUPPORTED_VERSIONS.md) documentation **prior** to leveraging the tools for your project or submitting issues.

#### Usage

#### Testing

#### Debugging

#### Security & Updates

#### Changelog & Release

_Changelog generation is provided by `conventional-changelog` & `cz-conventional-changelog`_

- We follow the [AngularJS Commit Messsage Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines), [Commitizen](https://github.com/commitizen/cz-cli) does this for us.
- The `CHANGELOG.md` is generated from this specific commit message formatting.
- Workflow for changelog & release can be found [here](https://github.com/DeviantJS/angular-seed-ultimate/tree/master/scripts/release)

#### Release Packages
- This is a set of `tools` to **facilitate** the development of Angular2 Multi-Platform applications. The `demo applications` will **NOT** be included in release packages.
- If you choose to attempt to modify & extend the `demo applications` **YOU ARE ON YOUR OWN**

##### Package Contents
- All of the core tools, utilities & configuration files
- Minimal Angular2 application, framework configs and test configs.
- Minimal NativeScript application, framework configs and test tools.
- Minimal Electron application, framework configs and test tools.

Again, the `demo applications` exist to test the tools can support the core libraries listed above and validate the development experience / performance.
Using them as a general guide for config / best practices is fine but you are doing yourself a `disservice` by using them as a base for new applications.

Building from `Hello World` will save you time in the long run and you learn more when you don't `cmd+C`.
