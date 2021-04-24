import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
  return <h4>Life is intense</h4>;
}

ReactDom.render(<Greeting/>, document.getElementById("root"));