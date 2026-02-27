const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const routesPath = path.join(__dirname, "..", "routes");

// Auto-load every route file in /routes
fs.readdirSync(routesPath).forEach(file => {
  if (file.endsWith(".js")) {
      const route = require(path.join(routesPath, file));
          const routeName = "/" + file.replace(".js", "");
              router.use(routeName, route);
                }
                });

                module.exports = router;