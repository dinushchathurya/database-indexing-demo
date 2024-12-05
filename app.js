// app.js
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const logger = require("./utils/logger");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", userRoutes);

// Start the server
app.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}`);
});
