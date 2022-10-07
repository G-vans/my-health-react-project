// import logo from './logo.svg';
import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Search from './Search';
import Drugslist from './Drugslist';
import AddMedicationform from './AddMedicationform';
import Medicationlist from './Medicationlist';
import Alldoctors from './Alldoctors';

function App({medications}) {
  return (
    <div>
    <Navbar />
    <Search />
    <AddMedicationform />
    <Medicationlist 
    medications={medications}/>
    <Alldoctors />
    </div>
  );
}

export default App;
