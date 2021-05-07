function Pdf(){
    var p= new jsPDF();

    var image="data:image/jpeg;base64," + Base64.encode("R:\Desktop\Progetti html\JSPDF\images\italia.jpg");
    p.text(50,30,"Questionario su alcune abitudini degli italiani");
    //p.addPage() per aggiungere pagine al file pdf
    var ora=document.getElementById("orarioSveglia").value;
    p.text(0,100,"Orario di sveglia : " + ora);
   
    var colazione=document.getElementById("colazione").value;
    p.text(0,150,"Cibo a colazione : " + colazione);

    var sport=document.getElementById("sport").value;
    p.text(0,200,"Sport preferito : " + sport);

    p.addImage(image,"JPEG",20,10,150,300);
    p.save("questionario.pdf");
}