import { css } from "@emotion/react";

export const container = css({
  height: "100vh",
})

export const backgroundImage = css({
  position: "absolute",
  zIndex: "-1",
  width: "100vw",
  minHeight: "100vh"
})

export const header = css({
  display: "flex",
  padding: "10px"
})

export const websiteName = css({
  display: "flex",
  justifyContent: "center",
  flex: 1,
  alignItems: "center",
  gap: "20px",
  fontSize: "32px",
  fontFamily: "arimo"
})

export const loginArea = css({
  padding: "20px"
})

export const loginButton = css({
  backgroundColor: "#2952e3",
  padding: "8px 24px",
  borderRadius: "20px",
  border: "none"
})

export const footer = css({
  display: "flex"
})

export const info = css({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  gap: "40px"
})

export const newsletter = css({
  flex: 1,
  justifyContent: "center"
})