## 1.0.0 (2020-08-04)


### ⚠ BREAKING CHANGES

* **datadomain:** Test case for fetchStockQuoteBatchSaga needs to be updated.
* **api:** File path for api needs to be refactored.

### Features

* **api:** add fetch StockQuoteBatch api ([0ae938b](https://github.com/Clumsy-Coder/myStocksRN/commit/0ae938bbc66fa89a24999cae587973377e741858))
* **datadomain:** add QuoteBatch DataDomain typescript interface ([e7d0002](https://github.com/Clumsy-Coder/myStocksRN/commit/e7d000285c074105cee3ac45c69f8bbbc8fe7b81))
* **route:** add button to About screen when viewing Home screen ([d7df17d](https://github.com/Clumsy-Coder/myStocksRN/commit/d7df17d5a47b3d48e0967cc24af9fc508a1b4002))
* **route:** add Search screen to react navigation routes ([3ae73b6](https://github.com/Clumsy-Coder/myStocksRN/commit/3ae73b62b4d201e3ab1ffad5078008f964535e6d))
* **route:** add type definitions for 'Search' and 'About' screens app route ([a58191a](https://github.com/Clumsy-Coder/myStocksRN/commit/a58191a55526a0358daffdd369fd12c67cd201f4))
* **route:** clear search keyword when pressing back button in Search screen ([1ab1724](https://github.com/Clumsy-Coder/myStocksRN/commit/1ab172432c79891bd78295b43106b7a3e6aa9864))
* **saga:** use new fetch stock quote batch api in Redux saga ([2365759](https://github.com/Clumsy-Coder/myStocksRN/commit/2365759d574e49cc13b9170b0404446588cc0eec))
* **screen:** display build version when displaying <About /> screen ([55c7c55](https://github.com/Clumsy-Coder/myStocksRN/commit/55c7c557e93f87f51265518f705047cc434e2e42))
* **screen:** fetch stocks symbol metadata during loading ([27ca6a3](https://github.com/Clumsy-Coder/myStocksRN/commit/27ca6a3e2f78b72a398abaac2f63a7410e0cb192))
* **search:** add component to display search results ([a3b8cfc](https://github.com/Clumsy-Coder/myStocksRN/commit/a3b8cfc391612580b029c976d81580d2e7ac948c))
* **search:** add right arrow icon when display search results ([5913011](https://github.com/Clumsy-Coder/myStocksRN/commit/5913011c4f181362241b3a756a1357758f9fb24a))
* **search:** add search bar in the Search screen ([d643eac](https://github.com/Clumsy-Coder/myStocksRN/commit/d643eacbb85fffa325f62321e652740f83ed4483))
* **search:** make the search results scrollable ([cc71c7d](https://github.com/Clumsy-Coder/myStocksRN/commit/cc71c7da8c3f1e34014b51f79d0703d72763be46))
* **stockdetails:** fetch stock chart as soon componentDidMount is run ([31e05d4](https://github.com/Clumsy-Coder/myStocksRN/commit/31e05d438ecc88f2688232eb6527fcabd0dcbcfc))
* **utilities:** add a function for filtering search results ([b8a2838](https://github.com/Clumsy-Coder/myStocksRN/commit/b8a2838f88a5d0f2d75a24faeeaba47704e1efe8))


### Bug Fixes

* **api:** fix filepath import when importing API ([76e31f1](https://github.com/Clumsy-Coder/myStocksRN/commit/76e31f115457b76cb3c11a2a6c27fe06277ba1e9))
* **app:** fix eslint warning 'Missing return type on function' ([efc72d9](https://github.com/Clumsy-Coder/myStocksRN/commit/efc72d9defc9a2abcd4f21270202da9bbc207562))
* **ci:** Reduce prefix-development string length to 15 characters ([fd0b7d0](https://github.com/Clumsy-Coder/myStocksRN/commit/fd0b7d07b658ca42a289192118fbeb36489a2f78))
* **eslint:** ignore .eslintrcjs file when running eslint ([8ae9bc5](https://github.com/Clumsy-Coder/myStocksRN/commit/8ae9bc56098d225a78beaf49264812bcfa43a9f1))
* **home:** add missing prop 'fetchSymbolsMeta' when shallow rendering <Home /> component ([141989c](https://github.com/Clumsy-Coder/myStocksRN/commit/141989c86d03c0d81e3ce2c37ce7b029dceffb70))
* **redux:** fix eslint warning; 'StocksDataDomain' is defined but never used ([f8c910e](https://github.com/Clumsy-Coder/myStocksRN/commit/f8c910e149d3e7dffd5a39e4f67d9d2bd0c963b9))
* **route:** fix eslint warning 'Inline style' ([7985431](https://github.com/Clumsy-Coder/myStocksRN/commit/7985431090763f6440f3411a311f5c1ea4bb2d98))
* **saga:** fix eslint error 'A Saga must handle its effects' errors (use try/catch)' ([8737de4](https://github.com/Clumsy-Coder/myStocksRN/commit/8737de43e088a0043635ec6bb099aa164bfa96d2))
* **saga:** fix eslint error; Don't use `{}` as a type. `{}` actually means "any non-nullish value" ([e4bd0a4](https://github.com/Clumsy-Coder/myStocksRN/commit/e4bd0a4edc8cedff893cfdee9ee40302577bdec0))
* **saga:** fix eslint warning 'Missing return type on function' ([e6cdbe6](https://github.com/Clumsy-Coder/myStocksRN/commit/e6cdbe60bb27d491f6c0eb1c1def61d9e0107f74))
* **saga:** fix eslint warnings for Stocks redux saga ([4cb49e9](https://github.com/Clumsy-Coder/myStocksRN/commit/4cb49e9a952f734ec5f82b426e5ca3ae86083978))
* **saga:** pass the error variable when handling catch case when running fetchStockQuoteBatchSaga ([4962dd6](https://github.com/Clumsy-Coder/myStocksRN/commit/4962dd69d0fa4d5d034c2890390201f83b8dbc56))
* **search:** fix eslint warnings for Search screen ([76247f7](https://github.com/Clumsy-Coder/myStocksRN/commit/76247f70c47a1d1ee59ebcc5f7a69ef96156e437))
* **selector:** update test regarding commit 1b53146ab510348546ad24f1bd3cefffa2256a8a ([f68c6dd](https://github.com/Clumsy-Coder/myStocksRN/commit/f68c6ddee54edac59d824c6d04277c7ad7df079c))
* **snapshot:** update __tests__/App.test.ts snapshot ([50b9666](https://github.com/Clumsy-Coder/myStocksRN/commit/50b9666c0078e9ee13696256f611e96a8b7db4af))
* **test:** fix eslint warnings for Home.test.tsx ([4abd797](https://github.com/Clumsy-Coder/myStocksRN/commit/4abd797a63cd85c36b4caf46b4ef5588184ec655))
* **test:** fix eslint warnings for Saga.test.ts ([3584980](https://github.com/Clumsy-Coder/myStocksRN/commit/3584980038315726f2b7100e66e867a58c23915a))
* **tests:** fix eslint warning; 'Reducer' is defined but never used ([ea5486c](https://github.com/Clumsy-Coder/myStocksRN/commit/ea5486ccf0f3c196842c855abd56f909a71736ae))


### Performance Improvements

* **search:** remove value property in AutoComplete component ([dc4ac6f](https://github.com/Clumsy-Coder/myStocksRN/commit/dc4ac6f74c1f0fef7386f5efe781fbb87e40f9d1))


### Documentation

* **keystats:** write docs why checking for keyStat to be null cannot be tested ([2c19658](https://github.com/Clumsy-Coder/myStocksRN/commit/2c19658ab460c50ba2dbc95ead15baf11d1fb9f9))
* **readme:** add commitizen friendly badge on README.md ([4752fbd](https://github.com/Clumsy-Coder/myStocksRN/commit/4752fbd5ae092db436740efc730e6b37d84890c6))
* **searchresultitem:** add docs on why prop 'onPress' is required for this component ([ecd5fa0](https://github.com/Clumsy-Coder/myStocksRN/commit/ecd5fa051ab20e0567ef71451a1d86be596a73e9))


### Code Refactoring

* **api:** fix api url used for fetching data ([77d2780](https://github.com/Clumsy-Coder/myStocksRN/commit/77d27807db9828992452431b4781f538c9952654))
* **api:** rename fetch stock quote batch api function name ([f31a316](https://github.com/Clumsy-Coder/myStocksRN/commit/f31a316142379b888b32245da0718971cfb17984))
* **api:** rename share/Utilties.ts to share/Api.ts ([55e640c](https://github.com/Clumsy-Coder/myStocksRN/commit/55e640cc48a2c599c113f33e43043c6233d5745f))
* **api:** rename Utilities.test.ts to Api.test.ts regarding commit 4216ab7 ([3260663](https://github.com/Clumsy-Coder/myStocksRN/commit/32606631a3c1775615a4935461113aa15401bdec))
* **datadomain:** change datatype when receiving stock quote batch data ([7be67c3](https://github.com/Clumsy-Coder/myStocksRN/commit/7be67c315a1dfab39390989121ad6c822efeac54))
* **keystats:** simplify code to display two keyStats per row ([d5ad55d](https://github.com/Clumsy-Coder/myStocksRN/commit/d5ad55d172da9b67607c705f0d60e48f69b729f4))
* **sagas:** update filepath when importing API ([2539936](https://github.com/Clumsy-Coder/myStocksRN/commit/2539936734909db4428edd7e81d8d4bcae78499c))
* **search:** add keyExtractor when generating SearchResultItem components ([31412ac](https://github.com/Clumsy-Coder/myStocksRN/commit/31412ac93ddddc45b6775063a4025ceb5bbb6aca))
* **search:** cleanup code. Remove unused code ([5ddea0c](https://github.com/Clumsy-Coder/myStocksRN/commit/5ddea0c17d95f8e3cd5fe20e9ee40edb1c8fd682))
* **search:** remove clearSearchKeyword action from SearchBar ([773e378](https://github.com/Clumsy-Coder/myStocksRN/commit/773e37836e0c72a5c2cf642246ced65e2897b06e))
* **search:** remove code that debounce filter search after search keyword has been typed ([5b413ea](https://github.com/Clumsy-Coder/myStocksRN/commit/5b413ea05b467e00ce067e27948a6c491ed29943))
* **search:** remove React hooks useState ([7e038bc](https://github.com/Clumsy-Coder/myStocksRN/commit/7e038bc424f07e38f827824f1d2b633e82616238))
* **searchbar:** move component to src/containers/SearchBar/ ([b42763d](https://github.com/Clumsy-Coder/myStocksRN/commit/b42763dcd9b717ad3cc7c8370933a7e18cc76108))
* **searchbar:** rename unconnected component to SearchBar ([9dfd72e](https://github.com/Clumsy-Coder/myStocksRN/commit/9dfd72e785e23a604414b8299ec508ae30f02891))
* **searchscreen:** remove react-redux connected code ([a7762dc](https://github.com/Clumsy-Coder/myStocksRN/commit/a7762dc30092d5fa5f83027c4173fdd223d0da2d))


### Tests

* **api:** add test for fetchStockQuoteBatchUrl ([c48965a](https://github.com/Clumsy-Coder/myStocksRN/commit/c48965a79db32dca15fde91363829bf84d6e710e))
* **keystats:** update snapshot regarding commit c01f7448ec67ad94f3f474d0c2edf7976afa2824 ([03b90e0](https://github.com/Clumsy-Coder/myStocksRN/commit/03b90e04ea98adf6c1ce8488617b114db4b64f42))
* **saga:** update test fetchStockQuoteBatchSaga saga to handle success and failure cases ([59812ad](https://github.com/Clumsy-Coder/myStocksRN/commit/59812ad176de1dfbdb1ead81bd6523f855fbe50c))
* **saga:** update test to work with fetchStockQuoteBatchSaga saga ([56ffc4f](https://github.com/Clumsy-Coder/myStocksRN/commit/56ffc4fc92983ed7ccc80bfbc8460cb8f2ed8636))
* **screen:** update test snapshot for <About /> screen ([c8b7f86](https://github.com/Clumsy-Coder/myStocksRN/commit/c8b7f86b3871f85d7094390e5a5ed98b1121091a))
* **searchbar:** add tests for <SearchBar /> container ([0279860](https://github.com/Clumsy-Coder/myStocksRN/commit/0279860cc52e082738306d26c52f8380c448b4b4))
* **searchresultitem:** add tests for <SearchResultItem /> component ([9ffe0dd](https://github.com/Clumsy-Coder/myStocksRN/commit/9ffe0dda593e2ccdf5417debe852961cb18fc995))
* **searchscreen:** add tests for <Search /> screen ([7e2a2e3](https://github.com/Clumsy-Coder/myStocksRN/commit/7e2a2e37ef5f8205fd27e413a3676ec0c336eb46))
* **setup:** mock 'navigate' function from react-navigation 'useNavigation' hook ([f7ddc0c](https://github.com/Clumsy-Coder/myStocksRN/commit/f7ddc0c37fb0d2736907eecb5df902672e6bbaf4))
* **stockcard:** add test to check onPress event handling ([8337ef9](https://github.com/Clumsy-Coder/myStocksRN/commit/8337ef902ae5aa77540e82f4c7459f9d887c674f))


### Styles

* **github-actions:** add new lines to make the config more readable ([89e9dd7](https://github.com/Clumsy-Coder/myStocksRN/commit/89e9dd70281adbda570bbbe1dd4dd210738466e7))


### Miscellaneous Chores

* **config:** disable collecting jest test coverage by default ([2b2db09](https://github.com/Clumsy-Coder/myStocksRN/commit/2b2db098bd81d0e13e7f6a943a8c2bc47c6210d4))
* **config:** ignore .eslintrc.js and .prettierrc.js when generating jest test coverage ([a906bec](https://github.com/Clumsy-Coder/myStocksRN/commit/a906bec37ad49236286d945818ec30334b84f701))
* **config:** ignore index.js when generating jest test coverage ([255f141](https://github.com/Clumsy-Coder/myStocksRN/commit/255f1410b64f0ee624a18c1ce5480f03dc690c43))
* **config:** remove setupFilesAfterEnv property in jest.config.js ([83a47b6](https://github.com/Clumsy-Coder/myStocksRN/commit/83a47b6d439e4bd6bded2f07c3cd20606c491984))
* **config:** run jest tests in non-verbose mode ([41569f9](https://github.com/Clumsy-Coder/myStocksRN/commit/41569f92be4d1c0125264f92340e74c7bf9ca976))
* **config:** update jest transformIgnorePatterns ([0516e76](https://github.com/Clumsy-Coder/myStocksRN/commit/0516e767825a3752f22bc4ee1e04858d1492b433))
* **npm:** fix yarn.lock to be be mergeable with master branch ([7896129](https://github.com/Clumsy-Coder/myStocksRN/commit/78961294365c22815a448d9879b521ed2120996d))
* **npm:** remove standard-version npm package ([94c9582](https://github.com/Clumsy-Coder/myStocksRN/commit/94c9582421629faf767b8f217e92ff3ba7e91ef9))


### Continuous Integration

* **codeql:** disable codeql github actions ([0216251](https://github.com/Clumsy-Coder/myStocksRN/commit/0216251a74459b289d63534699acbb2d14c7a455))
* **codeql:** remove codeql github actions config file ([9813772](https://github.com/Clumsy-Coder/myStocksRN/commit/9813772eae74ca89481404172ce166062c5ee457))
* **dependbotautomerge:** fix what string to check for in pull request title ([9c0e8cd](https://github.com/Clumsy-Coder/myStocksRN/commit/9c0e8cd18d8634a4c354d8cc9ef8f88ed6ce09c8))
* **github-actions:** add CodeQL github actions ([a65b0b3](https://github.com/Clumsy-Coder/myStocksRN/commit/a65b0b3f0b5ed1c37897d35cb3b982a76e39a0bc))
* **github-actions:** add environment variables to the config ([fd45069](https://github.com/Clumsy-Coder/myStocksRN/commit/fd450693bbef75b8e88b98f60116cbc4312b7881))
* **github-actions:** create Release github action ([195001d](https://github.com/Clumsy-Coder/myStocksRN/commit/195001dd0d2dbd322bd4dbcfe919b24e1610a77e))
* **github-actions:** move release github action to androidBuild github action ([c499f42](https://github.com/Clumsy-Coder/myStocksRN/commit/c499f4247c4a985c9a8b34d520e1bd37132a5b67))
* **github-actions:** remove release github-action ([4f6e873](https://github.com/Clumsy-Coder/myStocksRN/commit/4f6e873fac3b3aa04cfcb188f6939defd01bf1af))
* **github-actions:** restrict 'release' job to only run when PR is merge and it's running on master ([c9c5824](https://github.com/Clumsy-Coder/myStocksRN/commit/c9c58247b44d26f9168a5afad14ff576255842b7))
* **github-actions:** run release github action when pull request is closed ([50d6c87](https://github.com/Clumsy-Coder/myStocksRN/commit/50d6c876f7f6cba0c1fa4a2c81db24960c4da899))
* **github-actions:** run release github action when pull request is merged to master ([add9fc8](https://github.com/Clumsy-Coder/myStocksRN/commit/add9fc8f16dc4f5f35f3911c0f8c6943225b2f78))
* **github-actions:** run tests and collect test coverage ([9faafec](https://github.com/Clumsy-Coder/myStocksRN/commit/9faafec3b818174d3a6745e1773033c0cccdbff1))
* **github-actions:** set a timelimit for all jobs ([e46aacd](https://github.com/Clumsy-Coder/myStocksRN/commit/e46aacd7060dc5c27acdce6b87a550898199ae50))
* **github-actions:** stop listening for pull request events in androidBuild github-action ([b7687ff](https://github.com/Clumsy-Coder/myStocksRN/commit/b7687ff9bdaa04a3468a25453a8a90137eb7e18c))
* **github-actions:** store Android APK build to github actions artifact ([f77ec89](https://github.com/Clumsy-Coder/myStocksRN/commit/f77ec89f982187364ac5f2d6934c5c2e282e38b4))
* **github-actions:** store artifacts when running from any branch ([082977b](https://github.com/Clumsy-Coder/myStocksRN/commit/082977bd9af17764a0e176b7b271af912e37f0c0))
* **github-actions:** store code coverage results to github actions artifact ([e6aeb73](https://github.com/Clumsy-Coder/myStocksRN/commit/e6aeb73ba499891b7693e6662ef91aaf0c3ed927))
* **github-actions:** store test results to github actions artifact ([3de4dc6](https://github.com/Clumsy-Coder/myStocksRN/commit/3de4dc6c5217884d076e93d7cb60f0f86ea8460a))
* **semantic-release:** add @semantic-release/changelog plugin ([633bfea](https://github.com/Clumsy-Coder/myStocksRN/commit/633bfea14ee5fdf76ce12635c5e7b8bbe7b16637))
* **semantic-release:** add @semantic-release/git plugin ([cb8fa14](https://github.com/Clumsy-Coder/myStocksRN/commit/cb8fa143cc1dd76e894e7460f39a700f685ac0f1))
* **semantic-release:** add Android APK to Github release ([0e0194e](https://github.com/Clumsy-Coder/myStocksRN/commit/0e0194e5a1d33ab0c79ea53dc0f3ac6b9faba153))
* **semantic-release:** add semantic-release config file ([4d9d1af](https://github.com/Clumsy-Coder/myStocksRN/commit/4d9d1aff5b07ac6aab22350e76d9f999d6e2e4ca))
* **semantic-release:** remove @semantic-release/exec plugin ([989430a](https://github.com/Clumsy-Coder/myStocksRN/commit/989430a94c03744edb6ecd7c6af068e6e0ced979))
* **semantic-release:** run release github action when a pull request is created for master branch ([dfcfd9a](https://github.com/Clumsy-Coder/myStocksRN/commit/dfcfd9a0a567e6cc5e12b3bcab5eaf5b1e9b544f))
* **semantic-release:** update filepath when releasing android APK asset ([0190e04](https://github.com/Clumsy-Coder/myStocksRN/commit/0190e041163f295e789a4207299925affade4292))
* add a prefix when creating new dependabot commits ([a899ceb](https://github.com/Clumsy-Coder/myStocksRN/commit/a899cebed639c35d62a0b233af989fad3b9efe2c))
* add prefix when creating commits for dependabot dependencies and devdependencies ([08a497e](https://github.com/Clumsy-Coder/myStocksRN/commit/08a497e217cae8043dc0142fe10c63a42deaceb2))
* Change pull request title to check for ([210b444](https://github.com/Clumsy-Coder/myStocksRN/commit/210b4442e5d9edeb9d84b1838c456daf7029dfa7))
* reduce pull request limit to 8 ([5334eeb](https://github.com/Clumsy-Coder/myStocksRN/commit/5334eeb688a14aea4ab6923df0f43e127bdfb87a))
* Refactor dependbotAutomerge.yml regarding commit 08a497e217cae8043dc0142fe10c63a42deaceb2 ([20b0576](https://github.com/Clumsy-Coder/myStocksRN/commit/20b0576f61a94b7e9171cdb16a59c227ccc3088a))


### Build System

* **config:** add a prepare commit message git hook to run commitizen ([2e209aa](https://github.com/Clumsy-Coder/myStocksRN/commit/2e209aa6a10a634c36426876b34e8e0788958f62))
* **config:** add commitizen adapter for producing standard commits ([c08b39b](https://github.com/Clumsy-Coder/myStocksRN/commit/c08b39b8a88c587e6dfd4f879943c1b2223cb910))
* **config:** remove prepare-commit-msg git hook from husky ([340efb7](https://github.com/Clumsy-Coder/myStocksRN/commit/340efb7abc2cb875a550837ada3908019b46d30b))
* **deps:** bump @react-navigation/native from 5.7.1 to 5.7.2 ([#152](https://github.com/Clumsy-Coder/myStocksRN/issues/152)) ([4b1c7de](https://github.com/Clumsy-Coder/myStocksRN/commit/4b1c7de55d704bd29cd349dd04c0f3d7e2d923c4))
* **deps:** bump @react-navigation/stack from 5.7.1 to 5.8.0 ([#151](https://github.com/Clumsy-Coder/myStocksRN/issues/151)) ([516c646](https://github.com/Clumsy-Coder/myStocksRN/commit/516c64622c0708ab530d30f0c7adc5ee1aa587b9))
* **deps:** bump react-redux from 7.2.0 to 7.2.1 ([#142](https://github.com/Clumsy-Coder/myStocksRN/issues/142)) ([afac49d](https://github.com/Clumsy-Coder/myStocksRN/commit/afac49dcc013f8c600475dd0ed27b857536a0482))
* **deps:** bump victory-native from 35.0.0 to 35.0.1 ([#156](https://github.com/Clumsy-Coder/myStocksRN/issues/156)) ([a2de269](https://github.com/Clumsy-Coder/myStocksRN/commit/a2de26993319193d30b9f91a1fedecbad8261a9e))
* **devDep:** bump @babel/core from 7.10.5 to 7.11.0 ([#158](https://github.com/Clumsy-Coder/myStocksRN/issues/158)) ([d1e2127](https://github.com/Clumsy-Coder/myStocksRN/commit/d1e212755276462b0c7a9f684778955bd4dd77e2))
* **devDep:** bump @babel/runtime from 7.10.5 to 7.11.0 ([#169](https://github.com/Clumsy-Coder/myStocksRN/issues/169)) ([f56668f](https://github.com/Clumsy-Coder/myStocksRN/commit/f56668f63a3be4c37b790754b9f7596031c3e1ad))
* **devDep:** bump @testing-library/react-native from 5.0.3 to 6.0.0 ([#139](https://github.com/Clumsy-Coder/myStocksRN/issues/139)) ([c51bf41](https://github.com/Clumsy-Coder/myStocksRN/commit/c51bf411d8308e5093876fb3ca5a784b6cc8ce97))
* **devDep:** bump @types/jest from 26.0.6 to 26.0.7 ([#140](https://github.com/Clumsy-Coder/myStocksRN/issues/140)) ([bfc12f0](https://github.com/Clumsy-Coder/myStocksRN/commit/bfc12f0d458a3017808d09aa6987a4c367e2bfac))
* **devDep:** bump @types/jest from 26.0.7 to 26.0.8 ([#159](https://github.com/Clumsy-Coder/myStocksRN/issues/159)) ([ec0bfb1](https://github.com/Clumsy-Coder/myStocksRN/commit/ec0bfb1892a5e8f10b0f7017053880c0ac6c0bf9))
* **devDep:** bump @types/react from 16.9.43 to 16.9.44 ([#167](https://github.com/Clumsy-Coder/myStocksRN/issues/167)) ([6a8a2c7](https://github.com/Clumsy-Coder/myStocksRN/commit/6a8a2c7ea5ebed9a7912b496011273eb4dcfdf9a))
* **devDep:** bump @types/react-test-renderer from 16.9.2 to 16.9.3 ([#181](https://github.com/Clumsy-Coder/myStocksRN/issues/181)) ([88452ad](https://github.com/Clumsy-Coder/myStocksRN/commit/88452ad0a5e740b4be2ccd8027362351fbd205ac))
* **devDep:** bump @typescript-eslint/eslint-plugin from 3.7.0 to 3.7.1 ([#146](https://github.com/Clumsy-Coder/myStocksRN/issues/146)) ([7242d02](https://github.com/Clumsy-Coder/myStocksRN/commit/7242d026b27a960b43799de4fd53363084fd2b35))
* **devDep:** bump @typescript-eslint/eslint-plugin from 3.7.1 to 3.8.0 ([#182](https://github.com/Clumsy-Coder/myStocksRN/issues/182)) ([2b7b72e](https://github.com/Clumsy-Coder/myStocksRN/commit/2b7b72e92170852e1a4cc22e4109a61a3bbc89e0))
* **devDep:** bump @typescript-eslint/parser from 3.7.0 to 3.7.1 ([#148](https://github.com/Clumsy-Coder/myStocksRN/issues/148)) ([7024de2](https://github.com/Clumsy-Coder/myStocksRN/commit/7024de26d4026544d835dc19d7d09d8dbe504c82))
* **devDep:** bump @typescript-eslint/parser from 3.7.1 to 3.8.0 ([#180](https://github.com/Clumsy-Coder/myStocksRN/issues/180)) ([b7445b0](https://github.com/Clumsy-Coder/myStocksRN/commit/b7445b0d11ab4e78bf941dee60d0d31beca28fcf))
* **devDep:** bump babel-jest from 26.1.0 to 26.2.1 ([#161](https://github.com/Clumsy-Coder/myStocksRN/issues/161)) ([4e64852](https://github.com/Clumsy-Coder/myStocksRN/commit/4e64852447bb79beec0ecb326238334588150a75))
* **devDep:** bump babel-jest from 26.2.1 to 26.2.2 ([#165](https://github.com/Clumsy-Coder/myStocksRN/issues/165)) ([1524391](https://github.com/Clumsy-Coder/myStocksRN/commit/152439143b3fe809a834262bcdfe57b199ffbc2d))
* **devDep:** bump eslint-plugin-jest from 23.18.0 to 23.18.2 ([#144](https://github.com/Clumsy-Coder/myStocksRN/issues/144)) ([2e8889f](https://github.com/Clumsy-Coder/myStocksRN/commit/2e8889f87fe5cacb993405d6324940a98e6cdb73))
* **devDep:** bump eslint-plugin-jest from 23.18.2 to 23.19.0 ([#147](https://github.com/Clumsy-Coder/myStocksRN/issues/147)) ([aa6f878](https://github.com/Clumsy-Coder/myStocksRN/commit/aa6f8780704925e303763ed3f03f02e2d93d8c0f))
* **devDep:** bump eslint-plugin-jest from 23.19.0 to 23.20.0 ([#168](https://github.com/Clumsy-Coder/myStocksRN/issues/168)) ([0df9bc1](https://github.com/Clumsy-Coder/myStocksRN/commit/0df9bc17d70db7faa22f855036d8e05ac6981461))
* **devDep:** bump eslint-plugin-react from 7.20.3 to 7.20.4 ([#145](https://github.com/Clumsy-Coder/myStocksRN/issues/145)) ([8a9a141](https://github.com/Clumsy-Coder/myStocksRN/commit/8a9a14157ac292de6cb1dec9e4b0f086b3da7c54))
* **devDep:** bump eslint-plugin-react from 7.20.4 to 7.20.5 ([#155](https://github.com/Clumsy-Coder/myStocksRN/issues/155)) ([5047a6f](https://github.com/Clumsy-Coder/myStocksRN/commit/5047a6f62f92f6ec1608cd94f6ad8ad5fa518514))
* **devDep:** bump jest from 26.1.0 to 26.2.2 ([#162](https://github.com/Clumsy-Coder/myStocksRN/issues/162)) ([d320692](https://github.com/Clumsy-Coder/myStocksRN/commit/d32069250ad5975c0e166b520898952d8930d669))
* **devDep:** bump jest-junit from 11.0.1 to 11.1.0 ([#143](https://github.com/Clumsy-Coder/myStocksRN/issues/143)) ([e07a9e4](https://github.com/Clumsy-Coder/myStocksRN/commit/e07a9e4129524c23dfd654a4ebf65270a14ef2d1))
* **devDep:** bump ts-jest from 26.1.3 to 26.1.4 ([#153](https://github.com/Clumsy-Coder/myStocksRN/issues/153)) ([1af8a30](https://github.com/Clumsy-Coder/myStocksRN/commit/1af8a30356ad519fa6d8d5ff1a295df42401c2b8))
* **npm:** add @semantic-release/changelog npm package ([13b7856](https://github.com/Clumsy-Coder/myStocksRN/commit/13b78560444e60c27cbf5419ccf5dfdc85c45bac))
* **npm:** add @semantic-release/commit-analyzer npm package ([8c6f24c](https://github.com/Clumsy-Coder/myStocksRN/commit/8c6f24c8aff4c6db75635b25a0323306158c5455))
* **npm:** add @semantic-release/git npm package ([77e08ca](https://github.com/Clumsy-Coder/myStocksRN/commit/77e08ca62f85f5a11df5767aa383db4dfd88fcde))
* **npm:** add @semantic-release/github npm package ([f575399](https://github.com/Clumsy-Coder/myStocksRN/commit/f5753996c52c55d276a7889b359726397ca78808))
* **npm:** add @semantic-release/release-notes-generator npm package ([829bf12](https://github.com/Clumsy-Coder/myStocksRN/commit/829bf12ddef6180e303d5065af02c6212f763ca4))
* **npm:** add commitizen npm package ([4cef20b](https://github.com/Clumsy-Coder/myStocksRN/commit/4cef20ba99d257003b83d7f6e215c39334a4fb8b))
* **npm:** add conventional-changelog-conventionalcommits npm package ([869e386](https://github.com/Clumsy-Coder/myStocksRN/commit/869e3865cad9ed4acf3252fc88033df4c9abd34b))
* **npm:** add lodash npm package ([de49c00](https://github.com/Clumsy-Coder/myStocksRN/commit/de49c00bc772237d2433d7d829acbf13b983bf84))
* **npm:** add react-native-autocomplete-input type definitions ([a841d6d](https://github.com/Clumsy-Coder/myStocksRN/commit/a841d6dadc7ebedccb2a66644e9d2275438e8539))
* **npm:** add react-native-keyboard-aware-scroll-view npm package ([acb5a9a](https://github.com/Clumsy-Coder/myStocksRN/commit/acb5a9acb39b550e80b31f0e33f5e9cacf7289be))
* **npm:** add semantic-release npm package ([d771263](https://github.com/Clumsy-Coder/myStocksRN/commit/d771263444e8d6589119f8668a3bb99aec705b3f))
* **npm:** add standard-version npm package ([8ba594c](https://github.com/Clumsy-Coder/myStocksRN/commit/8ba594c55246260707624e9d81eb0c12983629a9))
* **npm:** update native-base to v2.13.13 ([67af1a3](https://github.com/Clumsy-Coder/myStocksRN/commit/67af1a3d67992cfd41bf2a6fbcfd81e344db8f0d))
* **npm:** upgrade [@testing-library](https://github.com/testing-library) to v7.0.1 ([ad7fe33](https://github.com/Clumsy-Coder/myStocksRN/commit/ad7fe33e0f0fe4b8edd83346d6346a2ea3bc36ac))
* **npm:** upgrade eslint to v7.6.0 ([2e0be81](https://github.com/Clumsy-Coder/myStocksRN/commit/2e0be81527036a333b66e48f624287de19e1cf50))
* bump @types/jest from 26.0.5 to 26.0.6 ([#135](https://github.com/Clumsy-Coder/myStocksRN/issues/135)) ([7266d4e](https://github.com/Clumsy-Coder/myStocksRN/commit/7266d4e13cabdb382168912594fb76aff431b114))
* bump @types/react-native from 0.63.1 to 0.63.2 ([#134](https://github.com/Clumsy-Coder/myStocksRN/issues/134)) ([6a60d03](https://github.com/Clumsy-Coder/myStocksRN/commit/6a60d03a2e4b84cad88e074c669ee4a3e4dd1ad8))
* bump jest-html-reporters from 2.0.1 to 2.0.2 ([#136](https://github.com/Clumsy-Coder/myStocksRN/issues/136)) ([9af4614](https://github.com/Clumsy-Coder/myStocksRN/commit/9af46149634dfbcd4880265015528cfe39dc9a17))