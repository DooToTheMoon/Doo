const DooToken = artifacts.require("DooToken")

module.exports = async function (deployer,network,accounts) {
    await deployer.deploy(DooToken,"Doo","Doo","1000000000000000000000000000000000");
};