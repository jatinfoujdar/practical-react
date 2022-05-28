import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal';
import { buildQueries } from '@testing-library/react';



function App(){
 const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open the Modal</button>
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={ () => setModalIsOpen(false)}

        style={
          {
            overlay:{
              backgroundColor:'red'
            },
            content:{
              color:'orange'
            }
          }
        }>
<h2>Modal title</h2>
<p>Modal Body</p>
<div>
  <button onClick={() => setModalIsOpen(false)}>close </button>
</div>
</Modal>
    </div>

  );
}

export default  App;
