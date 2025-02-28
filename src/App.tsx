import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { Appbar } from './components/AppBar'
 
const queryClient = new QueryClient()
 
export default function App() {
   return (
     <WagmiProvider config={config}>
       <QueryClientProvider client={queryClient}> 
         <Appbar />
       </QueryClientProvider> 
     </WagmiProvider>
   )
 }