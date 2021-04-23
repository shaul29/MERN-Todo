import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import Navbar from './components/Navbar.component'
import RegisterScreen from './screens/RegisterScreen'
import NotLogInScreen from './screens/NotLogInScreen'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
          <Route exact path='/newuser' component={NotLogInScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
