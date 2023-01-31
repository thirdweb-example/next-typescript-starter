/** @jsxImportSource @emotion/react */
import { Badge, Illustration } from "@web3uikit/core";
import { typography, utils } from "../../../styles1";
import * as styles from "./styles";

const ProfileData = () => {
  return (
    <div css={styles.profileData}>
      <div css={styles.profileDetails}>
        <Illustration logo="looking" width={70} height={70} />
        {/* <img src="image.jpg" alt="profilePhoto" /> if backend provides aprofile photo */}
        <p css={{ ...typography.B3_16_regular, color: "black" }}>John Doe</p>
        <div css={styles.profileStatusData}>
          <p css={{ ...typography.B5_12_regular, color: "black" }}>
            KYC Status
          </p>
          <Badge text="VERIFIED" state="success" textVariant="caption10" />
        </div>
        <div css={styles.profileStatusData}>
          <p css={{ ...typography.B5_12_regular, color: "black" }}>
            Phone Number
          </p>
          <Badge text="VERIFIED" state="success" textVariant="caption10" />
        </div>
        <div css={styles.profileStatusData}>
          <p css={{ ...typography.B5_12_regular, color: "black" }}>Wallet ID</p>
          <Badge text="VERIFIED" state="success" textVariant="caption10" />
        </div>
      </div>
      <div css={styles.profileDetails}>
        <p>Account Manager</p>
        <div css={styles.accountData}>
          <div>
            <div css={{ ...typography.B3_16_semibold }}>3GB</div>
            <div css={{ ...typography.B5_12_regular }}>Available Storage</div>
          </div>
          <div css={utils.mt(8)}>
            <div css={{ ...typography.B3_16_semibold }}>3GB</div>
            <div css={{ ...typography.B5_12_regular }}>Used Storage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
