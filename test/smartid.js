var SmartId = artifacts.require("./SmartIdentity.sol");

contract('SmartID', function(accounts) {
  it("smartId", function() {
    return SmartId.deployed()
      .then(function(instance) {
        return instance.addAttribute('addAttribute')
      })
      .then(function(resp) {
        console.log(resp)
      })
  });
});
