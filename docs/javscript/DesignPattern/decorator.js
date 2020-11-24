//decorator装饰者模式f
function decorator(sourceObj,decortorFn){
    decortorFn(sourceObj);
    return sourceObj
}
var d = {a:1};
// d变为了{a:1,b:1}
d = decorator(d,(d)=>{d.b=1});