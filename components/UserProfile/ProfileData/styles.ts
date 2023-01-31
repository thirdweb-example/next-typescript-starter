import { css } from "@emotion/react";
import { colors } from "../../../styles1";

export const profileData = css({
  // border: `0.5px solid ${colors.Zeb_Border_Grey}`,
  // borderRadius: "8px",
  // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  textAlign: "center",
});

export const profileDetails = css({
  border: `0.5px solid ${colors.Zeb_Border_Grey}`,
  borderRadius: "30px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  padding: "20px",
  marginBottom: "30px",
  color: "black",
});

export const profileStatusData = css({
  display: "flex",
  justifyContent: "space-between",
  minWidth: "200px",
  alignItems: "center",
});

export const accountData = css({
  textAlign: "left",
});
