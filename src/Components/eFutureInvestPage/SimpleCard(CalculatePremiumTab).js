import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link, Router} from "react-router-dom";

{/* Simple Card (Inside Tabs.js) */}
{/* For adding Simple Card under calculate premium tab in eFutureinvest Page */}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCardCalculatePremium() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>

      <CardActions>
        <Button variant="h6" component="h2">Calculate Your Premium</Button>
      </CardActions>
      <CardContent>
      <Typography size="small" align="left">
        Simply fill in a few of your details and let us help calculate a specific premium rate for you.
      </Typography>
      </CardContent>
    </Card>
  );
}
