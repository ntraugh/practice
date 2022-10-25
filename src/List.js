import React from 'react'

const List = ({list, removeItem}) => {
  return (
    <div>
        {list.map((list, idx) => (
        <div key={idx}>
          {list}
          <button onClick={() => removeItem(idx)}>
            Delete Me
          </button>
        </div>
      ))}
    </div>
  )
}

export default List