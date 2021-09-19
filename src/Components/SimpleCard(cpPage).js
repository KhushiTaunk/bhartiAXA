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
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Let's get a quick quote for your investment plan
        </Typography>
        
        <Typography variant="body1" component="p">
          You are buying this policy for?
        </Typography>
      </CardContent>
        <SimpleSelect/>

        <Typography variant="body1" component="p">
          Proposed Details
        </Typography>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          (Person who will pay premium for this policy)
        </Typography>

        <BasicTextFieldsFirstName/>
        <BasicTextFieldsLastName/>
        <BasicTextFieldsDOB/>
        <BasicTextFieldsMobileNo/>
        <BasicTextFieldsEmailID/>
        <FormControlLabelPlacement/>

        <SimpleSelectPremiumPaymentTerm/>
        <SimpleSelectPremiumMode/>
        <FormPropsTextFieldsAnnualInvestment/>
        <FormPropsTextFieldsModalPremium/>

        <p>
    
         </p>

        <Typography variant="body1" component="p">
          Please allocate your Premium across different Funds
        </Typography>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          (adding up to 100%)
        </Typography>

        <Typography variant="body2" component="p">
          <br />
          {'Investment Fund'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Grow Money Plus Fund
        </Typography>

        <Typography variant="body2" component="p">
          <br />
          {'Risk-Return Potential'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          High
        </Typography>

        <BasicTextFieldsallocation/>

        <Typography variant="body2" component="p">
          <br />
          {'Investment Fund'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Save 'n' Grow Money Fund
        </Typography>

        <Typography variant="body2" component="p">
          <br />
          {'Risk-Return Potential'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Moderate
        </Typography>

        <BasicTextFieldsallocation/>

        <Typography variant="body2" component="p">
          <br />
          {'Investment Fund'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Safe Money Fund
        </Typography>

        <Typography variant="body2" component="p">
          <br />
          {'Risk-Return Potential'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Low
        </Typography>

        <BasicTextFieldsallocation/>

        <Typography variant="body1" component="p">
          For additional details on the Funds and their past performance details are as of 2015, please click here
        </Typography>

        <CheckboxLabels/>
        <ContainedButtonsCalculate/>

        <Typography className={classes.pos} color="textSecondary">
          ADVT NO: II-Jan-2018-1588
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Disclaimer
        </Typography>

        <Typography variant="body2" component="p">
          Insurance is a contract of utmost good faith and the Life to be Insured/Proposer (If different from Life to be Insured) is required to disclose all material facts to the insurer. All answers to the questions stipulated in this Proposal form are the basic of and are an inseparable part of the policy of insurance. In case of doubt as to whether a fact is material or not, the fact should be disclosed. Please answer all questions. This product brochure is indicative of the terms, conditions, warranties and exceptions contained in the insurance policy bond
        </Typography>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
