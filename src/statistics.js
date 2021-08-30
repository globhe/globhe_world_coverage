import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import data from './data';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    title: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
      marginBottom: "1rem",
    },
    number: {
        fontSize: "2rem",
        marginBottom:"2rem",
    },
    countries: {
        fontSize: "1rem",
    },
    list:{
        listStyleType: "none",
        margin: 0,
        padding: 0,
    }
  }));

const Statistics = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.number}>
                <Typography variant="h6" className={classes.title} color="textSecondary">
                    Number of countries
                </Typography>
                <Typography variant="p" className={classes.number}>
                    {data.length}
                </Typography>
            </div>
            <div>
                <Typography variant="h6" className={classes.title} color="textSecondary">
                    Name of countries
                </Typography>
                <ul className={classes.list}>
                    {data.map((name) => ( 
                        <li>
                            <Typography variant="p" className={classes.countries}>
                                {name.country}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Statistics;
