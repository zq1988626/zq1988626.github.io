#!/usr/bin/env node
const recast = require("recast");
const TNT = recast.types.namedTypes;

recast.run(function(ast, printSource){
    recast.visit(ast,{
        visitExpressionStatement:function(path){
            const node = path.node;
            if(TNT.ExpressionStatement.check(node)){
                console.log("\n这是一个ExpressionStatement:");
                printSource(node)
            }

            TNT.ExpressionStatement.assert(node);
            //printSource(node);
            this.traverse(path);
        }
    })
})