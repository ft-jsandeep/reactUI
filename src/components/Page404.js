import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    width: 1180,
    height: 600,
    marginTop: 40,
    borderRadius: 30,
    padding: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Page404() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3">404 Page not found</Typography>
    </div>
  );
}
