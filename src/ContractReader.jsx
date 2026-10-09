import { useState, useEffect } from "react";
import { ethers } from "ethers";

const contractAddress = "0x78e57cF3FeCdd7705c76181418C123927983b5e8";

const abi = [
  "function ROLLUP() view returns (address)",
  "function VERSION() view returns (uint256)"
];

function ContractReader({ provider }) {
  const [rollup, setRollup] = useState("");
  const [version, setVersion] = useState("");

  useEffect(() => {
    async function read() {
      const contract = new ethers.Contract(contractAddress, abi, provider);
      const r = await contract.ROLLUP();
      const v = await contract.VERSION();
      setRollup(r);
      setVersion(v.toString());
    }
    if (provider) read();
  }, [provider]);

  return (
    <div className="container">
      <h1>Outbox Contract</h1>
      <div className="balance">ROLLUP: {rollup}</div>
      <div className="balance">VERSION: {version}</div>
    </div>
  );
}

export default ContractReader;