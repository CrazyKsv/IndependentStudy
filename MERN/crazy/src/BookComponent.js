import React from 'react'

const BookComponent = (props) => {
  const { img, title, author } = props.book
  const onClickHandle = (t) => {
    console.log(t)
  }

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={() => onClickHandle(img)}>
        click me
      </button>
    </article>
  )
}

export default BookComponent
