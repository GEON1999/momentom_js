const API_KEY = "29f1ec913064172d18dabb3a2baaea26";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(responese => responese.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].main ;
        temp.innerText = `${data.main.temp}°` 
    });

}
function onGeoError() {
    alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
