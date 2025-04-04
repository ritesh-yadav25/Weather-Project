document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value;
    
    function updateTemp(data){
       const element = document.getElementById('weatherInfo');
       element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;

       const element1 = document.getElementById('weatherInfo1');
       element1.innerHTML = `Feels like: ${data.current.feelslike_c}`;

       const element2 = document.getElementById('weatherInfo2');
       element2.innerHTML = `Precip: ${data.current.precip_mm}`;

       const element3 = document.getElementById('weatherInfo3');
       element3.innerHTML = `Humidity: ${data.current.humidity}`;

       const element4 = document.getElementById('weatherInfo4');
       element4.innerHTML = `Wind: ${data.current.wind_kph}`;

       const element5 = document.getElementById('weatherInfo5');
       element5.innerHTML = `UV Index: ${data.current.uv}`;

       
    }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${place}&aqi=yes`)
    


    prom
    .then(response=>response.json())
    .then(data=> updateTemp(data));



})