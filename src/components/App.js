// import logo from './logo.svg';
import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Search from './Search';
import Drugslist from './Drugslist';
import AddMedicationform from './AddMedicationform';

function App() {
  return (
    <div>
    <Navbar />
    <Search />
    <AddMedicationform />
    </div>
  );
}

export default App;
