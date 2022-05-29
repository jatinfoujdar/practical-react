import './App.css'
import React ,{ useState} from 'react'
import { ChromePicker } from 'react-color';


import './App.css'

function App () {
const [color , setColor] = useState('#fff')
const[showColorPicker , setShowColorPicker] = useState(false)
  return (
    <div >
      <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'close color picker' :'pick a color'}
      </button>
      {
        setShowColorPicker &&  <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />
      }
     
      <h2>you pick color {color}</h2>
    </div>
    
  )
}

export default App
