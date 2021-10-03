import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


{/* Form Props Text Field (Inside SimpleCard(cpPage).js) */}
{/* For entering the modal premium value */}
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export default function FormPropsTextFieldsModalPremium() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          required
          id="outlined-required"
          label="Modal Premium"
          defaultValue="Rs 0"
          variant="outlined"
        />
        
      </div>
    </form>
  );
}
