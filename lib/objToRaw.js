/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:54
 */

"use strict";

const CRLF = '\r\n';

/**
 * 
 * @param obj
 * @returns {*}
 */
module.exports = function(obj){
    if(!obj){ return ''; }

    let rawStr = Object.keys(obj).reduce((result, currentKey) => {
            if(Array.isArray(obj[currentKey])) {
                obj[currentKey].forEach((elem) => {
                    result.push(`${currentKey}: ${elem}`);
                });
                for(elem in obj[currentKey]) {
                }
            } else {                
                result.push(`${currentKey}: ${obj[currentKey]}`);
            }
            return result;
        }, []).join(CRLF);

    return  rawStr === '' ? rawStr : rawStr + CRLF.repeat(2);
};
