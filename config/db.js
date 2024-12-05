const mysql = require("mysql2");

// Create and export MySQL connection pool
const pool = mysql.createPool({
	host: "localhost", // Your database host
	user: "root", // Your MySQL username
	password: "", // Your MySQL password
	database: "cluster_index_demo", // Your database name
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

// Test connection
pool.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection failed:', err.stack);
      process.exit(1);
    } else {
      console.log('Connected to database.');
      connection.release();
    }
});

module.exports = pool;
