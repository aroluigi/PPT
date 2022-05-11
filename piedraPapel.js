
const manosPosibles=["piedra","tijera","papel"];

var marcador=[0,0,0]; //[PuntosJugador, Empates, PuntosCompu]

    while (marcador[0]+marcador[1]+marcador[2]<3) {

        var manoCompu=manosPosibles[Math.floor(Math.random() * 3)];

        var manoJugador=prompt("¿Piedra, papel o tijera? Yo ya hice mi elección.","Escriba su elección (en minúsculas).");
        
        document.write("<div style=\"text-align: center; font-size:1.5rem;\">Usted eligió \"" + manoJugador + "\" y yo elegí \"" + manoCompu + "\".<br>");
        
        if(manosPosibles.indexOf(manoJugador)==-1){document.write("Para jugar debe elegir una de las opciones.")}
        else if((manosPosibles.indexOf(manoJugador)+1)%3==(manosPosibles.indexOf(manoCompu))){
            document.write("Usted gana."); marcador[0]++} 
        else if((manosPosibles.indexOf(manoJugador))==(manosPosibles.indexOf(manoCompu))){
            document.write("Empate."); marcador[1]++}
        else {document.write("Yo gano."); marcador[2]++} 
    }

document.write("<br><hr><p>El marcador final es:</p> Usted gana: " + marcador[0] + "<br>Empates: " + marcador[1] + "<br>Yo gano: " + marcador[2]);

document.write("<hr><br><input type='button' value='Jugar de nuevo' onClick=location.reload()></div>");