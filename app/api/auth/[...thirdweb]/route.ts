import { ThirdwebAuthAppRouter } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

const { ThirdwebAuthHandler } = ThirdwebAuthAppRouter({
  domain: "example.com",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
});

export { ThirdwebAuthHandler as GET, ThirdwebAuthHandler as POST };
