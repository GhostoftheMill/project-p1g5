// Listing global variables
var drinkApiRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
var mealApiRoot = 'http://www.themealdb.com/api/json/v1/1/';

// DOM element references

// event listener for search bar

// randomization function
function randomDrink(object) {
    var length = object.drinks.length;
    console.log(length);
    var randIndex = Math.floor(Math.random() * length);
    console.log(randIndex);
    var randDrinkArray = object.drinks[randIndex];
    console.log(randDrinkArray);
}

// fetching drink data
function fetchDrink(firstLetter) {
    var letter= firstLetter;
    var apiUrl = `${drinkApiRoot}search.php?f=${ letter }`;
    console.log(apiUrl);

    fetch(apiUrl)
        .then(
            function(res) {
                return res.json();
            })
            .then(
                function(drinks) {
                console.log("DATA", drinks);
                    randomDrink(drinks);
            })
            .catch(function(err) {
                console.error(err);
            })
}
fetchDrink("m"); 

// fetching meal data !!! facing CORS errors??
// function fetchMeal(firstLetter) {
//     var letter= firstLetter;
//     var apiUrl = `${mealApiRoot}search.php?f=${ letter }`;
//     console.log(apiUrl);

//     fetch(apiUrl)
//         .then(
//             function(res) {
//                 return res.json();
//             })
//             .then(
//                 function(meals) {
//                 console.log("DATA", meals);
//                 //call randomization function
//             })
//             .catch(function(err) {
//                 console.error(err);
//             })
// }
// fetchMeal("m");

// render randomized calls and append to existing html doc elements