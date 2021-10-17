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


{/* Dialog Box (Inside SimpleCardQuestion4.js) */}
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

export default function CustomizedDialogs4() {
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
      What are the benefits of buying life insurance?
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        What are the benefits of buying life insurance?
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Life insurance offers three major benefits.
          </Typography>
          <Typography gutterBottom>
          PROTECTION
          </Typography>
          <Typography gutterBottom>
          Life is full of uncertainties; investing in a life insurance plan provides a safety net. Your insurance provider is liable to pay your beneficiary or nominee the pre-determined death benefit, thus keeping your family protected even in your absence.
          </Typography>
          <Typography gutterBottom>
          LONG TERM SAVING
          </Typography>
          <Typography gutterBottom>
          It is important to consider life insurance if you are seeking to make long-term savings. The suitable product helps you to save systematically and build a corpus for your future; its accumulated amount may be used for your life goals. What’s more, life insurance plans also offer regular pay-outs in the form of annuities, and are therefore, an excellent tool to finance your retirement goals.
          </Typography>
          <Typography gutterBottom>
          INVESTMENT
          </Typography>
          <Typography gutterBottom>
          Unit-Linked Investment Plans (ULIPs) offered by life insurance providers are primarily investment instruments. These market-linked products create wealth. ULIPs offer significant returns on premiums paid towards the insurance policy. Most plans provide considerable returns during maturity, thus making them an attractive investment vehicle.          
          </Typography>
          <Typography gutterBottom>         
          Besides this, life insurance plans offer a host of other benefits, like tax deductions under Section 10, 80C, and 80CCC of the Income Tax Act, 1961 on the premium paid. You may also borrow a loan against your insurance plan if needed.
          </Typography>
          <Typography gutterBottom>
          Life insurance plans provide financial support to you and your family. Buying an insurance policy also inculcates the habit of disciplined savings.
          </Typography>

        </DialogContent>
      
      </Dialog>
    </div>
  );
}