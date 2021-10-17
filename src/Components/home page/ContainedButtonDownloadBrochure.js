import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

{/* Contained Button (efutureinvest Page) */}
{/* This button enables downloading of brochure */}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtonsDowloadBrochure() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Grid container spacing={6}>
      <Grid item xs={5} md={6}>
      <Button variant="contained"  style={{ backgroundColor: '#00529C', color: "#FFFFFF" }}>
        Download brochure
      </Button>
      </Grid>
      <Grid item xs={6} md={6}>
      <Button variant="contained"  style={{ backgroundColor: '#00529C', color: "#FFFFFF" }}>
        Policy Bond
      </Button>
     </Grid>
     </Grid>
     <Grid container spacing={12}>
     </Grid>
    </div>
  );
}
