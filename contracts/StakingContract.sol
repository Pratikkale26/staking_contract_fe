/*

// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IPratikCoin {
    function mint(address to, uint amount) external;
}

// Staking Contract (Non-Upgradable)
contract Staking is Ownable {
    struct UserInfo {
        uint stakedBalance;
        uint unclaimedReward;
        uint lastUpdate;
    }

    mapping(address => UserInfo) public userInfo;
    uint public totalStakedValue;
    IPratikCoin public pratikCoin;

    uint public constant REWARDS_PER_ETH_EVERY_SEC = 1e15; // 0.001 ETH per second

    constructor(IPratikCoin _token) Ownable(msg.sender) {
        pratikCoin = _token;
    }

    receive() external payable {}

    fallback() external payable {
        revert("Function does not exist");
    }

    function _updateRewards(address _user) internal {
        UserInfo storage user = userInfo[_user];

        if (user.lastUpdate == 0) {
            user.lastUpdate = block.timestamp;
            return;
        }

        uint256 timeDiff = block.timestamp - user.lastUpdate;
        if (timeDiff == 0) {
            return;
        }

        uint256 additionalReward = (user.stakedBalance * timeDiff * REWARDS_PER_ETH_EVERY_SEC) / 1e18;
        user.unclaimedReward += additionalReward;
        user.lastUpdate = block.timestamp;
    }

    function stake(uint256 _amount) external payable {
        require(_amount > 0, "Cannot stake 0 ETH");
        require(msg.value == _amount, "ETH amount mismatch");

        _updateRewards(msg.sender);

        userInfo[msg.sender].stakedBalance += _amount;
        totalStakedValue += _amount;
    }

    function unstake(uint _amount) public {
        require(_amount > 0, "Cannot unstake 0 ETH");
        UserInfo storage user = userInfo[msg.sender];
        require(user.stakedBalance >= _amount, "Not enough staked balance");

        _updateRewards(msg.sender);

        user.stakedBalance -= _amount;
        totalStakedValue -= _amount;

        (bool success, ) = payable(msg.sender).call{value: _amount}("");
        require(success, "Transfer failed, unstaking unsuccessful");
    }

    function claimRewards() public {
        _updateRewards(msg.sender);
        UserInfo storage user = userInfo[msg.sender];

        uint rewards = user.unclaimedReward;
        require(rewards > 0, "You don't have any rewards to claim");

        pratikCoin.mint(msg.sender, rewards);
        user.unclaimedReward = 0;
    }

    function getRewards() public view returns (uint) {
        uint256 timeDiff = block.timestamp - userInfo[msg.sender].lastUpdate;
        if (timeDiff == 0) {
            return userInfo[msg.sender].unclaimedReward;
        }

        return (userInfo[msg.sender].stakedBalance * timeDiff * REWARDS_PER_ETH_EVERY_SEC) / 1e18 + userInfo[msg.sender].unclaimedReward;
    }
}

*/