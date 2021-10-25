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
import promo6 from '../../Assets/promo6.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#FFDEE0'
  },
  media: {
    height: 140,
  },
});

export default function Card6() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img src={promo6} className="promo6" alt="promo6" width="143" height="100%"></img> 
          <Typography style={{ fontFamily: 'Montserrat', fontSize: '17px' }}>
            Important Update
          </Typography>
          <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
            Most of our branches are now operational to ensure essential services for our policy holders
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}
