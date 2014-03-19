/*
 * fis
 * http://0522.org/
 */

'use strict';

var typescript = require('typescript');

module.exports = function(content, file, conf){
    content = typescript.compile(content, conf);
    return conf.sourceMap ? content.js : content;
};