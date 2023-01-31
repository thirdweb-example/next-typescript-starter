/** @jsxImportSource @emotion/react */
import { ENSAvatar } from "@web3uikit/web3";
import * as styles from "./styles";
import { ConnectWallet } from "@thirdweb-dev/react";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;
  console.log(pathName);
  return (
    <div css={styles.header}>
      <div css={styles.topBar}>
        <div css={styles.webName}>WEB3-DOCS</div>
        {router.pathname === "/" ? (
          <>
            <div
              css={styles.subHeading}
              onClick={() => {
                router.push("/docs");
              }}
            >
              Docs
            </div>
            <div css={styles.subHeading}>FAQs</div>
            <div css={styles.subHeading}>About Us</div>
          </>
        ) : (
          <Button
            type="link"
            onClick={() => {
              router.push("/");
            }}
          >
            HOME
          </Button>
        )}
      </div>

      <div css={styles.loginStatus}>
        <Button type="link" onClick={() => {}} style={styles.buttonStyle}>
          Get Started
        </Button>
        <div css={{ position: "relative" }}>
          <Button type="link" onClick={() => {}} style={styles.buttonStyle}>
            Login
          </Button>
          <div css={styles.loginButton}>
            <ConnectWallet btnTitle={"Login"} css={styles.loginButton} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
