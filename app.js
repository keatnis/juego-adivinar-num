
let numeroMaximo = 10;
let numeroSecreto = 0;
let numerosSorteados = [];
//Math.random()*10  --- el *10 indica el numero maximo detro de los numero aleatorios
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si ya sorteamos todos los numeros
    if (numerosSorteados.length == numeroMaximo) {
        // si el numero GENERADO esta incluido en la lista 
        asignarTextoElemento('p', 'Ya sorteamos todos los numeros posibles');
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}
let numeroUsuario = 0;
let intentos = 0;
function asignarTextoElemento(element, texto) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    // .getElementVyId() para obtener el elemento por id
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // typeof() para saber el tipo de dato 
    // console.log(typeof(numeroDeUsuario))  
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        // cuando acierta el numero se puede reiniciar el juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    // el usuario no acerto 

    else {

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');

        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar el juego
    limpiarCaja();
    // restablecer el juego y las variables  
    //  indicar el numero de intervalo    
    //  inicializar el numero de interntos
    condicionesIniciales();
    //  generar el numero aleatorio
    //  deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);

    return;

}
condicionesIniciales();




