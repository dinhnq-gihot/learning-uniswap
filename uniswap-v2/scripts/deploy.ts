import "@openzeppelin/hardhat-upgrades";
import { ethers, upgrades } from "hardhat";
import { AbiCoder, Contract } from "ethers";

async function main() {
    const Token1 = await ethers.getContractFactory("Token1");
    const token1 = await Token1.deploy();

    const Token2 = await ethers.getContractFactory("Token2");
    const token2 = await Token2.deploy();

    console.log("Token1:", await token1.getAddress());
    console.log("Token2:", await token2.getAddress());
}

main();