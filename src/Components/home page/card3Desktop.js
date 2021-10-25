import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import promo3 from '../../Assets/promo3.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#fef6e1'

  },
  media: {
    height: 140,
  },
});

export default function Card3() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img src={promo3} className="promo3" alt="promo3" width="145" height="100%"></img> 
          <Typography style={{ fontFamily: 'Montserrat', fontSize: '17px' }}>
            Most Read
          </Typography>
          <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
          What is a Term Insurance Plan
          </Typography>
          <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
          #terminsurance #1croretermplan
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}
