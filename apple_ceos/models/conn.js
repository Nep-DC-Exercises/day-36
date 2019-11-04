const pgp = require("pg-promise")({
    query: function(e) {
        console.log("QUERY", e.query);
    }
});

const options = {
    host: process.env.DB_HOST,
    user: "postgres",
    database: "postgres",
    password: process.env.DB_PASS
};

// const options = {
//     host: "localhost",
//     user: "neporshiso",
//     database: "apple_ceos"
// };

const db = pgp(options);

module.exports = db;
