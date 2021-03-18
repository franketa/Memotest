mezclar = function (array) {
    for (let j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
}
let contadorinterno = 0;
let arrayComparacion = [];
let $contadorintentos = document.querySelector("#contador-intentos")
$contadorintentos.innerHTML = `Intentos: ${contadorinterno}`

function empezarContador() {
    let segundos = 0;
    let $contador = document.querySelector('#contador');
    setInterval(function () {
        $contador.innerHTML = `Tiempo: ${segundos}`;
        segundos++;
    }, 1000);

}
function contarIntentos(){
    let $contadorintentos = document.querySelector("#contador-intentos")
$contadorintentos.innerHTML = `Intentos: ${contadorinterno}`
}

function ordenarCartas() {
    let $cartas = document.querySelectorAll('.cuadro')
    let mezclado = mezclar(["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]);
    $cartas.forEach(function ($carta, index) {
        $cartas[index].classList.add(`${mezclado[index]}`);
        index++



    })
    desbloquearInputUsuario()
}

function comparacion(arrayaComparar) {
    
    if (arrayaComparar.length === 2) {
        let $comparar1 = arrayaComparar[0].classList[1]
        
        if (arrayaComparar[1].classList[1] === $comparar1) {
           contadorinterno++; 
            arrayaComparar[0].classList.toggle("oculto");
            arrayaComparar[1].classList.toggle("oculto");
            arrayComparacion = [];
            terminarJuego();

        }
        else {
            console.log("Error, cartas no son iguales")
            contadorinterno++; 
            terminarJuego();
            setTimeout(function () {
                arrayaComparar[0].classList.toggle("sinmostrar");
                arrayaComparar[1].classList.toggle("sinmostrar");
                arrayComparacion = [];
            }, 150);

        }
    }
    else { console.log("error $cartas<2") }
}

function manejarInputUsuario(e) {
    const $cuadrotocado = e.target;
    $cuadrotocado.classList.toggle("sinmostrar");
    arrayComparacion.push($cuadrotocado);
    comparacion(arrayComparacion);
    contarIntentos()

}
function desbloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function ($cuadro) {
        $cuadro.onclick = manejarInputUsuario;
    });
}
function terminarJuego(){
    let $contador = document.querySelector('#contador');
    let $divganaste = document.querySelector('#ganaste');
    if(document.querySelectorAll('.oculto').length === 13 ){
        $divganaste.innerHTML = `<h1>GANASTE en ${contadorinterno} Intentos!! VAMO PAPURRIIIIIII </h1>`
        $divganaste.classList.add("ganaste")
        $contadorintentos.classList.add("oculto");
        $contador.classList.add("oculto");
        
        

        
    }
}

function empezarJuego() {
    empezarContador();
    ordenarCartas();
    let $boton = document.querySelector('#botonempezar');
    $boton.classList.add("oculto");


}
