import React,{Component} from 'react';
import About from './pages/About';
import Services from './pages/Services';

import {Route,BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NativeSelects from './pages/NativeSelects';
import NSClass from './pages/NSClass';


class App extends Component
{

  render()
  {
    return(
      <Router>
      <div> 
     <nav>
       <ul>
         <li>
         <Link to="/about">About</Link>  
         </li>
         <li>
           <Link to="/services">Services</Link>
         </li>
         <li>
           <Link to="/login">Login</Link>
         </li>
         <li>
           <Link to="/signup">Sign Up</Link>
         </li>
         <li>
           <Link to="/function">Function Comp</Link>
         </li>

         <li>
           <Link to="/class">Class Comp</Link>
         </li>
       </ul>
     </nav>

      <Switch>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp} />
      <Route path="/function" component={NativeSelects} />
      <Route path="/class" component={NSClass}/>
      </Switch>
      </div>
      </Router>
    )
  }
}

export default App;