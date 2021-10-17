import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';

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

        <Grid item xs={12} md={4}>
      <Accordion>
        
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className={classes.heading}  style={{color:"#00529b"}}>Popular Links</Typography>

        </AccordionSummary>
        <AccordionDetails>

          <Typography  style={{color:"#00529b"}}>
          <Grid item xs={12} md={12}>
          <Button>
           Premium Payment Options
           </Button>
           </Grid>
           <Grid item xs={12} md={12}>
           <Button>
            Online Insurance Plan
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Term Insurance Calculator
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Customer Login
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Fund Performance
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Be Smart
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Insurance Calculators
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Sitemap
            </Button>
            </Grid>
          </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{color:"#00529b"}}>Most Read</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#00529b"}}>
          <Typography style={{color:"#00529b"}}>
          <Grid item xs={12} md={12}>
          <Button>
           Premium Payment Options
           </Button>
           </Grid>
           <Grid item xs={12} md={12}>
           <Button>
            FAQs
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Glossary
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            What is the Tax Planning and Why you need it?
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            1 Crore Term Insurance
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Demystifying traditional isurance plans
            </Button>
            </Grid>
            <Button>
            How to Get Better Returns on ULIP
            </Button>
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{color:"#00529b"}}>Life Insurance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#00529b"}}>
          <Typography style={{color:"#00529b"}}>
          <Grid item xs={12} md={12}>
          </Grid>
          <Button>
           Term Insurance
           </Button>
           <Grid item xs={12} md={12}>
           <Button>
           Savings Plan
           </Button>
           </Grid>
           <Grid item xs={12} md={12}>
           <Button>
            Investment Plans
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Health Insurance Plans
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Group Plans
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Riders
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Yoddha Plans
            </Button>
            </Grid>
           
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{color:"#00529b"}}>About Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#00529b"}}>
          <Typography style={{color:"#00529b"}}>
          <Grid item xs={12} md={12}>
          </Grid>
          <Button>
           About Bharti
           </Button>
           <Grid item xs={12} md={12}>
           <Button>
            About AXA
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Board of Directors
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Leadership Teams
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Media Center
            </Button>
            </Grid>

          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{color:"#00529b"}}>Customer Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#00529b"}}>
          <Typography style={{color:"#00529b"}}>
          <Grid item xs={12} md={12}>
          </Grid>
          <Button>
           Login
           </Button>
           <Grid item xs={12} md={12}>
           <Button>
            Renew your Policy
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Check Unclaimed Amount
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Download Statements
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Register E-NACH
            </Button>
            </Grid>
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{color:"#00529b"}}>Claim Center</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#00529b"}}>
          <Typography style={{color:"#00529b"}}>
          <Grid item xs={12} md={12}>
          </Grid>
          <Button>
           Know the Claim Process
           </Button>
           <Grid item xs={12} md={12}>
           <Button>
           Track Your Claims
           </Button>
            </Grid>

          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{color:"#00529b"}}>Join Bharti AXA Life</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#00529b"}}>
          <Typography style={{color:"#00529b"}}>
          <Grid item xs={12} md={12}>
          </Grid>
          <Button>
           Careers
           </Button>
           <Grid item xs={12} md={12}>
           <Button>
            For Employees
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Become an Agent
            </Button>
            </Grid>
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{color:"#00529b"}}>Contact Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#00529b"}}>
          <Typography>
          <Grid item xs={12} md={12}>
          </Grid>

          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      <Grid item xs={12} md={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{color:"#00529b"}}>Key Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#00529b"}}>
          <Typography style={{color:"#00529b"}}>
          <Grid item xs={12} md={12}>
          </Grid>
          <Button>
           Insurance Ombudsman
           </Button>
           <Grid item xs={12} md={12}>
           <Button>
           Corporate Agents and Brokers
           </Button>
           </Grid>
           <Grid item xs={12} md={12}>
           <Button>
            Do not call
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Grievance Redressal
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Life Insurance Council
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Withdrawn Products
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Insurance Marketing Firm
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Terms of Usage
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Public Disclosures
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Cookie Policy 
            </Button>
           </Grid>
           <Grid item xs={12} md={12}>
           <Button>
            IRDAI
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Unclaimed Amount
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Fraud Control Policy
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Blacklisted Advisors
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Data Privacy Policy
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Policy for protection of interests of Policyholders
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Nomination and Remuneration Policy
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Related Party Transaction Policy
            </Button>
           </Grid>
           <Grid item xs={12} md={12}>
           <Button>
            Whistlerblower Policy
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Underwriting Philosophy Disability and Mental illness
            </Button>
            </Grid>
            <Grid item xs={12} md={12}>
            <Button>
            Underwriting Philosophy HIV/Aids
            </Button>
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
