/** @jsxImportSource @emotion/react */
import { Badge, Tab, Table, TabList, Upload } from "@web3uikit/core";
import { Drawer, Form, Input, DatePicker } from "antd";

import { useEffect, useState } from "react";
import { colors, mixins, typography } from "../../../styles1";
import Button from "../../shared/Button";
import * as styles from "./styles";

const UserDocuments = () => {
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
        <Button
          type="primary"
          onClick={() => {
            setOpenDrawer(true);
          }}
          style={{ height: "fit-content" }}
        >
          Upload +
        </Button>
      </div>

      <TabList
        defaultActiveKey={1}
        onChange={function noRefCheck() {}}
        tabStyle="bar"
      >
        <Tab tabKey={1} tabName={"ALL"}>
          <Table
            tableBackgroundColor="#F5F5F5"
            customTableBorder="border-top:1px"
            headerBgColor="#FFFFFF"
            columnsConfig="50px  2fr 1fr 1fr 1fr 1fr 1fr"
            header={[
              "Sr.",
              "Name",
              "Total Participants",
              "Status",
              "Created On",
              "Updated On",
              "Actions",
            ]}
            alignCellItems="center"
            data={[
              [
                <div key={1}>1</div>,
                <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
                10,
                <Badge state="success" text="SIGNED" key={3} />,
                "09/02/2021 10:00 PM",
                "09/02/2021 10:00 PM",
                <div css={mixins.flexJustifiedCenter} key={4}>
                  <Button type="link" onClick={() => {}}>
                    View
                  </Button>
                  <Button type="link" onClick={() => {}}>
                    MORE
                  </Button>
                </div>,
              ],
              [
                <div key={1}>1</div>,
                <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
                10,
                <Badge state="success" text="SIGNED" key={3} />,
                "09/02/2021 10:00 PM",
                "09/02/2021 10:00 PM",
                <div css={mixins.flexJustifiedCenter} key={4}>
                  <Button type="link" onClick={() => {}}>
                    View
                  </Button>
                  <Button type="link" onClick={() => {}}>
                    MORE
                  </Button>
                </div>,
              ],
              [
                <div key={1}>1</div>,
                <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
                10,
                <Badge state="success" text="SIGNED" key={3} />,
                "09/02/2021 10:00 PM",
                "09/02/2021 10:00 PM",
                <div css={mixins.flexJustifiedCenter} key={4}>
                  <Button type="link" onClick={() => {}}>
                    View
                  </Button>
                  <Button type="link" onClick={() => {}}>
                    MORE
                  </Button>
                </div>,
              ],
              [
                <div key={1}>1</div>,
                <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
                10,
                <Badge state="success" text="SIGNED" key={3} />,
                "09/02/2021 10:00 PM",
                "09/02/2021 10:00 PM",
                <div css={mixins.flexJustifiedCenter} key={4}>
                  <Button type="link" onClick={() => {}}>
                    View
                  </Button>
                  <Button type="link" onClick={() => {}}>
                    MORE
                  </Button>
                </div>,
              ],
              [
                <div key={1}>1</div>,
                <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
                10,
                <Badge state="success" text="SIGNED" key={3} />,
                "09/02/2021 10:00 PM",
                "09/02/2021 10:00 PM",
                <div css={mixins.flexJustifiedCenter} key={4}>
                  <Button type="link" onClick={() => {}}>
                    View
                  </Button>
                  <Button type="link" onClick={() => {}}>
                    MORE
                  </Button>
                </div>,
              ],
              [
                <div key={1}>1</div>,
                <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
                10,
                <Badge state="success" text="SIGNED" key={3} />,
                "09/02/2021 10:00 PM",
                "09/02/2021 10:00 PM",
                <div css={mixins.flexJustifiedCenter} key={4}>
                  <Button type="link" onClick={() => {}}>
                    View
                  </Button>
                  <Button type="link" onClick={() => {}}>
                    MORE
                  </Button>
                </div>,
              ],
            ]}
            maxPages={3}
            onPageNumberChanged={function noRefCheck() {}}
            onRowClick={function noRefCheck() {}}
            pageSize={7}
          />
        </Tab>
        <Tab tabKey={2} tabName={"SIGNED"}>
          <div>dawodhf</div>
        </Tab>
        <Tab tabKey={3} tabName={"PENDING"}>
          <div>dawodhf</div>
        </Tab>
        <Tab tabKey={4} tabName={"REJECTED"}>
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
            <DatePicker.RangePicker />
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

export default UserDocuments;
