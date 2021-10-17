import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


{/* Simple paper (Home Page) */}
{/* For writing the headline 'Are these your life's BIG Questions?' */}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} />
        <Typography variant="h6" component="h2">
          Are these your life's BIG QUESTIONS ?
        </Typography>
      
    </div>
  );
}
