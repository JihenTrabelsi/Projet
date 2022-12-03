const KYC = artifacts.require("KYC");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("KYC", function (/* accounts */) {
  it("should assert true", async function () {
    const kyc = await KYC.deployed();
    kyc.addBank('Bank','9876','0xb9592da0e75b3D550548b84fc34f3f6e7ce7fBd7')
    return assert.isTrue(true);
  });
});
