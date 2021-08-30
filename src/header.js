import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    title: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title} color="textSecondary">
                GLOBHE weekly global coverage
            </Typography>
        </div>
    )
}
export default Header;
