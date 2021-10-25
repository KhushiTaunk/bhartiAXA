import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';

{/* Simple Card (efutureinvest page) */}
{/* For adding the details about the various plans */}
const useStyles = makeStyles({
  root: {
    minWidth: 325,
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
    marginBottom: 15,
    marginTop: 15
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

export default function SimpleCardPlanDetails() {
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
        <Typography className={classes.title} style={{color:"#212121"}}>
          Plan Details
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left" style={{color:"#00529b"}}>
        <b>How it works?</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} align="left" >
        <b>Let’s take a look at this case study</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        35-year-old Aditya purchases our Bharti AXA eFuture Invest and would like to invest in the Grow Money Plus Fund. He chooses a 10-year policy term for a Sum Assured of ₹ 5,00,000. He pays an annual premium of ₹ 50,000 for 5 years.
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        {'\u2022'} He starts paying <b>₹ 50,000* annually</b>
        </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
        <Typography className={classes.para}>
        <b>1ST POLICY YEAR</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        {'\u2022'}  He <b>finishes</b> paying <b> annual premiums</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        <b>5TH POLICY YEAR</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        {'\u2022'} At an assumed 4% rate of return, he receives <b>₹ 2,59,676 (Fund Value) on maturity</b>
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        At an assumed 8% rate of return, he receives <b>₹ 3,58,776 (Fund Value) on maturity</b>
        </Typography>
        </Grid>
        <Typography className={classes.para}>
        <b>10TH POLICY YEAR</b>
        </Typography>

        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
        <Typography className={classes.para}>
        <b>Disclaimer:</b> # 4% and 8% rates are used only for illustration purposes and are not guaranteed. The values represented with 4% & 8% are not the upper or lower limits of what one can expect from this policy, as it is dependent on number of factors including investment performance 
        </Typography>
        </Grid>
        </Grid>

        <Grid item xs={1}>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos}  style={{color:"#00529b"}} align="left">
        <b>Sad Demise</b>
        </Typography>
        </Grid>

        <Typography className={classes.para}>
        <b>In case of death, his family will receive higher of Sum Assured or Fund Value</b>
        </Typography>

      </CardContent>
      </Grid>
      </Container>
    </Card>
  );
}
