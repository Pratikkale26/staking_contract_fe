export const abi = [
	{
	  "type": "constructor",
	  "inputs": [
		{
		  "name": "_token",
		  "type": "address",
		  "internalType": "contract IPratikCoin"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "fallback",
	  "stateMutability": "payable"
	},
	{
	  "type": "receive",
	  "stateMutability": "payable"
	},
	{
	  "type": "function",
	  "name": "REWARDS_PER_ETH_EVERY_SEC",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "claimRewards",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "getRewards",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "owner",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "pratikCoin",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract IPratikCoin"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "renounceOwnership",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "stake",
	  "inputs": [
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "payable"
	},
	{
	  "type": "function",
	  "name": "totalStakedValue",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "transferOwnership",
	  "inputs": [
		{
		  "name": "newOwner",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "unstake",
	  "inputs": [
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "userInfo",
	  "inputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "stakedBalance",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "unclaimedReward",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "lastUpdate",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "event",
	  "name": "OwnershipTransferred",
	  "inputs": [
		{
		  "name": "previousOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "newOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "anonymous": false
	},
	{
	  "type": "error",
	  "name": "OwnableInvalidOwner",
	  "inputs": [
		{
		  "name": "owner",
		  "type": "address",
		  "internalType": "address"
		}
	  ]
	},
	{
	  "type": "error",
	  "name": "OwnableUnauthorizedAccount",
	  "inputs": [
		{
		  "name": "account",
		  "type": "address",
		  "internalType": "address"
		}
	  ]
	}
  ]
  