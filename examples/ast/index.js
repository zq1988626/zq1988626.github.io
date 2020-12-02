const recast = require("recast");

const code = `
function add(a,b){
    return a +
    // 注释
    b
}
`

const ast = recast.parse(code);

const add = ast.program.body[0];
console.log(add);
console.log(add.params[0]);
console.log(add.body.body[0].argument.left);


const {
    variableDeclaration,
    variableDeclarator,
    functionExpression
} = recast.types.builders;

ast.program.body[0] = variableDeclaration("const",[
    variableDeclarator(add.id,functionExpression(
        null,// Anonymize the function expression
        add.params,
        add.body
    ))
])

let output = recast.print(ast).code;
console.log(output);
output = recast.prettyPrint(ast,{tabWidth:4}).code;
console.log(output);

