import { css } from "@emotion/react";
import colors from "./colors";

const mixins = {
  flexJustifiedStart: css({
    display: "flex",
    justifyContent: "flex-start",
  }),
  flexJustifiedBetween: css({
    display: "flex",
    justifyContent: "space-between",
  }),
  flexJustifiedCenter: css({
    display: "flex",
    justifyContent: "center",
  }),
  flexJustifiedAround: css({
    display: "flex",
    justifyContent: "space-around",
  }),
  flexJustifiedEnd: css({
    display: "flex",
    justifyContent: "flex-end",
  }),
  flexAlignCenter: css({
    display: "flex",
    alignItems: "center",
  }),
  flexAlignStart: css({
    display: "flex",
    alignItems: "flex-start",
  }),
  flexAlignEnd: css({
    display: "flex",
    alignItems: "flex-end",
  }),
  flexWrap: css({
    flexWrap: "wrap",
  }),
  flexNoWrap: css({
    flexWrap: "nowrap",
  }),
  flexColumn: css({
    display: "flex",
    flexDirection: "column",
  }),
  textSuccess: css({
    color: colors.Zeb_Solid_Green,
  }),
  textError: css({
    color: colors.Zeb_Solid_Red,
  }),
  bgSuccess: css({
    background: colors.Zeb_Solid_Green,
  }),
  bgError: css({
    background: colors.Zeb_Solid_Red,
  }),
  textFaded: css({
    color: colors.Zeb_Solid_Light_Blue,
  }),
  textCapitalize: css({
    textTransform: "capitalize",
  }),
  textUppercase: css({
    textTransform: "uppercase",
  }),
  textAlignmentCenter: css({
    textAlign: "center",
  }),
  textAlignmentLeft: css({
    textAlign: "left",
  }),
  textAlignmentRight: css({
    textAlign: "right",
  }),
  textAlignmentStart: css({
    textAlign: "start",
  }),
  textAlignmentEnd: css({
    textAlign: "end",
  }),
  cursorPointer: css({
    cursor: "pointer",
  }),
  cursorNA: css({
    cursor: "not-allowed",
  }),
};
export default mixins;
