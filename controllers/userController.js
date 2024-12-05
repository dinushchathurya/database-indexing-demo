const userModel = require("../models/userModel");

// Controller to fetch users from the indexed table
const getUsersWithIndex = (req, res) => {
    userModel.getUsersWithIndex((err, results) => {
        if (err) {
        res.status(500).send("Internal Server Error");
        } else {
        res.json({ message: "Users with Indexing", data: results });
        }
    });
};

// Controller to fetch users from the non-indexed table
const getUsersWithoutIndex = (req, res) => {
    userModel.getUsersWithoutIndex((err, results) => {
        if (err) {
        res.status(500).send("Internal Server Error");
        } else {
        res.json({ message: "Users without Indexing", data: results });
        }
    });
};

module.exports = { getUsersWithIndex, getUsersWithoutIndex };
