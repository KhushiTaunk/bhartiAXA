import './App.css';
import appbar from './Components/AppBar'
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
        <InstagramIcon/>
        <TwitterIcon/>
        <FacebookIcon/>
        <YouTubeIcon/>
        <LinkedInIcon/>
        <BasicButtonGroupIcons/>
        <SimpleAccordion/>
        <SimpleCardFooter/>
        
      </footer>
    </div>
  );
  }

export default App;
