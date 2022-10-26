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
      <table style={{"marginLeft": "auto", "marginRight": "auto", "padding": "10px"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        {list.map((person) => (
        <tbody key={person.id}>
          <>
            <tr key={person.id}>
              <td style={{"padding": "10px"}}>{person.id}</td>
              <td >{person.name}</td>
              <td >{person.username}</td>
              <td >{person.email}</td>
              <td ><button onClick={() => deleteMe(person.id)}>Delete</button></td>
            </tr>
          </>
        </tbody>
        ))}
       

      </table>
    </div>
  );
}

export default App;
