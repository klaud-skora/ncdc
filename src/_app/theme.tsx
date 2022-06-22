import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { DeepPartial, Theme, SystemStyleObject } from "@chakra-ui/react";

interface Variants
  extends DeepPartial<Theme["components"]["Button"]["variants"]> {
  pagination: SystemStyleObject;
}

interface ButtonComponent extends DeepPartial<Theme["components"]["Button"]> {
  variants: Variants;
}

const breakpoints = createBreakpoints({
  xs: "25em",
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
  "2xl": "96em",
});

const colors = {
  black: "#000000",
  white: "#ffffff",
  hover: "#646464",
  disabled: "#8e8e8e",
  input: "#989898",
  border: "#e5e5e5",
};

export const textStyles = {
  h1: {
    fontFamily: "Syne",
    fontSize: ["45px"],
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  body: {
    fontSize: ["16px"],
    fontWeight: "normal",
    lineHeight: 1.88,
    letterSpacing: "normal",
  },
  bodyLight: {
    fontSize: ["16px"],
    fontWeight: 300,
    lineHeight: 1.88,
    letterSpacing: "normal",
  },
};

const Button: ButtonComponent = {
  baseStyle: {
    fontWeight: 600,
    fontFamily: "Syne",
    borderRadius: "0",
    minW: "210px",
    minWidth: "210px",
    height: "50px",
    minHeight: "50px",
    padding: "16.5px 84.1px 16.5px 83.9px",
    transitionDuration: "inherit",
    _disabled: {
      opacity: 0.5,
    },
  },
  variants: {
    link: {
      minW: "10px",
      minWidth: "10px",
    },
    outline: {
      color: "currentColor.500",
    },
    ghost: {
      textDecoration: "underline",
    },
    pagination: {
      border: "none",
      w: "24px",
      minWidth: "24px",
      h: "24px",
      minHeight: "24px",
      padding: "20px",
    },
  },
  defaultProps: {
    variant: "solid",
    size: "sm",
  },
};

const theme = extendTheme(
  {
    breakpoints,
    textStyles,
    colors,
    components: {
      Button,
    },
  },
  withDefaultColorScheme({ colorScheme: "dark" })
);

export default theme;
