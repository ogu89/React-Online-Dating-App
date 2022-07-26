import {
  Avatar,
  Box,
  Button,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  TableCell,
  Card,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function UserDetail() {
  // const users = useSelector((state) => state.users);
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          alt="Remy Sharp"
          src={location.state.imgUrl}
          sx={{ width: 250, height: 250 }}
        />
        <Typography variant="h2">{location.state.name}</Typography>
        <Typography variant="h5">{location.state.email}</Typography>
        <Button
          onClick={() => {
            navigate(`/user/${location.state.id}/chat`, { state: user.id });
          }}
        >
          Message
        </Button>
      </Box>
        <TableContainer component={Card} sx={{ margin: "auto", width: 700}}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Gender
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {user.gender}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Age
                </TableCell>
                <TableCell align="right">{user.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Country
                </TableCell>
                <TableCell align="right">{user.country}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  State
                </TableCell>
                <TableCell align="right">{user.state}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  City
                </TableCell>
                <TableCell align="right">{user.city}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}

export default UserDetail;
