import * as htmlparser2 from "htmlparser2";

if(window.define){
    define(function(){
        return htmlparser2
    })
}else{
    window.htmlparser2 = htmlparser2;
}
