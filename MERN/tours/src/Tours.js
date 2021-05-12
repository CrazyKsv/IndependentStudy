import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  console.log(tours)

  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          console.log(tour)
          return <Tour key={tour.id} removeTour={removeTour} {...tour} />
        })}
      </div>
    </section>
  )
}

export default Tours
