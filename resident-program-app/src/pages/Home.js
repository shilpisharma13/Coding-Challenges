import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='section'>
      <h2>Welcome, User</h2>
      <div>
        <Link to='/programs' className='btn'>
          Programs
        </Link>
      </div>
      <br></br>
      <div>
        <Link to='/residents' className='btn'>
          Residents
        </Link>
      </div>
      <br></br>
      <div>
        <Link to='/addResident' className='btn'>
          Add New Resident
        </Link>
      </div>
    </section>
  )
}

export default Home
