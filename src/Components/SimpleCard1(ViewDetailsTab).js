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

export default function SimpleCardviewDetails1() {
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
        An Affordable Online Plan
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        Buy the plan at a convenience of a click. Moreover, as this is an online plan, there are no commissions payable and hence the policy charges such as Mortality charges, Policy administration charges, Fund management charges are lower.
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        Zero Allocation Charges
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        With this plan, you are not charged any premium allocation charge. *In this policy there are no allocation charges, however, other charges such as mortality, fund management, etc. are applicable.
        </Typography>       
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        Fixed Policy Term
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        The Policy Term under this product is of 10 years.
        </Typography>       
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        Limited Premium Payment
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        In case of death, his family will receive higher of Sum Assured or Fund Value
        </Typography>    
        </Grid>    
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
          Single pay
        </Typography>    
        </Grid>    
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
          5 years
        </Typography>    
        </Grid>   
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary" align="left">
          Death Benefit
        </Typography>
        </Grid>   
        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p" align="left">
        In case of unfortunate event of death of the Life Insured during the Policy Term, the following benefits will be payable to the Claimant, subject to Policy being in force. The death benefit will be the higher of
        </Typography>
        </Grid> 
        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p" align="left">
          Sum Assured (net of partial withdrawals, made 12 months prior to death of the Life Insured)
        </Typography>
        </Grid> 
        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p" align="left">
          105% of all premiums paid as on date of death. (excluding underwriting extra)
        </Typography>
        </Grid> 
        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p" align="left">
          Policy Fund Value as on the date of death of the Life Insured.
        </Typography>
        </Grid>   
        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p" align="left">
        Sum Assured will be calculated as per table below:
        </Typography>
        </Grid> 
      </CardContent>
      </Grid>
      </Container>
    </Card>
  );
}
