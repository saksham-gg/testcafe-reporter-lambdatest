# testcafe-reporter-lambdatest
[![Build Status](https://travis-ci.org/Shahnawaz-Sk/testcafe-reporter-lambdatest.svg)](https://travis-ci.org/Shahnawaz-Sk/testcafe-reporter-lambdatest)

This is the **lambdatest** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/Shahnawaz-Sk/testcafe-reporter-lambdatest/master/media/preview.png" alt="preview" />
</p>

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

## Author
Shahnawaz-Sk (https://lambdatest.com)
