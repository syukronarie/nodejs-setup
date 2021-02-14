const http = require("http");
const fs = require("fs");
const { url } = require("inspector");

const server = http.createServer((req, res) => {
	// console.log("request made");
	console.log(req.url, req.method);

	// set header content type
	// res.setHeader("Content-Type", "text/plain");

	// res.write("hello from server");
	// res.end();

	res.setHeader("Content-Type", "text/html");

	// // send an html file
	// fs.readFile("./views/index.html", (err, data) => {
	//  if (err) {
	//    console.log(err);
	//    res.end();
	//  }
	//  // res.write(data);
	//  res.end(data);
	// });

	// basic routing
	let path = "./views/";
	switch (req.url) {
		case "/":
			path += "index.html";
			res.statusCode = 200;
			break;
		case "/about":
			path += "about.html";
			res.statusCode = 200;
			break;
		default:
			path += "404.html";
			res.statusCode = 404;
			break;
	}

	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		}
		res.end(data);
	});
});

server.listen(3000, "localhost", () => {
	console.log("listening for requests on port 3000");
});
