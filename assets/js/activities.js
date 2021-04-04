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
function getRandomActivity() {
  var randomNumber = Math.floor(Math.random() * activities.length);
  // console.log(randomChoice);
  // console.log(activities[randomNumber]);
  return activities[randomNumber];
}
function displayActivityData(activity) {
  console.log(activity);
  // fetch and display data
  // get State, build url with state and activity
}

var randomActivity = getRandomActivity();
displayActivityData(randomActivity);

//  This event listener on click for randomBtn
// $(".randomBtn").on("click", function () {
//   console.log($("#optionState").val());
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
//get the state from local storage
//get a random activity
// ar randomActivity = getRandomActivity()v
//build url and put it on the page

// var activityBtn = document.querySelector("#activities");

// document.appendChild;
// // when the page loads run random
// random();
// var queryParameter = activities[randomChoice];

// activityBtn.addEventListener("click", function (event) {
//   console.log($("#test").val());
//   localStorage.setItem("activity", $("#test").val());
//   event.preventDefault();
// });

// localStorage.getItem("activity");

// localStorage.getItem("state");
