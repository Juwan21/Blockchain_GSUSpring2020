
var SomeMessage = artifacts.require("./HelloWorld.sol") 
module.exports = function(deployer){ deployer.deploy(SomeMessage,"Hi"); 
};
