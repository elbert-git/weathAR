// console.log("script has connected");




//--- functions

function DisplayWeatherGraphics(weather){
	//this func will take the weather data and display the appropriate weather graphics GetWeatherString
	 
	//slice last letter off the weather id
	weather = weather.slice(0, weather.length-1);
	let whichIconsToDisplayString = null;
	//identify which set of icons to display
	switch(weather){
		case "01": //clear sky
			whichIconsToDisplayString = "sun"; 
			break;
		case "02": //few clouds
			whichIconsToDisplayString = "sun";
			break;
		case "03": //scattered clouds
			whichIconsToDisplayString = "cloud";
			break;
		case "04": //broken clouds
			whichIconsToDisplayString = "cloud";
			break;
		case "09": //shower rain
			whichIconsToDisplayString = "cloud";
			break;
		case "10": //rain
			whichIconsToDisplayString = "rain";
			break;
		case "11": //thunderstorm
			whichIconsToDisplayString = "rain";
			break;
		case "13": //snow
			whichIconsToDisplayString = "rain";
			break;
		case "50": //mist
			whichIconsToDisplayString = "cloud";
			break;
		default:
			console.log("something broke");
	}
	 
	console.log(whichIconsToDisplayString);
}
 
let currentWeather = null;
let currentTemperature = null;
//ping weather data
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=singapore&appid=e12f2a771a2d813004fa67ff4e56ff1e&units=Metric', function(data){
	currentWeather = data.weather[0].icon;
	currentTemperature = data.main.temp;
	console.log(currentTemperature, currentWeather);
	DisplayWeatherGraphics(currentWeather);
});
 
 
//test to see if we change size
let testEl = document.getElementById("test").setAttribute('scale', {x:5, y:5, z:5})
