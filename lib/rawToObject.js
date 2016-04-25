/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:32
 */

"use strict";

const bufferToString = require('./rawToString');
const CRLF = '\r\n';
const ROW_SPLITTER = ':';
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
        rawStr = trimHello(rawStr);

        if(!/^Response:/i.test(rawStr)){
            return {
                Response: null,
                $content: rawStr
            };
        }
        return respToObj(rawStr);
    }
    return rawStr.split(CRLF).reduce(rowReducer, {});
};

/**
 *
 * @param rawPackageStr
 * @returns {{}}
 */
function respToObj(rawPackageStr){
    let result = {},
        rows = rawPackageStr.split(CRLF),
        i = 0;

    for(i; i < rows.length; i++){
        if(!/^[a-z\d_-]+?:/i.test(rows[i])){ break; }
        result = rowReducer(result, rows[i]);
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

/**
 *
 * @param resultObj
 * @param row
 * @returns {*}
 */
function rowReducer(resultObj, row){
    let pair = row.split(ROW_SPLITTER);

    if(pair.length > 1){
        resultObj[pair[0].trim()] = pair.slice(1).join(ROW_SPLITTER).trim();
    }
    return resultObj;
}

/**
 *
 * @param rawStr
 * @returns {*}
 */
function trimHello(rawStr){
    if(/^Asterisk/i.test(rawStr)){
        return rawStr.replace(/^Asterisk.+?\r\n/i, '', rawStr);
    }
    return rawStr;
}