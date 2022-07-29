import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='center'>
      <h2>Sorry, page not found</h2>
      <Link to='/' className='btn'>
        Back to Home
      </Link>
    </section>
  )
}

export default Error
