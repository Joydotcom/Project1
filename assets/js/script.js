var randomChoice;
// This event listener on click for foodPageBtn
$(".foodPageBtn").on("click", function () {
  // This returns restaurants located by zip code (currently entered manually 30308)
  fetch(
    "https://api.documenu.com/v2/restaurants/search/fields?zip_code=30308&key=bb830da9585d8d17c53039de5ac3358c"
  )
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data);
    });
});

// $(document).ready(function () {
//   // listen for save button clicks
//   $('.saveBtn').on('click', function () {
//     // get nearby values
//     var value = $(this).siblings('.description').val();
//     var time = $(this).parent().attr('id');

// save in localStorage
// localStorage.setItem(time, value);

// localStorage.setItem(“optionState”, "GA");

var saveBtn = document.getElementById("saveBtn");
var optionState = $;

saveBtn.addEventListener("click", function (event) {
  console.log($("#optionState").val());
  localStorage.setItem("state", $("#optionState").val());
  event.preventDefault();
  localStorage.setItem("optionState", "GA");
  // localStorage.setItem("optionState", JSON.stringify(optionState));
});

localStorage.getItem("state");

//  This event listener on click for randomBtn (works for parks?parkCode=acad)
//  $('.randomBtn').on('click', function () {
//  This returns National Park Activities by State code (currently using sample call)
//   fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=7Ir4CEYWv3mXsoB7yi5AYKGSBLXqPI5lOBOUvet2")
//   .then(response => {
//       return response.json();
//   })  .then(function(data){
//       console.log(data.data);

//   })
//   });

//  This event listener on click for randomBtn
$(".randomBtn").on("click", function () {
  console.log($("#optionState").val());
  // This returns National Parks By Activity
  fetch(
    "https://developer.nps.gov/api/v1/activities/parks?id=&q=hiking&limit=5&start=0&api_key=7Ir4CEYWv3mXsoB7yi5AYKGSBLXqPI5lOBOUvet2"
  )
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data[0]);
      for (var i = 0; i < data.data[0].parks.length; i++) {
        //console.log(data.data[0].parks[i].states);
        if ($("#optionState").val() === data.data[0].parks[i].states) {
          console.log(
            "This is a match for " + data.data[0].parks[i].states + "state"
          );
          console.log(
            "This is the park that matches it " + data.data[0].parks[i].fullName
          );
        }
      }
    });
});

//Maybe this could be used in a conditional statement that would allow
// you to find a park based on state --> data.data[0].parks[0].states

// This returns State Park by activity search

// Activity categories and id's
//   camping
//   hiking
//   biking
//   fishing
//   guided tours
//   skiing
//   swimming
//   wildlife watching

// create random function with index 0-7
// that number will correspond with array of activities 0-7

// Array of options for computer to pick from
var activities = [
  "camping",
  "hiking",
  "biking",
  "fishing",
  "guided tours",
  "skiing",
  "swimming",
  "wildlife watching",
];

function random() {
  var randomChoice = Math.floor(Math.random() * activities.length);
  console.log(randomChoice);
  console.log(activities[randomChoice]);
}
var queryParameter = activities[randomChoice];
// when the page loads run random
random();
