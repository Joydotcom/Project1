// This event listener on click for foodPageBtn
$('.foodPageBtn').on('click', function () {
// This returns restaurants located by zip code (currently entered manually 30308)
 fetch("https://api.documenu.com/v2/restaurants/search/fields?zip_code=30308&key=bb830da9585d8d17c53039de5ac3358c")
 .then(response => {
    return response.json();
 }) .then(function(data){
    console.log(data.data);
 })
 });


// This event listener on click for randomBtn IS BROKEN
// $('.randomBtn').on('click', function () {
// // This returns National Park Activities by State code (currently using sample call)
// //  fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=7Ir4CEYWv3mXsoB7yi5AYKGSBLXqPI5lOBOUvet2")
// //  .then(response => {
// //      return response.json();
// //  })  .then(function(data){
// //      console.log(data.data);

// //  })    
//  });




 // This returns National Parks By Activity 






 // Randomly select activity by state code