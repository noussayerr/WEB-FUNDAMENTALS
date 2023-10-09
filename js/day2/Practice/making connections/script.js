console.log("page loaded...");
var h=document.querySelector("#name");
function change(){
    h.innerText="rahal noussayer";
}
var x1=2;
var x2=400;
function add(x,count,count2){
    x.remove();
    x1--;
    x2++;
    count.innerText=x1;
    count2.innerText=x2;
}
function refuse(x,count,count2){
    x.remove();
    x1--;
    count.innerText=x1;
}