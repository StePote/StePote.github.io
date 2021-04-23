function inizializza(){
    var sesso=["","Maschio","Femmina"];
    for(var i=0;i<sesso.length;i++)
    {
        var s=document.createElement("option");
        s.value=sesso[i];
        s.innerHTML=sesso[i];
        document.getElementById("cmbSesso").appendChild(s);
    }
    
    var coloreOcchi=["","Nero","Castano","Verde","Blu","Ambra"];
    for(var i=0;i<coloreOcchi.length;i++)
    {
        var o=document.createElement("option");
        o.value=coloreOcchi[i];
        o.innerHTML=coloreOcchi[i];
        document.getElementById("cmbOcchi").appendChild(o);
    }
    
    var provincia=["","BG","BS","CO","CR","LC","LO","MN","MI","MB","PV","SO","VA"];
    for(var i=0;i<provincia.length;i++)
    {
        var p=document.createElement("option");
        p.value=provincia[i];
        p.innerHTML=provincia[i];
        document.getElementById("cmbProvincia").appendChild(p);
    }
}
function controlla(){
    var check=false;
    if(document.getElementById("textNome").value=="")
        check=true;
    if(document.getElementById("textCognome").value=="")
        check=true;
    if(document.getElementById("textAnno").value=="")
        check=true;
    if(document.getElementById("textGiorno").value=="")
        check=true;
    if(document.getElementById("Mese").selectedIndex==0)
        check=true;
    if(document.getElementById("cmbSesso").selectIndex==0)
        check=true;
    if(document.getElementById("cmbProvincia").selectedIndex==0)
        check=true;
    if(document.getElementById("cmbOcchi").selectedIndex==0)
        check=true;
    if(!check)
        alert("Offerta attivata, GRAZIE!");
    else
        alert("Dati non inseriti,riprovare");
}