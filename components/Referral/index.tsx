/** @jsxImportSource @emotion/react */
import React from "react";
import { Badge, Table } from "@web3uikit/core";
import { mixins } from "../../styles1";
import Button from "../shared/Button";
import * as styles from "./styles";
import { MoreOutlined } from "@ant-design/icons";

const Referral: React.FC = () => {
  return <div>
    <div css={styles.heading}>
      REFERRAL LIST
    </div>
    <Table
      tableBackgroundColor="#F5F5F5"
      customTableBorder="border-top:1px"
      headerBgColor="#FFFFFF"
      columnsConfig="50px  2fr 1fr 1fr 1fr 1fr"
      header={[
        "Sr.",
        "Name",
        "Status",
        "Updated On",
        "Updated On",
        "Actions",
      ]}
      alignCellItems="center"
      data={[
        [
          <div key={1}>1</div>,
          <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
          <Badge state="success" text="APPROVED" key={3} />,
          "09/02/2021 10:00 PM",
          "09/02/2021 10:00 PM",
          <div css={mixins.flexJustifiedBetween} key={4}>
            <Button type="link" onClick={() => {}}>
              View
            </Button>
            <MoreOutlined />
          </div>,
        ],
        [
          <div key={1}>1</div>,
          <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
          <Badge state="success" text="APPROVED" key={3} />,
          "09/02/2021 10:00 PM",
          "09/02/2021 10:00 PM",
          <div css={mixins.flexJustifiedBetween} key={4}>
            <Button type="link" onClick={() => {}}>
              View
            </Button>
            <MoreOutlined />
          </div>,
        ],
        [
          <div key={1}>1</div>,
          <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
          <Badge state="success" text="APPROVED" key={3} />,
          "09/02/2021 10:00 PM",
          "09/02/2021 10:00 PM",
          <div css={mixins.flexJustifiedBetween} key={4}>
            <Button type="link" onClick={() => {}}>
              View
            </Button>
            <MoreOutlined />
          </div>,
        ],
        [
          <div key={1}>1</div>,
          <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
          <Badge state="success" text="APPROVED" key={3} />,
          "09/02/2021 10:00 PM",
          "09/02/2021 10:00 PM",
          <div css={mixins.flexJustifiedBetween} key={4}>
            <Button type="link" onClick={() => {}}>
              View
            </Button>
            <MoreOutlined />
          </div>,
        ],
        [
          <div key={1}>1</div>,
          <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
          <Badge state="success" text="APPROVED" key={3} />,
          "09/02/2021 10:00 PM",
          "09/02/2021 10:00 PM",
          <div css={mixins.flexJustifiedBetween} key={4}>
            <Button type="link" onClick={() => {}}>
              View
            </Button>
            <MoreOutlined />
          </div>,
        ],
        [
          <div key={1}>1</div>,
          <p key={2}>sdcscscscscdscscscdscddscscdscscdscscsd.....</p>,
          <Badge state="success" text="APPROVED" key={3} />,
          "09/02/2021 10:00 PM",
          "09/02/2021 10:00 PM",
          <div css={mixins.flexJustifiedBetween} key={4}>
            <Button type="link" onClick={() => {}}>
              View
            </Button>
            <MoreOutlined />
          </div>,
        ],
      ]}
      maxPages={3}
      onPageNumberChanged={function noRefCheck() {}}
      onRowClick={function noRefCheck() {}}
      pageSize={4}
    />
  </div>;
}

export default Referral;