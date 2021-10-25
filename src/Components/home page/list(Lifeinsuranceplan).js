import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '130ch',
    backgroundColor: '#dde6f1',
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (

    <List className={classes.root}>
     <Grid item xs={12} md={4}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <VerifiedUserIcon style={{color:"#00529b"}}/>
        </ListItemAvatar>
        <ListItemText
          primary="Protect Life"
          secondary={
            <React.Fragment>

              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
              
              >
                Explore for our term insurance plans
              </Typography>

            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      <Divider variant="inset" component="li" />
      <Grid item xs={12} md={4}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <TrackChangesIcon  style={{color:"#00529b"}}/>
        </ListItemAvatar>
        <ListItemText
          primary="Achieve Goals"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}

              >
                Get guaranteed returns from our savings plan
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <AccountBalanceIcon style={{color:"#00529b"}}/>
        </ListItemAvatar>
        <ListItemText
          primary="Create Wealth"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}

              >
                Choose from our spread of ULIP Plans
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
