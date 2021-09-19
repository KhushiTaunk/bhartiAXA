import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

{/* Text Field Input (Inside folder-SimpleCard(cpPage) */}
{/* For entering the Date of Birth in calculate premium page */}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export default function BasicTextFieldsDOB() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Date of Birth*" variant="outlined" />
    </form>
  );
}
