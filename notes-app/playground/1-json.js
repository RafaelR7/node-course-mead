const fs = require("fs");

const dataBuffer = fs.readFileSync("data.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

data.name = "Honda";
data.planet = "Earth";
data.age = "35";

const stringifyData = JSON.stringify(data);
fs.writeFileSync("data.json", stringifyData);
