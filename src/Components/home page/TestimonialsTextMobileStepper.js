import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';

{/* Text Mobile Stepper (Home Page) */}
{/* To add stepper for the testimonials of bharti AXA users */}
const tutorialSteps = [
  {
    label: 'Stories',
    imgPath:
      'https://videohive.img.customer.envatousercontent.com/files/9801a0d0-a4ec-4dff-9037-33d9fb90db8b/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=bebdaff2fc7523a2b9589bce0cd6c00d',
      Quote: 'Website journey was very simple and user friendly, Adviser has advised very nicely in simple manner. Advise to purchase a dual benefit plan (Shinning star)was good.',
      Name: 'SUNAINA MEHTA',
      LocationandTime: 'BANGALORE  | May 12, 2021',
    },
  {
    label: 'Stories',
    imgPath:
      'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg',
      Quote: 'I was searching for term plan where I got best in Bharti AXA with income + premium in budget. Good Support was given by the associate in guiding and purchasing for the plan.',
      Name: 'ANIL KUMAR',
      LocationandTime: 'CHANDIGARH  | May 12, 2021',
  },
  {
    label: 'Stories',
    imgPath:
      'https://www.bridgeindia.org.uk/wp-content/uploads/2019/05/Kamini-Gupta.xa691a87f.jpg',
      Quote: 'Website journey was very simple and user friendly, Adviser has advised very nicely in simple manner. Advise to purchase a dual benefit plan (Shinning star)was good.',
      Name: 'SANJANA MEHRA',
      LocationandTime: 'BANGALORE  | May 12, 2021',
  },
  {
    label: 'Stories',
    imgPath:
      'https://asiasociety.org/sites/default/files/styles/1200w/public/2019-10/Parag%20Khanna_Photo1%20-%20PC%20Parag%20Khanna%201200x800.png',
      Quote: 'I was worried for my family protection so I have decided to purchase Term Plan, I connected with a Bharti AXA associate, got the best experience, purchased the plan.',
      Name: 'YOGESH SHARMA',
      LocationandTime: 'DELHI | MAY 12, 2021',
    },
  {
    label: 'Stories',
    imgPath:
      'https://en-media.thebetterindia.com/uploads/2018/06/Dhivya-Suryadevara-Khushi-Financial-Services-FB.jpg?compress=true&quality=90&w=360&dpr=2.6',
      Quote: 'I was searching for term plan where I got best in Bharti AXA with income + premium in budget. Good Support was given by the associate in guiding and purchasing for the plan.',
      Name: 'DHWANI SALIAN',
      LocationandTime: 'CHANDIGARH  | May 12, 2021',
    },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    // display: 'inline-block',
    backgroundColor: '#FFDEE0',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(0),
    backgroundColor: theme.palette.background.default,
    backgroundColor: '#FFDEE0',
  },
  body: {
    fontSize: 10,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    backgroundColor: '#FFDEE0',
  },
  step: {
    backgroundColor: '#FFDEE0',
  },
  img: {
    height: 150,
    maxWidth: 190,
    overflow: 'hidden',
    display: 'center',
    width: '100%',
  },
}));

export default function TextMobileStepper1() {
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
      <Paper square elevation={0} className={classes.header}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{fontSize: '17px' }}>{tutorialSteps[activeStep].label}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={1} >
        <Grid item xs={12} sm={12} md={12}>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
          />
        </Grid>
      </Grid>

      <Paper square elevation={0} className={classes.body}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{fontSize: '13px', textAlign: 'left', marginBottom: '8px' }}>
              {tutorialSteps[activeStep].Quote}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}>
              {tutorialSteps[activeStep].Name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={{fontSize: '12px', textAlign: 'left' }}>
              {tutorialSteps[activeStep].LocationandTime}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

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
    </div >
  );
}