import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [person, setperson] = useState(data)
  const [btnText, setbtnText] = useState('Clear')

  const onClickHandler = () => {
    btnText === 'Clear'
      ? setperson([]) || setbtnText('Restore')
      : setperson(data) || setbtnText('Clear')
  }
  const removeItem = (id) => {
    setperson(person.filter((p) => p.id !== id))
  }

  return (
    <>
      {person.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={onClickHandler}>
        {btnText}
      </button>
    </>
  )
}

export default UseStateArray
