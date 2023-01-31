/** @jsxImportSource @emotion/react */

import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, UploadFile } from "antd";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import UserProfile from "../components/UserProfile";


const Verify: NextPage = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState<boolean>(false);
    const [uploadedFile,setUploadedFIle] =useState<UploadFile[]>();
    useEffect(()=>{
        //call user api to check if logged in
        //call api for stored document when user is successful

    })
const handleUpload= ()=>{

}
  return (
    <div style={{height:"100vh", background:"#F5F5F5"}}>
       
       
        <div css={{display:"flex"}}>
        <SideBar expand={openSideDrawer} toggleExpand={()=>{setOpenSideDrawer(prev=>!prev)}} selected="verify"/>
        <div css={{width:openSideDrawer? "90%":"95%",justifyContent:"end", transition:"0.2s all ease-in",marginLeft:"auto"}}>
          <Header />
          <Upload
            listType="picture-card"
            // defaultFileList={[...fileList]}
            onChange={(info)=>{
                setUploadedFIle(info.fileList);
            }}
            >
                <Button icon={<UploadOutlined /> }>Upload</Button>
            </Upload>
            <Button onClick={handleUpload}>Verify</Button>
            
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Verify;