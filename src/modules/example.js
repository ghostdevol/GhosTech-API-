module.exports = {
        name: "example",
          version: "1.0",
            run(input) {
                return {
                      received: input,
                            echo: input,
                                  timestamp: Date.now()
                                      };
                                        }
                                        };
};