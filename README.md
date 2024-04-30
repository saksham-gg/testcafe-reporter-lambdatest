# testcafe-reporter-lambdatest
[![Build Status](https://travis-ci.org/Shahnawaz-Sk/testcafe-reporter-lambdatest.svg)](https://travis-ci.org/Shahnawaz-Sk/testcafe-reporter-lambdatest)

This is the **LambdaTest** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).


## Install

```
npm install testcafe-reporter-lambdatest
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter lambdatest
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('lambdatest') // <-
    .run();
```

## About LambdaTest

[LambdaTest](https://www.lambdatest.com/) is a cloud based selenium grid infrastructure that can help you run automated cross browser compatibility tests on 2000+ different browser and operating system environments. LambdaTest supports all programming languages and frameworks that are supported with Selenium, and have easy integrations with all popular CI/CD platforms. It's a perfect solution to bring your [selenium automation testing](https://www.lambdatest.com/selenium-automation) to cloud based infrastructure that not only helps you increase your test coverage over multiple desktop and mobile browsers, but also allows you to cut down your test execution time by running tests on parallel.

## License

Licensed under the [MIT license](./LICENSE).
