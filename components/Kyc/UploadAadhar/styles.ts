import { css } from "@emotion/react";

export const heading = css({
  fontSize: "16px",
  lineHeight: "32px",
  display: "flex",
  alignItems: "center",
  fontWeight: 500
})

export const uploadContainer = css({
  width: "45px",
  height: "45px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
  textAlign: "center",
  border: "1px solid #D9D9D9",
  borderRadius: "5px",
  fontSize: "10px",
  input: {
    opacity: 0,
    zIndex: 9,
    position: "absolute",
    top: 0,
    width: "45px",
    height: "45px",
    fontSize: 0,
    cursor: "pointer"
  }
})


export const file = css({
  borderRadius: "8px",
  width: "45px",
  position: "relative"
})

export const notPreview = css({
  height: "45px",
  width: "45px",
  backgroundColor: "#D9D9D9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  marginBottom: "6px"
})

export const fileName = css({
  width: "45px",
  overflow: "auto",
  display: "inline-block",
  whiteSpace: "nowrap"
})

export const buttonContainer = css({
  display: "flex",
  justifyContent: "center",
  gap: "12px"
})

export const crossImg = css({
  position: "absolute",
  top: -8,
  right: -10,
  cursor: "pointer"
})

export const backButton = css({
  backgroundColor: "white",
  color: "black",
  border: "1px solid #d9d9d9"
})

export const container = css({
  display: "flex",
  gap: "20px"
})