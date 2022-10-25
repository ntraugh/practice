import React from 'react'

const Form = ({input, handleSubmit, setInput}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={input} placeholder='Search for something' onChange={(e) => setInput(e.target.value)}></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form