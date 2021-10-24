
function Precio(){
    var cant= document.getElementById("cantidad").value;
    var sel= document.getElementById("categoria");
    var valorsel=parseFloat(sel.options[sel.selectedIndex].value);
    var total=0;

    switch(valorsel){
        case 1:
            var total=(200*cant)-(((200*cant)*80)/100);
            document.getElementById("Total").value=total;
            break;
        case 2:
            var total=(200*cant)-(((200*cant)*50)/100);
            document.getElementById("Total").value=total;
            break;
        case 3:
            var total=(200*cant)-(((200*cant)*15)/100);
            document.getElementById("Total").value=total;
            break;
    }

   
   
}



