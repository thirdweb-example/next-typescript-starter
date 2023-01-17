import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <link href='https://fonts.googleapis.com/css?family=Arimo:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
