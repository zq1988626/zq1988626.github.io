const exprima = require("esprima");

let source = `

var a = 3;
let b = 5;
function add(d,c){
    return d + c;
}

let reslt = add(a,b);
console.log(reslt);

`

var ast = exprima.parse(source, {
    loc: true,
    locations: true,
    comment: true,
    //onComment: comments,
    //range: util_1.getOption(options, "range", false),
    //tolerant: util_1.getOption(options, "tolerant", true),
    tokens: true,
    //jsx: util_1.getOption(options, "jsx", false)
})

console.log(ast);