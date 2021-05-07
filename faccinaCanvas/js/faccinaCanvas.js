function disegna(){
    var mioCanvas=document.getElementById("faccina");
    var f=mioCanvas.getContext("2d");

    f.beginPath();//faccia
    f.arc(200,200,100,0,Math.PI*2,true);
    f.lineWidth=5;
    f.fillStyle="rgba(255, 255, 0)";
    f.strokeStyle="rgba(0, 0, 0)";
    f.fill();
    f.stroke();
    f.closePath();

    f.beginPath();//occhio sinistro
    f.arc(160,150,10,0,Math.PI*2,true);
    f.lineWidth=5;
    f.fillStyle="rgba(0,0,0)";
    f.strokeStyle="rgba(0,0, 0)";
    f.fill();
    f.stroke();
    f.closePath();
    
    f.beginPath();//occhio destro
    f.arc(235,150,10,0,Math.PI*2,true);
    f.lineWidth=5;
    f.fillStyle="rgba(0,0,0)";
    f.strokeStyle="rgba(0,0, 0)";
    f.fill();
    f.stroke();
    f.closePath();

    f.beginPath();//pupilla destra
    f.arc(235,150,2,0,Math.PI*2,true);
    f.lineWidth=5;
    f.fillStyle="rgba(255,255,255)";
    f.strokeStyle="rgba(255,255, 255)";
    f.fill();
    f.stroke();
    f.closePath();

    f.beginPath();//pupilla sinistra
    f.arc(160,150,2,0,Math.PI*2,true);
    f.lineWidth=5;
    f.fillStyle="rgba(255,255,255)";
    f.strokeStyle="rgba(255,255, 255)";
    f.fill();
    f.stroke();
    f.closePath();

    f.beginPath();//semicerchio bocca
    f.arc(200,220,50,0,Math.PI,false);
    f.lineWidth=5;
    f.fillStyle="rgba(255,255, 255)";
    f.strokeStyle="rgba(0,0, 0)";
    f.fill();
    f.stroke();
    f.closePath();

    f.beginPath();//linea chiusura bocca
    f.moveTo(148,220);
    f.lineTo(252,220);
    f.lineWidth=5;
    f.fillStyle="rgba(255,255, 255)";
    f.strokeStyle="rgba(0,0, 0)";
    f.fill();
    f.stroke();
    f.closePath();
}