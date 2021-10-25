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
    marginTop: 10
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
    marginBottom: 12,
    marginTop: 12
  },
});

export default function SimpleCardviewDetails1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>

        <Grid container spacing={12}>
      <CardContent>
      <Grid item xs={12} md={12}>
       </Grid>
       <Grid item xs={12} md={12}>
        <Typography className={classes.pos} style={{color:"#00529b"}}>
        <b>An Affordable Online Plan</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        Buy the plan at a convenience of a click. Moreover, as this is an online plan, there are no commissions payable and hence the policy charges such as Mortality charges, Policy administration charges, Fund management charges are lower.
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos}  style={{color:"#00529b"}}>
        <b>Zero Allocation Charges</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        With this plan, you are not charged any premium allocation charge. *In this policy there are no allocation charges, however, other charges such as mortality, fund management, etc. are applicable.
        </Typography>       
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} style={{color:"#00529b"}}>
        <b>Fixed Policy Term</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        The Policy Term under this product is of 10 years.
        </Typography>       
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos}  style={{color:"#00529b"}}>
        <b>Limited Premium Payment</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        In case of death, his family will receive higher of Sum Assured or Fund Value
        </Typography>    
        </Grid>    
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        {'\u2022'} Single pay
        </Typography>    
        </Grid>    
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        {'\u2022'} 5 years
        </Typography>    
        </Grid>   
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#00529b"}}>
        <b> Death Benefit</b>
        </Typography>
        </Grid>   
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
        In case of unfortunate event of death of the Life Insured during the Policy Term, the following benefits will be payable to the Claimant, subject to Policy being in force. The death benefit will be the higher of
        </Typography>
        </Grid> 
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
        {'\u2022'} Sum Assured (net of partial withdrawals, made 12 months prior to death of the Life Insured)
        </Typography>
        </Grid> 
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
        {'\u2022'} 105% of all premiums paid as on date of death. (excluding underwriting extra)
        </Typography>
        </Grid> 
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
        {'\u2022'}  Policy Fund Value as on the date of death of the Life Insured.
        </Typography>
        </Grid>   
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
        Sum Assured will be calculated as per table below:
        </Typography>
        </Grid> 
      </CardContent>
      </Grid>

    </Card>
  );
}
