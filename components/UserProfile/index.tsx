/** @jsxImportSource @emotion/react */
import * as styles from "./styles";

import ProfileData from "./ProfileData";
import UserDetails from "./UserDetails";

const UserHome = () => {
  return (
    <div css={styles.userHome}>
      <ProfileData />
      <UserDetails />
    </div>
  );
};

export default UserHome;
