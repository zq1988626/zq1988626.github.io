module.exports = Reader = (function () {
    function Reader() {
        this.values = [];
        this.curly = this.paren = -1;
    }
    // A function following one of those tokens is an expression.
    Reader.prototype.beforeFunctionExpression = function (t) {
        return ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
            'return', 'case', 'delete', 'throw', 'void',
            // assignment operators
            '=', '+=', '-=', '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=',
            '&=', '|=', '^=', ',',
            // binary/unary operators
            '+', '-', '*', '**', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
            '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
            '<=', '<', '>', '!=', '!=='].indexOf(t) >= 0;
    };
    // Determine if forward slash (/) is an operator or part of a regular expression
    // https://github.com/mozilla/sweet.js/wiki/design
    Reader.prototype.isRegexStart = function () {
        var previous = this.values[this.values.length - 1];
        var regex = (previous !== null);
        switch (previous) {
            case 'this':
            case ']':
                regex = false;
                break;
            case ')':
                var keyword = this.values[this.paren - 1];
                regex = (keyword === 'if' || keyword === 'while' || keyword === 'for' || keyword === 'with');
                break;
            case '}':
                // Dividing a function by anything makes little sense,
                // but we have to check for that.
                regex = false;
                if (this.values[this.curly - 3] === 'function') {
                    // Anonymous function, e.g. function(){} /42
                    var check = this.values[this.curly - 4];
                    regex = check ? !this.beforeFunctionExpression(check) : false;
                }
                else if (this.values[this.curly - 4] === 'function') {
                    // Named function, e.g. function f(){} /42/
                    var check = this.values[this.curly - 5];
                    regex = check ? !this.beforeFunctionExpression(check) : true;
                }
                break;
            default:
                break;
        }
        return regex;
    };
    Reader.prototype.push = function (token) {
        if (token.type === 7 /* Punctuator */ || token.type === 4 /* Keyword */) {
            if (token.value === '{') {
                this.curly = this.values.length;
            }
            else if (token.value === '(') {
                this.paren = this.values.length;
            }
            this.values.push(token.value);
        }
        else {
            this.values.push(null);
        }
    };
    return Reader;
}());