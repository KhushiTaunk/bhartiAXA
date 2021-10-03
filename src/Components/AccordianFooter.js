import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

{/* Simple Accordian (Footer) */}
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
              <Container fixed>
        <Grid container spacing={12}>

        <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={12}>
           Premium Payment Options
           </Grid>
           <Grid item xs={12} md={12}>
            Online Insurance Plan
            </Grid>
            <Grid item xs={12} md={12}>
            Term Insurance Calculator
            </Grid>
            <Grid item xs={12} md={12}>
            Customer Login
            </Grid>
            <Grid item xs={12} md={12}>
            Fund Performance
            </Grid>
            <Grid item xs={12} md={12}>
            Be Smart
            </Grid>
            <Grid item xs={12} md={12}>
            Insurance Calculators
            </Grid>
            <Grid item xs={12} md={12}>
            Sitemap
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={12}>
           Premium Payment Options
           </Grid>
           <Grid item xs={12} md={12}>
            FAQs
            </Grid>
            <Grid item xs={12} md={12}>
            Glossary
            </Grid>
            <Grid item xs={12} md={12}>
            What is the Tax Planning and Why you need it?
            </Grid>
            <Grid item xs={12} md={12}>
            1 Crore Term Insurance
            </Grid>
            <Grid item xs={12} md={12}>
            Demystifying traditional isurance plans
            </Grid>
            How to Get Better Returns on ULIP
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={12}>
          </Grid>
           Term Insurance
           <Grid item xs={12} md={12}>
           Savings Plan
           </Grid>
           <Grid item xs={12} md={12}>
            Investment Plans
            </Grid>
            <Grid item xs={12} md={12}>
            Health Insurance Plans
            </Grid>
            <Grid item xs={12} md={12}>
            Group Plans
            </Grid>
            <Grid item xs={12} md={12}>
            Riders
            </Grid>
            <Grid item xs={12} md={12}>
            Yoddha Plans
            </Grid>
           
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>About Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
          <Grid item xs={12} md={12}>
          </Grid>
           About Bharti
           <Grid item xs={12} md={12}>
            About AXA
            </Grid>
            <Grid item xs={12} md={12}>
            Board of Directors
            </Grid>
            <Grid item xs={12} md={12}>
            Leadership Teams
            </Grid>
            <Grid item xs={12} md={12}>
            Media Center
            </Grid>

          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Customer Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
          <Grid item xs={12} md={12}>
          </Grid>
           Login
           <Grid item xs={12} md={12}>
            Renew your Policy
            </Grid>
            <Grid item xs={12} md={12}>
            Check Unclaimed Amount
            </Grid>
            <Grid item xs={12} md={12}>
            Download Statements
            </Grid>
            <Grid item xs={12} md={12}>
            Register E-NACH
            </Grid>
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={12}>
          </Grid>
           Know the Claim Process
           <Grid item xs={12} md={12}>
           Track Your Claims
            </Grid>

          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={12}>
          </Grid>
           Careers
           <Grid item xs={12} md={12}>
            For Employees
            </Grid>
            <Grid item xs={12} md={12}>
            Become an Agent
            </Grid>
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={12}>
          </Grid>

          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={12}>
          </Grid>
           Insurance Ombudsman
           <Grid item xs={12} md={12}>
           Corporate Agents and Brokers
           </Grid>
           <Grid item xs={12} md={12}>
            Do not call
            </Grid>
            <Grid item xs={12} md={12}>
            Grievance Redressal
            </Grid>
            <Grid item xs={12} md={12}>
            Life Insurance Council
            </Grid>
            <Grid item xs={12} md={12}>
            Withdrawn Products
            </Grid>
            <Grid item xs={12} md={12}>
            Insurance Marketing Firm
            </Grid>
            <Grid item xs={12} md={12}>
            Terms of Usage
            </Grid>
            <Grid item xs={12} md={12}>
            Public Disclosures
            </Grid>
            <Grid item xs={12} md={12}>
            Cookie Policy 
           </Grid>
           <Grid item xs={12} md={12}>
            IRDAI
            </Grid>
            <Grid item xs={12} md={12}>
            Unclaimed Amount
            </Grid>
            <Grid item xs={12} md={12}>
            Fraud Control Policy
            </Grid>
            <Grid item xs={12} md={12}>
            Blacklisted Advisors
            </Grid>
            <Grid item xs={12} md={12}>
            Data Privacy Policy
            </Grid>
            <Grid item xs={12} md={12}>
            Policy for protection of interests of Policyholders
            </Grid>
            <Grid item xs={12} md={12}>
            Nomination and Remuneration Policy
            </Grid>
            <Grid item xs={12} md={12}>
            Related Party Transaction Policy
           </Grid>
           <Grid item xs={12} md={12}>
            Whistlerblower Policy
            </Grid>
            <Grid item xs={12} md={12}>
            Underwriting Philosophy Disability and Mental illness
            </Grid>
            <Grid item xs={12} md={12}>
            Underwriting Philosophy HIV/Aids
            </Grid>

          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      
      </Grid>
      </Container>
    </div>
  );
}
