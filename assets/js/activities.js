var activityBtn = document.querySelector("#activities");
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

activityBtn.addEventListener("click", function (event) {
  console.log($("#test").val());
  localStorage.setItem("activity", $("#test").val());
  event.preventDefault();
});

localStorage.getItem("activity");
