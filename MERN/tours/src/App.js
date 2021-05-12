import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [refrest, setRefrest] = useState(false)

  const removeTour = (id) => {
    const newTours = tours.filter((t) => t.id !== id)
    setTours(newTours)
    if (tours === []) {
      setRefrest(true)
    }
  }

  const fetchTours = async () => {
    setLoading(true)
    setRefrest(false)
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setLoading(false)
        setTours(res)
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
