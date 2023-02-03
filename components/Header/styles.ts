import { css } from "@emotion/react";
import { colors, typography, utils } from "../../styles1";

export const header = css({
  width: "100%",
  height: utils.remConverter(72),
  padding: utils.remConverter(20),
  display: "flex",
  justifyContent: "space-between"
});

export const webName = (path: string)=>css({
  ...typography.B2_20_regular,
  textDecoration: "none",
  color: path==="/"?"" : "#444444"
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

export const address = css({
  position: "relative",
  color: "black",
  display: "flex",
  alignItems: "center"
})
export const signout = css({
  position: "fixed",
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "8px",
  cursor: "pointer",
  zIndex: 99
})

export const signoutContainer = css({
  position: "absolute",
  top: "40px",
})

export const selectOverlay = css({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: "9",
});