'use strict';
const Scanner = require("./Scanner");
const Reader = require("./Reader");
const ErrorHandler = require("./ErrorHandler");

const TokenName = {};
TokenName[1 /* BooleanLiteral */] = 'Boolean';
TokenName[2 /* EOF */] = '<end>';
TokenName[3 /* Identifier */] = 'Identifier';
TokenName[4 /* Keyword */] = 'Keyword';
TokenName[5 /* NullLiteral */] = 'Null';
TokenName[6 /* NumericLiteral */] = 'Numeric';
TokenName[7 /* Punctuator */] = 'Punctuator';
TokenName[8 /* StringLiteral */] = 'String';
TokenName[9 /* RegularExpression */] = 'RegularExpression';
TokenName[10 /* Template */] = 'Template';

function Tokenizer(code) {
    this.scanner = new Scanner(code);
    this.scanner.trackComment = false;
    this.trackRange = false;
    this.trackLoc = false;
    this.buffer = [];
    this.reader = new Reader();
    this.errorHandler = new ErrorHandler()
}

Tokenizer.prototype.getNextToken = function () {
    if (this.buffer.length === 0) {
        var comments = this.scanner.scanComments();
        if (this.scanner.trackComment) {
            for (var i = 0; i < comments.length; ++i) {
                var e = comments[i];
                var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
                var comment = {
                    type: e.multiLine ? 'BlockComment' : 'LineComment',
                    value: value
                };
                if (this.trackRange) {
                    comment.range = e.range;
                }
                if (this.trackLoc) {
                    comment.loc = e.loc;
                }
                this.buffer.push(comment);
            }
        }
        if (!this.scanner.eof()) {
            var loc = void 0;
            if (this.trackLoc) {
                loc = {
                    start: {
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                    },
                    end: {}
                };
            }
            var startRegex = (this.scanner.source[this.scanner.index] === '/') && this.reader.isRegexStart();
            var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
            this.reader.push(token);
            var entry = {
                type: TokenName[token.type],
                value: this.scanner.source.slice(token.start, token.end)
            };
            if (this.trackRange) {
                entry.range = [token.start, token.end];
            }
            if (this.trackLoc) {
                loc.end = {
                    line: this.scanner.lineNumber,
                    column: this.scanner.index - this.scanner.lineStart
                };
                entry.loc = loc;
            }
            if (token.type === 9 /* RegularExpression */) {
                var pattern = token.pattern;
                var flags = token.flags;
                entry.regex = { pattern: pattern, flags: flags };
            }
            this.buffer.push(entry);
        }
    }
    return this.buffer.shift();
};

module.exports = Tokenizer;