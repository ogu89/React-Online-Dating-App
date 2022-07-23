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
import { useNavigate, useLocation } from "react-router-dom";

function Header(props) {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();
  const index = MenuData.findIndex(object => {
    return location.pathname.includes(object.link);
  });

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ background: "#063970 " }}>
        <Toolbar>
          <InterestsIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Daing
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography sx={{ml:1}} variant="h5">Dating</Typography>
              <Tabs
                textColor="inherit"
                sx={{ margin: "auto" }}
                value={index}
                onChange={handleChange}
              >
                {MenuData.map((val, key) => {
                  return (
                    <Tab
                      key={key}
                      label={val.title}
                      value={key}
                      onClick={() => {
                        navigate(`${val.link}`);
                      }}
                    />
                  );
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
