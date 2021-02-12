const fs = require("fs");

const readStream = fs.createReadStream("./doc/docs1.txt", {
	encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./doc/docs2.txt");

// readStream.on("data", (chunk) => {
// 	// console.log("##### HERE IS NEW CHUNK #####");
// 	// console.log(chunk.toString());
// 	writeStream.write("\n NEW CHUNK \n");
// 	writeStream.write(chunk);
// });

// Piping
readStream.pipe(writeStream);
