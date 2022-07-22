import { Avatar, Card, Typography, Box, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function MessageList() {
  const messageList = useSelector((state) => state.messages.messages);
  const usersList = useSelector((state) => state.users.users);

  return (
    <>
      <Grid container spacing={3} direction="column" >
        {/* {messageList.map((item) => (
        <p key={item.id}>{item.id}: {item.chatLog[item.chatLog.length-1]}</p>
      ))} */}
        {Object.keys(messageList).map((item, i) => (
          <Grid item key={i} xs={6}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Avatar
                  alt="Remy Sharp"
                  src={usersList[item].picture.large}
                  sx={{ width: 100, height: 100 }}
                ></Avatar>
                <Typography>{usersList[item].name}</Typography>
                <Typography>
                  {messageList[item][messageList[item].length - 1].text}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MessageList;