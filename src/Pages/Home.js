import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCard from '../Components/simplecard(LifeInsurancePossibility)';
import TextMobileStepper from '../Components/TrendingNowTextmobilestepper';
import TextMobileStepper1 from '../Components/TestimonialsTextMobileStepper';
import SimpleCardQuestion1 from '../Components/SimpleCardQuestion1';
import SimpleCardQuestion2 from '../Components/SimpleCardQuestion2';
import SimpleCardQuestion3 from '../Components/SimpleCardQuestion3';
import SimpleCardQuestion4 from '../Components/SimpleCardQuestion4';
import ContainedButtons from '../Components/ContainedButton(ReadMore)';
import SimpleDialogDemo from '../Components/DialogBox(CustomizedQuote)';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import MediaCard from '../Components/CardBigQuestionsHomePage';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
        <Grid container spacing={3}>

        <Grid item xs={12} md={12}>
          </Grid>
          
          <Grid item xs={12} md={12}>
          <Typography variant="h6" component="h2">
          Are these your Life's BIG Questions?
          <MediaCard/>
          </Typography>
          </Grid>

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