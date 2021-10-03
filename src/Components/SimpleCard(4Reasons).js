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
{/* Provides 4 reasons to buy the life eFuture invest plan */}
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

export default function SimpleCard4Reasons() {
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
          4 Reasons to Buy
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        <FiberManualRecordSharpIcon fontSize="small" color="action"/>
        An affordable online Investment Plan. Buy the plan at a convenience of a click. Moreover, as this is an online plan, there are no commissions payable and hence the policy charges are lower.
        </Typography>
        </Grid>

        <Typography variant="body2" component="p" align="left">
        <FiberManualRecordSharpIcon fontSize="small" color="action"/>
         Choose between two premium payment terms - Single Pay or a limited premium payment term of 5 years while accruing benefits for 10 along with the flexibility of partial withdrawals. You can stay invested in the funds for an extended period of 5 years after Maturity. You can also withdraw money from your Policy Fund Value any time after the completion of five policy years.
        </Typography>

        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        <FiberManualRecordSharpIcon fontSize="small" color="action"/>
        Zero allocation charges (other charges as applicable). Since there is no Premium allocation charge, 100% of Premiums paid will be allocated to the funds chosen by you. Other charges levied as applicable.
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
        <Typography variant="body2" component="p" align="left">
        <FiberManualRecordSharpIcon fontSize="small" color="action"/>
        Receive Tax benefits on the Premiums paid and benefits received. This is one of the best tax saving investment plans available. They are subject to change as per change in Tax laws from time to time.
        </Typography>
        </Grid>
      </CardContent>
      </Grid>
      </Container>
    </Card>
  );
}
