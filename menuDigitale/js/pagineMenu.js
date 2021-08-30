function ordinazione1(){
    var antipasti=new Array();
    var i;
    i=0;
    if(ant1.checked){
        antipasti[i]="Antipasto della casa (salumi e formaggi locali)";
        i++;
    }
    if(ant2.checked){
        antipasti[i]="Antipasto all'italiana (salumi classici)";
        i++;
    }
    if(ant3.checked){
        antipasti[i]="Prosciutto e melone";
        i++;
    }
    if(ant4.checked){
        antipasti[i]="Caprese";
        i++;
    }
    if(ant5.checked){
        antipasti[i]="Crudo e Bufala";
        i++;
    }
    ordine="Antipasti:";
    for(var j=0;j<i;j++){
        ordine= ordine + " " + antipasti[j];
    }
    return ordine;
}
function ordinazione2(){
    if(primi1.checked){
        alert("cua2");
    }
}
function ordinazione3(){
    if(primi1.checked){
        alert("cua3");
    }
}
function ordinazione4(){
    if(primi1.checked){
        alert("cua2");
    }
}
function ordinazione5(){
    if(primi1.checked){
        alert("cua2");
    }
}
function ordinazione6(){
    if(primi1.checked){
        alert("cua2");
    }
}
function ordinazione7(){
    if(primi1.checked){
        alert("cua2");
    }
}
function ordinazione8(){
    if(primi1.checked){
        alert("cua2");
    }
}
function ordinazione9(){
    if(primi1.checked){
        alert("cua2");
    }
}
function ordineTotale(){
    document.getElementById("ord").innerHTML= ordine;
}