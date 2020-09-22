const BelajarJS = require("./src");
const db = new BelajarJS("./temp.json");

db.set("commandoo", "Jeffsay").then((value) => console.log(value)).catch((err) => console.error(err));