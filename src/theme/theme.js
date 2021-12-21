import { Button, extendTheme, useColorModeValue } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { font } from "./foundations/fonts";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { linkStyles } from "./components/link";
import { drawerStyles } from "./components/drawer";
import { CardComponent } from "./additions/card/Card";
import { CardBodyComponent } from "./additions/card/CardBody";
import { CardHeaderComponent } from "./additions/card/CardHeader";
import { MainPanelComponent } from "./additions/layout/MainPanel";
import { PanelContentComponent } from "./additions/layout/PanelContent";
import { PanelContainerComponent } from "./additions/layout/PanelContainer";
// import { mode } from "@chakra-ui/theme-tools";
// const GREEN = useColorModeValue(
//   globalStyles.colors.green1,
//   globalStyles.colors.green1
// );
// const WHITE = useColorModeValue(
//   globalStyles.colors.white,
//   globalStyles.colors.black
// );
// const BLACK = useColorModeValue(
//   globalStyles.colors.black,
//   globalStyles.colors.white
// );
// const GRAY = useColorModeValue(
//   globalStyles.colors.gray,
//   globalStyles.colors.black
// );
// const BACKGROUND1 = useColorModeValue(
//   globalStyles.colors.green2,
//   globalStyles.colors.green2
// );
// const BACKGROUND2 = useColorModeValue(
//   globalStyles.colors.gray2,
//   globalStyles.colors.black
// );
// const PINK = useColorModeValue(
//   globalStyles.colors.pink,
//   globalStyles.colors.pink
// );
export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles,
  font, // Global styles
  buttonStyles, // Button styles
  badgeStyles, // Badge styles
  linkStyles, // Link styles
  drawerStyles, // Sidebar variant for Chakra's drawer
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent, // Card Header component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent // Panel Container component
  // GREEN,
  // BLACK,
  // GRAY,
  // BACKGROUND1,
  // BACKGROUND2,
  // PINK
);
