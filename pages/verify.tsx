/** @jsxImportSource @emotion/react */

/** @jsxImportSource @emotion/react */
import {Upload } from "@web3uikit/core";
import {Form,Button as AntButton} from "antd";
import type { NextPage } from "next";
import { useEffect, useState, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import UserProfile from "../components/UserProfile";
import Button from "../components/shared/Button";
import { blobToSHA256 } from "file-to-sha256";
import { ContractContextType } from "../components/UserHome/Contract/context";
import { contractContext } from "../components/UserHome/Contract";

const Verify: NextPage = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [uplodedDocument, setUploadedDocument] = useState<any>();

  const { getContract , fetchWalletInfo } = useContext(
    contractContext
  ) as ContractContextType;

  const onFinish = (values: any) => {
    console.log("Details Submitted For Upload:", values);
    verifyDoc(values);
  };

 const verifyDoc = async (values: any) => {
  const sha256 = await blobToSHA256(uplodedDocument);
  console.log("SHA256 of File :=> ", sha256);
  const docDetails = await getContract(sha256);
  console.log(docDetails)
 }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item name="UploadedFile" label="Dragger">
              <Upload
                acceptedFiles="image/jpeg"
                descriptionText="Only .jpeg files are accepted"
                onChange={(file) => {
                  setUploadedDocument(file);
                }}
                theme="withIcon"
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" typeAttribute="submit" onClick={() => {}}>
                Submit
              </Button>
            </Form.Item>
          </Form>

            
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Verify;