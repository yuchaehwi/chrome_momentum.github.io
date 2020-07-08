const weather = document.querySelector(".js-weather");
const weatherIconLocation = document.querySelector(".weather-icon");
const weatherCheck = document.querySelector("#weatherCheck");

const API_KEY = "5cd0673bb105432f4529fe6a0e4161c8";
const COORDS = 'coords';
const countryFullName = [
   {code : "AF", countryName : "Arfika"},
   {code : "AL", countryName : "Albania"},
   {code : "AR", countryName : "Arabia"},
   {code : "AZ", countryName : "Azerbaijani"},
   {code : "BG", countryName : "Bulgaria"},
   {code : "CA", countryName : "Catalonia"},
   {code : "CZ", countryName : "Cheko"},
   {code : "DA", countryName : "Denmark"},
   {code : "DE", countryName : "Germany"},
   {code : "EL", countryName : "Greeks"},
   {code : "EN", countryName : "America"},
   {code : "EU", countryName : "Basque"},
   {code : "FA", countryName : "Persia"},
   {code : "FI", countryName : "Finland"},
   {code : "FR", countryName : "France"},
   {code : "GL", countryName : "Galicia"},
   {code : "HE", countryName : "Hebrew"},
   {code : "HI", countryName : "Hindi"},
   {code : "HR", countryName : "Croatia"},
   {code : "HU", countryName : "Hungary"},
   {code : "ID", countryName : "Indonesia"},
   {code : "IT", countryName : "Italia"},
   {code : "JA", countryName : "Japan"},
   {code : "KR", countryName : "Korea"},
   {code : "LA", countryName : "Latvia"},
   {code : "LT", countryName : "Lithuania"},
   {code : "MK", countryName : "Macedonia"},
   {code : "NO", countryName : "Norway"},
   {code : "NL", countryName : "Netherlands"},
   {code : "PL", countryName : "Poland"},
   {code : "PT", countryName : "Portugal"},
   {code : "PT_BR", countryName : "Brasil"},
   {code : "RO", countryName : "Roma"},
   {code : "RU", countryName : "Russia"},
   {code : "SV", countryName : "Sweden"},
   {code : "SE", countryName : "Sweden"},
   {code : "SK", countryName : "Slovakia"},
   {code : "SL", countryName : "Slovakia"},
   {code : "SP", countryName : "Spain"},
   {code : "ES", countryName : "Spain"},
   {code : "SR", countryName : "Serbia"},
   {code : "TH", countryName : "Thailand"},
   {code : "TR", countryName : "Turky"},
   {code : "UA", countryName : "Ukraine"},
   {code : "UK", countryName : "Ukraine"},
   {code : "VI", countryName : "Vietnam"},
   {code : "ZH_CN", countryName : "China"},
   {code : "ZH_TW", countryName : "China"},
   {code : "ZU", countryName : "South Africa"}
];
const CounrtyArrayLength = countryFullName.length;
let place;

function changeCountryName(places){
   for(var i=0;i<CounrtyArrayLength;i++){
      if(places == countryFullName[i].code){
         place = countryFullName[i].countryName;
      }
   }
}

function getWeather(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(respon){
        return respon.json();
    }).then(function(json){
        const temperature = json.main.temp;
        place = json.sys.country;
        const currentWeathers = json.weather[0].main;
        const weatherIcon = json.weather[0].icon;
        changeCountryName(place);
        weather.innerHTML = "Country : " + place + "<br>";
        weather.innerHTML += "Temperature : " + temperature + "º" + "<br>"; 
        weather.innerHTML += "Weather : " + currentWeathers;
        weatherIconLocation.style.backgroundImage = "url('http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png')";
    });
    //fetch가 끝난 후 function 실행하게 하려면 then
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null){
        askForCoords();
    } else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function handleWeatherClick(){
   let weatherDisplayCheck = weather.style.display;
   if(weatherDisplayCheck == "block"){
      weather.style.display = "none";
      weatherIconLocation.style.display = "none";
   } else {
      weather.style.display = "block";
      weatherIconLocation.style.display = "block";
   }
}

function init(){
    loadCoords();
    weatherCheck.addEventListener("click",handleWeatherClick)
}

init();