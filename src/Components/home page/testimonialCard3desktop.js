import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 420,
    backgroundColor: '#fef6e1'
  },
  media: {
    height: 180,
 
  },
});

export default function T3Card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'Montserrat', fontSize: '17px' }}>Stories</Typography>
          </Grid>
        </Grid>
        
        <Grid container spacing={1} >
        <Grid item xs={12} sm={12} md={12}>
        <CardMedia
          className={classes.media}
          image="https://www.bridgeindia.org.uk/wp-content/uploads/2019/05/Kamini-Gupta.xa691a87f.jpg"
          title="Contemplative Reptile"
          align="center"
        />
        </Grid>
      </Grid>

      <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
            I was searching for term plan where I got best in Bharti AXA with income + premium in budget. Good Support was given by the associate in guiding and purchasing for the plan.',
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}>
            SANJANA MEHRA
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '12px', textAlign: 'left' }}>
            BANGALORE  | May 12, 2021
            </Typography>
          </Grid>
        </Grid>
 
        </CardContent>
      </CardActionArea>
 
    </Card>
  );
}
