import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    white: "#FFFFFF",
    black: "#333333",
    gray1: "#718096",
    green1: "#18A558",
    green2: "#008060",
    green3: "#116530",
    gray2: "#F8F9FA",
    pink: "#E1444D",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props),
        fontFamily: "Helvetica, sans-serif",
      },
      html: {
        fontFamily: "Helvetica, sans-serif",
      },
    }),
  },
};
