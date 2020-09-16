import React from 'react';
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
function App() {
  return (
    <div className="">


      < Router>
        <Switch>
          <Route exact path="/">
            <MainHome></MainHome>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>

          <Route path="*">
        
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
