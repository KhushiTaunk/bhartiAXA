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
import Divider from '@material-ui/core/Divider';


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
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 27,
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: 20,
    marginTop: 10
    
  },
  para: {
    fontFamily: 'SFPro',
    fontWeight: 'normal',
    fontSize: 14,
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: 15,
    marginTop: 15
  },
  pos: {
    marginBottom: 10,
    fontFamily: 'SFPro',
    fontSize: 16,
    marginLeft: '10px',
    marginRight: '10px',
  },
});

export default function SimpleCardcpPage() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>???</span>;

  return (
    <Card className={classes.root}>
      <Container fixed>
        <Grid container spacing={12}>
      <CardContent>
        
      <Grid item xs={12} md={12}> 
        <Typography variant="h5" component="h2" style={{color:"#00529b"}}>
          Let's get a quick quote for your investment plan
        </Typography>
        </Grid>
        
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          You are buying this policy for?
        </Typography>
        </Grid>
      </CardContent>

      <Grid item xs={12} md={12}> 
        {/* SelectPolicyFor */}
        <SimpleSelect/>
         </Grid>

         <Divider variant="inset" component="li" />
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos}>
          Proposed Details
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.para} color="textSecondary" gutterBottom>
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

        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos}>
          Plan Details
        </Typography>
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

         <Divider variant="inset" component="li" />
         <Grid item xs={12} md={12}> 
         <Typography className={classes.pos}>
          Please allocate your Premium across different Funds
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.para} color="textSecondary" gutterBottom>
          (adding up to 100%)
        </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          Grow Money Plus Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos}  style={{color:"#4EB546"}}>
          High
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>
       </Grid>

       <Grid item xs={12} md={4}> 
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          Grow Opportunity Plus Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          High
        </Typography>
        </Grid>
        {/* TextFieldAllocation */}
        <Grid item xs={12} md={12}> 
        <BasicTextFieldsallocation/>
        </Grid>
        </Grid>

       <Grid item xs={12} md={4}> 
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          Build India Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          High
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>
        </Grid>


        <Grid item xs={12} md={4}>        
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          Save 'n' Grow Money Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          Moderate
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>
        </Grid>

        <Grid item xs={12} md={4}> 
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          Steady Money Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          Moderate
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>
        </Grid>

        <Grid item xs={12} md={4}> 
        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Investment Fund'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          Safe Money Fund
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.para}>
          <br />
          {'Risk-Return Potential'}
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} style={{color:"#4EB546"}}>
          Low
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}> 
        {/* TextFieldAllocation */}
        <BasicTextFieldsallocation/>
        </Grid>
        </Grid>


        <Grid item xs={12} md={12}> 
        <Typography className={classes.para} align="left" >
          For additional details on the Funds and their past performance details are as of 2015, please click here
        </Typography>
        </Grid>

        <Grid item xs={12} md={12}> 
        {/* CheckboxCPpage */}
        <CheckboxLabels/>
        </Grid>
        <Grid item xs={12} md={12}> 
        {/* ContainedButtonsCalculate */}
        <ContainedButtonsCalculate/>
        </Grid>

        <Grid item xs={12} md={12}> 
        <Typography className={classes.pos} color="textSecondary">
          ADVT NO: II-Jan-2018-1588
        </Typography>
        </Grid>

        </Grid>

      </Container>
    </Card>
  );
}
