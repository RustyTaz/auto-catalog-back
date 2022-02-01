const Pool = require("pg").Pool;
const pool = new Pool({
	user: "postgres",
	password: "4743",
	host: "localhost",
	port: 5432,
	database: "cars_journal_db",
});

module.exports = pool;
