console.log("-----------------script has connected");

//get elements
const sunnyRoot = document.getElementById("sunny");
const rainyRoot = document.getElementById("rainy");
const cloudyRoot = document.getElementById("cloudy");
const weatherLabel = document.getElementById("weather-label");
const temperatureLabel = document.getElementById("temperature-label");
const weatherSubtitle = document.getElementById("weather-subtitle");
console.log(weatherLabel);
console.log(temperatureLabel);
console.log(weatherSubtitle);



//--- functions


function DisplayWeatherGraphics(weather){
	//this func will take the weather data and display the appropriate weather graphics GetWeatherString
	 
	//slice last letter off the weather id
	weather = weather.slice(0, weather.length-1);
	weather = "03";
	let whichIconsToDisplayString = null;
	//identify which set of icons to display
	switch(weather){
		case "01": //clear sky
			whichIconsToDisplayString = "sun"; 
			weatherLabel.setAttribute("value", "Clear Skies");
			weatherSubtitle.setAttribute("value", "Hello sunshine!");
			console.log("aa");
			break;
		case "02": //few clouds
			whichIconsToDisplayString = "sun";
			weatherLabel.setAttribute("value", "A Few Clouds");
			weatherSubtitle.setAttribute("value", "Easy breezy");
			break;
		case "03": //scattered clouds
			whichIconsToDisplayString = "cloud";
			weatherLabel.setAttribute("value", "Scattered Clouds");
			weatherSubtitle.setAttribute("value", "Easy breezy");
			break;
		case "04": //broken clouds
			whichIconsToDisplayString = "cloud";
			weatherLabel.setAttribute("value", "Broken Clouds");
			weatherSubtitle.setAttribute("value", "Easy breezy");
			break;
		case "09": //shower rain
			whichIconsToDisplayString = "rain";
			weatherLabel.setAttribute("value", "Rain Showers");
			weatherSubtitle.setAttribute("value", "Bri'ish weather");
			break;
		case "10": //rain
			whichIconsToDisplayString = "rain";
			weatherLabel.setAttribute("value", "Rainy");
			weatherSubtitle.setAttribute("value", "Bri'ish weather");
			break;
		case "11": //thunderstorm
			whichIconsToDisplayString = "rain";
			weatherLabel.setAttribute("value", "Thunderstorms");
			weatherSubtitle.setAttribute("value", "Zeus, please chill");
			break;
		case "13": //snow
			whichIconsToDisplayString = "rain";
			weatherLabel.setAttribute("value", "Snowy");
			weatherSubtitle.setAttribute("value", "Our climate has had enoguh");
			break;
		case "50": //mist
			whichIconsToDisplayString = "cloud";
			weatherLabel.setAttribute("value", "Misty");
			weatherSubtitle.setAttribute("value", "Low render distance");
			break;
		default:
			console.log("something broke");
	}
	 
	switch(whichIconsToDisplayString){
		case "sun":
			rainyRoot.setAttribute("scale", {x:0, i:0, z:0});
			cloudyRoot.setAttribute("scale", {x:0, y:0, z:0});
			sunnyRoot.setAttribute("scale", {x:1, y:1, z:1});
			break;
		case "rain":
			rainyRoot.setAttribute("scale", {x:1, y:1, z:1});
			cloudyRoot.setAttribute("scale", {x:0, y:0, z:0});
			sunnyRoot.setAttribute("scale", {x:0, y:0, z:0});
			break;
		case "cloud":
			rainyRoot.setAttribute("scale", {x:0, y:0, z:0});
			cloudyRoot.setAttribute("scale", {x:1, y:1, z:1});
			sunnyRoot.setAttribute("scale", {x:0, y:0, z:0});
			break;
		default:
			console.log("something broke");
	}
	 
	//handle weather texts
	console.log("Changing Temperature");
	temperatureLabel.setAttribute("value", currentTemperature.toString().substring(0,2));
	
	 
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
 
 
