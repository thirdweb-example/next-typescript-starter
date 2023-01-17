/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./styles";
import bgImg from "../../public/images/background-image.png";
import logo from "../../public/images/Zebpay_Logo.png";
import Image from "next/image";

interface HeaderLayoutProps {
  component: React.ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = (props) => {
  return <div>
    <Image src={bgImg} alt="" css={styles.backgroundImage} />
    <div css={styles.header}>
      <div css={styles.websiteName}>

          <Image src={logo} alt="" />
          WEB3 DOCS
      </div>
      <div css={styles.loginArea}>
        <button css={styles.loginButton}>Login</button>
      </div>
    </div>{props.component}
    <div css={styles.footer}>
      <div css={styles.info}>
        <div>Resources</div>
        <div>Legal</div>
        <div>More</div>
      </div>
      <div css={styles.newsletter}>Sign Up for Newsletter</div>
    </div>
  </div>;
}

export default HeaderLayout;