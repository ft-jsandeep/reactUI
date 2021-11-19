import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardContent } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Pagination } from "@mui/material";
import Search from "./Search";
import userImg from "../UserImg.jpg";
import {
  Chip,
  IconButton,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useIsMountedRef from "../util/asyncSubCancel";
import { Divider } from "@mui/material";
import { Avatar } from "@material-ui/core";
const useStyles = makeStyles({
  chipColor: {
    color: "#196C6C",
  },
  root: {
    backgroundColor: "#fff",
    width: 1180,
    height: "auto",
    marginTop: 20,
    borderRadius: 30,
    padding: 40,
  },
  head: {
    display: "flex",
    alignItems: "center",
    justifyContent: "Space-between",
  },

  bar: {
    padding: "0 0 30px 0",
  },

  avatar: {
    width: 120,
    height: 120,
    marginLeft: 70,
  },
  email: {
    paddingTop: 20,
  },
  search: {
    padding: "30px 0 30px 0",
  },
});

export default function UserData() {
  const isMountedRef = useIsMountedRef();
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (res.data) return res;
        else return null;
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData()
      .then((res) => {
        if (isMountedRef.current) setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.root}>
      <Grid container className={classes.bar}>
        <Grid item md={10}>
          <Typography variant="h4">HR Management</Typography>
        </Grid>
        <Grid item md={2} className={classes.head}>
          <NotificationsNoneIcon />
          <Typography variant="h6" className={classes.head}>
            Nirav Parmar <KeyboardArrowDownIcon />
          </Typography>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container className={classes.search}>
        <Grid item md={12}>
          <Search />
        </Grid>
      </Grid>
      <div>
        <Grid container spacing={2}>
          {users.map((user, ind) => {
            return (
              <Grid item key={ind} md={3}>
                <Card
                  sx={{
                    maxWidth: "auto",
                    maxHeight: "10",
                    textAlign: "center",
                    padding: "10px 0",
                    borderRadius: 12,
                  }}
                >
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    avatar={<Avatar className={classes.avatar} src={userImg} />}
                    padding="0"
                  />
                  <CardContent>
                    <Typography variant="h6">{user.name}</Typography>
                    <Chip label={user.username} className={classes.chipColor} />
                    <Typography variant="body2" className={classes.email}>
                      {user.email}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Grid container className={classes.email}>
        <Grid item md={9}>
          <Typography variant="body2">Showing 1 to 10 of 15 entries</Typography>
        </Grid>
        <Grid item md={3}>
          <Pagination count={5} />
        </Grid>
      </Grid>
    </div>
  );
}
