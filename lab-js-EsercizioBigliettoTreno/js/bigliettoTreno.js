function calcoloCosto(form){
            var costoAlKm;
            var km=document.getElementById("textbox").value;
            km=km.replace(/\,/g , ".");
            var scelta=document.getElementById("NumeroPersone").selectedIndex;
            var numPersone;
            if(km=="")
                alert("GENERIC ERROR. Inserire il numero di km da percorrere", "GENERIC ERROR")
            switch (scelta) {
            case 0:
                numPersone=1;
                break;
            case 1:
                numPersone=2;
                break;
            case 2:
                numPersone=3;
                break;
            case 3:
                numPersone=4;
                break;
            case 4:
                numPersone=5;
                break;
            case 5:
                numPersone=6;
                break;
            }
            
            if(form.r1.checked)
                costoAlKm=0.43;
            else if(form.r2.checked)
                costoAlKm=0.20;
            else
                alert("GENERIC ERROR. Inserire la classe in cui si vuole viaggiare", "GENERIC ERROR")
            var costoSing;
            costoSing=km*costoAlKm;
            var costoTot;
            costoTot=costoSing*numPersone;
            //if(peso==NaN)
            //alert("GENERIC ERROR. Non hai inserito il volume", "GENERIC ERROR")
            document.getElementById("esito").innerHTML=costoSing.toFixed(2) + "€";
            document.getElementById("esito2").innerHTML=costoTot.toFixed(2) + "€";
        }
        function resetta(){
            document.getElementById("esito").innerHTML="-";
            document.getElementById("esito2").innerHTML="-";
        }