/**
 * Developer: BelirafoN
 * Date: 14.04.2016
 * Time: 18:32
 */

"use strict";

const rawToString = require('./rawToString');
const CRLF = '\r\n';

/**
 * 
 * @param rawEventData
 * @returns {*}
 */
module.exports = function(rawEventData){
    if(!rawEventData){ return {}; }

    rawEventData = rawToString(rawEventData);

    return rawEventData.split(CRLF).reduce((event, curr) => {
        let pair = curr.split(/:\s/);

        if(pair.length > 1){
            event[pair[0]] = pair[1];
        }
        return event;
    }, {});
};