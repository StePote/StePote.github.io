function controllo(){
    var tavolo=document.getElementById("numTavolo").value;
    var control=false;
    if(tavolo>100 || tavolo==""){
        alert("Tavolo non trovato")
    }
    else{
        for(var i=0;i<tavolo.length;i++){
            if(tavolo[i] != 0 && tavolo[i] != 1 && tavolo[i] != 2 && tavolo[i] != 3 && tavolo[i] != 4 && tavolo[i] != 5 && tavolo[i] != 6 && tavolo[i] != 7 && tavolo[i] != 8 && tavolo[i] != 9  || tavolo[i] ==" "){
                control=true;
                i=tavolo.length;
            }
        }
        if(control==true)
        alert("Tavolo non trovato")
        else
        location.href="menu.html"
    }
}