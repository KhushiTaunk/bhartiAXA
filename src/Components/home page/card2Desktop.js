import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import promo2 from '../../Assets/promo2.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#FFDEE0'
  },
  media: {
    height: 140,
  },
});

export default function Card2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img src={promo2} className="promo2" alt="promo2" width="130" height="100%"></img> 
          <Typography style={{ fontFamily: 'Montserrat', fontSize: '17px' }}>
           Just Launched
          </Typography>
          <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
          Bharti AXA Flexi Term Pro
          </Typography>
          <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
          #protectionplan #oneyearterm
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}

