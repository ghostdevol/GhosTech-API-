const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

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