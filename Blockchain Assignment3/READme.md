#Installation Details:

In order to run this program you need to install the following:
-**Truffle v4.1.15 (core: 4.1.15)** check with the command: truffle version
-**Solidity v0.4.25 (solc-js)** 

Also you need a copy some of the needed files in [this](https://github.com/buddies2705/Solidity-Tutorial) Github repository.

You can download the entire repository as a zip file or simply copy the needed files and convert them using Notepad++ or another similar text editor.

Once in the repository go into the **contracts** folders. Scroll through the folder until you see the **openzeppelin-solidity** folder. Copy this folder and then paste it within the **node_modules** folder of your **root** directory of your machine.

Install Ganache
 
Click QuickStart to create 10 simulated Ethereum wallets

Copy the last four digits from the RPC server. Open the **truffle-config** Javascript file within your program directory, scroll down to **development**. Delete the digots in **port** and paste the digits from the RPC server.


#Starting Program:
-Open the Node.js command prompt and make sure you're in the root directory.
-Create a directory for the program. **mkdir name_here**
-Enter the newly created directory and use **truffle init**
-To make sure you are using the correct *Solidity* version when compiling the program, open the **truffle-config** Javascript file in your program directory using Notepad++ or whatever text editor you're using. Scroll to the bottom of the Javascript file and you will see section called **"configure your compilers"**. Remove the comment slashes in front of **compilers**, **solc**, and **version**. In **version** change the numbers within the " " to **0.4.25**. Save the Javascript file.

###Program Files
-The needed program files can be found at this website: [Here](https://medium.com/crowdbotics/how-to-build-a-simple-capped-crowdsale-token-using-openzeppelin-library-part-1-2789ec642308)
-Copy the files **ExampleToken.sol** and **ExampleTokenCrowdsale.sol** and create files in Notepad++ or whatever text editor you're using.
-Cut or copy and paste the files within the **contracts** directory within your previously created program directory.
-Go into the previous Github repository from the given link or downloaded zip file. Within the **migrations** folder you will find a **2_deploy_contracts** Javascript file, copy this file and go back into your program directory. Within your program directory go into the migrations folder and paste the Javascript file.


#Testing Program:
-Make sure you're in your program directory.
Do these commands in order:
-run **truffle compile**
-run **truffle develop**
-run **ExampleToken.new("Example Token", "EXM", 18).then((t) => {token = t;})**

Expected Output: undefined

-run **ExampleTokenCrowdsale.new(500, web3.eth.accounts[0], token.address , new web3.BigNumber(web3.toWei(200, 'ether'))).then((t) => {sale = t;})**

Expected Output: undefined

-run **token.transferOwnership(sale.address)**

Expected Output: 

{
  tx: '0x0320b74a445537e50aa51df75e8dcb1cb7556e103cf36fb47ce5baea9f19f5b4',
  receipt: {
    transactionHash: '0x0320b74a445537e50aa51df75e8dcb1cb7556e103cf36fb47ce5baea9f19f5b4',
    transactionIndex: 0,
    blockHash: '0x3c2f4f124450671e93758693c17c04fe094981a19dcc42865cea555146f02c7b',
    blockNumber: 3,
    gasUsed: 30562,
    cumulativeGasUsed: 30562,
    contractAddress: null,
    logs: [ [Object] ],
    status: '0x1',
    logsBloom: '0x00000000000000000000000000000000000000000000000000800000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000002000001000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000c00000000000000000000000000000000000000000000000000000010000000002000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
  },
  logs: [
    {
      logIndex: 0,
      transactionIndex: 0,
      transactionHash: '0x0320b74a445537e50aa51df75e8dcb1cb7556e103cf36fb47ce5baea9f19f5b4',
      blockHash: '0x3c2f4f124450671e93758693c17c04fe094981a19dcc42865cea555146f02c7b',
      blockNumber: 3,
      address: '0x8cdaf0cd259887258bc13a92c0a6da92698644c0',
      type: 'mined',
      event: 'OwnershipTransferred',
      args: [Object]
    }
  ]
}



#Homework Questions:

1.Try to buy tokens with 2.5 ether

Command Used:
sale.buyTokens(web3.eth.accounts[0], {value : new web3.BigNumber(web3.toWei(2.5, 'ether')) , from : web3.eth.accounts[1]});

Output:Error

2.Buy tokens with 15 ether

Command Used:
sale.buyTokens(web3.eth.accounts[0], {value : new web3.BigNumber(web3.toWei(15, 'ether')) , from : web3.eth.accounts[1]});

Output:Error

3.Return how many tokens are left

Command Used:
sale.getTokensLeft().then(result => web3.fromWei(result.toNumber(), "ether" ))

Output:Error

4.Buy tokens (again) with 25 Ether 

Command Used: 
sale.buyTokens(web3.eth.accounts[0], {value : new web3.BigNumber(web3.toWei(25, 'ether')) , from : web3.eth.accounts[1]});

Output:Error


