import { css } from "@emotion/react";
import { colors, typography } from "../../styles1";

export const footer = css({
  ...typography.B5_12_semibold,
  background: colors.Zeb_Solid_Midnight,
  width: "100%",
  color: colors.Zeb_Solid_White,
  alignContent: "center",
  textAlign: "center",
  padding: "15px",
});
