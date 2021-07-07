const express = require("express");
const app = express();
const lodash = require("lodash");

const quotes = require("./quotes.json");

app.get("/", function (request, response) {
	response.send(
		"Madiha's Quote Generator!  Ask me for /quotes/random, or /quotes"
	);
});

app.get("/quotes", function (request, response) {
	response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
	response.send(lodash.sample(quotes));
});

const listener = app.listen(process.env.PORT, ()=>{
    console.log("App listening on:", listener.address().port);
});

