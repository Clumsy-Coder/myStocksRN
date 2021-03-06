# myStocksRN

[![GitHub release](https://img.shields.io/github/release/clumsy-coder/myStocksRN.svg)](https://gitHub.com/clumsy-coder/myStocksRN/releases/)

![Android APK Build](https://github.com/Clumsy-Coder/myStocksRN/workflows/Android%20APK%20Build/badge.svg)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![codecov](https://codecov.io/gh/Clumsy-Coder/myStocksRN/branch/master/graph/badge.svg?token=WC24BII8QU)](https://codecov.io/gh/Clumsy-Coder/myStocksRN)

Display Stocks using React Native written in Typescript

# Screenshots

<table>
  <tr>
    <td><img src="docs/assets/home-screen-stocks-short.jpg" alt=""></td>
    <td><img src="docs/assets/search-screen-results.jpg" alt=""></td>
  </tr>
  <tr>
    <td><img src="docs/assets/stock-details-1m.jpg" alt=""></td>
    <td><img src="docs/assets/stock-details-ytd.jpg" alt=""></td>
  </tr>
</table>

---

<!-- TOC -->

- [myStocksRN](#mystocksrn)
- [Screenshots](#screenshots)
- [npm scripts](#npm-scripts)
  - [common used scripts](#common-used-scripts)
- [building](#building)
  - [android](#android)
    - [Debug](#debug)
    - [Release](#release)
      - [Android release keystore](#android-release-keystore)
      - [Gradle variables](#gradle-variables)
- [Developer notes](#developer-notes)
  - [Tools used in the project](#tools-used-in-the-project)

<!-- /TOC -->

# npm scripts

- **start** start react native server
- **test** run tests
- **lint** lint code using typescript and eslint
- **lint:eslint** lint code using eslint
- **lint:tsc** lint code using typescript
- **prettier:write** prettify code that have file extension of .js, .jsx, .ts, .tsx and .json
- **android:clean** clean android builds and caches
- **android:debug** build android debug APK and launch in simulator or tethered android device
- **android:release** build android release APK and launch in simulator or tethered android device
- **build:android:all** build android debug and release APK
- **build:android:debug** build android debug APK
- **build:android:release** build android release APK
- **fastlane:android:all** build android debug and release APK using fastlane
- **fastlane:android:debug** build android debug APK using fastlane
- **fastlane:android:release** build android release APK using fastlane

## common used scripts

- `yarn android:clean && yarn android:debug`
  - clean android caches
  - build android debug APK
  - launch on simulator or tethered android device
- `yarn android:clean && yarn android:release`
  - clean android caches
  - build android release APK
  - launch on simulator or tethered android device
- `yarn android:clean && yarn build:android:debug`
  - clean android caches
  - build android debug APK
- `yarn android:clean && yarn build:android:release`
  - clean android caches
  - build android release APK

# building

Assuming you have environment setup for building the **Android** APK [link](https://reactnative.dev/docs/environment-setup) using **React Native CLI Quickstart**

If you wish to build the app, you need `.env` file that contains **API_KEY**, **DEV_API_KEY** and **BUILD_VERSION**

obtain the api key from [iexcloud](https://iexcloud.io/)

DEV_API_KEY uses iexcloud sandbox API.
[Sandbox API KEY](https://intercom.help/iexcloud/en/articles/2915433-testing-with-the-iex-cloud-sandbox)

create a file in the **project root** with the filename `.env`

in the file, write the following

```
BUILD_VERSION=development
API_KEY=<api key>
DEV_API_KEY=<sandbox api key>
```

**IMPORTANT**

**DON'T** commit `.env` to git

## android

### Debug

Once you have the `.env` file setup, run the following command

`yarn build:android:debug`

You're build android APK is located in `<project root>/android/app/build/outputs/apk/debug/` folder

### Release

Along with the `.env` file, you will also need **Android release keystore** and **gradle variables**.

Android keystore will be used for building a release android APK.

Gradle variables are used for storing Android keystore credentials.

Once you have [Android release keystore](#android-release-keystore) and [Gradle variables](#gradle-variables) setup, run the following command

`yarn build:android:release`

You're build android APK is located in `<project root>/android/app/build/outputs/apk/release/` folder

#### Android release keystore

Follow instructions from [link](https://reactnative.dev/docs/signed-apk-android#generating-an-upload-key) to **ONLY** create the Android release keystore.

NOTE: use different password for alias password and android release keystore password. For better security.

Give the filename `release.keystore` and place it in `<project root>/android/app/` folder

#### Gradle variables

Gradle variables will contain filename of the Android release keystore, key alias name, key alias password and Android release keystore password

- Android release keystore: filename of the release keystore
- Alias name: alias used for signing
- Alias password: alias password
- Android release keystore password: Android release keystore password

Create a file named `release-keystore.properties` and place it in `<project root>/android/` folder

in the file, write the following

```
RELEASE_KEYSTORE=release.keystore
RELEASE_KEY_ALIAS_NAME=<alias name>
RELEASE_KEY_ALIAS_PASSWORD=<alias password>
RELEASE_KEY_STORE_PASSWORD=<android release keystore password>
```

- `RELEASE_KEYSTORE` is the filename of the android release keystore
- `RELEASE_KEY_ALIAS_NAME` is the alias name used when creating the android release keystore
- `RELEASE_KEY_ALIAS_PASSWORD` is the alias password
- `RELEASE_KEY_STORE_PASSWORD` is the android release keystore password

**IMPORTANT**

**DON'T** commit `release.keystore` and `release-keystore.properties` file to git.

---

# Developer notes

## Tools used in the project

Developing

- [Redux](https://redux.js.org/)
- [Redux saga](https://redux-saga.js.org/)
- [reselect](https://github.com/reduxjs/reselect)
- [re-reselect](https://github.com/toomuchdesign/re-reselect)
- [react-navigation](https://reactnavigation.org/)
- [axios](https://github.com/axios/axios)
- [native-base](https://nativebase.io/)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [victory-native](https://formidable.com/open-source/victory/)
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)

Testing

- [jest](https://jestjs.io/)
- [enzyme](https://enzymejs.github.io/enzyme/)
- [sinon](https://sinonjs.org/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/)

CI/CD

- [semantic release](https://semantic-release.gitbook.io/semantic-release/)
- [github-actions](https://github.com/features/actions)
- [~~circleci~~](https://circleci.com/)
- [fastlane](https://fastlane.tools/)

Miscellaneous

- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [commitizen](https://github.com/commitizen/cz-cli)
- [husky](https://github.com/typicode/husky)
- [redux-logger](https://github.com/LogRocket/redux-logger)
- [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
