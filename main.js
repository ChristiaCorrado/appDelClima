
//URLBASE: api.openweathermap.org/data/2.5/weather?

//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}


const dataCity = () => {
   input = document.getElementById("dataInput").value
   console.log(input);
   cityName = input
   
   console.log(cityName);
   
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${APIKEY}&lang=${lang}`)
    .then(response => response.json())
    .then(data => mostrarClima(data))
}

