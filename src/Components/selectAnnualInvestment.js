import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

{/* Form Props Text Field (Inside SimpleCard(cpPage).js) */}
{/* For entering the field annual investment value */}
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export default function FormPropsTextFieldsAnnualInvestment() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      <div>
        <TextField
          required
          id="outlined-required"
          label="Premium Payment Term"
          defaultValue="Rs 0"
          variant="outlined"
        />
        
       
      </div>
    </form>
  );
}
