const currentDate = document.getElementById("date");

// const tempStatus = "{%tempstatus%}";

// if(tempStatus == "Sunny"){
//     weathercon.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68' ></i>"
// }
// else if(tempStatus == "Clouds"){
//     weathercon.innerHTML = "<i class='fa-solid fa-clouds' style='color: #f1f2f6;'></i>"
// }
// else if(tempStatus == "Rainy"){
//     weathercon.innerHTML = "<i class='fa-solid fa-raindrops' style='color: #a4b0be;'></i>"

// }
// else{
//     weathercon.innerHTML = "<i class='fa-solid fa-clouds' style='color: #44c3de;'></i>"

// }

const getCurrentDay = () => {
  const weekDay = new Array(7);
  weekDay[0] = "sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";
  let currentTime = new Date();
  let day = weekDay[currentTime.getDay()];
  return day;
};

const getCurrentTime = () => {
  const month = new Array(12);
  month[0] = "January";
  month[1] = "Feburary";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  let now = new Date();
  let m = month[now.getMonth()];
  let date = now.getDate();

  let hours = now.getHours();
  let mins = now.getMinutes();

  let period = "AM";
  if (hours > 11) {
    period = "PM";
    if (hours > 12) hours -= 12;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  return `${m} ${date} | ${hours}:${mins}${period}`;
};
currentDate.innerHTML = getCurrentDay() + " " + "|" + " " + getCurrentTime();

const cityname = (city) => {
   fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1f4811f840fc9a605fad123f62ea27f2`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
        detail.innerHTML = response.weather[0].description;
      min.innerHTML = Math.round(response.main.temp_min);
      max.innerHTML = Math.round(response.main.temp_max);
      temperature.innerHTML = Math.round(response.main.temp);
      sahar.innerHTML = response.name;
      desh.innerHTML = response.sys.country;
      const condition = response.weather[0].description;
      console.log(condition);
      if (condition == "few clouds" || condition == "scattered clouds" || condition == "broken clouds" || condition == "overcast clouds") {
        weathercon.innerHTML =
          "<i class='fa-solid fa-cloud' style='color: #3c3434'></i>";
      } else if (condition == "rain" || condition == "light rain") {
        weathercon.innerHTML =
          "<i class='fa-solid fa-cloud-rain' style='color: #0984e3' ></i>";
      } else if (condition == "shower rain") {
        weathercon.innerHTML =
          "<i class='fa-solid fa-cloud-showers-heavy' style='color: #0984e3'></i>";
      } else if (condition == "thunderstorm") {
        weathercon.innerHTML = "<i class='fa-solid fa-cloud-bolt'></i>";
      } else if (condition == "snow") {
        weathercon.innerHTML =
          "<i class='fa-regular fa-snowflake' style='color: white'></i>";
      } else if (condition == "haze" || condition == "smoke" || condition == "mist") {
        weathercon.innerHTML =
          "<i class='fa-solid fa-smog' style='color: #3c3434'></i>";
      } else{
        weathercon.innerHTML =
        "<i class='fa-solid fa-sun' style='color: #eccc68' ></i>";
    }
    
    });
};

cityname("kathmandu");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  cityname(fill.value);
  fill.value = "";
});
