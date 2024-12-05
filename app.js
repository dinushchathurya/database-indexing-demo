const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',    // Change this to your MySQL server IP
    user: 'root',         // MySQL user
    password: '', // MySQL password
    database: 'cluster_index_demo',     // Database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Fetch user by name (force no indexing, using full table scan)
app.get('/user-no-index/:name', (req, res) => {
    const { name } = req.params;
    console.time('query-time-no-index');  // Start time tracking
    pool.query('SELECT * FROM users FORCE INDEX (PRIMARY) WHERE name = ?', [name], (err, results) => {
		console.timeEnd('query-time-no-index');  // Log the query time
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(results);
		}
    });
});

// Fetch user by name (using index for optimized query)
app.get('/user-with-index/:name', (req, res) => {
    const { name } = req.params;
    console.time('query-time-with-index');  // Start time tracking
    pool.query('SELECT * FROM users WHERE name = ?', [name], (err, results) => {
		console.timeEnd('query-time-with-index');  // Log the query time
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(results);
		}
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
