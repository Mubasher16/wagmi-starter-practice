import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  chain
 } from 'wagmi'
 import { infuraProvider } from 'wagmi/providers/infura'
 import { publicProvider } from 'wagmi/providers/public'
 import Profile from './profile'
 import SendTx from './connect'
 import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import SendTxn from './write'

 
 // Configure chains & providers with the Alchemy provider.
 // Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
 const { chains, provider, webSocketProvider } = configureChains([chain.goerli],
  [infuraProvider({ apiKey: '2b2b802ce8414591a6c76a30cf192ad3' })],
)
 
 // Set up client
 const client = createClient({
  autoConnect: true,
  connectors: [
  new MetaMaskConnector({ chains }),
  ],
  provider,
  webSocketProvider,
 })
 
 // Pass client to React Context Provider
 function App() {
  return (
  <WagmiConfig client={client}>
  <Profile />
  <SendTxn/>
  <SendTx/>
  </WagmiConfig>
  )
 }
export default App; 