import { Divider, Drawer, makeStyles } from "@material-ui/core";
import * as React from "react";
import CustomButton from "./components/CustomButton";
import GreenButton from "./components/GreenButton";
import NavBar from "./components/NavBar";
import { Stack} from "@mui/material";
import DesCard from "./components/DesCard";
const drawerWidth = 240;
const useStyles = makeStyles({
  root: {
    position: "absoule",
    zIndex: 1,
  },
  appBar: {
    position: "relative",
    zIndex: 3,
  },
  drawer: {
    position: "relative",
    width: drawerWidth,
    zIndex: 2,
  },
  body: {
    width: drawerWidth,
    position: "relative",
    zIndex: 4,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop: 120,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.appBar}>
        <NavBar />
      </div>
      <Stack direction="row">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <GreenButton />
          <CustomButton name="Dashboard" num={1} />
          <CustomButton name="Menu 1" />
          <CustomButton name="Menu 2" />
          <CustomButton name="Menu 3" />
          <CustomButton name="Menu 4" />
          <Divider />
          <CustomButton name="Menu 1" />
          <CustomButton name="Menu 2" />
          <CustomButton name="Menu 3" />
          <CustomButton name="Menu 4" />
        </Drawer>
        <Stack style={{flexWrap:"wrap", marginTop:20}} justifyContent="space-between" direction="row">
            <DesCard/>
            <DesCard/>
            <DesCard/>
            <DesCard/>
            <DesCard/>
            <DesCard/>
            <DesCard/>
        </Stack>
      </Stack>
    </div>
  );
}
export default App;
