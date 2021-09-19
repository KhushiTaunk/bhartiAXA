import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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
     
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>Privacy Policy</Button>
        <Button>Terms of Use</Button>
        <Button>Sales Policy</Button>
        <Button>Lead</Button>
      </ButtonGroup>
    </div>
  );
}