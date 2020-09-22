// HI USER, WELCOME TO PUSH LIB FILE
// THIS IS SOURCE CODE FOR `.push` METHOD in BelajarJS.db
// THIS CODE IS MAKE FOR HELP ME TO MANAGE JSON
// SO, YOU CAN COPY IT.

const fs = require("fs");

module.exports = class PushLib {
    constructor(options) {
        this.path = options.path || "../../" + "data.json";
    }

    initialize(key, arraydata) {
        return new Promise((resolve, reject) => {
            if (!key) {
                return reject("Provide key for push data!");
            }

            if (!arraydata) {
                return reject("Enter value for key value.");
            }

            const file = require(this.path);
            
            if (!file[key]) {
                 fs.writeFile(this.path.replace("../../", ""), 
                JSON.stringify({ [key]: Array(arraydata) }, 0, 2),
                (error) => {
                    if (error) {
                        reject(error.message);
                    }
                    resolve("Just create array data type.");
                    const afterUpdate = require(this.path)[key];
                    if (!afterUpdate && typeof arraydata === "number") {
                        fs.writeFile(this.path.replace("../../", ""),
                        JSON.stringify({ [key]: [arraydata] }, 0,2),
                        (error) => {
                            if (error) {
                                reject(error.message);
                            }
                            console.info("Handle for null result by type number value.");
                        });
                    } 
                });
            } else {
                const fileData = require(this.path)[key];
                
                if (!Array.isArray(fileData)) 
                {
                    reject("Invalid type.");
                }
                
                fileData.push(arraydata);

                fs.writeFile(this.path.replace("../../", ""),
                JSON.stringify({ [key]:  fileData }, 0,2),
                (error) => {
                    if (error) {
                        reject(error.message);
                    }
                    resolve("Just updated array data type!");
                });
            }
        });
    }
}