import {FaReact} from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';
import { IconContext } from 'react-icons';
import './App.css';
import React from 'react';

function App() {
  return (
   <><IconContext.Provider value={{ color: 'red', size: '5rem' }} /><div className="App">
      <h1>hello </h1>

        //<FaReact color='yellow' size='10rem'/>
 //  <MdAlarm  color='blue' size='10rem' /> 
    </div>
    <IconContext.Provider /></>
  )
}

export default App;


  
