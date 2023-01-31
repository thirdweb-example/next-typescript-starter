import { colors, utils, typography } from "../../styles1";
import { css } from "@emotion/react";

export const landingContainer = css({
  height: "100vh",
  backgroundImage: `conic-gradient(at 50% 50%,rgba(48, 118, 224, 1) 0deg,rgba(48, 118, 224, 1) 30deg,#E0E0E0 30deg,white 210deg,rgba(48, 118, 224, 1) 210deg)`
})

export const body = css({
  height: "calc(100vh - 72px)",
  display: "flex"
})

export const getStarted = css({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: utils.remConverter(20)
})

export const getStartedButton = css({
  textTransform: "none",
  padding: `${utils.remConverter(8)} ${utils.remConverter(40)}`,
  backgroundColor: "white",
  color: "#444444",
  borderRadius: utils.remConverter(8),
  textDecoration: "underline"
})

export const getStartedText = css({
  fontSize: utils.remConverter(36),
  maxWidth: utils.remConverter(480),
  fontStyle: "italic",
  textAlign: "center"
})

export const icon = css({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img: {
    maxWidth: utils.remConverter(300),
    maxHeight: utils.remConverter(300)
  }
})