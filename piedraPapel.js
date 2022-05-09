
var manosPosibles=["piedra","tijera","papel"];
//console.log("vector de opciones: " + manosPosibles);

var manoCompu=manosPosibles[Math.floor(Math.random() * 3)];
//console.log("opción de la máquina: " + manoCompu);

var manoJugador=prompt("¿Piedra, papel o tijera? Yo ya hice mi elección.","Escriba su elección (en minúsculas).");
//console.log("opción del usuario: " + manoJugador);
//console.log("índice del usuario: " + manosPosibles.indexOf(manoJugador));

document.write("<div style=\"text-align: center; font-size:2rem\">Usted eligió \"" + manoJugador + "\" y yo elegí \"" + manoCompu + "\".<br>");

if(manosPosibles.indexOf(manoJugador)==-1){document.write("Para jugar debe elegir una de las opciones.</div>")}
else if((manosPosibles.indexOf(manoJugador)+1)%3==(manosPosibles.indexOf(manoCompu))){document.write("Usted gana.</div>")} 
else if((manosPosibles.indexOf(manoJugador))==(manosPosibles.indexOf(manoCompu))){document.write("Empate.</div>")}
else if((manosPosibles.indexOf(manoCompu)+1)%3==(manosPosibles.indexOf(manoJugador))){document.write("Yo gano.</div>")} 

if(confirm("¿Desea jugar de nuevo?")){window.location="./index.html"};