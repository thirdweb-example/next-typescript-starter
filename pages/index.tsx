import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HomePage from "../components/HomePage";
import HeaderLayout from "../components/HeaderLayout";

const Home: NextPage = () => {
  return (
    <>
      <HeaderLayout component={<HomePage />} />
      </>
  );
};

export default Home;
