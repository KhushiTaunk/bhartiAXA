import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import SmsIcon from '@material-ui/icons/Sms';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


{/* Basic Button Group (Footer) */}
{/* For adding icons along with names*/}
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

      <ButtonGroup variant="text" color="#00529c" aria-label="text primary button group">
        <Button>
        <CallIcon  style={{color:"#00529b"}}/>
            Call 
        </Button>
        <Button>
            <EmailIcon style={{color:"#00529b"}}/>Email
        </Button>
        <Button>
            <SmsIcon style={{color:"#00529b"}}/>SMS
        </Button>
        <Button>
            <WhatsAppIcon style={{color:"#00529b"}}/>Whatsapp
        </Button>
      </ButtonGroup>
    </div>
  );
}
