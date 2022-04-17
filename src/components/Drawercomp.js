import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return(
        <React.Fragment>
            <Drawer open={openDrawer}
            onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItemButton onClick={() => setOpenDrawer}>
                        <ListItemIcon>
                            <ListItemText>User List</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton onClick={() => setOpenDrawer}>
                        <ListItemIcon>
                            <ListItemText>Message</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={()=> setOpenDrawer(!openDrawer)} sx={{color:"white", marginLeft: 'auto'}}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp