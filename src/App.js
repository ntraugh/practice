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
      <h2>Table</h2>
      {/* <Form input={input} handleSubmit={handleSubmit} setInput={setInput}/> */}
      {/* <List list={list} removeItem={deleteMe} /> */}
      <table style={{"marginLeft": "auto", "marginRight": "auto"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        {list.map((person, idx) => (
        <tbody>
          <>
            <tr>
              <td key={idx}>{person.id}</td>
              <td key={idx}>{person.name}</td>
              <td key={idx}>{person.username}</td>
              <td key={idx}>{person.email}</td>
              <td key={idx}><button onClick={() => deleteMe(person.id)}>Delete</button></td>
            </tr>
          </>
        </tbody>
        ))}
       

      </table>
    </div>
  );
}

export default App;
