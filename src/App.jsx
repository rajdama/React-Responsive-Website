import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Service from './Sevice'
import Contact from './Contact'
import{Switch,Route,Redirect} from 'react-router-dom'

function App() {
  return (
   <>
    <Navbar/>
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to= '/home' />
    </Switch>
   </>
  );
}

export default App;
