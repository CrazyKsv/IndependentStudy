import React from 'react'
import Comp1 from './tutorial/1-useState/setup/3-useState-array'
import Comp2 from './tutorial/1-useState/setup/4-useState-object'
import Counter from './tutorial/1-useState/setup/5-useState-counter'
import GitUser from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'
import Merror from './tutorial/3-conditional-rendering/setup/1-multiple-returns'
function App() {
  return (
    <div className='container'>
      <Comp1 />
      <Comp2 />
      <Counter />
      <GitUser />
      <Merror />
    </div>
  )
}

export default App
