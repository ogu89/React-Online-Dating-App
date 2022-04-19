import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { MenuData } from "./MenuData";
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {MenuData.map((val) => {
            return (
              // <Tab key={key} label={val.title} onClick={() =>{ navigate(`${val.link}`); }}/>
              <ListItemButton
                onClick={() => {
                  setOpenDrawer(false);
                  navigate(`${val.link}`);
                }}
              >
                <ListItemIcon>
                  <ListItemText>{val.title}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
          {/* <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              navigate(`/user`);
            }}
          >
            <ListItemIcon>
              <ListItemText>User List</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              navigate("/message-list");
            }}
          >
            <ListItemIcon>
              <ListItemText>Message</ListItemText>
            </ListItemIcon>
          </ListItemButton> */}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ color: "white", marginLeft: "auto" }}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
