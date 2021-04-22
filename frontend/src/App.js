import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import Navbar from './components/Navbar.component'
import RegisterScreen from './screens/RegisterScreen'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
