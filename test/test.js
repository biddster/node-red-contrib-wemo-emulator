/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
/**
 The MIT License (MIT)

 Copyright (c) 2017 @biddster

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

const Mock = require('node-red-contrib-mock-node');
const NodeRedModule = require('../index.js');

describe('wemo-emulator', function () {
    this.timeout(10000);
    it('should configure', function (done) {
        const node = Mock(NodeRedModule, {
            name: 'test',
            friendlyName: 'test',
            serial: '111111',
            port: 12345,
            onTopic: 'on topic',
            onPayload: 'on payload',
            offTopic: 'off topic',
            offPayload: 'off payload',
        });
        node.context().global.set('wemo-emulator', {
            debug: true,
        });
        setTimeout(function () {
            node.emit('close');
            done();
        }, 2000);
    });
});
