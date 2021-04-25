import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [person, setperson] = useState(data)
  const [btnText, setbtnText] = useState('Clear')

  const onClickHandler = () => {
    btnText === 'Clear'
      ? setperson([]) || setbtnText('Restore')
      : setperson(data) || setbtnText('Clear')
    // if (btnText === 'Clear') {
    //   setperson([])
    //   setbtnText('Restore')
    // } else {
    //   setperson(data)
    //   setbtnText('Clear')
    // }
  }

  return (
    <>
      {person.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
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
