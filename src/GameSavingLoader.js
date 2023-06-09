import read from "./reader.js";
import json from "./parser.js";
import GameSaving from "./GameSaving.js";

export default class GameSavingLoader {
    static load() {
        return read();
    }

    static parseData(saving) {
        return json(saving);
    }

    static returnSavingObject() {
        return new Promise((resolve) => {
            this.load()
                .then((saving) => this.parseData(saving))
                .then((data) => {
                    const parsedData = JSON.parse(data);
                    resolve(new GameSaving(parsedData.id, parsedData.created, parsedData.userInfo));
                });
        });
    }

    static async loadAsync() {
        try {
            const data = await read();
            const value = await json(data);
            const parsedData = JSON.parse(value);
            return new GameSaving(parsedData.id, parsedData.created, parsedData.userInfo);
        } catch (error) {
            return error.name;
        }
    }
}
