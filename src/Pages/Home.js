import React from 'react';
import Container from '@material-ui/core/Container';
import SimplePaper from '../Components/paper(BigQuestions)';
import SimpleCard from '../Components/simplecard(LifeInsurancePossibility)';
import TextMobileStepper from '../Components/TrendingNowTextmobilestepper';
import TextMobileStepper1 from '../Components/TestimonialsTextMobileStepper';
import SimplePaperQueries from '../Components/Paper(AnsweringQueries)';
import SimpleBackdrop1 from '../Components/BackdropQuestion1';
import SimpleBackdrop2 from '../Components/BackdropQuestion2';
import SimpleBackdrop3 from '../Components/BackdropQuestion3';
import SimpleBackdrop4 from '../Components/BackdropQuestion4';
import ContainedButtons from '../Components/ContainedButton(ReadMore)';
import SimpleDialogDemo from '../Components/DialogBox(CustomizedQuote)';
import Typography from '@material-ui/core/Typography';


export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                
            </p>
            
          <SimplePaper/>
          <SimpleCard/>

          <Typography variant="h6" component="h2">
          <p>

          Trending Now!

          </p>
          </Typography>
          
          <TextMobileStepper/>
          <TextMobileStepper1/>

          <SimplePaperQueries/>
          <SimpleBackdrop1/>
          <SimpleBackdrop2/>
          <SimpleBackdrop3/>
          <SimpleBackdrop4/>
          <ContainedButtons/>
          <SimpleDialogDemo/>
          


        </Container>
        
    </React.Fragment>
  );
}