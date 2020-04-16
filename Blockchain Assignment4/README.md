# Blockchain Assignment 4:

**Juwan Smith**

**4/15/20**

**CSC 4980**


## How to setup the environment:

* Make sure you are in the `Blockchain Assignment4` folder .

* Check your current truffle version with `truffle version` in your **Node.js** command prompt that matches the text below:

 > `Truffle v5.1.21 (core: 5.1.21)`

 > `Solidity v0.5.16 (solc-js)`

* If your Truffle and Solidity versions do not match the specifications above find and install the appropiate versions from the web.

*  Also make sure you are running the *Ganache* application. 

* Within the **truffle-config** Javascript file uncomment **development** and change the **port** value to 7545. 


## Converting Assignment file to version v0.5 and later:

*Copy the entire Assignment code from the given link [here](https://coursetro.com/posts/code/102/Solidity-Mappings-&-StructsTutorial).

* Add the memory keyword before _fname and _lname within the parameters of the setInstructor() function.

* Remove var keyword since its deprecated using (v0.5). Replace 'var instructor' with 'Instructor memory instructor'.

* Add memory after address[] within the parameter of the getInstructors() function.

* Add memory after both string parameters within the getInstructor() function.

## Setting up smart contract for deployment:

* Create a folder to hold your files.

* Open your Node.js prompt an change directories until you reach the your created folder.

* Run `truffle init` within the folder to create the necessary files.

* Change directories to the migrations folder and create a Javascript for deploying your smart contract.

>var ContractNameHere = artifacts.require("./ContractNameHere.sol") 
>module.exports = function(deployer){ deployer.deploy(ContractNameHere); 
>};

## Testing smart contract functions:

* Create a testing file that will test all of the functions within your smart contract. Create a Javascript file and place it with in the test folder of your assignment folder.

Place this at the beginning of your testing file.
> const NameofContract = artifacts.require('./NameofContract.sol');
>
> const assert = require('assert');

Place this in your file in order to call instances and functions from your smart contract.
>contract('NameofContract', () => {
>	let some_name = null;
>	beforeEach(async () => {
>		some_name = await NameofContract.deployed();
>	});

Place this in your file in order to test the input of values to all the parameters within the setInstructor function.
>it('setInstructor', async () => {
>		const ad = "0x00b0b1A1838DB7dB4aa5cdC526dF66385273d0C4";
>		await some_name.setInstructor(ad , 25 , 'John', 'Smith');
>		const ins = await some_name.getInstructor(ad);
>		
>		assert.equal(ins[ad].Age, 25);
>		assert.equal(ins[ad].FName, 'John');
>		assert.equal(ins[ad].LName, 'Smith');
>	});

Place this in your file in order to test that the address within the InstructorAccts array is valid.
>it('getInstructors', async () => {
>		const ad = "0x00b0b1A1838DB7dB4aa5cdC526dF66385273d0C4";
>		const array = await some_name.getInstructors();
>		
>		assert.deepEqual(array[0], ad);
>	});

Place this in your file in order to test the address input as a parameter is valid in order to return values from the getInstructor function.
>it('getInstructor', async () => {
>		const ad = "0x00b0b1A1838DB7dB4aa5cdC526dF66385273d0C4";
>		const ins = await some_name.getInstructors();
>		
>		assert.equal(ins[0], ad);
>	});

Place this in your file in order to test that the countInstructors functions returns a uint value of the size of the InstructorAccts array.
>it('countInstructors', async () => {
>		const num = await courses.countInstructors();
>		
>		assert.equal(num, 1);
>	});

* Make sure when you're done place the contract testing file within the test folder of your assignment folder.

* Run `truffle test` to test the smart contract.

## Output of the smart contract testing:

1. Testing setInstructor function

Output: TyperError: Cannot read property 'age' of undefined

2. Testing getInstructors function

Output: passed

3. Test getInstructor function

Output: passed

4. Test countInstructors function

Output: passed

