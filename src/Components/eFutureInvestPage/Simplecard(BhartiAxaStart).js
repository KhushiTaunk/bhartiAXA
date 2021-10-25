import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContainedButtonsBuyNow from './ContainedButton(BuyNow)';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

{/* Simple Card (efutureinvest page) */}
{/* Tells about the Bharti AXA life eFuture Plans in the start of the page */}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: 'linear-gradient(to bottom, #eff7ff, #ffffff)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 27,
    textAlign: 'left',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: 20,
    marginTop: 20
  },

  para: {
    fontFamily: 'SFPro',
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: 8,
    marginTop: 8
  },
  pos: {
    marginBottom: 8,
    fontFamily: 'SFPro',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: '10px',
    marginRight: '10px',
  },
});

export default function SimpleCardStartBhartiAXA() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <Container fixed>


      <CardContent>
      <Grid container spacing={12}>

        <Grid item xs={12} md={12}>
        <Typography className={classes.title} style={{color:"#212121"}}>
         Bharti AXA Life eFuture Invest
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} align="left" style={{color:"#00529b"}}>
        <b>(UIN:130L063V02)</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} align="left" style={{color:"#00529b"}}>
        <b>(ADVT NO:II-Dec-2019-2017)</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        In this policy, the investment risk in investment portfolio is borne by the policyholder.
        </Typography>
        </Grid>
        <Typography className={classes.para}>
        A unit-linked, online investment plan that offers you both good returns and an added life cover. To get the most of this income tax-saving investment, all you must do is choose between a single premium or a premium payment term of 5 years while you reap the benefits for 10.
        </Typography>
        <Grid item xs={12} md={12}>
          </Grid>
          </Grid>

        <Grid container spacing={12}>  
        <ContainedButtonsBuyNow/>
        </Grid>
      </CardContent>
      </Container>
    </Card>
  );
}
