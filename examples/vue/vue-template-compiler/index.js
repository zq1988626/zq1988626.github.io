const compiler = require('vue-template-compiler');
const fs = require('fs');

const template = `
<div id="test">
  <p>测试内容</p>
  <p>{{test}}</p>
</div>`
let options = {}
let result = compiler.compile(template)
console.log(result)

result = compiler.compileToFunctions(template)
console.log(result)

result = compiler.ssrCompile(template, options)
console.log(result)

result = compiler.ssrCompileToFunctions(template)
console.log(result)

result = compiler.parseComponent("./commponents/index.vue", options)
console.log(result)

// 生成ast语法树
const ast = compiler.parse(template.trim(), options)
// 标记静态内容（以免diff的时候需要重复比较）
compiler.optimize(ast, options)
// 生成 render function code
const code = compiler.generate(ast, options)
console.log(code);

var fc = fs.readFileSync("./commponents/index.vue");
console.log(fc);