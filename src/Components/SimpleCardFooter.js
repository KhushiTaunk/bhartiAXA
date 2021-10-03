import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BasicButtonGroupCopyrights from './ButtonGroupsFooterCopyrights';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

{/* Simple card (Footer) */}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#00529a'
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

export default function SimpleCardFooter() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} >
      <Container fixed>
        <Grid container spacing={12}>
      <CardContent>

        <Typography variant="h5" component="h2" align= "left" style={{color:"#dde6f1"}}>
        IRDAI Notice on Spurious Calls
        </Typography>
        <Typography variant="body2" component="p" align= "left" style={{color:"#dde6f1"}}>
        BEWARE OF SPURIOUS PHONE CALLS AND FICTIOUS/FRAUDULENT OFFERS
          <br />
          {'IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.'}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom align= "left" style={{color:"#dde6f1"}}>
          Copyrights. All Rights Reserved
        </Typography>
      </CardContent>
      <BasicButtonGroupCopyrights/>
      </Grid>
      </Container>
    </Card>
  );
}
