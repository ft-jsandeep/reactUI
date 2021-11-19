import React from "react";
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from "@material-ui/core";
import pic from "../Capture.png";
// import { useHistory, useLocation } from "react-router";

const drawerWidth = 240;
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#196C6C",
    color: "white",
    border: "none",
    textAlign: "center",
    padding: "30px 0 0 0",
  },
  root: {
    display: "flex",
    backgroundColor: "#196C6C",
    paddingBottom: 20,
  },
  color: {
    color: "#fff",
  },
  divider: {
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "white",
    color: "#196C6C",
    borderRadius: "30px 0 0 30px",
  },
});

export default function Layout({ children }) {
  const classes = useStyles();
  // const history = useHistory();
  // const location = useLocation();

  const menuItems = [
    {
      text: "My Info.",
      icon: "",
      path: "/Page404",
    },
    {
      text: "Blogs",
      icon: "",
      path: "/Page404",
    },
    {
      text: "General Info.",
      icon: ">",
      path: "/Page404",
    },
    {
      text: "Team",
      icon: ">",
      path: "/Page404",
    },
    {
      text: "HR Management",
      icon: "",
      path: "/reactUI",
    },
  ];
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Box
            component="img"
            sx={{
              height: 30,
              width: 130,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              marginBottom: 30,
            }}
            alt="The house from the offer."
            src={pic}
          />

          <Divider variant="middle" className={classes.divider} />
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                // onClick={() => history.push(item.path)}
                // className={
                //   location.pathname === item.path ? classes.active : null
                // }
              >
                <ListItemText primary={item.text} />
                <ListItemIcon className={classes.color}>
                  {item.icon}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div>{children}</div>
    </div>
  );
}
