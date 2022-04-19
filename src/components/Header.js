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
import { MenuData } from "./MenuData";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

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
                {MenuData.map((val, key) => {
                    return(<Tab key={key} label={val.title} onClick={() =>{ navigate(`${val.link}`); }}/>)
                    
                })}
                {/* <Tab label="UserList" />
                <Tab label="Message" /> */}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
