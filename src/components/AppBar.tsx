import { useAccount, useConnect, useDisconnect } from "wagmi";

export function Appbar() {
  const { address } = useAccount();

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4 shadow-md rounded-lg m-4">
      <div className="text-3xl font-bold tracking-wide">Stakify</div>
      <div>{!address ? <Connectors /> : <Disconnect />}</div>
    </nav>
  );
}

function Connectors() {
  const { connectors, connect } = useConnect();

  return (
    <div className="flex gap-3">
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          className="px-4 py-2 bg-white text-blue-600 font-medium rounded-lg shadow-md transition-all hover:bg-gray-100 hover:font-bold"
        >
          {connector.name}
        </button>
      ))}
    </div>
  );
}

function Disconnect() {
  const { disconnect } = useDisconnect();

  return (
    <button
      onClick={() => disconnect()}
      className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md transition-all hover:bg-red-700"
    >
      Disconnect Wallet
    </button>
  );
}
