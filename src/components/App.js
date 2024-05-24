import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const handleNameChange = (event)=> {
    setName(event.target.value);
  }
  return (
    <div>
      <label htmlFor="name">Enter your name: </label>
      <br />
      <input id="name" value={name} onChange={handleNameChange}></input>
        <div id="preview">
          {/* <label>Hello {name}!</label> */}
          {name && <label>Hello {name}!</label>}
        </div>
    </div>
  )
}

export default App
