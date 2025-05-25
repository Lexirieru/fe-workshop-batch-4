'use client'
import { config } from '@/config/config';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';



const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) { 
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                   
                        {children}
          
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}