/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:57
 */

"use strict";

const CRLF = '\r\n';

/**
 * 
 * @param eventArr
 * @returns {*}
 */
module.exports = function(eventArr){
    if(!eventArr || !Array.isArray(eventArr)){ return ''; }

    let rawStr = eventArr.reduce((result, curr) => {
            if(Array.isArray(curr) && curr.length == 2){
                result.push(curr.join(': '));
            }
            return result;
        }, []).join(CRLF);

    return  rawStr == '' ? rawStr : rawStr + CRLF.repeat(2);
};