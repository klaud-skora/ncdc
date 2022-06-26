import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { DeepPartial, Theme, SystemStyleObject } from "@chakra-ui/react";

interface Variants
  extends DeepPartial<Theme["components"]["Button"]["variants"]> {
  active: SystemStyleObject;
}

interface ButtonComponent extends DeepPartial<Theme["components"]["Button"]> {
  variants: Variants;
}

const colors = {
  main: "#A34E51",
  black: "#000000",
  white: "#ffffff",
  disabled: "#8e8e8e",
};

const Button: ButtonComponent = {
  baseStyle: {
    fontWeight: 600,
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
    active: {
      color: "currentColor.500",
      backgroundColor: "main",
      borderColor: "main",
      borderWidth: "1px",
    },
    solid: {
      color: "black",
    },
    outline: {
      minWidth: "100px",
      color: "main",
      _disabled: {
        color: "disabled",
      },
    },
  },
  defaultProps: {
    variant: "solid",
    size: "sm",
  },
};

const theme = extendTheme(
  {
    colors,
    components: {
      Button,
    },
  },
  withDefaultColorScheme({ colorScheme: "dark" })
);

export default theme;
