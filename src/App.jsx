import { ethers } from "ethers";
import './App.css'
import BalanceReader from './BalanceReader.jsx' 
import BlockExplorer from './BlockExplorer.jsx';
import VendingMachine from './VendingMachine.jsx';
import ContractReader from './ContractReader.jsx';

const providerUrl = 'https://ethereum-sepolia-rpc.publicnode.com';
const provider = new ethers.JsonRpcProvider(providerUrl);
const network = await provider.getNetwork();
function App() {
console.log(network);
return (
<>
 <ContractReader provider={provider} />
</>
)
}
export default App