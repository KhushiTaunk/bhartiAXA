import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

{/* Basic Button Group (Footer) */}
{/* For adding the different copyrights policies*/}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroupCopyrights() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <ButtonGroup variant="text"  style={{color:"#dde6f1"}} aria-label="text primary button group">
        <Button  style={{color:"#dde6f1"}}>Privacy Policy</Button>
        <Button style={{color:"#dde6f1"}}>Terms of Use</Button>
        <Button style={{color:"#dde6f1"}}>Sales Policy</Button>
        <Button style={{color:"#dde6f1"}}>Lead</Button>
      </ButtonGroup>
    </div>
  );
}
