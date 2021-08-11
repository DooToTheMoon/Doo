const DooToken = artifacts.require("DooToken")
// const DooCrowdsale = artifacts.require("DooCrowdsale")

module.exports = async function (deployer,network,accounts) {
    await deployer.deploy(DooToken,"Doo","Doo","1000000000000000000000000000000000");
    const token = await DooToken.deployed();
    // deployer.deploy(DooCrowdsale,360000000000,accounts[0],"0xa62c9b8b63d2713c3cece3b2c764491fb40f5f9a",1628596800,1628769600);
    // // const crowdsale = await DooCrowdsale.deployed();
};