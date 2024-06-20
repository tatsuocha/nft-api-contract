const Sample = artifacts.require("Ethereum.sol");
const Voice = artifacts.require("Voice.sol");

module.exports = function(deployer) {
	deployer.deploy(Sample);
	deployer.deploy(Voice);
};