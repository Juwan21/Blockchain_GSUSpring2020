pragma solidity ^0.5.0;

contract Courses {
    
    struct Instructor {
        uint age;
        string  FName;
        string  LName;
    }
    
    mapping (address => Instructor) instructors;
    address[] public instructorAccts;
    
    function setInstructor(address  _address, uint  _age, string memory  _FName, string memory  _LName) public {
        Instructor memory instructor = instructors[_address];
        
        instructor.age = _age;
        instructor.FName = _FName;
        instructor.LName = _LName;
        
        instructorAccts.push(_address) -1;
    }
    
    function getInstructors() view public returns(address[] memory) {
        return instructorAccts;
    }
    
    function getInstructor(address _address) view public returns (uint, string memory, string memory) {
        return (instructors[_address].age, instructors[_address].FName, instructors[_address].LName);
    }
    
    function countInstructors() view public returns (uint) {
        return instructorAccts.length;
    }
    
}