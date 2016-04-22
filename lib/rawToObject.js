/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:32
 */

"use strict";

const bufferToString = require('./rawToString');
const CRLF = '\r\n';
const COMMAND_END = '--END COMMAND--';

/**
 * 
 * @param buffer
 * @returns {*}
 */
module.exports = function(buffer){
    if(!buffer){ return {}; }

    let rawStr = bufferToString(buffer);

    if(!/^Event|Action:/i.test(rawStr)){
        return parseResponseToObj(rawStr);
    }

    return rawStr.split(CRLF).reduce((event, curr) => {
        let delimiter = ':',
            pair = curr.split(delimiter);

        if(pair.length > 1){
            event[pair[0].trim()] = pair.slice(1).join(delimiter).trim();
        }
        return event;
    }, {});
};

/**
 *
 * @param rawPackageStr
 * @returns {{}}
 */
function parseResponseToObj(rawPackageStr){
    let result = {};

    if(!/^Response:/i.test(rawPackageStr)){
        return {
            Response: null,
            $content: rawPackageStr
        };
    }

    let rows = rawPackageStr.split(CRLF),
        i = 0;

    for(i; i < rows.length; i++){
        if(/^[a-z\d_-]+?:/i.test(rows[i])){
            let delimiter = ':',
                pair = rows[i].split(delimiter);

            if(pair.length > 1){
                result[pair[0].trim()] = pair.slice(1).join(delimiter).trim();
            }
        }else{ break; }
    }

    if(i < rows.length){
        let content = rows.slice(i).join(CRLF),
            indexOfEnd = content.indexOf(COMMAND_END);

        if(~indexOfEnd){
            content = bufferToString(content.substr(0, indexOfEnd));
        }

        result['$content'] = content;
    }

    return result;
}