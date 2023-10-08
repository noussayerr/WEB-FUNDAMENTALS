var count1=0;
var count2=0;
var count3=0;
function add(p){
    if(p==p1){
        count1++;
        p.innerText=count1+"like(s)";
    }
    else if(p==p2){
        count2++;
        p.innerText=count2+"like(s)";
    }
    else{
        count3++;
        p.innerText=count3+"like(s)";
    }
    
}
