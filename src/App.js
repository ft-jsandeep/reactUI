import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Page404 from "./components/Page404";
import UserData from "./components/UserData";

const useStyles = makeStyles({
  "@global": {
    body: {
      backgroundColor: "#196C6C",
    },
  },
});

const App = () => {
  useStyles();
  return (
    <>
      {/* <Router> */}
      <Layout>
        {/* <Switch> */}
        {/* <Route exact path="/reactUI"> */}
        <UserData />
        {/* </Route>
            <Route exact path="/Page404">
              <Page404 />
            </Route>
          </Switch> */}
      </Layout>
      {/* </Router> */}
    </>
  );
};

export default App;
