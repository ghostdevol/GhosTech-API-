const express = require('express');
const { Alchemy, Network } = require('@alch/alchemy-sdk');

const app = express();
const port = 3000;

const settings = {
    apiKey: process.env.ALCHEMY_API_KEY || 'YOUR_ALCHEMY_KEY',
        network: Network.ETH_MAINNET,
        };

        const alchemy = new Alchemy(settings);

        app.use(express.json());

        app.get('/status', (req, res) => {
            res.json({ status: 'GhosTech API online!' });
            });

            app.get('/latest-block', async (req, res) => {
                try {
                        const blockNumber = await alchemy.core.getBlockNumber();
                                res.json({ blockNumber });
                                    } catch (err) {
                                            res.status(500).json({ error: err.message });
                                                }
                                                });

                                                app.get('/balance/:address', async (req, res) => {
                                                    const { address } = req.params;
                                                        try {
                                                                const balance = await alchemy.core.getBalance(address);
                                                                        res.json({ address, balance: balance.toString() });
                                                                            } catch (err) {
                                                                                    res.status(500).json({ error: err.message });
                                                                                        }
                                                                                        });

                                                                                        app.listen(port, () => {
                                                                                            console.log(`GhosTech API running at http://localhost:${port}`);
                                                                                            });