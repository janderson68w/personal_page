const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");

function toggleMode() {
    body.classList.toggle("dark-mode");

    const modeMessage = body.classList.contains("dark-mode") ?
        "Dark"
        : "Light"

    modeStatus.innerText = modeMessage;
}
modeToggle.addEventListener("click", toggleMode);