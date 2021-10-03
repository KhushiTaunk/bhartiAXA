import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

{/* Prominent App Bar (Header) */}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 45,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <Grid container spacing={4}>
        <Grid item xs={3}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer" >         
            <MenuIcon />
          </IconButton>
          </Grid>

          <Grid item xs={3}>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          </Grid>

          <Grid item xs={3}>  
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <AccountCircleIcon/>
          </IconButton>
          </Grid>

        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
