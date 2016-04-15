/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:54
 */

"use strict";

const CRLF = '\r\n';

/**
 * 
 * @param event
 * @returns {*}
 */
module.exports = function(event){
    if(!event){ return ''; }

    let rawStr = Object.keys(event).reduce((result, currentKey) => {
            result.push(`${currentKey}: ${event[currentKey]}`);
            return result;
        }, []).join(CRLF);

    return  rawStr == '' ? rawStr : rawStr + CRLF.repeat(2);
};