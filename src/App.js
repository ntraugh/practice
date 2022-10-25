import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input) {
      setList([...list, input])
      setInput("")
    }
  }

  const deleteMe = (idx) => {

    setList(list.filter((item) => item !== list[idx]))
    
  }

  return (
    <div className="App">
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <input value={input} placeholder='Search for something' onChange={(e) => setInput(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
      {console.log(list)}
      {list.map((list, idx) => (
        <div key={idx}>
          {list}
          <button onClick={() => deleteMe(idx)}>
            Delete Me
          </button>
        </div>
      ))}
      
    </div>
  );
}

export default App;
