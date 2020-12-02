window.Tool=(function(){
    console.log("加载完成");
    var cmd = {
        copy:["屏蔽复制拦截",()=>window.addEventListener("copy",e=>e.stopImmediatePropagation(),true)]
    }

    
    function getcmdhelp(name){return `fetch("//cnxzq.github.io/js/tool.js").then(d=>d.text()).then(t=>eval(t),Tool.${name}())`}
    function help(){
        console.log("代码示例");
        for(var a in cmd){
            console.log(cmd[a],":",getcmdhelp(a));
        }
    }
    var rev = {help};
    for(var a in cmd){ rev[a]=cmd[a][1]; }
    return rev;
})()