/** @type import('hardhat/config').HardhatUserConfig */
// require('dotenv').config();

module.exports = {
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://rpc.ankr.com/eth_sepolia/026dfc9d539694c17d178e1b0ecc2ea3707f440d110ceea20c49f169d87254d1',
      //accounts: [`0x${process.env.PRIVATE_KEY}`]
      accounts: ['0x37c64bbbf8232b399e48026edf8f8c2e4679127dc72141d66db0923d13619ec1']
    },
  },
};
