document.getElementById('cta-btn').addEventListener('click', getWeather);

function getWeather(){

var cityName = document.getElementById('city-input').value;

//An array to store the weather icons
var icons = ['images/016-snowy.png','images/007-sun.png','images/008-cloudy.png','images/009-cloud.png','images/010-rainy.png','images/018-storm-1.png','images/035-tornado-1.png','images/025-tornado.png','images/027-hail.png','images/030-foog.png','images/038-hurricane.png','images/037-wind.png','images/015-broken cloudy.png'];

 document.querySelector('.weather-content').classList.add('show', 'animate__animated', 'animate__bounce');
    

    fetch('https://api.openweathermap.org/data/2.5/weather?&q='+cityName+'&units=metric&appid=02364c7373ab65999334aa6c3121e0fd')
    .then((res) => res.json())
    .then((data) => {
        
        //Variables to store the api data
        var maxTemp = data.main.temp_max;
        var minTemp = data.main.temp_min;
        var desc = data.weather[0].description;
        var ws = data.wind.speed;

        //populating data from api to the ui elements
        document.getElementById('max').innerHTML = "Max: " + maxTemp;
        document.getElementById('min').innerHTML = "Min: " + minTemp;
        document.getElementById('description').innerHTML =  desc;
        document.getElementById('wind-speed').innerHTML = "Wind Speed: " + ws;
        
        // document.querySelector('weather-content').classList.add('animate__animated_FadeIn');


        //Conditions for thunderstorm descriptions
        if(desc.endsWith('thunderstorm') || desc.startsWith('thunderstorm')){
            document.getElementById('weather-icon').setAttribute('src',icons[5]);
        }
        //Conditions for rain descriptions
        else if (desc.endsWith('rain')){
            document.getElementById('weather-icon').setAttribute('src',icons[4]);                  
        }
        //Conditions for snow descriptions
        else if(desc.endsWith('snow')){
            document.getElementById('weather-icon').setAttribute('src',icons[0]);      
        } 
        //Conditions for fog descriptions
        else if(desc == 'fog' || desc == 'dust' || desc == 'smoke' || desc == 'sand' ||desc == 'tornado' ||desc == 'haze' ||desc == 'mist' || desc == 'volcanic ash' ||desc == 'squalls'){
            document.getElementById('weather-icon').setAttribute('src',icons[9]);      
        }
        //Conditions for broken and overcast cloud descriptions 
        else if(desc == 'broken clouds' || desc == 'overcast clouds'){
            document.getElementById('weather-icon').setAttribute('src',icons[12]);      
        }
        //Conditions for scattered cloud descriptions
        else if(desc == 'scattered clouds'){
            document.getElementById('weather-icon').setAttribute('src',icons[3]);      
        } 
        //Conditions for few clouds descriptions
        else if(desc == 'few clouds'){
            document.getElementById('weather-icon').setAttribute('src',icons[2]);      
        } 
        //Conditions for clear skies descriptions
        else if(desc == 'clear sky'){
            document.getElementById('weather-icon').setAttribute('src',icons[1]).classList.add('show', 'animate__animated', 'animate__bounce');      
        } 
        //Conditions for few clouds descriptions
        else if(desc == 'few clouds'){
            document.getElementById('weather-icon').setAttribute('src',icons[2]);      
        }   
    })
}