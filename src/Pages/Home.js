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

          {/* Folder-Paper(BigQuestions) */}
          <SimplePaper/>

          {/* Folder-simplecard(LifeInsurancePossibility) */}
          <SimpleCard/>

          <Typography variant="h6" component="h2">
          Trending Now!
          </Typography>
          
          {/* Folder-TrendingNowTextmobilestepper */}
          <TextMobileStepper/>

          {/* Folder-TestimonialsTextMobileStepper */}
          <TextMobileStepper1/>

          {/* Folder-Paper(AnsweringQueries) */}
          <SimplePaperQueries/>

          {/* Folder-BackdropQuestion1 */}
          <SimpleBackdrop1/>
          {/* Folder-BackdropQuestion2 */}
          <SimpleBackdrop2/>
          {/* Folder-BackdropQuestion3 */}
          <SimpleBackdrop3/>
          {/* Folder-BackdropQuestion4 */}
          <SimpleBackdrop4/>

          {/* Folder-ContainedButton(ReadMore) */}
          <ContainedButtons/>

          {/* Folder-DialogBox(CustomizedQuote) */}
          <SimpleDialogDemo/>
          


        </Container>
        
    </React.Fragment>
  );
}