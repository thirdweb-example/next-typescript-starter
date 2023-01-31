/** @jsxImportSource @emotion/react */
import * as styles from "./styles";
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Steps,
  Typography,
} from "antd";
import { colors, mixins } from "../../styles1";

export enum KycPage {
  KycForm,
  UploadDocuments,
  VerificationResult,
}
const KycHome: React.FC = () => {
  const [kycPage, setKycPage] = useState<KycPage>(KycPage.KycForm);
  const [step, setStep] = useState<number>(0);
  const description = "This is a description.";

  const onFinish = (values: any) => {
    console.log(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const stepperContent = useCallback(() => {
    switch (step) {
      case 0:
        return (
          <div css={styles.kycStep}>
            <Typography.Title
              level={5}
              style={{ color: colors.Zeb_Solid_Midnight, marginBottom: "10px" }}
            >
              Personal Details
            </Typography.Title>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
              size="large"
            >
              <div css={{ width: "70%" }}>
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
              </div>
              <Form.Item
                style={{
                  // marginTop: "100px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Button
                  type="primary"
                  onClick={() => {
                    setStep((prev) => prev + 1);
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
        break;
      case 1:
        return <div>TBD</div>;
        break;
      case 2:
        return <div>TBD</div>;
        break;
      case 3:
        return <div>DONE</div>;
        break;
    }
  }, [step]);
  return (
    <div css={styles.addKyc}>
      <Typography.Title level={4}>Add KYC</Typography.Title>
      <Steps
        css={{ width: "100%" }}
        current={step}
        items={[
          {
            title: "Personal Details",
          },
          {
            title: "Upload Aadhar",
          },
          {
            title: "Add Selfie",
          },
          {
            title: "Done",
          },
        ]}
      />
      <div css={{ marginTop: "20px" }}>{stepperContent()}</div>
    </div>
  );
};

export default KycHome;
