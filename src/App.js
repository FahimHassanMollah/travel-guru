import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Slider from './components/Slider/Slider';
import MainHome from './components/MainHome/MainHome';
import Booking from './components/Booking/Booking';
import LogIn from './components/LogIn/LogIn';
import HotelRoom from './components/HotelRoom/HotelRoom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Blog from './components/Blog/Blog';
import NoMatch from './components/NoMatch/NoMatch';
export const LoggedInUserContext = React.createContext()
function App() {
  const [user, setUser] = useState({})
  return (
   <div>
      <LoggedInUserContext.Provider value={[user, setUser]}>

    < Router>
        <Switch>
          <Route exact path="/">
            <MainHome></MainHome>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/news">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Blog></Blog>
          </Route>
          <Route path="/destination">
            <Blog></Blog>
          </Route>
          <Route path="/createaccount">
           <CreateAccount></CreateAccount>
          </Route>
          <PrivateRoute path="/hotelRoom/:id">
            <HotelRoom></HotelRoom>
          </PrivateRoute>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>

      </Router>
    </LoggedInUserContext.Provider>
   </div>

    
  );
}

export default App;
