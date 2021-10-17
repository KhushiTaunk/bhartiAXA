import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


{/* Dialog Box (Inside SimpleCardQuestion1.js) */}
{/* For adding dialog answer box whenever you click on any question in the simple card */}
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs1() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      What is the claim settlement ratio and the reasons for claim repudiation?
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          What is the claim settlement ratio and the reasons for claim repudiation?
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Claim Settlement ratio is the ratio of Claims Settled against claims reported during the year. For detailed information, please refer http://www.bharti-axalife.com/public_disclosures.aspx (Form 39 & 40); some of the reasons for claim repudiation are as listed below
          </Typography>
          <Typography gutterBottom>
          {'\u2022'}Disclosure of medical adversities
          </Typography>
          <Typography gutterBottom>
          {'\u2022'}Incorrect disclosure of Age
          </Typography>
          <Typography gutterBottom>
          {'\u2022'}Incorrect disclosure of occupation/income
          </Typography>
          <Typography gutterBottom>
          {'\u2022'}Non –disclosure of previous insurance
          </Typography>
          <Typography gutterBottom>
          {'\u2022'}Fraud
          </Typography>
          <Typography gutterBottom>
          Please note: The above-mentioned list is only indicative and not an exhaustive list.
          </Typography>
        

        </DialogContent>

      </Dialog>
    </div>
  );
}
