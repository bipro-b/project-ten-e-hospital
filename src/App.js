
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './private/PrivateRoute';
import About from './components/About/About';
import Login from './components/Login//Login'
import Enroll from './components/Enroll/Enroll';
import Meet from './components/Meet/Meet';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/enroll">
              <Enroll></Enroll>
            </PrivateRoute>
            <Route path="/meet">
              <Meet></Meet>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
