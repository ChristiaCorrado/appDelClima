const obtenerCoord = () => {
    navigator.geolocation.getCurrentPosition(coordinadas)  
     
}

const coordinadas = (coord) => {
   let arrayCoord = coord.coords
   lat = arrayCoord.latitude
   long = arrayCoord.longitude

   fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&appid=${APIKEY}`)
    .then((response) => response = response.json())
    .then(data => mostrarClima(data))
}

lat = 0;
long = 0;


//URLBASE: api.openweathermap.org/data/2.5/weather?
const APIKEY = '051c9b2018fbb89f25ac025af384e5c9';



const mostrarClima = dataAPI => {
    console.log(dataAPI);

    const Clima = {
        location: dataAPI.name,
        temperature: dataAPI.main.temp,
        sensacion: dataAPI.main.feels_like,
        humedad: dataAPI.main.humidity,
        precion: dataAPI.main.pressure,
        tempMax: dataAPI.main.temp_max,
        tempMin: dataAPI.main.temp_min,
        descripcion: dataAPI.weather[0].description,
    }

    Object.keys(Clima).forEach(key => {
        document.getElementById(key).innerHTML = Clima[key]
    })
    
}

let hora = new Date();

const horaEnVivo = () => {
    let horaLocal = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`;
    console.log(horaLocal);
    document.getElementById(hora).innerHTML = horaLocal;

    setTimeout("hora",1000)

}