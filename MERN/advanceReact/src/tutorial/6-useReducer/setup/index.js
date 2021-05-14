import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import { reducer } from './reducer'

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name }
      dispatch({ type: 'ADD_ITEM', newItem: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE', name: name })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((p) => {
        return (
          <div key={p.id} className='item'>
            <h4>{p.name}</h4>
            <button onClick={() => dispatch({ type: 'REMOVE', payload: p.id })}>
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
