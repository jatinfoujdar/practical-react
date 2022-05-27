import "./styles.css";
import { FaReact } from 'react-icons/fa';
import {MdAlarm} from 'react-icons/md';
import { IconContext } from 'react-icons';


export default function App() {
  return (
        // <IconContext.Provider value ={{color: 'blue', size: '10rem'}}
        //<IconContext />
    <div className="App">

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <FaReact color='yellow' size='10rem'/>
   <MdAlarm  color='blue' size='10rem' /> 
 
    </div>
   
  );
}
