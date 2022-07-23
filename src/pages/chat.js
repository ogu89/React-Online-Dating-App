import {
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
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
    // height: "80vh",
    height: "77vh",
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
  const sideAlign = (isMe) => {
    return isMe === true ? "right" : "left";
  };

  const chatContent =
    itemArray === undefined
      ? null
      : itemArray.map((item, i) => (
          <ListItem key={i}>
            <Grid container>
              <Grid item xs={12}>
                <ListItemText
                  align={sideAlign(item.isMe)}
                  primary={item.text}
                ></ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  align={sideAlign(item.isMe)}
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
        <Container>
          <List className={classes.messageArea}>{chatContent}</List>
        </Container>
        <Divider />
        <Grid container spacing={1}  sx={{pt: 3, mx:3}} >
          <Grid item md={11} xs={9} sx={{p: 2}}>
            <TextField
              onChange={handleMessageChange}
              onKeyPress={handleEnterKey}
              // id="outlined-basic-email"
              value={message}
              label="Type Something"
              fullWidth
            />
          </Grid>
          <Grid item md={1} xs={3} >
            <Fab size="small" color="primary" aria-label="add" sx={{mt:1 }}>
              <SendIcon onClick={sendMessage} />
            </Fab>
          </Grid>
        </Grid>
    </>
  );
}

export default Chat;
