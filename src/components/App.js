// import logo from './logo.svg';
import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Search from './Search';
import Drugslist from './Drugslist';
import AddMedicationform from './AddMedicationform';
import Medicationlist from './Medicationlist';
import Alldoctors from './Alldoctors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Search />
        <AddMedicationform />
        <Switch>
          <Route exact path='/'>
            <Medicationlist />
          </Route>
          <Route path='/doctors'>
            <Alldoctors />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
