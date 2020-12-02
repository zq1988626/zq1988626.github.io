window.Tool=(function(){
    return {
        help,
        copy // 拦截所有 copy 事件
    }
    function help(){
        console.log("Tool help");
        console.log(`fetch("//cnxzq.github.io/js/tool.js").then(d=>d.text()).then(eval)`);
        console.log("Tool.copy()");
        console.log(`fetch("//cnxzq.github.io/js/tool.js").then(d=>d.text()).then(eval).then(()=>Tool.copy())`);
    }
    function copy(){
        window.addEventListener("copy",e=>e.stopImmediatePropagation(),true)
    }
})()