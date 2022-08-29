import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <ConnectWallet accentColor="#f213a4" colorMode="light" />
    </div>
  );
};

export default Home;
