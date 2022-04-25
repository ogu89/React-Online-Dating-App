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
import React from "react";
import { makeStyles } from "@mui/styles";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

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
  const count = useSelector((state) => state.count);
  const location = useLocation();
  const classes = useStyles();

  //   const [chatMessages, setChatMeesages] = useState([]);

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
          <ListItem key="1">
            <Grid container>
              <Grid item xs={12}>
                <ListItemText
                  align="right"
                  primary="Hey man, What's up ?"
                ></ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText align="right" secondary="09:30"></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem key="2">
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
          <ListItem key="3">
            <Grid container>
              <Grid item xs={12}>
                <ListItemText
                  align="right"
                  primary="Cool. i am good, let's catch up!"
                ></ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText align="right" secondary="10:30"></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Container>
      <Divider />
      <Grid container style={{ padding: "20px" }}>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
          />
        </Grid>
        <Grid item align="right" xs={1}>
          <Fab color="primary" aria-label="add">
            <SendIcon />
          </Fab>
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}

export default Chat;
