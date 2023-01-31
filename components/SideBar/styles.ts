import { css } from "@emotion/react";
import { colors, typography } from "../../styles1";
export const sideBar = (expand: boolean) => {
  return css({
    height: "100vh",
    width: "5%",
    maxWidth: "50px",
    minWidth: "30px",
    borderRight: `2px solid ${colors.Zeb_Soild_LightGrey}`,
    textAlign: "center",
    position: "relative",
  });
};

export const iconSpace = css({
  display: "inline-grid",
  marginTop: "26px",
});

export const optionSpace = css({
  display: "inline-grid",
});

export const optionIcon = css({
  fontSize: "18px",
  color: "#000000",
  margin: "30px 0px",
  cursor: "pointer",
});
export const gap = css({
  marginBottom: "80px",
  marginTop: "0px",
});

export const expandMenu = css({
  position: "absolute",
  color: "black",
  left: "calc(110%)",
  top: "150px",
  transition: "0.2s all linear",
});
export const hide = css({
  opacity: 0,
  left: 0,
});

export const selected = css({
  background: colors.Zeb_Background_Grey,
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
});
