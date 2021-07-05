import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Home'> 
          <Home/>
        </Route>
        <Route path='/About'> 
          <About/>
        </Route>
        <Route path='/'> 
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
