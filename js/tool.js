window.Tool=(function(){
    console.log("Tool 加载完成，代码示例：");
    console.log("屏蔽复制拦截:",getcmdhelp("copy"));

    return {
        copy
    };

    function getcmdhelp(name){return `fetch("//cnxzq.github.io/js/tool.js").then(d=>d.text()).then(t=>eval(t)).then(_=>Tool.${name}())`}

    function copy(){
        window.addEventListener("copy",e=>e.stopImmediatePropagation(),true);
        console.log("屏蔽成功");
    }
})()