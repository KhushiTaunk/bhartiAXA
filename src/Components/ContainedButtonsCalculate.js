import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

{/* Contained Button (Inside SimpleCard(cpPage).js) */}
{/* To enable calculating of quite quote for premium plan */}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtonsCalculate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
 
      <Button variant="contained" color="primary">
        Calculate
      </Button>
     
    </div>
  );
}
