/** @jsxImportSource @emotion/react */
import * as styles from "./styles";
import UserDocuments from "./UserDocuments";

const UserHome = () => {
  return (
    <div css={styles.userHome}>
      <UserDocuments />
    </div>
  );
};

export default UserHome;
