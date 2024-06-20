pragma solidity >=0.4.22 <0.9.0;

contract Voice {
	uint256 storedData;

	function get() public view returns (uint256) {
		return storedData;
	}

	function create(uint256 x) public {
		storedData = x;
	}
}
