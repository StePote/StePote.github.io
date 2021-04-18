function calcolaLorenz(){
	var altezza= document.getElementById("textAltezza1").value;
	var indexSesso= document.getElementById("sesso1").selectedIndex;
	if(altezza>0 && altezza!= ""){
		
	switch(indexSesso){
		case 0:
		alert("Inserire il sesso");
		break;
		case 1:
		var pesoForma= (altezza-100)-((altezza-150)/4);
		break;
		case 2:
		var pesoForma= (altezza-100)-((altezza-150)/2);
		break;
		}
	}else alert("Inserire l'altezza(altezza pari a 0 non accettabile)");
		
		document.getElementById("esitoLorenz").innerHTML="Il tuo peso forma è " + pesoForma;
}
function calcolaBroca(){
	var altezza= document.getElementById("textAltezza2").value;
	var indexSesso= document.getElementById("sesso2").selectedIndex;
	if(altezza>0 && altezza!= ""){
	switch(indexSesso){
		case 0:
		alert("Inserire il sesso");
		break;
		case 1:
		var pesoForma= altezza-100;
		break;
		case 2:
		var pesoForma= altezza-104;
		break;
	}
	}else alert("Inserire l'altezza(altezza pari a 0 non accettabile)");
		document.getElementById("esitoBroca").innerHTML="Il tuo peso forma è " + pesoForma;
}
function calcolaWan(){
	var altezza= document.getElementById("textAltezza3").value;
	var indexSesso= document.getElementById("sesso3").selectedIndex;
	if(altezza>0 && altezza!= ""){
	switch(indexSesso){
		case 0:
		alert("Inserire il sesso");
		break;
		case 1:
		var pesoForma= (altezza - 150)* 0.75 + 50;
		break;
		case 2:
		var pesoForma= (altezza - 150)* 0.6 + 50;
		break;
		}
	}else alert("Inserire l'altezza(altezza pari a 0 non accettabile)");
		document.getElementById("esitoWan").innerHTML="Il tuo peso forma è " + pesoForma;
}
function calcolaBMI(){
	var altezza= document.getElementById("textAltezza4").value;
	altezza=altezza.replace(/\,/g , ".");
	var peso=document.getElementById("peso").value;
	peso=peso.replace(/\,/g , ".");
	if(altezza>0 && altezza!= "" && peso>0 && peso!=""){
	var pesoForma= peso/(altezza*altezza);
	}else alert("Inserire l'altezza o peso(altezza e peso pari a 0 non accettabile)");
	document.getElementById("esitoBMI").innerHTML="Il tuo valore BMI è " + pesoForma.toFixed(2) +". Consulta la tabella qui sotto!";
}