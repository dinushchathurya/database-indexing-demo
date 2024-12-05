const pool = require("../config/db");
const logger = require("../utils/logger");

// Measure query performance
const measureQueryPerformance = (query, params, callback) => {
    console.time(query); // Start measuring time
    pool.query(query, params, (err, results) => {
        console.timeEnd(query); // End measuring time
        if (err) {
        logger.error("Query Error:", err);
        return callback(err, null);
        }
        callback(null, results);
    });
};

// Query for users with indexing
const getUsersWithIndex = (callback) => {
    const query = "SELECT * FROM users_with_index";
    measureQueryPerformance(query, [], callback);
};

// Query for users without indexing
const getUsersWithoutIndex = (callback) => {
    const query = "SELECT * FROM users_without_index";
    measureQueryPerformance(query, [], callback);
};

module.exports = { getUsersWithIndex, getUsersWithoutIndex };
