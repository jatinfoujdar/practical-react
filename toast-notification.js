import React from 'react';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const notify = () => {
          toast.success('success notification',{position:toast.POSITION.TOP_CENTER});
   toast.error('error notification',{position:toast.POSITION.BOTTOM_CENTER});

  
  //const notify = () => toast("basic notification!",{position:toast.POSITION.BOTTOM_CENTER});
  }
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer/>
    </div>
  );
}
export default  App;
