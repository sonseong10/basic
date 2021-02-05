const API_KEY = "Your API Key"
const COORDS = "coords"

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      console.log(json) // JSON 데이터 확인용
      const icon = json.weather[0].icon
      const state = json.weather[0].description
      const location = json.name
      const temp = json.main.temp
      const humidity = json.main.humidity

      selectIcon(icon)
      printWeather(humidity, location, state, temp)
    })
}

function selectIcon(icon) {
  const URL = `http://openweathermap.org/img/wn/${icon}@2x.png`
  document.querySelector(
    ".weather--img"
  ).style.backgroundImage = `url("${URL}")`
}

function printWeather(humidity, location, state, temp) {
  document.querySelector(".weather--location").textContent = location
  document.querySelector(".weather--state").textContent = state
  document.querySelector("#humidity").textContent = humidity

  lowTemp(temp)
}

function lowTemp(temp) {
  const tempText = document.querySelector("#temp")
  temp <= 0 ? tempText.classList.add("cold") : tempText.classList.remove("cold")
  tempText.textContent = temp
}

function handleGeoSuccess(position) {
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  }

  saveCoords(coordsObj)
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude

  getWeather(latitude, longitude)
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleError() {
  console.log("Can't access geo location")
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS)
  if (loadedCoords === null) {
    askForCoords()
  } else {
    const parsedCoords = JSON.parse(loadedCoords)
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}

function init() {
  loadCoords()
}

init()
