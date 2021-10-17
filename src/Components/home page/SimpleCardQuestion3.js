import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import { Grid } from '@material-ui/core';
import CustomizedDialogs3 from './DialogboxQues3';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#feebe9'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCardQuestion3() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
     <Grid container wrap="nowrap" spacing={2}
             direction="row"
             alignItems="center">
          <Grid item>
          <HelpIcon  style={{color:"#f3725e"}}/>
          </Grid>
      <CardContent>
        <CardActions>
        <Button size="small"><CustomizedDialogs3/></Button>
      </CardActions>
      </CardContent>
      </Grid>
    </Card>
  );
}
