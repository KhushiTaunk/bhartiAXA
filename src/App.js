import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Efutureinvest from './Pages/efutureinvest'
import CalculatePremiumPage from './Pages/CalculatePremiumPage'
import ProminentAppBar from './Components/prominentappbar';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FloatingActionButtons from './Components/FloatingActionButton';
import SimpleAccordion from './Components/AccordianFooter';
import SimpleCardFooter from './Components/SimpleCardFooter';
import BasicButtonGroupIcons from './Components/ButtonGroupFooterIcons';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">

      {/* Header (Prominent App Bar) */}
      <header className="App-header">
      <ProminentAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Efutureinvest/> </Route>
            <Route path={process.env.PUBLIC_URL + '/efutureinvest'} > <Efutureinvest/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/CalculatePremiumPage'} > <CalculatePremiumPage/> </Route>
          </Switch>

      <footer className="App-footer">
      
        
        <FloatingActionButtons/>
        <Grid container spacing={4}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={2}>
        <InstagramIcon/>
        </Grid>
        <Grid item xs={2}>
        <TwitterIcon/>
        </Grid>
        <Grid item xs={2}>
        <FacebookIcon/>
        </Grid>
        <Grid item xs={2}>
        <YouTubeIcon/>
        </Grid>
        <Grid item xs={2}>
        <LinkedInIcon/>
        </Grid>
        <Grid item xs={12}>
        <BasicButtonGroupIcons/>
        </Grid>
        <Grid item xs={12}>
        <SimpleAccordion/>
        </Grid>
        <Grid item xs={12}>
        <SimpleCardFooter/>
        </Grid>
        </Grid>
      </footer>
 
    </div>
  );
  }

export default App;
