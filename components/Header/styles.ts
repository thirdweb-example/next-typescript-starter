import { css } from "@emotion/react";
import { colors, typography, utils } from "../../styles1";

export const header = css({
  width: "100%",
  height: utils.remConverter(72),
  padding: utils.remConverter(20),
  display: "flex",
  justifyContent: "space-between"
});

export const webName = css({
  ...typography.B2_20_regular,
  textDecoration: "none"
})

export const topBar = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(30)
})

export const subHeading = css({
  textDecoration: "underline",
  cursor: "pointer"
})

export const buttonStyle = css({
  ...typography.C3_14,
  color: "#444444",
  fontWeight: "800",
  textTransform: "none",
  width: "140px",
  backgroundColor: "white",
  borderRadius: utils.remConverter(8),
  padding: utils.remConverter(4),
  position:"relative"
})

export const loginStatus = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(8)
})

export const loginButton = css({
  backgroundColor: "white",
  position: "absolute",
  top: 0,
  opacity:0,
  color: "black",
  border: "none",
  outline: "none",
  width: "140px !important",
  maxWidth: "140px !important",
  height: "32px !important",
  padding: utils.remConverter(4),
  overflow: "hidden",
  button: {
    width: "140px !important"
  }
})