import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import promo4 from '../../Assets/promo4.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#DFF2FA'
  },
  media: {
    height: 140,
  },
});

export default function Card4() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <img src={promo4} className="promo4" alt="promo4" width="146" height="100%"></img> 
        <CardContent>
          <Typography style={{ fontFamily: 'Montserrat', fontSize: '17px' }}>
           We Won!
          </Typography>
          <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
          Bharti AXA Life - 2 products "Guaranteed Income Pro" and "Flexi Term Pro" have won Product of the Year, 2021
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}

