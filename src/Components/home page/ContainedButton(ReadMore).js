import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

{/* Contained Button (Home Page) */}
{/* For adding button called 'Read More' in the FAQ section */}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button variant="contained"  style={{ backgroundColor: '#00529C', color: "#FFFFFF" }}>
        Read More
      </Button>
      
    </div>
  );
}
