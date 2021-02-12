// Global Object

// console.log(global);

global.setTimeout(() => {
	console.log("time is up...");
	clearInterval(int);
}, 5000);

const int = setInterval(() => {
	console.log("in the interval");
}, 1000);
