const quotes = [
	{
		quote: "You Can Do It",
		author: "Nike0",
	},
	{
		quote: "You Can Do It",
		author: "Nike1",
	},
	{
		quote: "You Can Do It",
		author: "Nike2",
	},
	{
		quote: "You Can Do It",
		author: "Nike3",
	},
	{
		quote: "You Can Do It",
		author: "Nike4",
	},
	{
		quote: "You Can Do It",
		author: "Nike5",
	},
	{
		quote: "You Can Do It",
		author: "Nike6",
	},
	{
		quote: "You Can Do It",
		author: "Nike7",
	},
	{
		quote: "You Can Do It",
		author: "Nike8",
	},
	{
		quote: "You Can Do It",
		author: "Nike9",
	},
	
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[parseInt(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


