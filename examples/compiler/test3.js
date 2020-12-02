const {
  tokenizer,
  parser,
  transformer,
  codeGenerator,
  compiler,
} = require('./compiler3');

const input  = `let d = 0;
function add(a,b){
  if(a == b){return a*2}
  return a+b
}
d = add(3,5)`;

var tokens = tokenizer(input);
console.log(tokens);
//var ast = parser(tokens);
//let Es6Ast = transformer(ast)
//let code = codeGenerator(Es6Ast)

//console.log(code);
//console.log(compiler(input));
