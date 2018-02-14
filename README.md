[![CircleCI](https://circleci.com/gh/azamatsmith/oscars-voting/tree/master.svg?style=svg)](https://circleci.com/gh/azamatsmith/oscars-voting/tree/master)
[![codecov](https://codecov.io/gh/azamatsmith/oscars-voting/branch/master/graph/badge.svg)](https://codecov.io/gh/azamatsmith/oscars-voting)

## Getting Started

1. Add an `env.js` to your root directory`
2. It should contain the `env` variables that will be used throughout the app and look like this:

```
module.exports = () => {
  // ADD ENV VARS HERE
  process.env.SOME_API_KEY = 'SECRET';
};
```

3. Run `yarn install` or `npm install` in the project directory
4. Run `yarn start` or `npm run start`
5. When the package finishes building and a dialog appears, press `i` to start the `iOS` emulator.

---

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Further reference can be found reading the [React Native Docs](https://facebook.github.io/react-native/)
