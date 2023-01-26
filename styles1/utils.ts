import { css } from "@emotion/react";

const utils = {
  remConverter: (value: number) => {
    return `${value / 16}rem`;
  },
  widthPercentage: (value: number) => {
    return css({
      width: `${value}%`,
    });
  },
  heightPercentage: (value: number) => {
    return css({
      height: `${value}%`,
    });
  },
  mr: (value: number) => {
    return css({
      marginRight: utils.remConverter(value),
    });
  },
  ml: (value: number) => {
    return css({
      marginLeft: utils.remConverter(value),
    });
  },
  mt: (value: number) => {
    return css({
      marginTop: utils.remConverter(value),
    });
  },
  mb: (value: number) => {
    return css({
      marginBottom: utils.remConverter(value),
    });
  },
};

export default utils;
