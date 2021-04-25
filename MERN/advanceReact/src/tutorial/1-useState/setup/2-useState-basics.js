import React, { useState } from 'react'

const UseStateBasics = () => {
  var [state, changeState] = useState({ v: 'Basic' })

  // console.log(state)
  const onClickHandler = () => {
    state.v === 'Basic'
      ? changeState({ v: 'Life is intense' })
      : changeState({ v: 'Basic' })
  }

  return (
    <React.Fragment>
      <div className='container'>
        <p>{state.v}</p>
        <button className='btn' onClick={onClickHandler}>
          Update State
        </button>
      </div>
    </React.Fragment>
  )
}

export default UseStateBasics
