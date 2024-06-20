const VoiceContract = artifacts.require("VoiceContract");

module.exports = function(deployer) {
	deployer.deploy(VoiceContract);
};