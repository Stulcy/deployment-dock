const hre = require("hardhat");

async function deploy() {
  const factory = await hre.ethers.getContractFactory("ROK");
  const contract = await factory.deploy();

  await contract.deployed();

  console.log("Contract address:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
