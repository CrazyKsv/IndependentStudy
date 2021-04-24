import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <div>
      <Person />
      <Age />
    </div>
  )
}

function Person() {
  return (
    <div>
      <h1>Kevin Hu</h1>
    </div>
  )
}

function Age() {
  return (
    <div>
      <h3>38</h3>
    </div>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
