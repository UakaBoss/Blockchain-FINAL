require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "sepolia",
   networks: {
      sepolia: {
         url: process.env.INFURA_SEPOLIA_ENDPOINT,
         accounts: [process.env.PRIVATE_KEY],
         gas: 210000000,
         gasPrice: 1000000000,
      }
   },
}