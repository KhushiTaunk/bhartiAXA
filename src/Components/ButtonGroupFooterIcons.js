import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import SmsIcon from '@material-ui/icons/Sms';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroupIcons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonGroup variant="text" color="Primary" aria-label="text primary button group">
        <Button>
        <CallIcon/>
            Call 
        </Button>
        <Button>
            <EmailIcon/>Email
        </Button>
        <Button>
            <SmsIcon/>SMS
        </Button>
        <Button>
            <WhatsAppIcon/>Whatsapp
        </Button>
      </ButtonGroup>
    </div>
  );
}
