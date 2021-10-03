import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleSelect from './SelectPolicyFor';
import BasicTextFieldsFirstName from './TextFieldFirstName';
import BasicTextFieldsLastName from './TextFieldLastName';
import BasicTextFieldsDOB from './TextFieldDOB';
import BasicTextFieldsMobileNo from './TextFieldMobileNo';
import BasicTextFieldsEmailID from './TextFieldEmailID';
import FormControlLabelPlacement from './RadioButtonMaleFemale';
import SimpleSelectPremiumPaymentTerm from './SelectPremiumPaymentTerm';
import SimpleSelectPremiumMode from './SelectPremiumMode';
import FormPropsTextFieldsAnnualInvestment from './selectAnnualInvestment';
import FormPropsTextFieldsModalPremium from './SelectModalPremium';
import BasicTextFieldsallocation from './TextFieldAllocation';
import CheckboxLabels from './CheckboxCPpage';
import ContainedButtonsCalculate from './ContainedButtonsCalculate';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';


{/* Simple Card (CalculatePremiumPage) */}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCardcpPage() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <Container fixed>
        <Grid container spacing={12}>
      <CardContent>
        
      <Grid item xs={12} md={12}> 
        <Typography variant="h5" component="h2">
          Let's get a quick quote for your investment plan
        </Typography>
        </Grid>
        
        <Grid item xs={12} md={12}> 
        <Typography variant="body1" component="p">
          You are buying this policy for?
        </Typography>
        </Grid>
      </CardContent>

      <Grid item xs={12} md={12}> 
        {/* SelectPolicyFor */}
        <SimpleSelect/>
         </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body1" component="p">
          Proposed Details
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          (Person who will pay premium for this policy)
        </Typography>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* TextFieldFirstName */}
        <BasicTextFieldsFirstName/>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* TextFieldLastName */}
        <BasicTextFieldsLastName/>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* TextFieldDOB */}
        <BasicTextFieldsDOB/>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* TextFieldMobileNo */}
        <BasicTextFieldsMobileNo/>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* TextFieldEmailID */}
        <BasicTextFieldsEmailID/>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* RadioButtonMaleFemale */}
        <FormControlLabelPlacement/>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* SelectPremiumPaymentTerm */}
        <SimpleSelectPremiumPaymentTerm/>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* SelectPremiumMode */}
        <SimpleSelectPremiumMode/>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* selectAnnualInvestment */}
        <FormPropsTextFieldsAnnualInvestment/>
        </Grid>

        <Grid item xs={12} md={4}> 
        {/* SelectModalPremium */}
        <FormPropsTextFieldsModalPremium/>
        </Grid>

        <p>
    
         </p>

         <Grid item xs={12} md={12}> 
        <Typography variant="body1" component="p">
          Please allocate your Premium across different Funds
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          (adding up to 100%)
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>


        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          Grow Money Plus Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          High
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          Grow Opportunity Plus Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          High
        </Typography>
        </Grid>
        {/* TextFieldAllocation */}
        <Grid item xs={12} md={12}> 
        <BasicTextFieldsallocation/>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          Build India Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          High
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>
        
        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          Save 'n' Grow Money Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          Moderate
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          Steady Money Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          Moderate
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          Safe Money Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          Low
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography variant="body1" component="p">
          For additional details on the Funds and their past performance details are as of 2015, please click here
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        {/* CheckboxCPpage */}
        <CheckboxLabels/>
        </Grid>
        <Grid item xs={12} md={6}> 
        {/* ContainedButtonsCalculate */}
        <ContainedButtonsCalculate/>
        </Grid>

        <Grid item xs={12} md={6}> 
        <Typography className={classes.pos} color="textSecondary">
          ADVT NO: II-Jan-2018-1588
        </Typography>
        </Grid>
       
        <Typography className={classes.pos} color="textSecondary">
          Disclaimer
        </Typography>
     
        <Grid item xs={12} md={12}> 
        <Typography variant="body2" component="p">
          Insurance is a contract of utmost good faith and the Life to be Insured/Proposer (If different from Life to be Insured) is required to disclose all material facts to the insurer. All answers to the questions stipulated in this Proposal form are the basic of and are an inseparable part of the policy of insurance. In case of doubt as to whether a fact is material or not, the fact should be disclosed. Please answer all questions. This product brochure is indicative of the terms, conditions, warranties and exceptions contained in the insurance policy bond
        </Typography>
        </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
