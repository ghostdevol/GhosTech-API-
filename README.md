# GhostTech API  
Modular Command Engine • Node.js • Designed by Daniel Sielaff (GhostTech)

GhostTech‑API is a lightweight modular execution engine that runs isolated “modules” through a unified command endpoint.  
It’s built for automation, AI agents, indie developers, and any system that needs clean, predictable, pluggable logic.

---

## 🚀 Features

- **Modular Architecture**  
  Drop new modules into `/src/modules` and they auto‑load.

- **Unified Command Endpoint**  
  POST to `/api/command` with `{ module, input }`.

- **Simple Module Format**  
  ```js
  {
    name: "example",
    version: "1.0",
    run(input) { ... }
  }
