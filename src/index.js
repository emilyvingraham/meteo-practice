function displayForecast() {
  let days = ['Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  let forecastHtml = '';
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="forecast-day">
        <strong>${day}</strong>
        <div class="forecast-image">
        <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
        alt="clouds"
        width="42"
        />
        <div class="forecast-temperatures">
        <span class="forecast-temperatures-max"><strong>18°</strong></span>
        <span class="forecast-temperatures-min">12°</span>
        </div>
        </div>
        </div>`;
  });
  let forecastElement = document.querySelector('#forecast');
  forecastElement.innerHTML = forecastHtml;
}
displayForecast();

function getForecast(city) {
  let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
}
getForecast();
