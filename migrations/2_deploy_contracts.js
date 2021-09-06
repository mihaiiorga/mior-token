const MIOR = artifacts.require("MIOR");

module.exports = function (deployer) {
  deployer.deploy(MIOR, 1000000000);
};
