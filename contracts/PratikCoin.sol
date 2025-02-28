/*
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

// import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PratikCoin is ERC20 {
    address StakingContract;

    constructor(address _stakingContract) ERC20("PratikCoin", "PkC"){
        StakingContract = _stakingContract;
    }

    modifier onlyContract() {
        require(msg.sender == StakingContract);
        _;
    }

    function mint(address to, uint amount) public onlyContract {
        _mint(to, amount);
    }

    function updateContract(address newContract) public onlyContract {
        StakingContract = newContract;
    }
}

*/