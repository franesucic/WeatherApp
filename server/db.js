const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "bazepodataka",
    host: "localhost",
    port: 5432,
    database: "WeatherHistory",
    multipleStatements: true
});

module.exports = pool;