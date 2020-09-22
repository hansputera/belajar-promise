// HI USER, WELCOME TO GET LIB FILE
// THIS IS SOURCE CODE FOR `.get` METHOD in BelajarJS.db
// THIS CODE IS MAKE FOR HELP ME TO MANAGE JSON
// SO, YOU CAN COPY IT.

class GetLib {
    constructor(options) {
        const path = options.path || "../../" + "data.json";
        this.path = path;
    }

    initialize(key) {
        return new Promise((resolve, reject) => {
            if (!key) {
                return reject("Provide key for find value.");
            }
            const readon = require(this.path);
            if (!readon) {
                reject("Cannot find: " + this.path);
            } else {
                resolve(readon[key]);
            }
        });
    }
}

module
.exports = GetLib;