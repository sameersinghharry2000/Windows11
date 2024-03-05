let windowkey = document.getElementById("windows11key");
let windows11 = document.querySelector(".windows11"); //Full Window
let mainmenu = document.getElementById("mainmenu");

windowkey.addEventListener("click", function () {
  document.getElementById("mainmenu").classList.toggle("mainmenu2");
});

let call = document.getElementById("callAllApps");

call.addEventListener("click", function () {
  document.getElementById("all_applications").style.display = "block";
});

let backallapps = document.getElementById("backallapps");

backallapps.addEventListener("click", function () {
  document.getElementById("all_applications").style.display = "none";
});
document.getElementById("switchoff").addEventListener("click", function () {
  document.getElementById("switchoptions").classList.toggle("switchoptions2");
});

function TimeBhai() {
  let hrs = document.getElementById("hrs");

  let currentTimeDate = new Date();

  let currentDate =
    currentTimeDate.getHours() + ":" + currentTimeDate.getMinutes();

  hrs.innerHTML = currentDate;

  let Datee = document.getElementById("date");

  let currentTime =
    currentTimeDate.getDate() +
    "/" +
    currentTimeDate.getMonth() +
    "/" +
    currentTimeDate.getFullYear();

  date.innerHTML = currentTime;



}
TimeBhai();

let tempData = document.getElementById("tempature");


let apiKey = "4c42ccc3ac094c96ab117513724150";
let apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=4c42ccc3ac094c96ab1175137241501&q=india";

async function checkWeather() {

  let response = await fetch(apiUrl);
  var data = await response.json();
  console.log(data);

  tempData.innerHTML = `<img src="${data.current.condition.icon}">
                    <div class="tempaturedata">
                        <h2> ${data.current.temp_c}°C</h2>
                        <h4>${data.current.condition.text}</h4>
                    </div> `;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentTimeDate = new Date();
  
  let name = month[currentTimeDate.getMonth()];

  tempaturePageBackground.innerHTML = `<div id="tempaturePageBackground" class="tempaturePageBackground">
                <div class="col1">
                    <div class="box1">
                        <div class="country">${data.location.name}</div>
                        <div class="date">
                        ${
                          currentTimeDate.getDate() +
                          " / " +
                          month[currentTimeDate.getMonth()] +
                          " / " +
                          currentTimeDate.getFullYear()
                        }
                        </div>
                    </div>
                    <div class="box2">
                        <div class="temp">${data.current.temp_c}°C</div>
                        <div class="futureTemp"></div>
                    </div>
                </div>
                <div class="col2">
                    <img src="${data.current.condition.icon}"
                </div>
                <div class="col3">
                <div class="boxs"><img src="img/weather/cloud.png" alt=""><p>Monday</p><p>32°C</p></div>
                <div class="boxs"><img src="img/weather/cloud.png" alt=""><p>Tuesday</p><p>32°C</p></div>
                <div class="boxs"><img src="img/weather/clear.png" alt=""><p>Wednesday</p><p>32°C</p></div>
                <div class="boxs"><img src="img/weather/clear.png" alt=""><p>Thursday</p><p>32°C</p></div>
                <div class="boxs"><img src="img/weather/rain.png" alt=""><p>Friday</p><p>32°C</p></div>
                </div>`;
    }


checkWeather();

let tempaturePage = document.querySelector(".tempaturePage");

function inn() {
  tempaturePage.style.left = "80px";
}
function out() {
  tempaturePage.style.left = "-350px";
}
