import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from 'next';

export default function Home(): NextPage {
  return (
      <ConnectWallet accentColor="#f213a4" colorMode="light" />
  );
}
