import { useState } from "react";
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import { abi } from "../abi";

const CONTRACT_ADDRESS = "0xA13645EdEaC241c226F2170bbb9F43Ba7A363193";

export function Dashboard() {
  const { writeContract } = useWriteContract();
  const [amount, setAmount] = useState(""); // Store custom input

  const handleStake = () => {
    const ethValue = parseFloat(amount);
    if (isNaN(ethValue) || ethValue <= 0) {
      alert("Enter a valid amount of ETH to stake");
      return;
    }

    writeContract({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: "stake",
      args: [BigInt(ethValue * 1e18)], // Convert ETH to Wei
      value: BigInt(ethValue * 1e18),
    });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Stake ETH</h1>

        <input
          type="number"
          placeholder="Enter ETH amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded-md text-center mb-4"
          min="0.001"
          step="0.001"
        />

        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
          onClick={handleStake}
        >
          Stake ETH
        </button>

        <div className="mt-6">
          <ShowStake />
        </div>
      </div>
    </div>
  );
}

function ShowStake() {
  const { address } = useAccount();
  console.log("Connected Wallet Address:", address);

  const { data: userInfo, isLoading, isFetched, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "userInfo",
    args: [address ?? "0x0000000000000000000000000000000000000000"], // Prevent undefined
    enabled: Boolean(address),
  }) as { data: [bigint, bigint, bigint] | undefined; isLoading: boolean; isFetched: boolean; error?: any };

  console.log("Fetched userInfo:", userInfo);
  console.log("isLoading:", isLoading, "isFetched:", isFetched, "Error:", error);

  if (error) {
    return <p className="text-red-600">⚠️ Error fetching staking data: {error.message}</p>;
  }

  const stakedBalance = userInfo ? userInfo[0] : BigInt(0);

  return (
    <div className="text-lg font-medium mt-4">
      {!address ? (
        <p className="text-gray-600">Connect your wallet to see your stake</p>
      ) : isLoading ? (
        <p className="text-gray-600">Fetching stake balance...</p>
      ) : isFetched && userInfo === undefined ? (
        <p className="text-red-600">⚠️ No data found! Did you stake ETH?</p>
      ) : stakedBalance > 0n ? (
        <p>You have staked {Number(stakedBalance) / 1e18} ETH</p>
      ) : (
        <p className="text-gray-600">No stake data found</p>
      )}
    </div>
  );
}
