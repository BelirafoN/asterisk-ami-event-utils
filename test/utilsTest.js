/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:31
 */

"use strict";

const assert = require('assert');
const eventUtil = require('../lib');
const CRLF = '\r\n';

describe('Event utils test', () => {
    let rawEvent = [
        'Event: AgentRingNoAnswer',
        'Privilege: agent,all',
        'Queue: 592'
    ].join(CRLF),
        testEvent = null;
    
    beforeEach(() => {
        testEvent = rawEvent.substr(0);
    });

    it('Check utils content', () => {
        assert.deepEqual(Object.keys(eventUtil), [
            'toObject',
            'toJson',
            'toArray',
            'toString',
            'fromObject',
            'fromArray'
        ]);
    });

    describe('rawToString', () => {

        it('with event\'s raw string', () => {
            testEvent = CRLF.repeat(5) + testEvent + CRLF.repeat(5);
            assert.equal(rawEvent, eventUtil.toString(testEvent));
        });

        it('without event\'s raw string', () => {
            assert.equal(eventUtil.toString(), '');
        });

    });
    
    describe('rawToObject', () => {

        it('with event\'s raw string', () => {
            assert.deepEqual(eventUtil.toObject(testEvent), {
                Event: 'AgentRingNoAnswer',
                Privilege: 'agent,all',
                Queue: '592'
            });
        });

        it('without event\'s raw string', () => {
            assert.deepEqual(eventUtil.toObject(), {});
        });

        it('invalid property pair in event\'s raw string', () => {
            testEvent = [
                    'Event: AgentRingNoAnswer',
                    'Privilege agent,all',
                    'Queue: 592'
                ].join(CRLF) + CRLF.repeat(2);

            assert.deepEqual(eventUtil.toObject(testEvent), {
                Event: 'AgentRingNoAnswer',
                Queue: '592'
            });
        });

        it('with empty field', () => {
            testEvent = [
                    'Event: AgentRingNoAnswer',
                    'Queue:'
                ].join(CRLF) + CRLF.repeat(2);

            assert.deepEqual(eventUtil.toObject(testEvent), {
                Event: 'AgentRingNoAnswer',
                Queue: ''
            });
        });

    });

    describe('rawToArray', () => {

        it('with event\'s raw string', () => {
            assert.deepEqual(eventUtil.toArray(testEvent), [
                ['Event', 'AgentRingNoAnswer'],
                ['Privilege', 'agent,all'],
                ['Queue', '592']
            ]);
        });

        it('without event\'s raw string', () => {
            assert.deepEqual(eventUtil.toArray(), []);
        });

    });

    describe('rawToJson', () => {

        it('with event\'s raw string', () => {
            assert.equal(eventUtil.toJson(testEvent), '{"Event":"AgentRingNoAnswer","Privilege":"agent,all","Queue":"592"}');
        });

        it('without event\'s raw string', () => {
            assert.equal(eventUtil.toJson(), '{}');
        });

    });

    describe('arrayToRaw', () => {

        it('valid event\'s array', () => {
            assert.equal(testEvent + CRLF.repeat(2), eventUtil.fromArray([
                ['Event', 'AgentRingNoAnswer'],
                ['Privilege', 'agent,all'],
                ['Queue', '592']
            ]));
        });

        it('empty event\'s array', () => {
            assert.equal('', eventUtil.fromArray([]));
        });

        it('without event\'s array', () => {
            assert.equal(''.repeat(2), eventUtil.fromArray());
        });

        it('invalid element of event\'s array', () => {
            let expectStr = [
                    'Event: AgentRingNoAnswer',
                    'Privilege: agent,all'
                ].join(CRLF) + CRLF.repeat(2);

            assert.deepEqual(expectStr, eventUtil.fromArray([
                ['Event', 'AgentRingNoAnswer'],
                ['Privilege', 'agent,all'],
                []
            ]));
        });

    });

    describe('objectToRaw', () => {

        it('valid event\'s object', () => {
            assert.equal(testEvent + CRLF.repeat(2), eventUtil.fromObject({
                Event: 'AgentRingNoAnswer',
                Privilege: 'agent,all',
                Queue: '592'
            }));
        });

        it('empty event\'s object', () => {
            assert.equal('', eventUtil.fromObject({}));
        });

        it('without event\'s object', () => {
            assert.equal(''.repeat(2), eventUtil.fromObject());
        });

    });
    
});