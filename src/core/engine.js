const fs = require("fs");
const path = require("path");

const modulesPath = path.join(__dirname, "..", "modules");
let loadedModules = {};

fs.readdirSync(modulesPath).forEach(file => {
  if (file.endsWith(".js")) {
      const mod = require(path.join(modulesPath, file));
          loadedModules[mod.name] = mod;
            }
            });

            module.exports = {
              run(moduleName, input) {
                  const mod = loadedModules[moduleName];
                      if (!mod) throw new Error(`Module '${moduleName}' not found`);
                          return mod.run(input);
                            }
                            };