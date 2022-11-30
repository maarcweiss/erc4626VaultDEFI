require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
// require("@nomiclabs/hardhat-vyper")

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          evmVersion: "istanbul",
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  vyper: {
    compilers: [{ version: "0.2.1" }, { version: "0.3.0" }],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi",
      },
    },
  },
  // mocha: {
  //   timeout: 100000000,
  // },
}
