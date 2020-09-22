// HI USER, WELCOME TO SET LIB FILE
// THIS IS SOURCE CODE FOR `.set` METHOD in BelajarJS.db
// THIS CODE IS MAKE FOR HELP ME TO MANAGE JSON
// SO, YOU CAN COPY IT.

const fs = require("fs");

class SetLib {
    constructor(options) {
        this.path = options.path || "../../" + "data.json";
    }

    initialize(key, value) {
        return new Promise((resolve, reject) => {
            if (!key) {
                return reject("Provide key for make or update data!");
            }
            if (!value) {
                return reject("Provide value for make new data!");
            }
            
            
            
            fs.writeFile(this.path.replace("../../", ""), JSON.stringify({ [key]: value }, 0,2), (error) => {
                if (error) {
                    reject(error.message);
                }
                resolve("Updated");
            });
        });
    }
}

module.exports = SetLib;