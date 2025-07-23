// opciones[piedra, papel, tijera]
var opciones = [0,1,2];
var eleccionMaquina;

function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * ( maximo - minimo + 1) + minimo);
    //alert(numero);
    return numero;
}

function usuario(teleccionUsuario){
    eleccionUsuario = parseInt(teleccionUsuario);
    eleccionMaquina = aleatorio(0,2);
   //  alert(eleccionUsuario);
    // alert(eleccionMaquina);

     // Test
     // eleccionUsuario = 0;
     // eleccionMaquina = 1;
     // Test

     if(eleccionUsuario == 0){
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML = '<h1> ¡Perdiste! </h1> <h3>La Maquina eligio papel y tu Piedra</h3>';
        }else{
            if(opciones[eleccionMaquina] == 2){
                document.getElementById('efecto').innerHTML = '<h1> ¡Ganaste! </h1> <h3>La Maquina eligio tijera y tu Piedra</h3>';
            } else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML = '<h1> ¡Empete! </h1> <h3>Ambos a  eligido tijera y tu Piedra</h3>';
                }
            }
        }
    }


     if(eleccionUsuario == 1){
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML = '<h1> ¡Perdiste! </h1> <h3>La Maquina eligio tijera y tu Piedra</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML = '<h1> ¡Ganaste! </h1> <h3>La Maquina eligio Piedra y tu Papel</h3>';
            } else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML = '<h1> ¡Empete! </h1> <h3>Ambos a  eligido Papel y tu Papel</h3>';
                }
            }
        }
    }

    if(eleccionUsuario == 2){
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML = '<h1> ¡Ganaste! </h1> <h3>La Maquina eligio Papel y tu tijera</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML = '<h1> ¡Perdiste! </h1> <h3>La Maquina eligio Piedra y tu tijera</h3>';
            } else{
                if(opciones[eleccionMaquina] == 2){
                    document.getElementById('efecto').innerHTML = '<h1> ¡Empete! </h1> <h3>Ambos a  eligido tijera y tu tijera</h3>';
                }
            }
        }
    }
     
     document.getElementById('efecto').style.display = "";

     setTimeout(quitarEfecto, 3000); 
}

function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";

}