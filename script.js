const htmlCode=document.querySelector(".html";)
const cssCode=document.querySelector(".css");
const jsCode=document.querySelector(".JavaScript");
const display=document.querySelector(".display");

function compileCode(){
    display.contentDocument.body.innerHTML=htmlCode.value+"<style>"cssCode.value+"</style>";
    display.contentWindow.eval(jsCode.value);
}