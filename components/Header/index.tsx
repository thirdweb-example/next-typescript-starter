/** @jsxImportSource @emotion/react */
import * as styles from "./styles";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import metamask from "../../public/images/metamsk 1.png";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const [defaultAccount, setDefaultAccount] = useState("");
  const [signoutVisible, setSignOutVisible] = useState(false);

  const accountChangedHandler = (newAccount:any) => {
    if (newAccount) {
      sessionStorage.setItem("user_address", String(newAccount));
      setDefaultAccount(String(newAccount));
    }
    else sessionStorage.clear();
  }

  useEffect(() => {
    const userAddress = sessionStorage.getItem("user_address");
    const loginCheck = window.ethereum?.isBraveWallet ||
      window.ethereum?.isMetaMask ||
      window.ethereum?.isCoinbaseWallet ||
      window.ethereum?.isFrame ||
      window.ethereum?.isTally;

    if (!userAddress || userAddress === "") {
      if (pathName !== "/") {
        router.push("/");
      }
    }
    if (userAddress) {
      setDefaultAccount(userAddress);
    } else {
      setDefaultAccount("");
    }
  }, []);
  
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(result => {
        accountChangedHandler(result[0]);
      })
    }
  }

  const onChainChangedHandler = () => {
    window.location.reload();
  }
  if (typeof window !== "undefined") {
    //@ts-ignore
    if(window.ethereum)window.ethereum.on("accountsChanged", accountChangedHandler);
    //@ts-ignore
    if(window.ethereum)window.ethereum.on("chainChanged", onChainChangedHandler);
  }
  return (
    <div css={styles.header}>
      <div css={styles.topBar}>
        <div css={styles.webName(pathName)}>Verified Document Storage</div>
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
          {defaultAccount !== "" ? <div css={styles.address}>
            <Image src={metamask} alt="" onClick={() => setSignOutVisible(!signoutVisible)} />
            <span onClick={() => setSignOutVisible(!signoutVisible)}>{defaultAccount}</span>
            {signoutVisible && <span css={styles.signoutContainer}>
              <div css={styles.selectOverlay} onClick={()=>setSignOutVisible(false)}></div>
              <div css={styles.signout} onClick={() => {
              setDefaultAccount("");
                sessionStorage.setItem("user_address", "")
                setSignOutVisible(false);
            }}>Sign Out</div></span>}
          </div> : <Button type="link" onClick={connectWalletHandler} style={styles.buttonStyle}>
            Login
          </Button>}
        </div>
      </div>
    </div>
  );
};
export default Header;
