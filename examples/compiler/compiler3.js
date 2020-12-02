'use strict';

function tokenizer(input) {
  let current = 0;
  let tokens = [];
  
  while (current < input.length) {
    let char = input[current];
    
    function gen(opts,type){
      for(var a in opts){
        if(input[current]==opts[a]){ 
          tokens.push({ type: type, value: opts[a]}); 
          current++;
          return true;
        }
      }
    }
    

    if(gen("(){}+-*/","Punctuator")){continue}
    
    if(gen(";,","spliter")){continue}

    
    //return this.source.slice(start, this.index);
    
    let DY = /=/;
    if (DY.test(char)) {
      let value = '';
      while (DY.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: 'Punctuator', value });
      continue;
    }

    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      let value = '';
      while (WHITESPACE.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: 'space', value });
      continue;
    }
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = '';
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: 'Numeric', value });
      continue;
    }
    if (char === '"') {
      let value = '';
      char = input[++current];
      while (char !== '"') {
        value += char;
        char = input[++current];
      }
      char = input[++current];
      tokens.push({ type: 'string', value });
      continue;
    }
    let LETTERS = /[a-z$_]/i;
    if (LETTERS.test(char)) {
      let value = '';
      let LETTERS2 = /[a-z_$0-9]/i;
      while (LETTERS2.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: 'Identifier', value });
      continue;
    }
    throw new TypeError('I dont know what this character is: ' + char);
  }
  return tokens;
}

function parser(tokens) {
  let current = 0;
  function walk() {
    let token = tokens[current];
    if (token.type === 'number') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }
    if (token.type === 'string') {
      current++;
      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {
      token = tokens[++current];
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };
      token = tokens[++current];
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        node.params.push(walk());
        token = tokens[current];
      }
      current++;
      return node;
    }
    throw new TypeError(token.type);
  }
  let ast = {
    type: 'Program',
    body: [],
  };
  while (current < tokens.length) {
    ast.body.push(walk());
  }
  return ast;
}

function traverser(ast, visitor) {
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }
  
  function traverseNode(node, parent) {
    let methods = visitor[node.type];
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    switch (node.type) {
      case 'Program':
        traverseArray(node.body, node);
        break;
      case 'CallExpression':
        traverseArray(node.params, node);
        break;
      case 'NumberLiteral':
      case 'StringLiteral':
        break;
      default:
        throw new TypeError(node.type);
    }
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }
  
  traverseNode(ast, null);
}

function transformer(ast) {
  let newAst = {
    type: 'Program',
    body: [],
  };
  ast._context = newAst.body;
  traverser(ast, {
    NumberLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },
    CallExpression: {
      enter(node, parent) {
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };
        node._context = expression.arguments;
        if (parent.type !== 'CallExpression') {
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }
        parent._context.push(expression);
      },
    }
  });
  return newAst;
}
function codeGenerator(node) {
  switch (node.type) {
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) + ';'
      );
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );
    case 'Identifier':
      return node.name;
    case 'NumberLiteral':
      return node.value;
    case 'StringLiteral':
      return '"' + node.value + '"';
    default:
      throw new TypeError(node.type);
  }
}
/**
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */
function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);
  return output;
}

module.exports = {
  tokenizer,    // 分词器
  parser,       // 解析器
  traverser,    // 遍历器
  transformer,  // 转换器 
  codeGenerator,// 代码生成器
  compiler,     // 编译器
};
