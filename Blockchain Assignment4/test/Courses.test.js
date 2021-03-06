const Courses = artifacts.require('./Courses.sol');
const assert = require('assert');

contract('Courses', () => {
	let courses = null;
	beforeEach(async () => {
		courses = await Courses.deployed();
	});
	
	it('setInstructor', async () => {
		const ad = "0x00b0b1A1838DB7dB4aa5cdC526dF66385273d0C4";
		await courses.setInstructor(ad , 25 , 'John', 'Smith');
		const ins = await courses.getInstructor(ad);
		
		assert.equal(ins[ad].Age, 25);
		assert.equal(ins[ad].FName, 'John');
		assert.equal(ins[ad].LName, 'Smith');
	});
	
	it('getInstructors', async () => {
		const ad = "0x00b0b1A1838DB7dB4aa5cdC526dF66385273d0C4";
		const array = await courses.getInstructors();
		
		assert.deepEqual(array[0], ad);
	});
	
	it('getInstructor', async () => {
		const ad = "0x00b0b1A1838DB7dB4aa5cdC526dF66385273d0C4";
		const ins = await courses.getInstructors();
		
		assert.equal(ins[0], ad);
	});
	
	it('countInstructors', async () => {
		const num = await courses.countInstructors();
		
		assert.equal(num, 1);
	});
	
	
});