export default function(html){
    let box = document.createElement("div");
    box.innerHTML = html;

    let rev = [].map.call(box.childNodes,item=>exp(item)).join("\n")
    return rev;
}


function PRE(node){
    let code = node.querySelectorAll("code");
    let lang = ""
    if(code && code.length>0){
        code = code[0];
        if(code.className){
            let _lang = code.className.split(" ").find(d=>d.includes("language"));
            if(_lang){
                lang = _lang.split("-")[1]
            }
        }
    }
    return "\n```"+lang+"\n\
"+ node.innerText +"\n\
```\n";
}
function LI(node){
    return SPAN(node);
}

function UL(node){
    return [].map.call(node.querySelectorAll("li"),LI).map(txt=>"* "+txt).join("\n")
}

function OL(node){
    return [].map.call(node.querySelectorAll("li"),LI).map(txt=>"+. "+txt).join("\n")
}
function IMG(node){
    let src="";
    let title = "";
    if(node.src){
        src = node.src
    }
    if(node.title){
        title = node.title
    }else if(node.alt){
        title = node.alt
    }
    return `![${title}](${src})`
}

function P(node){
    return "\n"+SPAN(node)+"\n";
}

function H1(node){ return "\n# " + node.innerHTML; }
function H2(node){ return "\n## " + node.innerHTML; }
function H3(node){ return "\n### " + node.innerHTML; }
function H4(node){ return "\n#### " + node.innerHTML; }
function H5(node){ return "\n##### " + node.innerHTML; }
function H6(node){ return "\n###### " + node.innerHTML; }
function H7(node){ return "\n####### " + node.innerHTML; }

function TABLE(node){
    if(node.rows.length===0){return "";}
    if(node.rows.length===1){return node.outerHTML;}

    let rev = [].map.call(node.rows,
        item=>"| "+[].map.call(item.children,col=>col.innerHTML).join(" | ")+" |"
    );
    
    var body = rev.splice(1);
    rev.push("| "+new Array(node.rows[0].children.length).fill().map(_=>"-").join(" |")+" |")
    
    return rev.concat(body).join("\n")
}

function BR(node){
    return "\n";
}

function SPAN(node){
    return node.innerHTML.replace(/\n/g,"\n\n");
}

function defaultPaser(node){
    /*
    if(node.nodeType===3){
        if(node.nodeName.toLowerCase()==="#text"){
            return node.textContent;
        }
    }
    */
    return node.outerHTML || node.textContent;
}

const pasers = {
    BR,IMG,PRE,SPAN,OL,UL,LI,P,TABLE,H1,H2,H3,H4,H5,H6,H7
}

function exp(node){
    if(pasers[node.tagName]){
        return pasers[node.tagName](node)
    }else{
        return defaultPaser(node)
    }
}