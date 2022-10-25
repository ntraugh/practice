import './App.css';
import { useState } from 'react';
import List from "./List";
import Form from "./Form";


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
      <Form input={input} handleSubmit={handleSubmit} setInput={setInput}/>
      <List list={list} removeItem={deleteMe} />
    </div>
  );
}

export default App;
