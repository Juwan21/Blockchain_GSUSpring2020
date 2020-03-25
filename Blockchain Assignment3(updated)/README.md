# Blockchain Assignment 3:

###Juwan Smith
###3/25/20
###CSC 4980


## How to setup the environment:
* Make sure you are in the `Blockchain Assignment3` folder .

* Check your current truffle version with `truffle version` in your command prompt that matches the text below:

 > `Truffle v4.1.17 (core: 4.1.17)`

 > `Solidity v0.4.26 (solc-js)`

* If your Truffle and Solidity versions do not match the specifications above find and install the appropiate versions from the web.

*  Also make sure you are running the *Ganache* application. 

* Within the **truffle-config** Javascript file uncomment **development** and change the **port** value to 7545. Also uncomment **version** within **compilers** and change the value to "0.4.26".


## Tutorial for Testing environment:
* Run `truffle compile`

* Run `truffle develop`, which should open up a shell.

* Once in the Truffle Develop prompt is active, run `migrate --reset`.

* Run `ExampleToken.deployed("Example Token", "EXM", 18).then((t) => {token = t;})`. The output should say **undefined**.

* Run `ExampleTokenCrowdsale.deployed(500, web3.eth.accounts[0], token.address , new web3.BigNumber(web3.toWei(200, 'ether'))).then((t) => {sale = t;})`. The output should say **undefined**.

* Run `token.transferOwnership(sale.address)`. The output should be similar to the text below:
> {
  tx: '0x68c6fb6a6a2fb19aefa295faf111c902a6bfe9d7f6caabf2b9531072cb05b869',
  receipt: {
    transactionHash: '0x68c6fb6a6a2fb19aefa295faf111c902a6bfe9d7f6caabf2b9531072cb05b869',
    transactionIndex: 0,
    blockHash: '0x87962fa8b343483fcea8edeae359387aff38b3ad36ddc1ece7fac7d1b3d00e8d',
    blockNumber: 9,
    gasUsed: 30626,
    cumulativeGasUsed: 30626,
    contractAddress: null,
    logs: [ [Object] ],
    status: '0x1',
    logsBloom: '0x00000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000020002000000100000000000000000000000000000010000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000400000000000000000000000000000000000800000000000000000010000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000'
  },
 > 
  logs: [
    {
      logIndex: 0,
      transactionIndex: 0,
      transactionHash: '0x68c6fb6a6a2fb19aefa295faf111c902a6bfe9d7f6caabf2b9531072cb05b869',
      blockHash: '0x87962fa8b343483fcea8edeae359387aff38b3ad36ddc1ece7fac7d1b3d00e8d',
      blockNumber: 9,
      address: '0x9fbda871d559710256a2502a2517b794b482db40',
      type: 'mined',
      event: 'OwnershipTransferred',
      args: [Object]
    }
  ]
>}
### Test Transactions from the assignment article:
* Run `sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(1, 'ether')) , from : web3.eth.accounts[1]});`. Output: Some Random Error.

* Run `sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(2, 'ether')) , from : web3.eth.accounts[1]});`. Output: Some Random Error.

* Run `sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(48, 'ether')) , from : web3.eth.accounts[1]});`. Output below: 
>{
  tx: '0x2494db444a9a9e269e6315c4fdb635d3166bbf8f976cb2fa0054d051ed93b13d',
  receipt: {
    transactionHash: '0x2494db444a9a9e269e6315c4fdb635d3166bbf8f976cb2fa0054d051ed93b13d',
    transactionIndex: 0,
    blockHash: '0x51b7032fe4ecbb8069dfd8fccabd86ca618c56650ee077e3c091bacbb5d24bf6',
    blockNumber: 12,
    gasUsed: 122553,
    cumulativeGasUsed: 122553,
    contractAddress: null,
    logs: [ [Object], [Object], [Object] ],
    status: '0x1',
    logsBloom: '0x00000000000000000000000000000000000000004004000000000000000000000000000000000020000000000000000000000020000000000100000000000000000000008020000000000008000000000000000000000000000080000000000000000000020000000000000000000800000000000000400000000010000000041000000000010000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000020000000000000000000'
  },
 >
  logs: [
    {
      logIndex: 2,
      transactionIndex: 0,
      transactionHash: '0x2494db444a9a9e269e6315c4fdb635d3166bbf8f976cb2fa0054d051ed93b13d',
      blockHash: '0x51b7032fe4ecbb8069dfd8fccabd86ca618c56650ee077e3c091bacbb5d24bf6',
      blockNumber: 12,
      address: '0x2c2b9c9a4a25e24b174f26114e8926a9f2128fe4',
      type: 'mined',
      event: 'TokenPurchase',
      args: [Object]
    }
  ]
>}

*Run again, `sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(1, 'ether')) , from : web3.eth.accounts[1]});`. Output below:
>{
  tx: '0xd4028d7ab1a0d51accc1ece87a6311ac94e675d56153578eca97afd54a102b45',
  receipt: {
    transactionHash: '0xd4028d7ab1a0d51accc1ece87a6311ac94e675d56153578eca97afd54a102b45',
    transactionIndex: 0,
    blockHash: '0x696c7f8b6705532250314b506707a5928857ab22531cba85cd9a6a7b41ec9674',
    blockNumber: 13,
    gasUsed: 62553,
    cumulativeGasUsed: 62553,
    contractAddress: null,
    logs: [ [Object], [Object], [Object] ],
    status: '0x1',
    logsBloom: '0x00000000000000000000000000000000000000004004000000000000000000000000000000000020000000000000000000000020000000000100000000000000000000008020000000000008000000000000000000000000000080000000000000000000020000000000000000000800000000000000400000000010000000041000000000010000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000020000000000000000000'
  },
 >
  logs: [
    {
      logIndex: 2,
      transactionIndex: 0,
      transactionHash: '0xd4028d7ab1a0d51accc1ece87a6311ac94e675d56153578eca97afd54a102b45',
      blockHash: '0x696c7f8b6705532250314b506707a5928857ab22531cba85cd9a6a7b41ec9674',
      blockNumber: 13,
      address: '0x2c2b9c9a4a25e24b174f26114e8926a9f2128fe4',
      type: 'mined',
      event: 'TokenPurchase',
      args: [Object]
    }
  ]
>}

* Run `token.balanceOf(web3.eth.accounts[1]).then(result => result.toNumber())`. Output: 2.45e+22

#Solutions

## Changes made to the contract:
*All changes made within the **ExampleCrowdsale.sol file**

1. uint256 public investorMinCap = 70000000000000000000;

2. Run `sale.getTokensLeft().then(result => result.toNumber())`. Output: getTokensLeft isnt a function
 
3. Add the requirement statement: **require (_existingContribution == 0, "error: there has already been a purchase from this account.");** within the **_preValidatePurchase** function.
	*Test 1, Run `sale.buyTokens(web3.eth.accounts[0], {value : new web3.BigNumber(web3.toWei(10, 'ether')) , from : web3.eth.accounts[1]});`. Output: Some Error
	*Test 2, Run  `sale.buyTokens(web3.eth.accounts[0], {value : new web3.BigNumber(web3.toWei(5, 'ether')) , from : web3.eth.accounts[1]});`. Output: Some Error


## Change contract parameters:

* Run `ExampleToken.deployed("CSC4980 Token", "GSU", 16).then((t) => {token = t;})`
* Run `ExampleTokenCrowdsale.deployed(450, web3.eth.accounts[0], token.address , new web3.BigNumber(web3.toWei(150, 'ether'))).then((t) => {sale = t;})`
* Run `token.transferOwnership(sale.address)`


##Assignment Transactions Results:

1. **Try to buy tokens with 2.5 ether**
	* Run sale.buyTokens(web3.eth.accounts[0], {value : new web3.BigNumber(web3.toWei(2.5, 'ether')) , from : web3.eth.accounts[1]});. Output: Some Error

2. **Buy tokens with 15 ether**
	* Run sale.buyTokens(web3.eth.accounts[0], {value : new web3.BigNumber(web3.toWei(15, 'ether')) , from : web3.eth.accounts[1]});. Output: Some Error

3. **Return how many tokens are left**
	* Run sale.getTokensLeft().then(result => result.toNumber()). Output: 200000000000000000000

4. **Buy tokens (again) with 25 Ether** 
	* Run sale.buyTokens(web3.eth.accounts[0], {value : new web3.BigNumber(web3.toWei(25, 'ether')) , from : web3.eth.accounts[1]});. Output: Some Error





 
