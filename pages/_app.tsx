import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import ContractHandler from "./../components/UserHome/Contract"
import { getOrCreateStore } from "../utils/redux/createStore";
import { Provider } from "react-redux";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
    const store = getOrCreateStore();
  return (
    <Provider store={store}>
      <ContractHandler>
        <ThirdwebProvider desiredChainId={activeChainId}>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </ContractHandler>
    </Provider>
  );
}

export default MyApp;
