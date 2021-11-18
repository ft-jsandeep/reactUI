import React, { useState, useEffect } from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Card, CardContent, Typography } from "@material-ui/core";
import useIsMountedRef from "../util/asyncSubCancel";
import axios from "axios";

export default function Search() {
  const [searchValue, setSearchValue] = React.useState([]);
  const isMountedRef = useIsMountedRef();
  // const classes = useStyles();
  const [searchUsers, setSearchUsers] = useState([]);

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
        if (isMountedRef.current) setSearchUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleOnChange = (text) => {
    if (!text) setSearchValue([]);
    else {
      let matches = searchUsers.filter((searchUser) => {
        const regex = new RegExp(`${text}`, "gi");
        return searchUser.username.match(regex);
      });
      setSearchValue(matches);
    }
  };
  const searchClick = () => {
    console.log("yo");
  };
  return (
    <div>
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item md={5}>
          <Grid
            item
            md={8}
            sx={{
              display: "flex",
              border: "2px solid #dbd9d9",
              borderRadius: 2,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by username"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={(e) => handleOnChange(e.target.value)}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Grid>
          {searchValue &&
            searchValue.map((item, ind) => (
              <Grid item key={ind} md={8}>
                <Card
                  sx={{
                    maxWidth: "auto",
                    maxHeight: "10",
                    textAlign: "center",
                    padding: "10px 0",
                    borderRadius: 12,
                  }}
                >
                  <CardContent>
                    <Typography variant="body2">user: {item.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Grid item md={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ color: "#000" }}>
              All
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="All"
              sx={{ backgroundColor: "#fcf7f7", borderRadius: 5 }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ color: "#000" }}>
              Designer
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Designer"
              sx={{ backgroundColor: "#fcf7f7", borderRadius: 5 }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#196C6C",
              borderRadius: 5,
              padding: "15px 25px",
            }}
          >
            Add Employee
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
