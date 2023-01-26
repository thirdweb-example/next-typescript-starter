/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import UserHome from "../components/UserHome";

const Home: NextPage = () => {
    const [showKycFlow,setShowKycFlow]=useState<boolean>(false);
    useEffect(()=>{
        //call user api to check if logged in
        //call api for stored document when user is successful

    })
  return (
    <div style={{height:"100vh", background:"#F5F5F5"}}>
       
       
        <div css={{display:"flex"}}>
        <SideBar />
        <div css={{width:"95%"}}>
            <Header />
            <UserHome />
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Home;
