const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");
const cardColor = document.getElementById("cardId");
const cardColor2 = document.getElementById("cardId2");
const cardColor3 = document.getElementById("cardId3");
function toggleMode() {
    body.classList.toggle("dark-mode");
    cardColor.classList.toggle("cardcolor");
    cardColor2.classList.toggle("cardcolor");
    cardColor3.classList.toggle("cardcolor");

    const modeMessage = body.classList.contains("dark-mode") ?
        "Dark"
        : "Light"

    modeStatus.innerText = modeMessage;
}
modeToggle.addEventListener("click", toggleMode);