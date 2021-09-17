import './App.css';
import appbar from './Components/AppBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Efutureinvest from './Pages/efutureinvest'
import ProminentAppBar from './Components/prominentappbar';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <ProminentAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Efutureinvest/> </Route>
            <Route path={process.env.PUBLIC_URL + '/efutureinvest'} > <Efutureinvest/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            
            
          </Switch>

      <footer className="App-footer">
        This is a footer
        
      </footer>
    </div>
  );
  }

export default App;
