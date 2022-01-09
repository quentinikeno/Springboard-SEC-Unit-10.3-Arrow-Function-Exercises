/* ES5 Map Callback
Write an ES2015 Version */
const double = (arr) => arr.map((val) => val * 2);

/* ES5 squareAndFindEvens 
Write an ES2015 Version */
const squareAndFindEvens = (numbers) =>
	numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
