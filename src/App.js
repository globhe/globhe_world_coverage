import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GlobalMap from './GlobalMap';
import { makeStyles } from '@material-ui/core/styles';
import Statistics from "./statistics";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  container:{
    display:"flex",
  },
  map: {
    width: "100%",
    maxWidth: "1600px",
    position: "relative",
    overflow: "hidden",
    height: "100%",
    zIndex: "1",
    [theme.breakpoints.down("800px")]: {
      boxSizing: "border-box",
      transform: "translateX(-10%)",
      top: "7%",
      width: "75%",
    },
    [theme.breakpoints.up("800px")]: {
      top: "7%",
      width: "75%",
    },
  },
}));


const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.globhe.com/">
        GLOBHE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" component="h1" gutterBottom className={classes.title}>
        GLOBHE weekly global coverage
      </Typography>
      <div className={classes.container}>
        <div className={classes.map}>
          <GlobalMap />
        </div>
        <div className={classes.statistics}>
          <Statistics />
        </div>
      </div>
      <Copyright />

    </div>
  );
}

export default App;
