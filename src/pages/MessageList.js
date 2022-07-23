import { Avatar, Card, Typography, Box, Grid, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function MessageList() {
  const messageList = useSelector((state) => state.messages.messages);
  const usersList = useSelector((state) => state.users.users);

  return (
    <>
      <Grid
        container
        sx={{ px: 3 }}
        spacing={5}
        display="flex"
        direction="column"
      >
        {Object.keys(messageList).map((item, i) => (
          <Grid item key={i}>
            <Paper>
              <Box sx={{ display: "flex", py: 3, px: 2 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={usersList[item].picture.large}
                  sx={{ width: 100, height: 100 }}
                ></Avatar>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h4">{usersList[item].name}</Typography>
                  <Typography variant="p">
                    {messageList[item][messageList[item].length - 1].text}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MessageList;