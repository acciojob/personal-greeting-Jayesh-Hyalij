import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const handleNameChange = (event)=> {
    setName(event.target.value);
  }
  return (
    <div>
      <p>Enter your name: </p>
      <br />
      <input id="name" value={name} onChange={handleNameChange}></input>
        <div id="preview">
          {name && <p>Hello {name}!</p>}
        </div>
    </div>
  )
}

export default App
