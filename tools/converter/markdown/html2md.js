export default function(html){
    let box = document.createElement("div");
    box.innerHTML = html;

    let rev = [].map.call(box.childNodes,item=>exp(item)).join("\n")
    return rev;
}


function P(node){
    return node.innerHTML;
}

function H1(node){
    return "# " + node.innerHTML;
}

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

function defaultPaser(node){
    return node.outerHTML;
}

const pasers = {
    H1,P,TABLE
}

function exp(node){
    return pasers[node.tagName]&&pasers[node.tagName](node)||defaultPaser(node);
}