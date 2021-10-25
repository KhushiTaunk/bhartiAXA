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
      minWidth: 275,
      backgroundColor: '#bfe5f4'
    },
    media: {
        height: 180,
      },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },

  });
export default function T2Card() {
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
          image="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg"
          title="Contemplative Reptile"
          align="center"
        />
        </Grid>
      </Grid>

      <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
            Website journey was very simple and user friendly, Adviser has advised very nicely in simple manner. Advise to purchase a dual benefit plan (Shinning star)was really good.',
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}>
            ANIL KUMAR
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '12px', textAlign: 'left' }}>
            CHANDIGARH  | May 12, 2021
            </Typography>
          </Grid>
        </Grid>
 
        </CardContent>
      </CardActionArea>
 
    </Card>
  );
}
