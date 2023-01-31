/** @jsxImportSource @emotion/react */
import { Badge, Tab, Table, TabList, Upload } from "@web3uikit/core";
import { Drawer, Form, Input, DatePicker } from "antd";

import { useEffect, useState } from "react";
import { colors, mixins, typography } from "../../../styles1";
import Button from "../../shared/Button";
import * as styles from "./styles";

const UserDetails = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [uplodedDocument, setUploadedDocument] = useState<
    Blob | null | undefined
  >();
  const onFinish = (values: any) => {
    console.log(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  useEffect(() => {
    console.log(uplodedDocument);
  }, [uplodedDocument]);
  return (
    <div css={styles.userDocuments}>
      <div css={styles.heading}>
        <p css={{ ...typography.H5_20_bold, color: colors.Zeb_Solid_Dark }}>
          Your Documents
        </p>
      </div>

      <TabList
        defaultActiveKey={1}
        onChange={function noRefCheck() {}}
        tabStyle="bar"
      >
        <Tab tabKey={1} tabName={<div style={{color: "blue"}}>PROFILE</div>}>
          <div css={styles.tab1Container}>
            <div css={styles.personal}>
              <div css={styles.header}>
                <div css={styles.header}>PERSONAL DETAILS</div>
                <Button
                  type="primary"
                  onClick={() => {
                    setOpenDrawer(true);
                  }}
                  style={{ borderRadius: "8px" }}
                >
                  Edit
                </Button>
              </div>
              <div css={styles.component}>
                <div style={{flex: 1.2}}>
                  <div css={styles.info}>
                    <div css={styles.infoHead}>Name</div>
                    <div css={styles.infoSubHead}>John</div>
                  </div>
                  <div css={styles.info}>
                    <div css={styles.infoHead}>Email</div>
                    <div css={styles.infoSubHead}>JohnDoe@gmail.com</div>
                  </div>
                  <div css={styles.info}>
                    <div css={styles.infoHead}>Address</div>
                    <div css={styles.infoSubHead}>fedfwejdujkned</div>
                  </div>
                  <div css={styles.info}>
                    <div css={styles.infoHead}>Political Affiliation</div>
                    <div css={styles.infoSubHead}>Yes</div>
                  </div>
                </div>
                <div style={{flex: 1}}>
                  <div css={styles.info}>
                    <div css={styles.infoHead}>Last Name</div>
                    <div css={styles.infoSubHead}>Doe</div>
                  </div>
                  <div css={styles.info}>
                    <div css={styles.infoHead}>Contact</div>
                    <div css={styles.infoSubHead}>+91-9876543210</div>
                  </div>
                </div>
              </div>
            </div>
            <div css={styles.financial}>
              <div css={styles.header}>
                <div css={styles.header}>FINANCIAL DETAILS</div>
                <Button
                  type="primary"
                  onClick={() => {
                    setOpenDrawer(true);
                  }}
                  style={{ borderRadius: "8px" }}
                >
                  Edit
                </Button>
              </div>
                <div css={styles.component}>
                <div style={{flex: 1.2}}>
                  <div css={styles.info}>
                    <div css={styles.infoHead}>Occupation</div>
                    <div css={styles.infoSubHead}>John Doe</div>
                  </div>
                  <div css={styles.info}>
                    <div css={styles.infoHead}>Source of Income</div>
                    <div css={styles.infoSubHead}>JohnDoe@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab tabKey={2} tabName={"REFERRAL"}>
          <div>dawodhf</div>
        </Tab>
        <Tab tabKey={3} tabName={"KYC"}>
          <div>dawodhf</div>
        </Tab>
        <Tab tabKey={4} tabName={"SAVED ADDRESSES"}>
          <div>dawodhf</div>
        </Tab>
      </TabList>
      <Drawer
        open={openDrawer}
        width={"30%"}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
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
          <Form.Item
            label="Name"
            name="Name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="DateRange" label="Contract Validity Date">
            <DatePicker.RangePicker format="string" onChange={(values) => {
              if (values?.length) {
                console.log(values);
              }
            }} />
          </Form.Item>
          <Form.Item label="Type" name="Type">
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="Category">
            <Input />
          </Form.Item>
          <Form.Item name="Description" label="Description">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item name="UploadedFile" label="Dragger">
            <Upload
              acceptedFiles="image/jpeg"
              descriptionText="Only .jpeg files are accepted"
              onChange={(file) => {
                console.log(file);
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
      </Drawer>
    </div>
  );
};

export default UserDetails;
