import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newP = { id: new Date().getTime().toString(), ...person }
      setPeople((people) => {
        return [...people, newP]
      })
      setPerson({ firstName: '', email: '', age: '' })
    }
  }

  const handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={person.firstName}
              onChange={handleOnChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              name='email'
              id='email'
              value={person.email}
              onChange={handleOnChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              name='age'
              id='age'
              value={person.age}
              onChange={handleOnChange}
            />
          </div>
          <button type='submit'> add person</button>
        </form>
        {people.map((p) => {
          const { id, firstName, email, age } = p
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
