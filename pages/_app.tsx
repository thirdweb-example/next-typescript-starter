import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  safeWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Sepolia, Polygon } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={Sepolia}
      authConfig={{
        // Set this to your domain to prevent phishing attacks
        domain: "example.com",
        // The URL of your Auth API
        authUrl: "/api/auth",
      }}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), safeWallet()]}
      // supportedChains={[Polygon, Sepolia, O]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
