const http = require("http");

const server = http.createServer((req, res) => {
	// console.log("request made");
	console.log(req.url, req.method);

	// set header content type
	// res.setHeader("Content-Type", "text/plain");

	// res.write("hello from server");
	// res.end();

	res.setHeader("Content-Type", "text/html");

	res.write("hello from server");
	res.end();
});

server.listen(3000, "localhost", () => {
	console.log("listening for requests on port 3000");
});
