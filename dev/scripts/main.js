const ohHey = "Hello World";

console.log(ohHey);

// set up app and variables

// set up ajax request to get recipes

//  get information from radio buttons

// have variable for input information

// use variables to get information from Yummly Api

// print information/recipes on index.html

// set up links or add more functionality 


// app set up
var app = {};
app.apiUrl = 'http://api.yummly.com/v1/api/recipes?';
app.apiID = 'c0e030b4';
app.apiKey = '8dab932ecc015e2fb03ba60fa82e4cec';

var ingredient = [];


// app init 
app.init = function() {
	app.getRecipes();
	app.getInput();

};

// ajax request to get info from Yummly api
// "allowedIngredient": [
//       "shrimp",
//       "rice"
//     ]
app.getRecipes = function() {
	$.ajax({
		url: 'http://api.yummly.com/v1/api/recipes?_app_id=c0e030b4&_app_key=8dab932ecc015e2fb03ba60fa82e4cec' ,
		// _app_id: app.apiID,
		// _app_key: app.apiKey,
		dataType: 'json',
		method: 'GET',
		data : {
			requirePictures: true,
			'allowedIngredient[]' : ingredient,
		}
	}).then(function(){

	});
}


// get input information from radio buttons
// on click grab class/id of radio button and assign variable
// on click of submit use values to search Yummly api
app.getInput = function() {
	$('#submitButton').on('click', function(event){
		ingredient= [];
		event.preventDefault();
		var ingredientOne = $('input[name=protein]:checked').val();
		// ingredientOne = ingredientOne.join('');
		var ingredientTwo = $('input[name=carb]:checked').val();
		var ingredientThree = $('input[name=veggie]:checked').val();
		ingredient.push(ingredientOne);
		ingredient.push(ingredientTwo);
		ingredient.push(ingredientThree);
		

		// ingredient = ingredient.join('');
		// console.log(ingredientOne, ingredientThree, ingredientTwo);
		console.log(ingredient);
	});
} 

// doc ready
$(function(){
	app.init();
});