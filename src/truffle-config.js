require('dotenv').config(); // Import environment variables from .env
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // Setting up networks configuration
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider({
        mnemonic: process.env.MNEMONIC,
        providerOrUrl: process.env.ALCHEMY_API_URL,
        chainId: 11155111, // Sepolia testnet chainId
      }),
      network_id: 11155111, // Sepolia testnet ID
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true, // Disable dry run before migrations
    },
  },

  // Compilers configuration
  compilers: {
    solc: {
      version: "^0.8.19", // Solidity version compatible with your contracts
    },
  },
};
