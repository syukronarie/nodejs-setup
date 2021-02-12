const fs = require("fs");

// reading files
// fs.readFile("./doc/text.txt", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	// console.log(data);
// 	console.log(data.toString());
// });

// writing file

// fs.writeFile("./doc/text.txt", "hello everyone", () => {
// 	console.log("file was written");
// });

// fs.writeFile("./doc/text1.txt", "hello again..", () => {
// 	console.log("file was written");
// });

// directories
// if (!fs.existsSync("./assets")) {
// 	fs.mkdir("./assets", (err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log("foder created");
// 	});
// } else {
// 	fs.rmdir("./assets", (err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log("folder deleted");
// 	});
// }

// deleting files
if (fs.existsSync("./doc/docs.txt")) {
	fs.unlink("./doc/docs.txt", (err) => {
		if (err) {
			console.log(err);
		}
		console.log("file deleted");
	});
}
