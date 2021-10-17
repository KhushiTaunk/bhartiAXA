import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

{/* Text Field Input (Inside folder-SimpleCard(cpPage).js) */}
{/* For entering the First name in calculate premium page */}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export default function BasicTextFieldsFirstName() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="First Name*" variant="outlined" />
    </form>
  );
}
