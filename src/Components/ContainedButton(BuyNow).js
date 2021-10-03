import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link, Router} from "react-router-dom";


{/* Contained Button (Inside SimpleCard(BhartiAxaStart).js) */}
{/* For adding contained button under simple card in eFutureinvest Page */}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtonsBuyNow() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={process.env.PUBLIC_URL + '/CalculatePremiumPage'}>

     <Button variant="contained" color="primary">
        Buy Now
      </Button>
      </Link>

      
    </div>
  );
}
