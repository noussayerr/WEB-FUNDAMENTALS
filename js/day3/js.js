function loading() {
    alert("Loading weather report...")
}
function remov(){
    x=document.getElementById("b-col");
    x.remove();
}
function change(elem){
    for(var i=1;i<9;i++){
        var x=document.getElementById("temp"+i);
        var val = parseInt(x.innerText);
        if(elem.value=="°F"){
            x.innerText=Math.round((9 / 5 * val) + 32);
        }
        else{
            x.innerText=Math.round((val-32)*5/9);
        }
    }
}
