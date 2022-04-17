import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InterestsIcon from "@mui/icons-material/Interests";
import DrawerComp from "./Drawercomp";

function Header(props) {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log();
  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ background: "#063970 " }}>
        <Toolbar>
          <InterestsIcon />
          {isMatch ? (
            <>
              <Typography sx={{fontSize: "2rem", paddingLeft: "10%"}}>Shoppe</Typography>
              <DrawerComp /> 
            </>
          ) : (
            <>
              <Typography>Dating App</Typography>
              <Tabs
                textColor="inherit"
                sx={{ margin: "auto" }}
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                <Tab label="UserList" />
                <Tab label="Message" />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
