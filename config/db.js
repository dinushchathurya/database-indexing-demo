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

module.exports = pool;
