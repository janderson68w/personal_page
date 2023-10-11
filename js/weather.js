window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let degreeSection = document.querySelector(".degree-section");
    const degreeSpan = document.querySelector(".degree-section span");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0bf08973c13a3a873686046906638602&units=imperial`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                const { temp, humidity } = data.main;
                //set elements from API
                temperatureDegree.textContent = Math.round(temp);
                temperatureDescription.textContent = `The humidity level is: ${humidity}%`;
                locationTimezone.textContent = data.name;
                let celsius = (temp - 32) * (5/9);
                //change temp to celsius/fahrenheit
                degreeSection.addEventListener("click", () => {
                    if (degreeSpan.textContent === "F") {
                        degreeSpan.textContent = "C";
                        temperatureDegree.textContent = Math.round(celsius);
                    } else {
                        degreeSpan.textContent = "F";
                        temperatureDegree.textContent = Math.round(temp);
                    }
                });
            });
        });
    } else {
        h1.textContent = "Weather app will not work with location disabled."
    }
});

function displayTime() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let sessions = document.getElementById("am-pm");

    if (hours >= 12) {
        sessions.innerHTML = "PM";
    } else {
        sessions.innerHTML = "AM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;    
}
setInterval( displayTime, 10);