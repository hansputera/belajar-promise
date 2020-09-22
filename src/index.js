// HI USER, WELCOME TO CONTROLLER or INDEX FILE
// THIS IS SOURCE CODE FOR ALL METHOD in BelajarJS.db
// THIS CODE IS MAKE FOR HELP ME TO MANAGE JSON
// SO, YOU CAN COPY IT.

const GetLib = require("./libs/get");
const SetLib = require("./libs/set");
const PushLib = require("./libs/push");
const DelLib = require("./libs/delete");

class BelajarJS {
    constructor(storagePath) {
        this.path = "../../" + storagePath;
    }

    get(key) {
        if (typeof key !== "string") {
            throw new Error("Key must string!");
        }
        const constructorGet = new GetLib({ path: this.path });
        return constructorGet.initialize(key);
    }
    set(key, val) {
        if (typeof key !== "string") {
            throw new Error("Key must string!");
        }
        const constructorSet = new SetLib({ path: this.path });
        return constructorSet.initialize(key, val);
    }
    push(key, val) {
        if (typeof key !== "string") {
            throw new Error("Key must string!");
        }
        const constructorPush = new PushLib({ path: this.path });
        return constructorPush.initialize(key, val);
    }
    delete(key) {
        if (typeof key !== "string") {
            throw new Error("Key must string!");
        }
        const constructorDelete = new DelLib({ path: this.path });
        return constructorDelete.initialize(key);
    }
}

module.exports = BelajarJS;