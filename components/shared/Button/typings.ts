import { Interpolation, Theme } from "@emotion/react";

export type ButtonSize = "small" | "medium" | "large" | "full-width";

export type ButtonTypeAttribute = "button" | "reset" | "submit";

export type ButtonType =
  | "link"
  | "primary"
  | "secondary"
  | "special"
  | "tertiary"
  | "tab";

export interface ButtonProps {
  type: ButtonType;
  size?: ButtonSize; // default is medium
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: Interpolation<Theme>;
  typeAttribute?: ButtonTypeAttribute;
  children: string;
}
