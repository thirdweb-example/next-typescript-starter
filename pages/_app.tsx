import type { AppProps } from 'next/app';
import '../styles/globals.css';
import {
	ThirdwebProvider,
	coinbaseWallet,
	metamaskWallet,
	comethConnect,
	walletConnect,
} from '@thirdweb-dev/react';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebProvider
			clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
			activeChain={'mumbai'}
			supportedWallets={[
				comethConnect({
					// apiKey: 'bef322c7-2612-4f91-ab1d-65c99c88c758',
					apiKey: '4153e44d-5af6-472e-86f5-4447ad6b8d12', // polygon mumbai
				}),
				metamaskWallet(),
				coinbaseWallet(),
				walletConnect(),
			]}
		>
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;
