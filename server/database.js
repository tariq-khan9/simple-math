const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "math",
    host: "localhost",
    port: 5432,
    database: "math"
})

module.exports = pool;
