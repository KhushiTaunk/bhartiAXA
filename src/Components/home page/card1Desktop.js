import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Promos1 from '../../Assets/Promos1.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#FFECE8'
  },
  media: {
    height: 140,
  },
});

export default function Card1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img src={Promos1} className="Promos1" alt="Promos1" width="113" height="100%"></img>  
          <Typography style={{ fontFamily: 'Montserrat', fontSize: '17px' }}>
            Media Speak
          </Typography>
          <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
          Bharti AXA urges you to choose certainty for the important life goals with our guaranteed solution
          </Typography>
          <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
          #savingsplan #bhartaxasmartplan
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}
