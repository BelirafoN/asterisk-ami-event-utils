# Asterisk AMI Event Utils for NodeJS (ES2015) 

[![Build Status](https://travis-ci.org/BelirafoN/asterisk-ami-event-utils.svg?branch=master)](https://travis-ci.org/BelirafoN/asterisk-ami-event-utils)
[![Coverage Status](https://coveralls.io/repos/BelirafoN/asterisk-ami-event-utils/badge.svg)](https://coveralls.io/r/BelirafoN/asterisk-ami-event-utils)
[![Code Climate](https://codeclimate.com/github/BelirafoN/asterisk-ami-event-utils/badges/gpa.svg)](https://codeclimate.com/github/BelirafoN/asterisk-ami-event-utils)
[![npm version](https://badge.fury.io/js/asterisk-ami-event-utils.svg)](https://badge.fury.io/js/asterisk-ami-event-utils)

Some service functions for parse\stringify raw data packages (events, actions, responses, extended responses) 
from Asterisk AMI's socket. 
This library is a part of **[Asterisk's AMI Client](https://www.npmjs.com/package/asterisk-ami-client)** library.

### Install 

```bash
$ npm i asterisk-ami-event-utils
```

### NodeJS versions 

support `>=4.0.0`

### Available methods 

* **`.toString(buffer)`** - converts raw AMI's data package from buffer to utf-8 string
and trim all CRLF in start or end of this string;
* **`.toObject(buffer)`** - converts raw AMI's data package from buffer to object;
* **`.toJson(buffer)`** - converts raw AMI's data package from buffer to json-string;
* **`.toArray(buffer)`** - converts raw AMI's data package from buffer to paired-array,  
like this: *[['prop_name_1', 'prop_val_1'], ..., ['prop_name_n', 'prop_val_n']]*;
* **`.fromObject(obj)`** - converts data package from object to string, which ready for send into  
socket of Asterisk AMI socket; 
* **`.fromArray(arr)`** - converts data package from paired-array to string, which ready for send into  
socket of Asterisk AMI socket; 
* **`.fromString(str)`** - prepares data package's string into correct form for send into 
socket of Asterisk AMI socket; 

### Usage 

```javascript
const amiUtils = require('asterisk-ami-event-utils');
let eventBuffer = '...'; // any buffer or string of event from AMI's socket or from other place
let eventObject = amiUtils.toObject(eventBuffer);
```

### Examples 

For examples, please, see tests `./test/*`.

### Tests 

Tests require [Mocha](https://mochajs.org/). 

```bash 
mocha ./tests
``` 

or with `npm` 

```bash
npm test 
```

Test coverage with [Istanbul](https://gotwarlost.github.io/istanbul/) 

```bash
npm run coverage
```

### License 

Licensed under the MIT License
