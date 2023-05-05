import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-foundry";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    zkSync: {
      url: process.env.ZKSYNC_URL!,
      accounts: [process.env.ONE!, process.env.TWO!, process.env.THREE!, process.env.FOUR!, process.env.FIVE!],
    },
    matic: {
      url: process.env.POLYGON_URL!,
      accounts: [process.env.DEV!, process.env.ONE!, process.env.TWO!, process.env.THREE!, process.env.FOUR!, process.env.FIVE!],
    }}
};

export default config;
