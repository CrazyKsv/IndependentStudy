import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import { data } from './bookData'
import BookComponent from './BookComponent'

function Booklist() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <BookComponent key={book.id} book={book} />
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
