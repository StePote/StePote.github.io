function creaFigura(){
	var mioCanvas= document.getElementById("canvas1");
	var ctx=mioCanvas.getContext("2d");
	ctx.arc(200,200,100,0,Math.PI*2,true);
	ctx.lineWidth=3;
	ctx.strokeStyle="rgba(0,0,255,1)";//blu
	ctx.stroke();
	ctx.fillStyle="rgba(255,0,0,1)";//colore area cerchio(rosso)
	ctx.fill();// esegui tutte le istruzioni fill sopra (fill() serve per effetuare operazioni all'interno della figura)
}
function olimpiadi(){
	var mioCanvas= document.getElementById("canvas2");
	var ctx=mioCanvas.getContext("2d");

	ctx.beginPath();//inizia a disegnare
	ctx.arc(200,200,100,0,2*Math.PI,true);//per disegnare un arco.(x da sinistra,y dall'alto,grandezza,0,Math.PI indica i gradi dell'arco che di default sono 180° e mettendo Math.PI*2=360° e quindi abbiamo un cerchio,true);
	ctx.lineWidth=15;//la larghezza del contorno del cerchio
	ctx.strokeStyle="rgba(0,0,255)";//colore del contorno del cerchio
	ctx.stroke();//disegna quello scritto sopra
	ctx.closePath();//chiudi il disegno

	ctx.beginPath();
	ctx.arc(420,200,100,0,2*Math.PI,true);
	ctx.lineWidth=15;
	ctx.strokeStyle="rgba(0,0,0)";
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(640,200,100,0,2*Math.PI,true);
	ctx.lineWidth=15;
	ctx.strokeStyle="rgba(255,0,0)";
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(310,300,100,0,2*Math.PI,true);
	ctx.lineWidth=15;
	ctx.strokeStyle="rgba(255,255,0)";
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(530,300,100,0,2*Math.PI,true);
	ctx.lineWidth=15;
	ctx.strokeStyle="rgba(0,143,57)";
	ctx.stroke();
	ctx.closePath();
}