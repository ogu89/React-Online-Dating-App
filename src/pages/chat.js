import {
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { setMessages } from "../store/messages";
import { fetchMessage } from "../store/messages";

// import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  // chatSection: {
  //     chatSection: {
  //         width: '100%',
  //         height: '80vh'
  //       },
  // },
  messageArea: {
    height: "80vh",
    overflowY: "auto",
  },
});

function Chat() {
  const messages = useSelector((state) => state.messages.messages);
  const location = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles();
  let [message, setMessage] = useState("");
  // const index = messages.findIndex((x) => x.id === location.state);
  const itemArray = messages[location.state];
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    const timeStamp = new Date();

    let msgObj = {
      isMe: true,
      text: message,
      timeStamp: timeStamp,
    };

    dispatch(setMessages([msgObj, location.state]));
    setMessage("");
    dispatch(fetchMessage([message, location.state]));
  };

  // const chatContent =
  //   index === -1
  //     ? null
  //     : messages[index].chatLog.map((item, i) => (
  //         <ListItem key={i}>
  //           <Grid container>
  //             <Grid item xs={12}>
  //               <ListItemText align="right" primary={item}></ListItemText>
  //             </Grid>
  //             <Grid item xs={12}>
  //               <ListItemText align="right" secondary="10:30"></ListItemText>
  //             </Grid>
  //           </Grid>
  //         </ListItem>
  //       ));
  const chatContent =
    itemArray === undefined
      ? null
      : itemArray.map((item, i) => (
          <ListItem key={i}>
            <Grid container>
              <Grid item xs={12}>
                <ListItemText align="right" primary={item.text}></ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  align="right"
                  secondary={item.timeStamp.toLocaleTimeString()}
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        ));

  //   const listChatMessages = chatMessages.map((chatMessagesDto, index) =>{
  //     <ListItem key={index}>
  //         <ListItemText primary={`${chatMessageDto.user}: ${chatMessageDto.message}`}></ListItemText>
  //     </ListItem>
  //   })

  return (
    <>
      <Paper>
        <Container>
          <List className={classes.messageArea}>
            <ListItem key="20000">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="left"
                    primary="Hey, Iam Good! What about you ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="left" secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            {chatContent}
          </List>
        </Container>
        <Divider />
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={11}>
            <TextField
              onChange={handleMessageChange}
              onKeyPress={handleEnterKey}
              // id="outlined-basic-email"
              value={message}
              label="Type Something"
              fullWidth
            />
          </Grid>
          <Grid item align="right" xs={1}>
            <Fab size="small" color="primary" aria-label="add">
              <SendIcon onClick={sendMessage} />
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Chat;
