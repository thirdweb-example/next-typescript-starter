/** @jsxImportSource @emotion/react */
import { ENSAvatar } from "@web3uikit/web3";
import { utils } from "../../styles1";
import Button from "../shared/Button";
import * as styles from "./styles";

const Header = () => {
  return (
    <div css={styles.header}>
      <p>Web Docs</p>
      <Button
        type="secondary"
        onClick={() => {}}
        size="small"
        style={{ height: "fit-content", width: "7%" }}
      >
        Login
      </Button>
    </div>
  );
};
export default Header;
