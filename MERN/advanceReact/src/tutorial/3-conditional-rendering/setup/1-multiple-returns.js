import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, [])

  return <h2>multiple returns</h2>
}

export default MultipleReturns
