// This event listener on click for foodPageBtn
$('.foodPageBtn').on('click', function () {
// This returns restaurants located by zip code (currently entered manually)
 fetch("https://api.documenu.com/v2/restaurants/search/fields?zip_code=30308&key=bb830da9585d8d17c53039de5ac3358c")
 .then(response => {
    return response.json();
 }) .then(function(data){
    console.log(data.data);
 })
 });