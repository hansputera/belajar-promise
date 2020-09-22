// HI USER, WELCOME TO DELETE LIB FILE
// THIS IS SOURCE CODE FOR `.delete` METHOD in BelajarJS.db
// THIS CODE IS MAKE FOR HELP ME TO MANAGE JSON
// SO, YOU CAN COPY IT.

const fs = require("fs");

module.exports = class DeleteLib {
    constructor(options) {
        this.path = options.path || "../../" + "data.json";
    }
    initialize(key) {
        return new Promise((resolve, reject) => {
            if (!key) {
                return reject("Provide key for delete data!");
            }
            const file_data = require(this.path)[key];
            if (!file_data) {
                return reject("Can't find that data!");
            } else {
                const result = Object.keys(require(this.path)).filter(obj => obj !== key);
                fs.writeFile(this.path.replace("../../", ""),
                JSON.stringify(result, 0,2),
                (error) => {
                    if (error) {
                        reject(error.message);
                    }
                    resolve("Just deleted data for: " + key);
                });
            }
        });
    }
}