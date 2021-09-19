import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Popular Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Premium Payment Options
           <br />
          {'Online Insurance Plan'}
          <br />
          {'Term Insurance Calculator'}
          <br />
          {'Customer Login'}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Most Read</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
           Premium Payment Options
           <br />
          {'Online Insurance Plan'}
          <br />
          {'Term Insurance Calculator'}
          <br />
          {'Customer Login'}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Life Insurance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
           Premium Payment Options
           <br />
          {'Online Insurance Plan'}
          <br />
          {'Term Insurance Calculator'}
          <br />
          {'Customer Login'}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Customer Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
           Premium Payment Options
           <br />
          {'Online Insurance Plan'}
          <br />
          {'Term Insurance Calculator'}
          <br />
          {'Customer Login'}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>About Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
           Premium Payment Options
           <br />
          {'Online Insurance Plan'}
          <br />
          {'Term Insurance Calculator'}
          <br />
          {'Customer Login'}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Claim Center</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
           Premium Payment Options
           <br />
          {'Online Insurance Plan'}
          <br />
          {'Term Insurance Calculator'}
          <br />
          {'Customer Login'}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Join Bharti AXA Life</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
           Premium Payment Options
           <br />
          {'Online Insurance Plan'}
          <br />
          {'Term Insurance Calculator'}
          <br />
          {'Customer Login'}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Contact Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
           Premium Payment Options
           <br />
          {'Online Insurance Plan'}
          <br />
          {'Term Insurance Calculator'}
          <br />
          {'Customer Login'}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Key Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
           Premium Payment Options
           <br />
          {'Online Insurance Plan'}
          <br />
          {'Term Insurance Calculator'}
          <br />
          {'Customer Login'}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
