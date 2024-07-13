import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "@nomicfoundation/hardhat-verify";
import "hardhat-abi-exporter";
import "dotenv/config";

const accounts = [
  process.env.DEPLOYER_PRV as string,
]

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545/",
      chainId: 1337,
      accounts,
    },
    // avax: {
    //   url: "https://api.avax-test.network/ext/bc/C/rpc",
    //   chainId: 43113,
    //   accounts
    // },
  },
  // sourcify: {
  //   enabled: true,
  // },
  etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY",
    customChains: [
      {
        network: "ganache",
        chainId: 1337,
        urls: {
          apiURL: "http://localhost/api",
          browserURL: "http://localhost",
        },
      },
    ]
  },

  abiExporter: {
    path: "./abi",
    clear: false,
    flat: true,
  },
};

export default config;
