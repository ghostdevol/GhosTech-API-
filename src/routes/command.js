const express = require("express");
const router = express.Router();
const engine = require("../core/engine");

router.post("/", async (req, res) => {
  const { module: moduleName, input } = req.body;

    if (!moduleName) {
        return res.status(400).json({ error: "Missing 'module' field" });
          }

            try {
                const output = await engine.run(moduleName, input);
                    res.json({ module: moduleName, output });
                      } catch (err) {
                          res.status(500).json({ error: err.message });
                            }
                            });

                            module.exports = router;