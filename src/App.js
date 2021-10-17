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
import FloatingActionButtons from './Components/Footer/FloatingActionButton';
import SimpleAccordion from './Components/Footer/AccordianFooter';
import SimpleCardFooter from './Components/Footer/SimpleCardFooter';
import BasicButtonGroupIcons from './Components/Footer/ButtonGroupFooterIcons';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

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
        <Button>
        <InstagramIcon style={{color:"#00529b"}}/>
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Button>
        <TwitterIcon style={{color:"#00529b"}}/>
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Button>
        <FacebookIcon style={{color:"#00529b"}}/>
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Button>
        <YouTubeIcon style={{color:"#00529b"}}/>
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Button>
        <LinkedInIcon style={{color:"#00529b"}}/>
        </Button>
        </Grid>
        <Grid item xs={12}>
        <Button>
        <BasicButtonGroupIcons style={{color:"#00529b"}}/>
        </Button>
        </Grid>
        <Grid item xs={12}>
        <Button>
        <SimpleAccordion style={{color:"#00529b"}}/>
        </Button>
        </Grid>
        <Grid item xs={12}>
        <Button>
        <SimpleCardFooter/>
        </Button>
        </Grid>
        </Grid>
      </footer>
 
    </div>
  );
  }

export default App;
