import './App.css';
import { useEffect, useState } from 'react';
import List from "./List";
import Form from "./Form";



function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if(input) {
  //     setList([...list, input])
  //     setInput("")
  //   }
  // }

  const deleteMe = (idx) => {

    setList(list.filter((item) => item.id !== idx))
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/")
      const data = await res.json()
      
      setList(data)
      
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Form</h1>
      {/* <Form input={input} handleSubmit={handleSubmit} setInput={setInput}/> */}
      {/* <List list={list} removeItem={deleteMe} /> */}
      {list.map((person) => {
        const {name, username, id} = person
        return <div key={id}>
          <h2>Name: {name}</h2>
          <h2>User Name: {username}</h2>
          <button onClick={() => deleteMe(id)}>Delete</button>
        </div>
      })}
    </div>
  );
}

export default App;
