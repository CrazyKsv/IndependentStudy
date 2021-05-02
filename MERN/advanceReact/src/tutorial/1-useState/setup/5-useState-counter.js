import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const increaseCounter = () => {
    setValue(value + 1)
  }
  const decreaseCounter = () => {
    setValue(value - 1)
  }
  const resetCounter = () => {
    setValue(0)
  }

  const increaseLater = () => {
    setTimeout(
      //() => {setValue(value + 1)} bad as it only look at original state. Based on usecase
      () => {
        setValue((prev) => {
          return prev + 1
        })
      },
      2000
    )
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h4>Regular Counter</h4>
        <h2>{value}</h2>
        <button className='btn' onClick={increaseCounter}>
          increase
        </button>
        <button className='btn' onClick={decreaseCounter}>
          decrease
        </button>
        <button className='btn' onClick={resetCounter}>
          reset
        </button>

        <button className='btn' onClick={increaseLater}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
