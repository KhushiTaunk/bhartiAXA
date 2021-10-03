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
        <Typography variant="h5" component="h2" align="left">
          Plan Details
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        How it works?
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        Let’s take a look at this case study
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        35-year-old Aditya purchases our Bharti AXA eFuture Invest and would like to invest in the Grow Money Plus Fund. He chooses a 10-year policy term for a Sum Assured of ₹ 5,00,000. He pays an annual premium of ₹ 50,000 for 5 years.
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        <FiberManualRecordSharpIcon fontSize="small" color="action"/>
          He starts paying ₹ 50,000* annually
        </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
        <Typography variant="body2" component="p" align="left">
        1ST POLICY YEAR
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        <FiberManualRecordSharpIcon fontSize="small" color="action"/>
          He finishes paying annual premiums
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        5TH POLICY YEAR
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        <FiberManualRecordSharpIcon fontSize="small" color="action"/>
        At an assumed 4% rate of return, he receives ₹ 2,59,676 (Fund Value) on maturity
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        At an assumed 8% rate of return, he receives ₹ 3,58,776 (Fund Value) on maturity
        </Typography>
        </Grid>
        <Typography variant="body2" component="p" align="left">
        10TH POLICY YEAR
        </Typography>

        <Grid container spacing={4}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        Disclaimer: # 4% and 8% rates are used only for illustration purposes and are not guaranteed. The values represented with 4% & 8% are not the upper or lower limits of what one can expect from this policy, as it is dependent on number of factors including investment performance 
        </Typography>
        </Grid>
        </Grid>

        <Grid container spacing={2}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.pos} color="textSecondary" align="left">
        Sad Demise
        </Typography>
        </Grid>
        </Grid>
        <Typography variant="body2" component="p" align="left">
        In case of death, his family will receive higher of Sum Assured or Fund Value
        </Typography>

      </CardContent>
      </Grid>
      </Container>
    </Card>
  );
}
