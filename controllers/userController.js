const userModel = require("../models/userModel");

const getUsersWithIndex = async (req, res) => {
    try {
        await userModel.getUsersWithIndex((err, results) => {
        if (err) {
            return res
            .status(500)
            .json({ error: "Error querying users with index" });
        }
        res.json({
            message: "Users with index fetched successfully",
            data: results,
        });
        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

const getUsersWithoutIndex = async (req, res) => {
    try {
        await userModel.getUsersWithoutIndex((err, results) => {
        if (err) {
            return res
            .status(500)
            .json({ error: "Error querying users without index" });
        }
        res.json({
            message: "Users without index fetched successfully",
            data: results,
        });
        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { getUsersWithIndex, getUsersWithoutIndex };
