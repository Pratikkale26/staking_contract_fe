export const abi = [
	{
	  "inputs": [
		{
		  "internalType": "contract IPratikCoin",
		  "name": "_token",
		  "type": "address"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	},
	{
	  "inputs": [],
	  "name": "claimRewards",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getRewards",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "pratikCoin",
	  "outputs": [
		{
		  "internalType": "contract IPratikCoin",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "totalStakedValue",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_amount",
		  "type": "uint256"
		}
	  ],
	  "name": "stake",
	  "outputs": [],
	  "stateMutability": "payable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_amount",
		  "type": "uint256"
		}
	  ],
	  "name": "unstake",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "stateMutability": "payable",
	  "type": "receive"
	},
	{
	  "stateMutability": "payable",
	  "type": "fallback"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "userInfo",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "stakedBalance",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "unclaimedReward",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "lastUpdate",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	}
  ]
  