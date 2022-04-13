import {access, constants, writeFileSync, readFileSync} from "fs";


export class FileHandler {

    static readJsonFile(filename) {
        return JSON.parse(readFileSync(`./users_data/${filename}.json`, "utf-8"));
    }

    static createJsonFile(filename, data) {
        access(`./users_data/${filename}.json`, constants.F_OK, (err) => {
            writeFileSync(`./users_data/${filename}.json`, JSON.stringify(data));
        });
    }
}
