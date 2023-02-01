import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ContractHandler } from "./../components/UserHome/Contract"

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContractHandler>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ContractHandler>
  );
}

export default MyApp;
