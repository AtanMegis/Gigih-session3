import React, {useState} from 'react';
import Button from './components/UI/Button/Button'

import './App.css';


function App() {
  const [showParagraf, setShowParagraf] = useState(false)

  console.log('APP RUNNING');

  const ToggleHandler = () => {
    setShowParagraf((sebelumShowParagraf) => !sebelumShowParagraf)
  }
  
 return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraf && <p>This is new!</p>}
      <Button onClick={ToggleHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

