let bodyElement = document.getElementById("main");
let countdown = document.createElement("p");
let divElement = document.createElement("div");
let divCountown = document.createElement("div");

divCountown.setAttribute("class", "contenedor");

let h1Element = document.createElement("h1");

h1Element.textContent = "Counter"

let inputElement = document.createElement("input");
inputElement.setAttribute("type", "date");
inputElement.setAttribute("name", "fecha");
inputElement.setAttribute("id", "objetiveDate");

let newDate = null;
let targetTime = null;
let countdownInterval = null;

inputElement.addEventListener("change", () => {
    newDate = new Date(inputElement.value);
    newDate.setHours(0, 0, 0, 0);
    targetTime = newDate.getTime();

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    startCountdown();

});

bodyElement.append(divElement);
divElement.append(divCountown)
divCountown.append(h1Element);
divCountown.append(countdown);
divCountown.append(inputElement);

function startCountdown() {
    countdownInterval = setInterval(() => {
        const now = new Date().getTime();

        if (targetTime) {
            let remainingTime = targetTime - now;
            if (remainingTime > 0) {
                const totalMonths = Math.trunc(remainingTime / (1000 * 60 * 60 * 24 * 30));
                const remainingDays = Math.trunc((remainingTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
                const hours = Math.trunc((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.trunc((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.trunc((remainingTime % (1000 * 60)) / 1000);

                if (totalMonths >= 1) {
                    countdown.setAttribute("class", "green");
                } else if (totalMonths == 0 && remainingDays >= 7) {
                    countdown.setAttribute("class", "orange");
                } else if (remainingDays < 7) {
                    countdown.setAttribute("class", "red");
                }

                countdown.textContent = `${totalMonths} months, ${remainingDays} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
            } else if (remainingTime < 0) {
                clearInterval(countdownInterval);
                countdown.textContent = "HAPPY BIRTHDAY !!";
                countdown.setAttribute("class", "felicidades");
            }
        }
    }, 1000);
}
