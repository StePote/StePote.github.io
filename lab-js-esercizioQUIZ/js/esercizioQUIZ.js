function calcolaPunteggio(form){
    var punteggio=0;
    risposteCorrette= new Array("DATA MANIPULATION LANGUAGE","1","Statiche","void","char","byte");
    risposte4= new Array()
    var r1=document.getElementById("Risposta1").value;
    
    if(document.getElementById("Risposta2").selectedIndex==1)
    var r2=1;
    else if(document.getElementById("Risposta2").selectedIndex==2)
    var r2=2;
    else if(document.getElementById("Risposta2").selectedIndex==3)
    var r2=4;
    else if(document.getElementById("Risposta2").selectedIndex==4)
    var r2=256;
    
    if(form.Risposta3_1.checked)
    var r3="Statiche";
    else if(form.Risposta3_2.checked)
    var r3="Dinamiche";

    var i=0;
    if(form.Risposta4_1.checked){
        risposte4[i]="void";
        i++;
    }
    else if(form.Risposta4_2.checked){
        risposte4[i]="intereger";
        i++;
    }
    else if(form.Risposta4_3.checked){
        risposte4[i]="chair";
    }

    var r5=document.getElementById("Risposta5").value;

    if(r1==risposteCorrette[0])
    punteggio++;
    else if(r2==risposteCorrette[1])
    punteggio++;
    else if(r3==risposteCorrette[2])
    punteggio++;
    else if(r4[0]==risposteCorrette[3])
    punteggio++;
    else if(r4[1]==risposteCorrette[4])
    punteggio++;
    else if(r5==risposteCorrette[5])
    punteggio++;
    document.getElementsByName("textPunteggio").innerHTML="Punteggio: " + punteggio;
}