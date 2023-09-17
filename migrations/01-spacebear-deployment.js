const Spacebear = artifacts.require("Spacebear");
module.exports = function(deployer, network, accounts) {
    console.log("Deploying Spacebear to network: " + network);
    console.log("Deployer account: " + accounts[0]);
    deployer.deploy(Spacebear);
    // if there are constructor arguments, 
    //deployer.deploy(Spacebear, "Spacebear", "SPB", 18, 1000000000000000000000000000);
    //deployer.deploy(Spacebear, {from: accounts[0], gas: 5000000, replace: network === "develop" ? true : false});
}