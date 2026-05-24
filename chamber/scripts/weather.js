// Fetch and display weather data for Aba City using OpenWeatherMap
async function getWeather() {
  const apiKey = "ae9c630789df4b05547affed3bbc4ae4"; // replace with your OpenWeatherMap API key
  const city = "Aba";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},NG&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Current temperature and description
    document.querySelector("#current-temp").textContent = `${data.list[0].main.temp.toFixed(1)} °C`;
    document.querySelector("#weather-desc").textContent = data.list[0].weather[0].description;

    // Forecast: pick one reading per day (every 8th item ~ 24h)
    const forecast = data.list.filter((item, index) => index % 8 === 0).slice(1, 4);

    forecast.forEach((day, i) => {
      const temp = day.main.temp.toFixed(1);
      const desc = day.weather[0].description;
      document.querySelector(`#day${i+1}`).textContent = `${temp} °C - ${desc}`;
    });
  } catch (error) {
    console.error("Weather fetch error:", error);
    document.querySelector("#weather").innerHTML = "<p>Unable to load weather data.</p>";
  }
}

getWeather();
