/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./styles";
import Header from "../Header";
import Button from "../shared/Button";
import blockchain from "../../public/images/blockchain.png";
import Image from "next/image";

const LandingPage: React.FC = () => {
  return <div css={styles.landingContainer}>
    <Header />
    <div css={styles.body}>
      <div css={styles.getStarted}>
        <div css={styles.getStartedText}>
          Looking for better way to store documents?
        </div>
        <div>
          <Button type="link" onClick={()=>{}} style={styles.getStartedButton}>Lets Get You Started</Button>
        </div>
      </div>
      <div css={styles.icon}>
        <Image src={blockchain} alt="" />
      </div>
    </div>
  </div>;
}

export default LandingPage;
