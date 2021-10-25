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
      backgroundColor: '#FFDEE0'
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
  

export default function T1Card() {
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
          image="https://videohive.img.customer.envatousercontent.com/files/9801a0d0-a4ec-4dff-9037-33d9fb90db8b/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=bebdaff2fc7523a2b9589bce0cd6c00d"
          title="Contemplative Reptile"
          align="center"
        />
        </Grid>
      </Grid>

      <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
            I was searching for term plan where I got best in Bharti AXA with income + premium in budget. Good Support was given by the associate in guiding and purchasing for the plan.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}>
              SUNAINA MEHTA
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '12px', textAlign: 'left' }}>
              BANGLORE | MAY 12, 2021
            </Typography>
          </Grid>
        </Grid>
 
        </CardContent>
      </CardActionArea>
 
    </Card>
  );
}

