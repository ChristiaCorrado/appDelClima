const obtenerCoord = () => {
    navigator.geolocation.getCurrentPosition(coordinadas)  
     
}

let lang = 'es'

const coordinadas = (coord) => {
   let arrayCoord = coord.coords
   lat = arrayCoord.latitude
   long = arrayCoord.longitude

   fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&appid=${APIKEY}&lang=${lang}`)
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
        temperature: `${Math.round(dataAPI.main.temp)}ºC` ,
        sensacion: `${Math.round(dataAPI.main.feels_like)}ºC`,
        humedad: dataAPI.main.humidity,
        precion: dataAPI.main.pressure,
        tempMax: dataAPI.main.temp_max,
        tempMin: dataAPI.main.temp_min,
        descripcion: dataAPI.weather[0].description,
    }

    Object.keys(Clima).forEach(key => {
        document.getElementById(key).innerHTML = `${Clima[key]}`
    })

    
    const selectFondo = document.getElementById('body')
    console.log(selectFondo);
    const tipoDeClima = Clima.descripcion
    console.log(tipoDeClima);

    switch (tipoDeClima) {
        
        case 'cielo claro':
            selectFondo.classList.add('dayClear')
            selectFondo.classList.remove('nightMist','nubesDispersas','algoDeNubes','nubes','niebla','dayRain');
            break;
        case 'nubes dispersas':
            selectFondo.classList.add('nubesDispersas')
            selectFondo.classList.remove('nightMist','dayClear','algoDeNubes','nubes','niebla','dayRain');
            break;
        case 'nubes','algo de nubes':
            selectFondo.classList.add('algoDeNubes')
            selectFondo.classList.remove('nightMist','dayClear','nubesDispersas','nubes','niebla','dayRain');
            break;
        case 'muy nuboso':
            selectFondo.classList.add('nubes')
            selectFondo.classList.remove('nightMist','dayClear','nubesDispersas','algoDeNubes','niebla','dayRain');
            break;
        case 'niebla':
            selectFondo.classList.add('niebla')
            selectFondo.classList.remove('nightMist','dayClear','nubesDispersas','algoDeNubes','nubes','dayRain');
            break; 
        case 'tormenta con lluvia ligera','lluvia moderada','tormenta con lluvia':
            selectFondo.classList.add('dayRain') 
            selectFondo.classList.remove('nightMist','dayClear','nubesDispersas','algoDeNubes','nubes','niebla');
            break;
    }
}

let hora = new Date()

const horaEnVivo = () => {
    let horaLocal = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`;
    console.log(horaLocal);
    document.getElementById(hora).innerHTML = horaLocal;

    setTimeout("hora",1000)

}

