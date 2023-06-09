const API_KEY = "";

function geoSuccess(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const city = document.querySelector("#weather span:first-child");
			const weather = document.querySelector("#weather span:last-child");
			city.innerText = data.name;
			weather.innerText = `${data.main.temp}, ${data.main.humidity} ${data.weather[0].main}`;
		});
}

function geoError() {
	alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
