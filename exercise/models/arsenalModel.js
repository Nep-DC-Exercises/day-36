const db = require("./conn");

class ArsenalPlayers {
    constructor(fName, lName, position, country) {
        this.fName = fName;
        this.lName = lName;
        this.position = position;
        this.country = country;
    }

    // async await functions should be used with try catch
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM players;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = ArsenalPlayers;
