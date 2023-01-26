/** @jsxImportSource @emotion/react */
import { ConnectWallet } from "@thirdweb-dev/react";
import { Button, Typography } from "@web3uikit/core";
import { url } from "inspector";
import type { NextPage } from "next";
import { useState } from "react";
import KycHome from "../components/Kyc";
// import styles from "../styles/Home.module.css";
import styles from "../styles/kyc.module.css";
import kyc_Person from "../public/images/person.png";
import arrow from "../public/icons/arrow6.svg";
import Image from "next/image";
import { AtomicApi, Cloud, User } from "@web3uikit/icons";


const Home: NextPage = () => {
    const [showKycFlow,setShowKycFlow]=useState<boolean>(false);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {showKycFlow?  <KycHome />:
            <div style={{width:"100%"}}>  
                <div className={styles.kyc}>
                    <Image src={kyc_Person} alt="kyc person"  priority/>
                    <div style={{width:"50%",margin:"auto"}}>
                        <Typography  variant="h1" color="#FFFFFF" >
                        Verify yourself to store your First document on Blockchain
                        </Typography>

                        <Button style={{marginTop:"40px"}} size="large" theme="colored" color="blue" isFullWidth text="Verify Now" onClick={()=>{setShowKycFlow(true)}} />
                    </div>
                </div>
                <div className={styles.kycSteps}>
                    <Typography variant="h2" color="#FFFFFF" >Steps To Verify Yourself</Typography>
                    <div className ={styles.kycStepData}>
                        <div>
                            <Cloud fontSize='50px'/>
                            <Typography variant="subtitle2" color="#C0C0EE">
                                Upload the Required document
                            </Typography>
                        </div>
                        <Image src={arrow} alt="arrow"/>
                        <div>

                            <User fontSize='50px'/>
                            <Typography variant="subtitle2" color="#C0C0EE">
                                Click A selfie
                            </Typography>
                        </div>
                        <Image src={arrow} alt="arrow"/>
                        <div>
                            <AtomicApi fontSize='50px'/>
                            <Typography variant="subtitle2" color="#C0C0EE">
                                Wait for Approval
                            </Typography>
                        </div>
                    </div>
                   
                </div>
                <div className={styles.footer}>
                        
                </div>
             </div>
        }
      </main>
    </div>
  );
};

export default Home;
