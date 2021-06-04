import * as htmlparser2 from "./_snowpack/pkg/htmlparser2.js";

if(window.define){
    define(function(){
        return htmlparser2
    })
}else{
    window.htmlparser2 = htmlparser2;
}
