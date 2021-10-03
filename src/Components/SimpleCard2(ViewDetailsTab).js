import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

{/* Simple Card (Inside Tabs.js) */}
{/* For adding Simple Card under view details tab in eFutureinvest Page */}
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

export default function SimpleCard2ViewDtails() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
       <Container fixed>
        <Grid container spacing={12}>
      <CardContent>
      <Grid item xs={12} md={12}>
       </Grid>
       <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        Fund Options
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        You have option to invest through multiple fund options available with us and can choose from an array of 6 funds.
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        Extendable Investment Period (Settlement Period)
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        Take advantage of staying invested in the funds for an extended period of 5 years after maturity.
        </Typography>       
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        Liquidity Benefit with Partial Withdrawal
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        You have the option to avail the Partial withdrawal facility from your policy fund value, after your policy has completed 5 Policy years provided all premium are paid to date.
        </Typography>       
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        Tax benefits
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        For premiums paid as well as benefits received, as per the prevailing Tax laws.
        <br />
        {'$Tax benefits are as per the Income Tax Act, 1961, and are subject to any amendments made thereto from time to time.'}
        </Typography>    
        </Grid>
      </CardContent>
      </Grid>
      </Container>
    </Card>
  );
}
