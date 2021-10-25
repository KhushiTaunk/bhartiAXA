import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import promo5 from '../../Assets/promo5.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#FFECE8'
  },
  media: {
    height: 140,
  },
});

export default function Card5() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <img src={promo5} className="promo5" alt="promo5" width="148" height="100%"></img> 
        <CardContent>
          <Typography style={{ fontFamily: 'Montserrat', fontSize: '17px' }}>
           99.05%
          </Typography>
          <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
          That is our claims settlement ratio. Last year we paid out 99.05% of death claims on our life insurance policies
          </Typography>
        </CardContent>
      </CardActionArea>
 
    </Card>
  );
}

