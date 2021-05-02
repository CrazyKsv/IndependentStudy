import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setperson] = useState({
    name: 'Keivn',
    age: 24,
    message: 'life is intense',
  })

  const changeMessage = () => {
    setperson({ ...person, message: 'life is great' })
  }

  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
