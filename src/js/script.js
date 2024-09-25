let bodyElement = document.getElementById("main");

let fechaEscogida = new Date(2024, 11,15);
fechaEscogida.setHours(0, 0, 0, 0);

let countdown = document.createElement("p");

let inputElement = document.createElement("input");
inputElement.setAttribute("type", "date");
inputElement.setAttribute("name", "fecha");
inputElement.setAttribute("id", "fechaObjetivo");


bodyElement.append(countdown);
bodyElement.append(inputElement);

let nombreIntervalo = setInterval(() => {
    const now = new Date();

    if (fechaEscogida > now) {
        const totalMilliseconds = fechaEscogida.getTime() - now.getTime();
        const totalSeconds = Math.trunc(totalMilliseconds / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.trunc(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const totalHours = Math.trunc(totalMinutes / 60);
        const hours = totalHours % 24;
        const totalDays = Math.trunc(totalHours / 24);

        let months = (fechaEscogida.getFullYear() - now.getFullYear()) * 12 + (fechaEscogida.getMonth() - now.getMonth());
        const days = totalDays % 30;

        countdown.textContent = `Mes(es): ${months}, Día(s): ${days}, Hora(s): ${hours}, Minuto(s): ${minutes}, Segundo(s): ${seconds}`;

    }else{
        clearInterval(nombreIntervalo);
        countdown.textContent = "¡¡HAPPY BIRTHDAY!!"
    }
    
}, 1000);


