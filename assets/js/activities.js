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


displayActivityData();


function displayActivityData() {
  // console.log(activity);
  var randomActivity = getRandomActivity();
  var optionState = localStorage.getItem("state");
  console.log(optionState);
  // fetch and display data
  // get State, build url with state and activity
  fetch("https://developer.nps.gov/api/v1/activities/parks?id="+optionState+"&q="+randomActivity+"&stateCode="+optionState+"&limit=5&start=0&api_key=7Ir4CEYWv3mXsoB7yi5AYKGSBLXqPI5lOBOUvet2"
  )
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data[0]);
      for (var i = 0; i < data.data[0].parks.length; i++) {
        //console.log(data.data[0].parks[i].states);
        if (optionState === data.data[0].parks[i].states) {
          console.log(
            "This is a match for " + data.data[0].parks[i].states + "state"
          );
          console.log(
            "This is the park that matches it " + data.data[0].parks[i].fullName
          );
        }
      }
    });
}
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


// NEW CODE 

// var activities = [
//   "camping",
//   "hiking",
//   "biking",
//   "fishing",
//   "guided tours",
//   "skiing",
//   "swimming",
//   "wildlife watching",
// ];

// function getRandomActivity() {
//   var randomNumber = Math.floor(Math.random() * activities.length);
//   // console.log(randomChoice);
//   // console.log(activities[randomNumber]);
//   return activities[randomNumber];
// }

// var randomActivity = getRandomActivity();
// displayActivityData(randomActivity);

// function displayActivityData(activity) {
//   console.log(activity);
//   // fetch and display data
//   // get State, build url with state and activity
// var queryString = "https://developer.nps.gov/api/v1/activities/parks?id=" +
// stateCode +
// "&q="+
// activity +
// "&limit=5&start=0&api_key=7Ir4CEYWv3mXsoB7yi5AYKGSBLXqPI5lOBOUvet2"

// fetch(queryString)
//     .then((response) => {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data.data[0]);
//       for (var i = 0; i < data.data[0].parks.length; i++) {
//         //console.log(data.data[0].parks[i].states);
//         if ($("#optionState").val() === data.data[0].parks[i].states) {
//           console.log(
//             "This is a match for " + data.data[0].parks[i].states + "state"
//           );
//           console.log(
//             "This is the park that matches it " + data.data[0].parks[i].fullName
//           );
//         }
//       }
//     });
// }


// NEW CODE FROM ASK BCS
//Yep! We want to build up our url string.
//Here's how I'm gonna start this off:
// var queryString = "https://developer.nps.gov/api/v1/activities/parks?id=&q=hiking&limit=5&start=0&api_key=7Ir4CEYWv3mXsoB7yi5AYKGSBLXqPI5lOBOUvet2"

// fetch(queryString)
//     .then((response) => {
//       return response.json();
//     })
//     .then(function (data) {
//It's just a tiny bit cleaner to feed a variable into fetch(), rather than write that whole string out as the argument for the fetch function.
//
// Now we just need to make sure queryString is exactly how we want! We need the state code and the q = "something here"
// Here's the first way we make this happen:
// var queryString = "https://developer.nps.gov/api/v1/activities/parks?id=" +
// stateCode +
// "&q="+
// activity +
// "&limit=5&start=0&api_key=7Ir4CEYWv3mXsoB7yi5AYKGSBLXqPI5lOBOUvet2"

// fetch(queryString)
//     .then((response) => {
//       return response.json();
//     })
//     .then(function (data) {

  
  
// EXAMPLES OF STRING CONCAT
  
// var str1 = "bat"
// var str2 = "man"

// console.log("My name is " +  str1 + str2) //prints "My name is batman"
// console.log("I have one " + str1) //prints "I have one bat"
  

  
// This way will work no problem. I recommend trying this one out first and making it work!
// The second way is to use something called a template literal. This uses backticks and these symbols ${varname} to quickly concatenate strings:


// var str1 = "bat"
// var str2 = "man"

// //note that a string with BACKTICKS `` can have multiple lines and can use template literals ${}
// console.log(`My name is ${str1}${str2}`) //prints "My name is batman"
// console.log(`I have one ${str1}`) //prints "I have one bat"
// Try one or both of these methods out! Make sure you define that variable I made up, though... stateCode doesn't exist until you define it