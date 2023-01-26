/** @jsxImportSource @emotion/react */
import * as styles from "./styles";

import ProfileData from "./ProfileData";
import UserDocuments from "./UserDocuments";

const UserHome = () => {
  return (
    <div css={styles.userHome}>
      <ProfileData />
      <UserDocuments />
    </div>
  );
};

export default UserHome;
