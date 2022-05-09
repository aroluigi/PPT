
var manosPosibles=["piedra","tijera","papel"];

var manoCompu=manosPosibles[Math.floor(Math.random() * 3)];

var manoJugador=prompt("¿Piedra, papel o tijera? Yo ya hice mi elección.","Escriba su elección (en minúsculas).");

document.write("<div style=\"text-align: center; font-size:2rem\">Usted eligió \"" + manoJugador + "\" y yo elegí \"" + manoCompu + "\".<br>");

if(manosPosibles.indexOf(manoJugador)==-1){document.write("Para jugar debe elegir una de las opciones.</div>")}
else if((manosPosibles.indexOf(manoJugador)+1)%3==(manosPosibles.indexOf(manoCompu))){document.write("Usted gana.</div>")} 
else if((manosPosibles.indexOf(manoJugador))==(manosPosibles.indexOf(manoCompu))){document.write("Empate.</div>")}
else {document.write("Yo gano.</div>")} 

if(confirm("¿Desea jugar de nuevo?")){location.reload()};