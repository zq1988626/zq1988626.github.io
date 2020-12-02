
function assert(condition, message) {
    /* istanbul ignore if */
    if (!condition) {
        throw new Error('ASSERT: ' + message);
    }
}
const Messages = {
    BadGetterArity: 'Getter must not have any formal parameters',
    BadSetterArity: 'Setter must have exactly one formal parameter',
    BadSetterRestParameter: 'Setter function argument must not be a rest parameter',
    ConstructorIsAsync: 'Class constructor may not be an async method',
    ConstructorSpecialMethod: 'Class constructor may not be an accessor',
    DeclarationMissingInitializer: 'Missing initializer in %0 declaration',
    DefaultRestParameter: 'Unexpected token =',
    DuplicateBinding: 'Duplicate binding %0',
    DuplicateConstructor: 'A class may only have one constructor',
    DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
    ForInOfLoopInitializer: '%0 loop variable declaration may not have an initializer',
    GeneratorInLegacyContext: 'Generator declarations are not allowed in legacy contexts',
    IllegalBreak: 'Illegal break statement',
    IllegalContinue: 'Illegal continue statement',
    IllegalExportDeclaration: 'Unexpected token',
    IllegalImportDeclaration: 'Unexpected token',
    IllegalLanguageModeDirective: 'Illegal \'use strict\' directive in function with non-simple parameter list',
    IllegalReturn: 'Illegal return statement',
    InvalidEscapedReservedWord: 'Keyword must not contain escaped characters',
    InvalidHexEscapeSequence: 'Invalid hexadecimal escape sequence',
    InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
    InvalidLHSInForIn: 'Invalid left-hand side in for-in',
    InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
    InvalidModuleSpecifier: 'Unexpected token',
    InvalidRegExp: 'Invalid regular expression',
    LetInLexicalBinding: 'let is disallowed as a lexically bound name',
    MissingFromClause: 'Unexpected token',
    MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
    NewlineAfterThrow: 'Illegal newline after throw',
    NoAsAfterImportNamespace: 'Unexpected token',
    NoCatchOrFinally: 'Missing catch or finally after try',
    ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
    Redeclaration: '%0 \'%1\' has already been declared',
    StaticPrototype: 'Classes may not have static property named prototype',
    StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
    StrictDelete: 'Delete of an unqualified identifier in strict mode.',
    StrictFunction: 'In strict mode code, functions can only be declared at top level or inside a block',
    StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
    StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
    StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
    StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
    StrictModeWith: 'Strict mode code may not include a with statement',
    StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
    StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
    StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
    StrictReservedWord: 'Use of future reserved word in strict mode',
    StrictVarName: 'Variable name may not be eval or arguments in strict mode',
    TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
    UnexpectedEOS: 'Unexpected end of input',
    UnexpectedIdentifier: 'Unexpected identifier',
    UnexpectedNumber: 'Unexpected number',
    UnexpectedReserved: 'Unexpected reserved word',
    UnexpectedString: 'Unexpected string',
    UnexpectedTemplate: 'Unexpected quasi %0',
    UnexpectedToken: 'Unexpected token %0',
    UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
    UnknownLabel: 'Undefined label \'%0\'',
    UnterminatedRegExp: 'Invalid regular expression: missing /'
};

const Character = {
    /* tslint:disable:no-bitwise */
    fromCodePoint: function (cp) {
        return (cp < 0x10000) ? String.fromCharCode(cp) :
            String.fromCharCode(0xD800 + ((cp - 0x10000) >> 10)) +
                String.fromCharCode(0xDC00 + ((cp - 0x10000) & 1023));
    },
    // https://tc39.github.io/ecma262/#sec-white-space
    isWhiteSpace: function (cp) {
        return (cp === 0x20) || (cp === 0x09) || (cp === 0x0B) || (cp === 0x0C) || (cp === 0xA0) ||
            (cp >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(cp) >= 0);
    },
    // https://tc39.github.io/ecma262/#sec-line-terminators
    isLineTerminator: function (cp) {
        return (cp === 0x0A) || (cp === 0x0D) || (cp === 0x2028) || (cp === 0x2029);
    },
    // https://tc39.github.io/ecma262/#sec-names-and-keywords
    isIdentifierStart: function (cp) {
        return (cp === 0x24) || (cp === 0x5F) ||
            (cp >= 0x41 && cp <= 0x5A) ||
            (cp >= 0x61 && cp <= 0x7A) ||
            (cp === 0x5C) ||
            ((cp >= 0x80) && Regex.NonAsciiIdentifierStart.test(Character.fromCodePoint(cp)));
    },
    isIdentifierPart: function (cp) {
        return (cp === 0x24) || (cp === 0x5F) ||
            (cp >= 0x41 && cp <= 0x5A) ||
            (cp >= 0x61 && cp <= 0x7A) ||
            (cp >= 0x30 && cp <= 0x39) ||
            (cp === 0x5C) ||
            ((cp >= 0x80) && Regex.NonAsciiIdentifierPart.test(Character.fromCodePoint(cp)));
    },
    // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
    isDecimalDigit: function (cp) {
        return (cp >= 0x30 && cp <= 0x39); // 0..9
    },
    isHexDigit: function (cp) {
        return (cp >= 0x30 && cp <= 0x39) ||
            (cp >= 0x41 && cp <= 0x46) ||
            (cp >= 0x61 && cp <= 0x66); // a..f
    },
    isOctalDigit: function (cp) {
        return (cp >= 0x30 && cp <= 0x37); // 0..7
    }
};

function Scanner(code) {
    this.source = code;
    this.trackComment = false;
    this.isModule = false;
    this.length = code.length;
    this.index = 0;
    this.lineNumber = (code.length > 0) ? 1 : 0;
    this.lineStart = 0;
    this.curlyStack = [];
}
Scanner.prototype.errorHandler = function () {
    throw [].join.call(arguments,"\n")
};
Scanner.prototype.saveState = function () {
    return {
        index: this.index,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart
    };
};
Scanner.prototype.restoreState = function (state) {
    this.index = state.index;
    this.lineNumber = state.lineNumber;
    this.lineStart = state.lineStart;
};
Scanner.prototype.eof = function () {
    return this.index >= this.length;
};
Scanner.prototype.throwUnexpectedToken = function (message) {
    if (message === void 0) { message = Messages.UnexpectedTokenIllegal; }
    return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
};
Scanner.prototype.tolerateUnexpectedToken = function (message) {
    if (message === void 0) { message = Messages.UnexpectedTokenIllegal; }
    this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
};
// https://tc39.github.io/ecma262/#sec-comments
Scanner.prototype.skipSingleLineComment = function (offset) {
    var comments = [];
    var start, loc;
    if (this.trackComment) {
        comments = [];
        start = this.index - offset;
        loc = {
            start: {
                line: this.lineNumber,
                column: this.index - this.lineStart - offset
            },
            end: {}
        };
    }
    while (!this.eof()) {
        var ch = this.source.charCodeAt(this.index);
        ++this.index;
        if (Character.isLineTerminator(ch)) {
            if (this.trackComment) {
                loc.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart - 1
                };
                var entry = {
                    multiLine: false,
                    slice: [start + offset, this.index - 1],
                    range: [start, this.index - 1],
                    loc: loc
                };
                comments.push(entry);
            }
            if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
                ++this.index;
            }
            ++this.lineNumber;
            this.lineStart = this.index;
            return comments;
        }
    }
    if (this.trackComment) {
        loc.end = {
            line: this.lineNumber,
            column: this.index - this.lineStart
        };
        var entry = {
            multiLine: false,
            slice: [start + offset, this.index],
            range: [start, this.index],
            loc: loc
        };
        comments.push(entry);
    }
    return comments;
};
Scanner.prototype.skipMultiLineComment = function () {
    var comments = [];
    var start, loc;
    if (this.trackComment) {
        comments = [];
        start = this.index - 2;
        loc = {
            start: {
                line: this.lineNumber,
                column: this.index - this.lineStart - 2
            },
            end: {}
        };
    }
    while (!this.eof()) {
        var ch = this.source.charCodeAt(this.index);
        if (Character.isLineTerminator(ch)) {
            if (ch === 0x0D && this.source.charCodeAt(this.index + 1) === 0x0A) {
                ++this.index;
            }
            ++this.lineNumber;
            ++this.index;
            this.lineStart = this.index;
        }
        else if (ch === 0x2A) {
            // Block comment ends with '*/'.
            if (this.source.charCodeAt(this.index + 1) === 0x2F) {
                this.index += 2;
                if (this.trackComment) {
                    loc.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart
                    };
                    var entry = {
                        multiLine: true,
                        slice: [start + 2, this.index - 2],
                        range: [start, this.index],
                        loc: loc
                    };
                    comments.push(entry);
                }
                return comments;
            }
            ++this.index;
        }
        else {
            ++this.index;
        }
    }
    // Ran off the end of the file - the whole thing is a comment
    if (this.trackComment) {
        loc.end = {
            line: this.lineNumber,
            column: this.index - this.lineStart
        };
        var entry = {
            multiLine: true,
            slice: [start + 2, this.index],
            range: [start, this.index],
            loc: loc
        };
        comments.push(entry);
    }
    this.tolerateUnexpectedToken();
    return comments;
};
Scanner.prototype.scanComments = function () {
    var comments;
    if (this.trackComment) {
        comments = [];
    }
    var start = (this.index === 0);
    while (!this.eof()) {
        var ch = this.source.charCodeAt(this.index);
        if (Character.isWhiteSpace(ch)) {
            ++this.index;
        }
        else if (Character.isLineTerminator(ch)) {
            ++this.index;
            if (ch === 0x0D && this.source.charCodeAt(this.index) === 0x0A) {
                ++this.index;
            }
            ++this.lineNumber;
            this.lineStart = this.index;
            start = true;
        }
        else if (ch === 0x2F) {
            ch = this.source.charCodeAt(this.index + 1);
            if (ch === 0x2F) {
                this.index += 2;
                var comment = this.skipSingleLineComment(2);
                if (this.trackComment) {
                    comments = comments.concat(comment);
                }
                start = true;
            }
            else if (ch === 0x2A) {
                this.index += 2;
                var comment = this.skipMultiLineComment();
                if (this.trackComment) {
                    comments = comments.concat(comment);
                }
            }
            else {
                break;
            }
        }
        else if (start && ch === 0x2D) {
            // U+003E is '>'
            if ((this.source.charCodeAt(this.index + 1) === 0x2D) && (this.source.charCodeAt(this.index + 2) === 0x3E)) {
                // '-->' is a single-line comment
                this.index += 3;
                var comment = this.skipSingleLineComment(3);
                if (this.trackComment) {
                    comments = comments.concat(comment);
                }
            }
            else {
                break;
            }
        }
        else if (ch === 0x3C && !this.isModule) {
            if (this.source.slice(this.index + 1, this.index + 4) === '!--') {
                this.index += 4; // `<!--`
                var comment = this.skipSingleLineComment(4);
                if (this.trackComment) {
                    comments = comments.concat(comment);
                }
            }
            else {
                break;
            }
        }
        else {
            break;
        }
    }
    return comments;
};
// https://tc39.github.io/ecma262/#sec-future-reserved-words
Scanner.prototype.isFutureReservedWord = function (id) {
    switch (id) {
        case 'enum':
        case 'export':
        case 'import':
        case 'super':
            return true;
        default:
            return false;
    }
};
Scanner.prototype.isStrictModeReservedWord = function (id) {
    switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'yield':
        case 'let':
            return true;
        default:
            return false;
    }
};
Scanner.prototype.isRestrictedWord = function (id) {
    return id === 'eval' || id === 'arguments';
};
// https://tc39.github.io/ecma262/#sec-keywords
Scanner.prototype.isKeyword = function (id) {
    switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') ||
                (id === 'try') || (id === 'let');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') || (id === 'yield') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
    }
};
Scanner.prototype.codePointAt = function (i) {
    var cp = this.source.charCodeAt(i);
    if (cp >= 0xD800 && cp <= 0xDBFF) {
        var second = this.source.charCodeAt(i + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) {
            var first = cp;
            cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
    }
    return cp;
};
Scanner.prototype.scanHexEscape = function (prefix) {
    var len = (prefix === 'u') ? 4 : 2;
    var code = 0;
    for (var i = 0; i < len; ++i) {
        if (!this.eof() && Character.isHexDigit(this.source.charCodeAt(this.index))) {
            code = code * 16 + hexValue(this.source[this.index++]);
        }
        else {
            return null;
        }
    }
    return String.fromCharCode(code);
};
Scanner.prototype.scanUnicodeCodePointEscape = function () {
    var ch = this.source[this.index];
    var code = 0;
    // At least, one hex digit is required.
    if (ch === '}') {
        this.throwUnexpectedToken();
    }
    while (!this.eof()) {
        ch = this.source[this.index++];
        if (!Character.isHexDigit(ch.charCodeAt(0))) {
            break;
        }
        code = code * 16 + hexValue(ch);
    }
    if (code > 0x10FFFF || ch !== '}') {
        this.throwUnexpectedToken();
    }
    return Character.fromCodePoint(code);
};
Scanner.prototype.getIdentifier = function () {
    var start = this.index++;
    while (!this.eof()) {
        var ch = this.source.charCodeAt(this.index);
        if (ch === 0x5C) {
            // Blackslash (U+005C) marks Unicode escape sequence.
            this.index = start;
            return this.getComplexIdentifier();
        }
        else if (ch >= 0xD800 && ch < 0xDFFF) {
            // Need to handle surrogate pairs.
            this.index = start;
            return this.getComplexIdentifier();
        }
        if (Character.isIdentifierPart(ch)) {
            ++this.index;
        }
        else {
            break;
        }
    }
    return this.source.slice(start, this.index);
};
Scanner.prototype.getComplexIdentifier = function () {
    var cp = this.codePointAt(this.index);
    var id = Character.fromCodePoint(cp);
    this.index += id.length;
    // '\u' (U+005C, U+0075) denotes an escaped character.
    var ch;
    if (cp === 0x5C) {
        if (this.source.charCodeAt(this.index) !== 0x75) {
            this.throwUnexpectedToken();
        }
        ++this.index;
        if (this.source[this.index] === '{') {
            ++this.index;
            ch = this.scanUnicodeCodePointEscape();
        }
        else {
            ch = this.scanHexEscape('u');
            if (ch === null || ch === '\\' || !Character.isIdentifierStart(ch.charCodeAt(0))) {
                this.throwUnexpectedToken();
            }
        }
        id = ch;
    }
    while (!this.eof()) {
        cp = this.codePointAt(this.index);
        if (!Character.isIdentifierPart(cp)) {
            break;
        }
        ch = Character.fromCodePoint(cp);
        id += ch;
        this.index += ch.length;
        // '\u' (U+005C, U+0075) denotes an escaped character.
        if (cp === 0x5C) {
            id = id.substr(0, id.length - 1);
            if (this.source.charCodeAt(this.index) !== 0x75) {
                this.throwUnexpectedToken();
            }
            ++this.index;
            if (this.source[this.index] === '{') {
                ++this.index;
                ch = this.scanUnicodeCodePointEscape();
            }
            else {
                ch = this.scanHexEscape('u');
                if (ch === null || ch === '\\' || !Character.isIdentifierPart(ch.charCodeAt(0))) {
                    this.throwUnexpectedToken();
                }
            }
            id += ch;
        }
    }
    return id;
};
Scanner.prototype.octalToDecimal = function (ch) {
    // \0 is not octal escape sequence
    var octal = (ch !== '0');
    var code = octalValue(ch);
    if (!this.eof() && Character.isOctalDigit(this.source.charCodeAt(this.index))) {
        octal = true;
        code = code * 8 + octalValue(this.source[this.index++]);
        // 3 digits are only allowed when string starts
        // with 0, 1, 2, 3
        if ('0123'.indexOf(ch) >= 0 && !this.eof() && Character.isOctalDigit(this.source.charCodeAt(this.index))) {
            code = code * 8 + octalValue(this.source[this.index++]);
        }
    }
    return {
        code: code,
        octal: octal
    };
};
// https://tc39.github.io/ecma262/#sec-names-and-keywords
Scanner.prototype.scanIdentifier = function () {
    var type;
    var start = this.index;
    // Backslash (U+005C) starts an escaped character.
    var id = (this.source.charCodeAt(start) === 0x5C) ? this.getComplexIdentifier() : this.getIdentifier();
    // There is no keyword or literal with only one character.
    // Thus, it must be an identifier.
    if (id.length === 1) {
        type = 3 /* Identifier */;
    }
    else if (this.isKeyword(id)) {
        type = 4 /* Keyword */;
    }
    else if (id === 'null') {
        type = 5 /* NullLiteral */;
    }
    else if (id === 'true' || id === 'false') {
        type = 1 /* BooleanLiteral */;
    }
    else {
        type = 3 /* Identifier */;
    }
    if (type !== 3 /* Identifier */ && (start + id.length !== this.index)) {
        var restore = this.index;
        this.index = start;
        this.tolerateUnexpectedToken(Messages.InvalidEscapedReservedWord);
        this.index = restore;
    }
    return {
        type: type,
        value: id,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: start,
        end: this.index
    };
};
// https://tc39.github.io/ecma262/#sec-punctuators
Scanner.prototype.scanPunctuator = function () {
    var start = this.index;
    // Check for most common single-character punctuators.
    var str = this.source[this.index];
    switch (str) {
        case '(':
        case '{':
            if (str === '{') {
                this.curlyStack.push('{');
            }
            ++this.index;
            break;
        case '.':
            ++this.index;
            if (this.source[this.index] === '.' && this.source[this.index + 1] === '.') {
                // Spread operator: ...
                this.index += 2;
                str = '...';
            }
            break;
        case '}':
            ++this.index;
            this.curlyStack.pop();
            break;
        case ')':
        case ';':
        case ',':
        case '[':
        case ']':
        case ':':
        case '?':
        case '~':
            ++this.index;
            break;
        default:
            // 4-character punctuator.
            str = this.source.substr(this.index, 4);
            if (str === '>>>=') {
                this.index += 4;
            }
            else {
                // 3-character punctuators.
                str = str.substr(0, 3);
                if (str === '===' || str === '!==' || str === '>>>' ||
                    str === '<<=' || str === '>>=' || str === '**=') {
                    this.index += 3;
                }
                else {
                    // 2-character punctuators.
                    str = str.substr(0, 2);
                    if (str === '&&' || str === '||' || str === '==' || str === '!=' ||
                        str === '+=' || str === '-=' || str === '*=' || str === '/=' ||
                        str === '++' || str === '--' || str === '<<' || str === '>>' ||
                        str === '&=' || str === '|=' || str === '^=' || str === '%=' ||
                        str === '<=' || str === '>=' || str === '=>' || str === '**') {
                        this.index += 2;
                    }
                    else {
                        // 1-character punctuators.
                        str = this.source[this.index];
                        if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
                            ++this.index;
                        }
                    }
                }
            }
    }
    if (this.index === start) {
        this.throwUnexpectedToken();
    }
    return {
        type: 7 /* Punctuator */,
        value: str,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: start,
        end: this.index
    };
};
// https://tc39.github.io/ecma262/#sec-literals-numeric-literals
Scanner.prototype.scanHexLiteral = function (start) {
    var num = '';
    while (!this.eof()) {
        if (!Character.isHexDigit(this.source.charCodeAt(this.index))) {
            break;
        }
        num += this.source[this.index++];
    }
    if (num.length === 0) {
        this.throwUnexpectedToken();
    }
    if (Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
        this.throwUnexpectedToken();
    }
    return {
        type: 6 /* NumericLiteral */,
        value: parseInt('0x' + num, 16),
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: start,
        end: this.index
    };
};
Scanner.prototype.scanBinaryLiteral = function (start) {
    var num = '';
    var ch;
    while (!this.eof()) {
        ch = this.source[this.index];
        if (ch !== '0' && ch !== '1') {
            break;
        }
        num += this.source[this.index++];
    }
    if (num.length === 0) {
        // only 0b or 0B
        this.throwUnexpectedToken();
    }
    if (!this.eof()) {
        ch = this.source.charCodeAt(this.index);
        /* istanbul ignore else */
        if (Character.isIdentifierStart(ch) || Character.isDecimalDigit(ch)) {
            this.throwUnexpectedToken();
        }
    }
    return {
        type: 6 /* NumericLiteral */,
        value: parseInt(num, 2),
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: start,
        end: this.index
    };
};
Scanner.prototype.scanOctalLiteral = function (prefix, start) {
    var num = '';
    var octal = false;
    if (Character.isOctalDigit(prefix.charCodeAt(0))) {
        octal = true;
        num = '0' + this.source[this.index++];
    }
    else {
        ++this.index;
    }
    while (!this.eof()) {
        if (!Character.isOctalDigit(this.source.charCodeAt(this.index))) {
            break;
        }
        num += this.source[this.index++];
    }
    if (!octal && num.length === 0) {
        // only 0o or 0O
        this.throwUnexpectedToken();
    }
    if (Character.isIdentifierStart(this.source.charCodeAt(this.index)) || Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
        this.throwUnexpectedToken();
    }
    return {
        type: 6 /* NumericLiteral */,
        value: parseInt(num, 8),
        octal: octal,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: start,
        end: this.index
    };
};
Scanner.prototype.isImplicitOctalLiteral = function () {
    // Implicit octal, unless there is a non-octal digit.
    // (Annex B.1.1 on Numeric Literals)
    for (var i = this.index + 1; i < this.length; ++i) {
        var ch = this.source[i];
        if (ch === '8' || ch === '9') {
            return false;
        }
        if (!Character.isOctalDigit(ch.charCodeAt(0))) {
            return true;
        }
    }
    return true;
};
Scanner.prototype.scanNumericLiteral = function () {
    var start = this.index;
    var ch = this.source[start];
    assert(Character.isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'), 'Numeric literal must start with a decimal digit or a decimal point');
    var num = '';
    if (ch !== '.') {
        num = this.source[this.index++];
        ch = this.source[this.index];
        // Hex number starts with '0x'.
        // Octal number starts with '0'.
        // Octal number in ES6 starts with '0o'.
        // Binary number in ES6 starts with '0b'.
        if (num === '0') {
            if (ch === 'x' || ch === 'X') {
                ++this.index;
                return this.scanHexLiteral(start);
            }
            if (ch === 'b' || ch === 'B') {
                ++this.index;
                return this.scanBinaryLiteral(start);
            }
            if (ch === 'o' || ch === 'O') {
                return this.scanOctalLiteral(ch, start);
            }
            if (ch && Character.isOctalDigit(ch.charCodeAt(0))) {
                if (this.isImplicitOctalLiteral()) {
                    return this.scanOctalLiteral(ch, start);
                }
            }
        }
        while (Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
            num += this.source[this.index++];
        }
        ch = this.source[this.index];
    }
    if (ch === '.') {
        num += this.source[this.index++];
        while (Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
            num += this.source[this.index++];
        }
        ch = this.source[this.index];
    }
    if (ch === 'e' || ch === 'E') {
        num += this.source[this.index++];
        ch = this.source[this.index];
        if (ch === '+' || ch === '-') {
            num += this.source[this.index++];
        }
        if (Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
            while (Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                num += this.source[this.index++];
            }
        }
        else {
            this.throwUnexpectedToken();
        }
    }
    if (Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
        this.throwUnexpectedToken();
    }
    return {
        type: 6 /* NumericLiteral */,
        value: parseFloat(num),
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: start,
        end: this.index
    };
};
// https://tc39.github.io/ecma262/#sec-literals-string-literals
Scanner.prototype.scanStringLiteral = function () {
    var start = this.index;
    var quote = this.source[start];
    assert_1.assert((quote === '\'' || quote === '"'), 'String literal must starts with a quote');
    ++this.index;
    var octal = false;
    var str = '';
    while (!this.eof()) {
        var ch = this.source[this.index++];
        if (ch === quote) {
            quote = '';
            break;
        }
        else if (ch === '\\') {
            ch = this.source[this.index++];
            if (!ch || !Character.isLineTerminator(ch.charCodeAt(0))) {
                switch (ch) {
                    case 'u':
                        if (this.source[this.index] === '{') {
                            ++this.index;
                            str += this.scanUnicodeCodePointEscape();
                        }
                        else {
                            var unescaped_1 = this.scanHexEscape(ch);
                            if (unescaped_1 === null) {
                                this.throwUnexpectedToken();
                            }
                            str += unescaped_1;
                        }
                        break;
                    case 'x':
                        var unescaped = this.scanHexEscape(ch);
                        if (unescaped === null) {
                            this.throwUnexpectedToken(Messages.InvalidHexEscapeSequence);
                        }
                        str += unescaped;
                        break;
                    case 'n':
                        str += '\n';
                        break;
                    case 'r':
                        str += '\r';
                        break;
                    case 't':
                        str += '\t';
                        break;
                    case 'b':
                        str += '\b';
                        break;
                    case 'f':
                        str += '\f';
                        break;
                    case 'v':
                        str += '\x0B';
                        break;
                    case '8':
                    case '9':
                        str += ch;
                        this.tolerateUnexpectedToken();
                        break;
                    default:
                        if (ch && Character.isOctalDigit(ch.charCodeAt(0))) {
                            var octToDec = this.octalToDecimal(ch);
                            octal = octToDec.octal || octal;
                            str += String.fromCharCode(octToDec.code);
                        }
                        else {
                            str += ch;
                        }
                        break;
                }
            }
            else {
                ++this.lineNumber;
                if (ch === '\r' && this.source[this.index] === '\n') {
                    ++this.index;
                }
                this.lineStart = this.index;
            }
        }
        else if (Character.isLineTerminator(ch.charCodeAt(0))) {
            break;
        }
        else {
            str += ch;
        }
    }
    if (quote !== '') {
        this.index = start;
        this.throwUnexpectedToken();
    }
    return {
        type: 8 /* StringLiteral */,
        value: str,
        octal: octal,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: start,
        end: this.index
    };
};
// https://tc39.github.io/ecma262/#sec-template-literal-lexical-components
Scanner.prototype.scanTemplate = function () {
    var cooked = '';
    var terminated = false;
    var start = this.index;
    var head = (this.source[start] === '`');
    var tail = false;
    var rawOffset = 2;
    ++this.index;
    while (!this.eof()) {
        var ch = this.source[this.index++];
        if (ch === '`') {
            rawOffset = 1;
            tail = true;
            terminated = true;
            break;
        }
        else if (ch === '$') {
            if (this.source[this.index] === '{') {
                this.curlyStack.push('${');
                ++this.index;
                terminated = true;
                break;
            }
            cooked += ch;
        }
        else if (ch === '\\') {
            ch = this.source[this.index++];
            if (!Character.isLineTerminator(ch.charCodeAt(0))) {
                switch (ch) {
                    case 'n':
                        cooked += '\n';
                        break;
                    case 'r':
                        cooked += '\r';
                        break;
                    case 't':
                        cooked += '\t';
                        break;
                    case 'u':
                        if (this.source[this.index] === '{') {
                            ++this.index;
                            cooked += this.scanUnicodeCodePointEscape();
                        }
                        else {
                            var restore = this.index;
                            var unescaped_2 = this.scanHexEscape(ch);
                            if (unescaped_2 !== null) {
                                cooked += unescaped_2;
                            }
                            else {
                                this.index = restore;
                                cooked += ch;
                            }
                        }
                        break;
                    case 'x':
                        var unescaped = this.scanHexEscape(ch);
                        if (unescaped === null) {
                            this.throwUnexpectedToken(Messages.InvalidHexEscapeSequence);
                        }
                        cooked += unescaped;
                        break;
                    case 'b':
                        cooked += '\b';
                        break;
                    case 'f':
                        cooked += '\f';
                        break;
                    case 'v':
                        cooked += '\v';
                        break;
                    default:
                        if (ch === '0') {
                            if (Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                                // Illegal: \01 \02 and so on
                                this.throwUnexpectedToken(Messages.TemplateOctalLiteral);
                            }
                            cooked += '\0';
                        }
                        else if (Character.isOctalDigit(ch.charCodeAt(0))) {
                            // Illegal: \1 \2
                            this.throwUnexpectedToken(Messages.TemplateOctalLiteral);
                        }
                        else {
                            cooked += ch;
                        }
                        break;
                }
            }
            else {
                ++this.lineNumber;
                if (ch === '\r' && this.source[this.index] === '\n') {
                    ++this.index;
                }
                this.lineStart = this.index;
            }
        }
        else if (Character.isLineTerminator(ch.charCodeAt(0))) {
            ++this.lineNumber;
            if (ch === '\r' && this.source[this.index] === '\n') {
                ++this.index;
            }
            this.lineStart = this.index;
            cooked += '\n';
        }
        else {
            cooked += ch;
        }
    }
    if (!terminated) {
        this.throwUnexpectedToken();
    }
    if (!head) {
        this.curlyStack.pop();
    }
    return {
        type: 10 /* Template */,
        value: this.source.slice(start + 1, this.index - rawOffset),
        cooked: cooked,
        head: head,
        tail: tail,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: start,
        end: this.index
    };
};
// https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
Scanner.prototype.testRegExp = function (pattern, flags) {
    // The BMP character to use as a replacement for astral symbols when
    // translating an ES6 "u"-flagged pattern to an ES5-compatible
    // approximation.
    // Note: replacing with '\uFFFF' enables false positives in unlikely
    // scenarios. For example, `[\u{1044f}-\u{10440}]` is an invalid
    // pattern that would not be detected by this substitution.
    var astralSubstitute = '\uFFFF';
    var tmp = pattern;
    var self = this;
    if (flags.indexOf('u') >= 0) {
        tmp = tmp
            .replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function ($0, $1, $2) {
            var codePoint = parseInt($1 || $2, 16);
            if (codePoint > 0x10FFFF) {
                self.throwUnexpectedToken(Messages.InvalidRegExp);
            }
            if (codePoint <= 0xFFFF) {
                return String.fromCharCode(codePoint);
            }
            return astralSubstitute;
        })
            .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
    }
    // First, detect invalid regular expressions.
    try {
        RegExp(tmp);
    }
    catch (e) {
        this.throwUnexpectedToken(Messages.InvalidRegExp);
    }
    // Return a regular expression object for this pattern-flag pair, or
    // `null` in case the current environment doesn't support the flags it
    // uses.
    try {
        return new RegExp(pattern, flags);
    }
    catch (exception) {
        /* istanbul ignore next */
        return null;
    }
};
Scanner.prototype.scanRegExpBody = function () {
    var ch = this.source[this.index];
    assert_1.assert(ch === '/', 'Regular expression literal must start with a slash');
    var str = this.source[this.index++];
    var classMarker = false;
    var terminated = false;
    while (!this.eof()) {
        ch = this.source[this.index++];
        str += ch;
        if (ch === '\\') {
            ch = this.source[this.index++];
            // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
            if (Character.isLineTerminator(ch.charCodeAt(0))) {
                this.throwUnexpectedToken(Messages.UnterminatedRegExp);
            }
            str += ch;
        }
        else if (Character.isLineTerminator(ch.charCodeAt(0))) {
            this.throwUnexpectedToken(Messages.UnterminatedRegExp);
        }
        else if (classMarker) {
            if (ch === ']') {
                classMarker = false;
            }
        }
        else {
            if (ch === '/') {
                terminated = true;
                break;
            }
            else if (ch === '[') {
                classMarker = true;
            }
        }
    }
    if (!terminated) {
        this.throwUnexpectedToken(Messages.UnterminatedRegExp);
    }
    // Exclude leading and trailing slash.
    return str.substr(1, str.length - 2);
};
Scanner.prototype.scanRegExpFlags = function () {
    var str = '';
    var flags = '';
    while (!this.eof()) {
        var ch = this.source[this.index];
        if (!Character.isIdentifierPart(ch.charCodeAt(0))) {
            break;
        }
        ++this.index;
        if (ch === '\\' && !this.eof()) {
            ch = this.source[this.index];
            if (ch === 'u') {
                ++this.index;
                var restore = this.index;
                var char = this.scanHexEscape('u');
                if (char !== null) {
                    flags += char;
                    for (str += '\\u'; restore < this.index; ++restore) {
                        str += this.source[restore];
                    }
                }
                else {
                    this.index = restore;
                    flags += 'u';
                    str += '\\u';
                }
                this.tolerateUnexpectedToken();
            }
            else {
                str += '\\';
                this.tolerateUnexpectedToken();
            }
        }
        else {
            flags += ch;
            str += ch;
        }
    }
    return flags;
};
Scanner.prototype.scanRegExp = function () {
    var start = this.index;
    var pattern = this.scanRegExpBody();
    var flags = this.scanRegExpFlags();
    var value = this.testRegExp(pattern, flags);
    return {
        type: 9 /* RegularExpression */,
        value: '',
        pattern: pattern,
        flags: flags,
        regex: value,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: start,
        end: this.index
    };
};
Scanner.prototype.lex = function () {
    if (this.eof()) {
        return {
            type: 2 /* EOF */,
            value: '',
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: this.index,
            end: this.index
        };
    }
    var cp = this.source.charCodeAt(this.index);
    if (Character.isIdentifierStart(cp)) {
        return this.scanIdentifier();
    }
    // Very common: ( and ) and ;
    if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
        return this.scanPunctuator();
    }
    // String literal starts with single quote (U+0027) or double quote (U+0022).
    if (cp === 0x27 || cp === 0x22) {
        return this.scanStringLiteral();
    }
    // Dot (.) U+002E can also start a floating-point number, hence the need
    // to check the next character.
    if (cp === 0x2E) {
        if (Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
            return this.scanNumericLiteral();
        }
        return this.scanPunctuator();
    }
    if (Character.isDecimalDigit(cp)) {
        return this.scanNumericLiteral();
    }
    // Template literals start with ` (U+0060) for template head
    // or } (U+007D) for template middle or template tail.
    if (cp === 0x60 || (cp === 0x7D && this.curlyStack[this.curlyStack.length - 1] === '${')) {
        return this.scanTemplate();
    }
    // Possible identifier start in a surrogate pair.
    if (cp >= 0xD800 && cp < 0xDFFF) {
        if (Character.isIdentifierStart(this.codePointAt(this.index))) {
            return this.scanIdentifier();
        }
    }
    return this.scanPunctuator();
};
module.exports = Scanner;