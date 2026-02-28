const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
      pong: true,
          time: Date.now()
            });
            });

            module.exports = router;
