// src/index.js
const express = require('express');
const { Alchemy, Network } = require('@alch/alchemy-sdk');

const app = express();
const port = 3000;

// Alchemy settings
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY || 'YOUR_ALCHEMY_KEY_HERE',
  network: Network.ETH_MAINNET
};

const alchemy = new Alchemy(settings);

app.use(express.json());

// Basic API status endpoint
app.get('/status', (req, res) => {
  res.json({
    status: 'GhosTech API online',
    engine: 'v1.0',
    message: 'Awaiting commands'
  });
});

// Get latest block from Alchemy
app.get('/latest-block', async (req, res) => {
  try {
    const blockNumber = await alchemy.core.getBlockNumber();
    res.json({ latestBlock: blockNumber });
  } catch (err) {
    console.error('Alchemy error:', err.message);
    res.status(500).json({ error: 'Failed to fetch latest block' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 GhosTech API (Alchemy) running on port ${port}`);
});
