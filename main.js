
//URLBASE: api.openweathermap.org/data/2.5/weather?
const APIKEY = '051c9b2018fbb89f25ac025af384e5c9';

const getData = position => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKEY}`)
    .then(response => response.json())
    .then(data => crearDatosaPintar(data))

}

const crearDatosaPintar = data => {
    console.log(data)
     const climaData = {
            location: data.name,
            temperature: data.main.temp,
            feels: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            description: data.weather[0].description,
        }
    
        Object.keys(climaData).forEach(key => {
            document.getElementById(key).textContent = climaData[key]
        })
}


const onload = () => {
    navigator.geolocation.getCurrentPosition(getData)
}

const getDataInput = () => {
    let dataI = document.getElementById('dataInput').value
    console.log(dataI);

    getClimaInput(dataI)

}

const getClimaInput = dataI => {
    const cityName = dataI;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=units=metric&${cityName}&appid=${APIKEY}`)
    .then(response => console.log(response))
    
}