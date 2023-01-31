/** @jsxImportSource @emotion/react */
import { CloudUploadOutlined } from "@ant-design/icons";
import {
  Drawer,
  Form,
  Input,
  DatePicker,
  Tabs,
  Select,
  Typography,
} from "antd";

import { useEffect, useState } from "react";
import { colors, mixins, typography } from "../../../styles1";
import KycHome from "../../Kyc";
import Button from "../../shared/Button";
import * as styles from "./styles";

const UserDetails = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openFinanceDrawer, setOpenFinanceDrawer] = useState<boolean>(false);
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
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `PROFILE`,
            children: (
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
                    <div style={{ flex: 1.2 }}>
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
                    <div style={{ flex: 1 }}>
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
                        setOpenFinanceDrawer(true);
                      }}
                      style={{ borderRadius: "8px" }}
                    >
                      Edit
                    </Button>
                  </div>
                  <div css={styles.component}>
                    <div style={{ flex: 1.2 }}>
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
            ),
          },
          {
            key: "2",
            label: `REFERRAL`,
            children: `Content of Tab Pane 1`,
          },
          {
            key: "3",
            label: `KYC`,
            children: <KycHome />,
          },
          {
            key: "4",
            label: `SAVED ADDRESSES`,
            children: `Content of Tab Pane 1`,
          },
        ]}
        onChange={() => {}}
      />

      <Drawer
        open={openDrawer}
        width={"35%"}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <div css={mixins.textAlignmentCenter}>
            <CloudUploadOutlined css={{ fontSize: "50px" }} />
            <Typography.Title level={3}>Update Used Details</Typography.Title>
          </div>
          <div css={mixins.flexJustifiedBetween}>
            <Form.Item
              label="First Name"
              name="First Name"
              required
              css={{ width: "47%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="Last Name"
              css={{ width: "47%" }}
              required
            >
              <Input />
            </Form.Item>
          </div>
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
          <div css={mixins.flexJustifiedBetween}>
            <Form.Item
              name="Gender"
              label="Gender"
              required
              css={{ width: "35%" }}
            >
              <Select>
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="Date of Birth"
              label="Date of Birth"
              required
              css={{ width: "62%" }}
            >
              <DatePicker css={{ width: "100%" }} />
            </Form.Item>
          </div>
          <div css={mixins.flexJustifiedBetween}>
            <Form.Item
              label="Country"
              name="Country"
              required
              css={{ width: "47%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="State"
              name="State"
              css={{ width: "47%" }}
              required
            >
              <Input />
            </Form.Item>
          </div>
          <Form.Item label="Address Line 1" name="Address Line 1" required>
            <Input />
          </Form.Item>
          <Form.Item label="Address Line 2" name="Address Line 2" required>
            <Input />
          </Form.Item>
          <Form.Item
            label="Political Affiliation"
            name="Political Affiliation"
            required
            css={{ width: "82%" }}
          >
            <Select defaultValue={"No"}>
              <Select.Option value="Yes">Yes</Select.Option>
              <Select.Option value="No">No</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item css={mixins.textAlignmentCenter}>
            <Button
              type="secondary"
              onClick={() => {}}
              style={{ margin: "10px" }}
              size="large"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              typeAttribute="submit"
              onClick={() => {}}
              style={{ margin: "10px" }}
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
      <Drawer
        open={openFinanceDrawer}
        width={"35%"}
        onClose={() => {
          setOpenFinanceDrawer(false);
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <div css={mixins.textAlignmentCenter}>
            <CloudUploadOutlined css={{ fontSize: "50px" }} />
            <Typography.Title level={3}>
              Update Financial Details
            </Typography.Title>
          </div>

          <Form.Item label="Occupation" name="Occupation" required>
            <Input />
          </Form.Item>
          <Form.Item label="Source of Income" name="Source of Income" required>
            <Input />
          </Form.Item>

          <Form.Item css={mixins.textAlignmentCenter}>
            <Button
              type="secondary"
              onClick={() => {}}
              style={{ margin: "10px" }}
              size="large"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              typeAttribute="submit"
              onClick={() => {}}
              style={{ margin: "10px" }}
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default UserDetails;
