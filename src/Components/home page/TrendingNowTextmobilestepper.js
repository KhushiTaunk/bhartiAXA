import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Grid } from '@material-ui/core';
import { Container } from 'react-dom';
import Promos1 from '../../Assets/Promos1.png';
import promo2 from '../../Assets/promo2.png';
import promo3 from '../../Assets/promo3.png';
import promo4 from '../../Assets/promo4.png';
import promo5 from '../../Assets/promo5.png';

{/* Text Mobile Stepper (Home Page) */}
const tutorialSteps = [
  {
    
    label: 'Media Speak',
    imgPath:Promos1,
    text: 'Bharti AXA urges you to choose certainty for the important life goals with our guaranteed solution',
    hashtag: '#savingsplan #bhartaxasmartplan',
  },
  {
    label: 'Just Launched',
    imgPath:promo2,
    text: 'Bharti AXA Flexi Term Pro',
    hashtag: '#protectionplan #oneyearterm',
  },
  {
    label: 'We won',
    imgPath:promo3,
    text: 'What is a Term Insurance Plan',
    hashtag: '#terminsurance #1croretermplan',
  },
  {
    label: 'Most Read',
    imgPath:promo4,

    text: 'Bharti AXA Life - 2 products "Guaranteed Income Pro" and "Flexi Term Pro" have won Product of the Year, 2021',
  },
  {
    label: '99.05%',
    imgPath:promo5,
    text: 'That is our claims settlement ratio. Last year we paid out 99.05% of death claims on our life insurance policies',
    hashtag: '#claimsettlementratio',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    // display: 'inline-block',
    backgroundColor: '#FFECE8',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(0),
    backgroundColor: theme.palette.background.default,
    backgroundColor: '#FFECE8',
  },
  body: {
    fontSize: 20,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    backgroundColor: '#FFECE8',
  },
  step: {
    backgroundColor: '#FFECE8',
  },
  img: {
    height: 220,
    width: '100%',
    overflow: 'hidden',
    display: 'block',
    // width: '100%',
  },
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header} >
        <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{ fontFamily: 'Montserrat', fontSize: '17px' }}>{tutorialSteps[activeStep].label}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid container wrap="nowrap" spacing={2}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={6} sm={6} md={6}>
          <Paper square elevation={0} className={classes.body} >
            <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
              {tutorialSteps[activeStep].text}
            </Typography>
            <Typography style={{ fontFamily: 'SFPro', fontSize: '13px', textAlign: 'left' }}>
              {tutorialSteps[activeStep].hashtag}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
          />
        </Grid>
      </Grid>

      <MobileStepper className={classes.step}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}

        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {/* Next */}
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            {/* Back */}
          </Button>
        }
      />
    </div>
  );
}