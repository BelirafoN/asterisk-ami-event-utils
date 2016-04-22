/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 12.11.2014
 * Time: 19:25
 */

"use strict";

const rawToString = require('./rawToString');
const rawToObject = require('./rawToObject');
const rawToJson = require('./rawToJson');
const rawToArray = require('./rawToArray');
const arrayToRaw = require('./arrayToRaw');
const objToRaw = require('./objToRaw');
const stringToRaw = require('./stringToRaw');

module.exports = {
    toObject: rawToObject,
    toJson: rawToJson,
    toArray: rawToArray,
    toString: rawToString,
    fromObject: objToRaw,
    fromArray: arrayToRaw,
    fromString: stringToRaw
};