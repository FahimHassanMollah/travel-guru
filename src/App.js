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
          <Route path="/createaccount">
           <CreateAccount></CreateAccount>
          </Route>
          <PrivateRoute path="/hotelRoom">
            <HotelRoom></HotelRoom>
          </PrivateRoute>

          <Route path="*">
        
          </Route>

        </Switch>

      </Router>
    </LoggedInUserContext.Provider>
   </div>

    
  );
}

export default App;
