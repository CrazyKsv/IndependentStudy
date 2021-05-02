import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [persons, setperson] = useState(data)

  return (
    <>
      <main>
        <section className='container'>
          <h3>{persons.length} birthday</h3>
          <List persons={persons} />
          <button className='btn' onClick={() => setperson([])}>
            Clear all
          </button>
        </section>
      </main>
    </>
  )
}

export default App
