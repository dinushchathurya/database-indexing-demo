const pool = require("../config/db");

const getUsersWithIndex = async (callback) => {
  const query = `
    SELECT id, name, email, age, country
    FROM users_with_index
    WHERE age > 25 AND country = 'USA'
    ORDER BY age DESC;
  `;
  console.log("Executing query for users_with_index:", query); // Debug log
  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query for users_with_index:", err);
      callback(err, null);
    } else {
      console.log("Results from users_with_index:", results); // Debug log
      callback(null, results);
    }
  });
};

const getUsersWithoutIndex = async (callback) => {
  const query = `
    SELECT id, name, email, age, country
    FROM users_without_index
    WHERE age > 25 AND country = 'USA'
    ORDER BY age DESC;
  `;
  console.log("Executing query for users_without_index:", query); // Debug log
  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query for users_without_index:", err);
      callback(err, null);
    } else {
      console.log("Results from users_without_index:", results); // Debug log
      callback(null, results);
    }
  });
};

module.exports = { getUsersWithIndex, getUsersWithoutIndex };
