const MIOR = artifacts.require("MIOR");

contract("MIOR", (accounts) => {
  before(async () => {
    mior = await MIOR.deployed()
  })

  it("gives the owner of the contract all the tokens", async() => {
    let balance = await mior.balanceOf(accounts[0])
    balance = web3.utils.fromWei(balance, 'ether')
    assert.equal(balance, 1000000000, "owner of the contract does not have all the 1000000000 tokens")
  })

  it("can transfer", async () => {
    amount = '100'
    amountWei = web3.utils.toWei(amount, 'ether')
    await mior.transfer(accounts[1], amountWei, { from: accounts[0] })

    let balance = await mior.balanceOf(accounts[1])
    balance = web3.utils.fromWei(balance, 'ether')

    assert.equal(balance, amount, "a transfer can't be completed")
  })

  it("owner can mint more", async() => {
    amount = '1000'
    amountWei = web3.utils.toWei(amount, 'ether')
    await mior.mint(accounts[2], amountWei)

    let balance = await mior.balanceOf(accounts[2])
    balance = web3.utils.fromWei(balance, 'ether')
    assert.equal(balance, amount, "can't mint more tokens")
  })

})