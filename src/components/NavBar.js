/*
#################################################################
#                             _`				#
#                          _ooOoo_				#
#                         o8888888o				#
#                         88" . "88				#
#                         (| -_- |)				#
#                         O\  =  /O				#
#                      ____/`---'\____				#
#                    .'  \\|     |//  `.			#
#                   /  \\|||  :  |||//  \			#
#                  /  _||||| -:- |||||_  \			#
#                  |   | \\\  -  /'| |   |			#
#                  | \_|  `\`---'//  |_/ |			#
#                  \  .-\__ `-. -'__/-.  /			#
#                ___`. .'  /--.--\  `. .'___			#
#             ."" '<  `.___\_<|>_/___.' _> \"".			#
#            | | :  `- \`. ;`. _/; .'/ /  .' ; |		#
#            \  \ `-.   \_\_`. _.'_/_/  -' _.' /		#
#=============`-.`___`-.__\ \___  /__.-'_.'_.-'=================#
                           `=--=-'                    



          _.-/`)
         // / / )
      .=// / / / )
     //`/ / / / /
    // /     ` /
   ||         /
    \\       /
     ))    .'
    //    /
         /
*/
import { AppBar, Avatar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import SearchBarCmp from "./SearchBar";
import NotificationsIcon from "@mui/icons-material/Notifications";

const navBarStyles = {
  root: {
    minHeight: 30,
    background: "white",
  },
};
const fontStyles = {
  root: {
    color: "green",
    fontWeight: "bold",
  },
};
function NavBar() {
  return (
    <AppBar style={navBarStyles.root} position="static" height="80">
      <Toolbar style={{ justifyContent: "space-between" }} variant="dense">
        <Typography
          style={fontStyles.root}
          variant="h4"
          color="inherit"
          component="div"
        >
          SiID
        </Typography>
        <SearchBarCmp />
        <Stack direction="row" spacing={2}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar/>
          <Stack>
            <Typography
              style={{ color: "black" }}
              variant="h6"
              color="inherit"
              component="div">
              Nguyen Khoa
            </Typography>
            <Typography style={{ color: "black" }} variant="h7" color="inherit" component="div">
              nguyenkhoa@gmail.com
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
