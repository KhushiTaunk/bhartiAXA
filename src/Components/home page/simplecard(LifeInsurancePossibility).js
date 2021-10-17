import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlignItemsList from './list(Lifeinsuranceplan)';

{/* Simple Card (Home page) */}
{/* Provides life insurance plan for every possibilty */}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#dde6f1'
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

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography variant="h6" component="h2">
        Life Insurance Plan For Every Possibility
        </Typography>
        <AlignItemsList/>

      </CardContent>
    </Card>
  );
}
