let bodyElement = document.getElementById("main");
let fechaObjetivo = document.getElementById("fechaObjetivo");
let fechaEscogida = new Date("10/20/2024");

let segundoObjetivo = fechaEscogida.getSeconds;
let minutoObjetivo = fechaEscogida.getMinutes;
let horaObjetivo = fechaEscogida.getHours;
let diaObjetivo = fechaEscogida.getDay;
let mesObjetivo = fechaEscogida.getMonth;
let anioObjetivo = fechaEscogida.getFullYear;




let nombreIntervalo = setInterval(() => {
    
    let fechaActual = new Date();
    let segundo = fechaActual.getSeconds;
    let minuto = fechaActual.getMinutes;
    let hora = fechaActual.getHours;
    let dia = fechaActual.getDay;
    let mes = fechaActual.getMonth;
    let anio = fechaActual.getFullYear;

    



    
}, 1000);
let segundosRestantes = segundo - segundoObjetivo;
let minutosRestantes = minuto - minutoObjetivo;
let horasRestantes = hora - horaObjetivo;
let diasRestantes = dia - diaObjetivo;
let mesesRestantes = mes - mesObjetivo;
let aniosRestantes = anio - anioObjetivo;


if(segundosRestantes&&minutosRestantes&&horasRestantes&&diasRestantes&&mesesRestantes&&aniosRestantes == 0){
    clearInterval(nombreIntervalo);
}


