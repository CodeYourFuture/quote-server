//This code is from week 2 debugging exercise 2 on Glitch
const express = require("express");
const app = express();

const quotes = require("./quotes-with-id.json");

app.get("/", function (request, response) {
	response.send(
		"Debugging exercise.  GET for /quotes/search?word=the returns an empty array!  Why?"
	);
});

//Displays all quotes
app.get("/quotes", function (request, response) {
	response.json(quotes);
});

//Display quote matching an id
app.get("/quotes/:id", function (request, response) {//How to bypass this in future to avoid this bug
	const inputId = request.params.id;
	const numeralId = parseInt(inputId)
	if (typeof(numeralId) === "number") {
		const quote = quotes.filter((res) => res.id === numeralId);
		response.json(quote);
	}
});

// search by a term
const search = (word) => {
	// console.log("This is in the function", word);
	let filteredQuotes = quotes.filter((quote) =>
		quote.quote.toLowerCase().includes(word.toLowerCase())
	);
	return filteredQuotes;
};

app.get("/quote/search", function (request, response) {
	// response.send("Function working");
	const searchWord = request.query.word;
	// console.log("This is in the route", searchWord);
	const result = search(searchWord);
	// const result = quotes.filter((quote) =>
	// 	quote.quote.toLocaleLowerCase().includes(searchWord)
	// );
	response.json(result);
});

console.log("App is listening");
app.listen(3000);
