# Asterisk AMI Event Utils for NodeJS (ES2015) 

[![Build Status](https://travis-ci.org/BelirafoN/asterisk-ami-event-utils.svg?branch=master)](https://travis-ci.org/BelirafoN/asterisk-ami-event-utils)

Some service functions for parse\stringify raw events from Asterisk AMI's socket. 
This library is a part of other library for work with Asterisk AMI, which will be release soon. 

### NodeJS versions 

support `>=4.0.0`

### Available methods 

* **`.toString(eventBuffer)`** - converts raw AMI's event from buffer to utf-8 string
and trim all CRLF in start or end of this string;
* **`.toObject(eventBuffer)`** - converts raw AMI's event from buffer to object;
* **`.toJson(eventBuffer)`** - converts raw AMI's event from buffer to json-string;
* **`.toArray(eventBuffer)`** - converts raw AMI's event from buffer to paired-array,  
like this: *[['prop_name_1', 'prop_val_1'], ..., ['prop_name_n', 'prop_val_n']]*;
* **`.fromObject(eventObject)`** - converts event from object to string, which ready for send into  
socket of Asterisk AMI socket; 
* **`.fromArray(eventArray)`** - converts event from paired-array to string, which ready for send into  
socket of Asterisk AMI socket;

### Usage 

```javascript
const eventUtils = require('asterisk-ami-event-utils');
let eventBuffer = '...'; // any buffer or string of event from AMI's socket or from other place
let eventObject = eventUtils.toObject(eventBuffer);
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
