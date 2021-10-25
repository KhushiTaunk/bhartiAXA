import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCard from '../Components/home page/simplecard(LifeInsurancePossibility)';
import TextMobileStepper from '../Components/home page/TrendingNowTextmobilestepper';
import TextMobileStepper1 from '../Components/home page/TestimonialsTextMobileStepper';
import SimpleCardQuestion1 from '../Components/home page/SimpleCardQuestion1';
import SimpleCardQuestion2 from '../Components/home page/SimpleCardQuestion2';
import SimpleCardQuestion3 from '../Components/home page/SimpleCardQuestion3';
import SimpleCardQuestion4 from '../Components/home page/SimpleCardQuestion4';
import ContainedButtons from '../Components/home page/ContainedButton(ReadMore)';
import SimpleDialogDemo from '../Components/home page/DialogBox(CustomizedQuote)';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Questionimage from '../Assets/Questionimage.png';
import { Hidden } from '@material-ui/core';
import Card1 from '../Components/home page/card1Desktop';
import Card2 from '../Components/home page/card2Desktop';
import Card3 from '../Components/home page/card3Desktop';
import Card4 from '../Components/home page/card4Desktop';
import Card5 from '../Components/home page/card5Desktop';
import Card6 from '../Components/home page/card6Desktop';
import T1Card from '../Components/home page/TestimonialCard1Desktop';
import T2Card from '../Components/home page/testimonialCard2Desktop';
import T3Card from '../Components/home page/testimonialCard3desktop';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
        <Grid container spacing={3}>

        <Grid item xs={12} md={12}>
          </Grid>
          
          <Grid item xs={12} md={12}>
          <Typography variant="h5" component="h2" >
          Are these your Life's BIG Questions?
          </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <img src={Questionimage} className="Questionimage" alt="Questionimage" width="340" height="100%"></img>
          </Grid>

          <Hidden only={['xs', 'sm', 'md']}>
          <Grid item xs={12} md={12}>
          {/* Folder-simplecard(LifeInsurancePossibility) */}
          <SimpleCard/>
          </Grid>

          <Grid item xs={12} md={12}>
          <Typography variant="h6" component="h2">
          Trending Now!
          </Typography>
          </Grid>
          
          <Grid item xs={12} md={2}>
          {/* Folder-TrendingNowTextmobilestepper */}
          <Card1/>
          </Grid>
          <Grid item xs={12} md={2}>
          {/* Folder-TrendingNowTextmobilestepper */}
          <Card2/>
          </Grid>
          <Grid item xs={12} md={2}>
          {/* Folder-TrendingNowTextmobilestepper */}
          <Card3/>
          </Grid>
          <Grid item xs={12} md={2}>
          {/* Folder-TrendingNowTextmobilestepper */}
          <Card4/>
          </Grid>
          <Grid item xs={12} md={2}>
          {/* Folder-TrendingNowTextmobilestepper */}
          <Card5/>
          </Grid>
          <Grid item xs={12} md={2}>
          {/* Folder-TrendingNowTextmobilestepper */}
          <Card6/>
          </Grid>

          <Grid item xs={12} md={4}>
            <T1Card/>
          </Grid>
          <Grid item xs={12} md={4}>
            <T2Card/>
          </Grid>
          <Grid item xs={12} md={4}>
            <T3Card/>
          </Grid>

          
          </Hidden>


          <Hidden only={['lg']}>
          <Grid item xs={12} md={12}>
          {/* Folder-simplecard(LifeInsurancePossibility) */}
          <SimpleCard/>
          </Grid>

          <Grid item xs={12} md={12}>
          <Typography variant="h6" component="h2">
          Trending Now!
          </Typography>
          </Grid>
          
          <Grid item xs={12} md={12}>
          {/* Folder-TrendingNowTextmobilestepper */}
          <TextMobileStepper/>
          </Grid>

          <Grid item xs={12} md={12}>
          {/* Folder-TestimonialsTextMobileStepper */}
          <TextMobileStepper1/>
          </Grid>
          </Hidden>


          <Grid item xs={12} md={12}>
          <Typography variant="h6" component="h2">
          Answering Your Queries
          </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
          {/* Folder-BackdropQuestion1 */}
          <SimpleCardQuestion1/>
          </Grid>
          <Grid item xs={12} md={12}>
          {/* Folder-BackdropQuestion2 */}
          <SimpleCardQuestion2/>
          </Grid>
          <Grid item xs={12} md={12}>
          {/* Folder-BackdropQuestion3 */}
          <SimpleCardQuestion3/>
          </Grid>
          <Grid item xs={12} md={12}>
          {/* Folder-BackdropQuestion4 */}
          <SimpleCardQuestion4/>
          </Grid>

          <Grid item xs={12} md={12}>
          {/* Folder-ContainedButton(ReadMore) */}
          <ContainedButtons/>
          </Grid>

          <Grid item xs={12} md={12}>
          {/* Folder-DialogBox(CustomizedQuote) */}
          <SimpleDialogDemo/>
          </Grid>
          
          <Grid item xs={12} md={12}>
          </Grid>
          </Grid>
        </Container>
        
    </React.Fragment>
  );
}