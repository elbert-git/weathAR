console.log("script has connected");
 
$.getJSON('https://www.metaweather.com/api/location/1062617/', function(data){
	console.log(data);
});

