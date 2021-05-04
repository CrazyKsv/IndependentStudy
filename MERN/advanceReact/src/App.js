import React from 'react'
import Comp1 from './tutorial/1-useState/setup/3-useState-array'
import Comp2 from './tutorial/1-useState/setup/4-useState-object'
import Counter from './tutorial/1-useState/setup/5-useState-counter'
import GitUser from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'
import Merror from './tutorial/3-conditional-rendering/setup/1-multiple-returns'
import Form from './tutorial/4-forms/setup/1-controlled-inputs'
function App() {
  return (
    <div className='container'>
      {/* <Comp1 />
      <Comp2 />
      <Counter /> */}
      {/* <GitUser /> */}
      {/* <Merror /> */}
      <Form />
    </div>
  )
}

export default App
