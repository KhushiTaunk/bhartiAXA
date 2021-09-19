import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContainedButtonsBuyNow from './ContainedButton(BuyNow)';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export default function SimpleCardStartBhartiAXA() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Bharti AXA Life eFuture Invest
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        (UIN:130L063V02)
        <br />
          {'(ADVT NO:II-Dec-2019-2017)'}
        </Typography>
        <Typography variant="body2" component="p">
        In this policy, the investment risk in investment portfolio is borne by the policyholder.
          <br />
          {'"A unit-linked, online investment plan that offers you both good returns and an added life cover. To get the most of this income tax-saving investment, all you must do is choose between a single premium or a premium payment term of 5 years while you reap the benefits for 10."'}
        </Typography>
        <ContainedButtonsBuyNow/>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
