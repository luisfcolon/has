# has()

[![Build Status](https://travis-ci.org/luisfcolon/has.svg?branch=master)](https://travis-ci.org/luisfcolon/has)
[![Coverage Status](https://coveralls.io/repos/github/luisfcolon/has/badge.svg?branch=master)](https://coveralls.io/github/luisfcolon/has?branch=master)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/luisfcolon/has/master/LICENSE)
[![NPM downloads](https://img.shields.io/npm/dt/ohas.svg)](https://www.npmjs.com/package/ohas)
[![GitHub issues](https://img.shields.io/github/issues/luisfcolon/has.svg)](https://github.com/luisfcolon/has/issues)

Determine if a javascript object has a key.
Allows for nested key detection.

# Installation

With yarn

```bash
yarn add ohas
```

With npm

```bash
npm install ohas --save
```

# Usage

```js
import has from 'ohas';

var user = {
  firstname: 'John',
  lastname: 'Smith',
  address: {
    street1: '123 Road Way Blvd',
    street2: 'APT 21',
    city: 'Brooklyn',
    state: 'NY'
  }
}

const hasFirstname = has(user, 'firstname');
console.log(hasFirstname); // true

const hasCity = has(user, 'address', 'city');
console.log(hasCity); // true

const hasZip = has(user, 'address', 'zip');
console.log(hasZip); // false

const hasUser2 = has(user2, 'firstname');
console.log(hasUser2); // false
```
