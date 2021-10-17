import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(190),
      height: theme.spacing(31),
      backgroundColor: '#e8e8e8'
    },
  },
}));

export default function SimplePaperDisclaimer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
       
      <Typography className={classes.pos} color="textSecondary">
          Disclaimer
        </Typography>
     
        <Typography variant="body2" component="p">
          Insurance is a contract of utmost good faith and the Life to be Insured/Proposer (If different from Life to be Insured) is required to disclose all material facts to the insurer. All answers to the questions stipulated in this Proposal form are the basic of and are an inseparable part of the policy of insurance. In case of doubt as to whether a fact is material or not, the fact should be disclosed. Please answer all questions. This product brochure is indicative of the terms, conditions, warranties and exceptions contained in the insurance policy bond
        </Typography>
        </Paper>
    </div>
  );
}
