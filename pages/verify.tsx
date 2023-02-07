/** @jsxImportSource @emotion/react */

/** @jsxImportSource @emotion/react */
import {Upload } from "@web3uikit/core";
import {Form,Button as AntButton, Badge, Drawer} from "antd";
import type { NextPage } from "next";
import { useEffect, useState, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import UserProfile from "../components/UserProfile";
import Image from "next/image";
import linkImage from "../public/icons/external-link.svg";
import Button from "../components/shared/Button";
import { blobToSHA256 } from "file-to-sha256";
import { ContractContextType } from "../components/UserHome/Contract/context";
import { contractContext } from "../components/UserHome/Contract";

const Verify: NextPage = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [uplodedDocument, setUploadedDocument] = useState<any>();
  const [docsFound, setDocsFound] = useState();
  const [showState, setShowState] = useState(false);
  console.log(docsFound);

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
   if (docDetails) {
     setShowState(true);
     setDocsFound(docDetails);
   }
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
            style={{ maxWidth: 600, display: "flex", flexDirection:"column", alignItems: "center" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item style={{width: "100%"}} name="UploadedFile" label="Dragger">
              <Upload
                acceptedFiles="image/jpeg"
                descriptionText="Only .jpeg files are accepted"
                onChange={(file) => {
                  setUploadedDocument(file);
                  setShowState(false);
                }}
                theme="withIcon"
              />
            </Form.Item>
            <Form.Item style={{marginBottom: 12}} wrapperCol={{ span: 12 }}>
              <Button type="primary" typeAttribute="submit" onClick={() => {}}>
                Submit
              </Button>
            </Form.Item>
            <Form.Item style={{whiteSpace: "nowrap"}} wrapperCol={{ span: 12 }}>
              {showState && <>{ docsFound?.[8] ? <>
                <Badge count="FOUND" style={{ backgroundColor: "#52c41a", height: 22 }} />
                <span style={{ marginLeft: 8, cursor: "pointer", textDecoration: "underline", color: "#0096FF" }} onClick={() => setOpenDrawer(true)}>View Details</span>
              </> : <Badge count="NOT FOUND" style={{ backgroundColor: "#FF5733", height: 22 }} />}</>}
            </Form.Item>
          </Form>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#444444", gap: "20px" }}>
              <div style={{textAlign: "center"}}>
                <div style={{ fontSize: "24px", fontWeight: "600" }}>{docsFound?.[3]}</div>
                <div>{docsFound?.[4]}</div>
              </div>
              <div style={{textAlign: "center"}}>
                <div style={{fontWeight: "600"}}>Created At</div>
                <div>{docsFound?.[7]}</div>
              </div>
              <div style={{display: "flex", gap: "16px"}}>
                <div>
                  <div style={{fontWeight: "600"}}>Start Date:</div>
                  <div>{docsFound?.[5]}</div>
                </div>
                <div>
                  <div style={{fontWeight: "600"}}>End Date:</div>
                  <div>{docsFound?.[6]}</div>
                </div>
              </div>
              <div style={{display: "flex", gap: "16px", textAlign: "left", width: "100%", padding: "0 20px"}}>
                <div style={{flex: "1"}}>
                  <div style={{fontWeight: "600"}}>Type:</div>
                  <div>{docsFound?.[1]}</div>
                </div>
                <div style={{flex: "1"}}>
                  <div style={{fontWeight: "600"}}>Category:</div>
                  <div>{docsFound?.[0]}</div>
                </div>
              </div>
              <a href={docsFound?.[8]} target="_blank" rel="noreferrer">
                <div>View IPFS File</div>
              </a>
            </div>
          </Drawer>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Verify;