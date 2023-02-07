import { css } from "@emotion/react";
import { colors, mixins } from "../../../styles1";

export const userDocuments = css({
  width: "100%",
  border: `0.5px solid ${colors.Zeb_Border_Grey}`,
  borderRadius: "30px",
  height: "85vh",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  padding: "25px 40px",
});

export const heading = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
