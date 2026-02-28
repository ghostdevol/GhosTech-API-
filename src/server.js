// src/server.js
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const pingRouter = require("./routes/ping");
const commandRouter = require("./routes/command"); // optional

// Mount routes
app.use("/ping", pingRouter);
app.use("/command", commandRouter); // optional

// Root endpoint — confirms API is alive
app.get("/", (req, res) => {
  res.json({
    status: "GhostTech API online",
    engine: "v1.0",
    message: "Awaiting commands"
  });
});

// Boot sequence
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 GhostTech API running on port ${PORT}`);
});
