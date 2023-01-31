/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./styles";
import blockchain from "../../public/images/blockchain.png";
import Image from "next/image";

const HomePage: React.FC = () => {
  return <div>
    <div><Image src={blockchain} alt="" /></div>
    <div></div>
  </div>
  ;
}

export default HomePage;
