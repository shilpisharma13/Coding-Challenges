import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useFetch } from '../components/useFetch'

const url = 'https://welbi.org/api/residents'

const AddResident = () => {
  const { programs } = useFetch()
  const [resident, setResident] = useState({
    firstName: '',
    lastName: '',
    levelOfCare: '',
    room: '',
    id: '',
    ambulation: '',
    attendance: [],
  })
  const [searchProgram, setSearchProgram] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setResident({ ...resident, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const sendData = await axios.post(url, { resident })
      setResident({
        firstName: '',
        lastName: '',
        levelOfCare: '',
        room: '',
        id: '',
        ambulation: '',
        attendance: [],
      })
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <section className='form'>
      <form action=''>
        <div>
          <label htmlFor='firstName' className='form-label'>
            First Name:
          </label>
          <input
            className='form-input'
            type='text'
            id='firstName'
            name='firstName'
            value={resident.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='lastName' className='form-label'>
            Last Name:
          </label>
          <input
            className='form-input'
            type='text'
            id='lastName'
            name='lastName'
            value={resident.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='levelOfCare' className='form-label'>
            Level of Care:
          </label>
          <input
            className='form-input'
            type='text'
            id='levelOfCare'
            name='levelOfCare'
            value={resident.levelOfCare}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='room' className='form-label'>
            Room:
          </label>
          <input
            className='form-input'
            type='text'
            id='room'
            name='room'
            value={resident.room}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='program' className='form-label'>
            Program:
          </label>
          <input
            className='form-input'
            type='text'
            placeholder='Search program...'
            id='program'
            name='program'
            // value={resident.attendance}
            onChange={(e) => setSearchProgram(e.target.value)}
          />{' '}
        </div>
        <div
          className={`${searchProgram ? 'form-search display' : 'form-search'}`}
        >
          <ul>
            {programs
              .filter((program) => {
                if (
                  program.name
                    .toLowerCase()
                    .includes(searchProgram.toLowerCase())
                ) {
                  return program
                }
              })
              .map((program, i) => {
                return <li key={i}>{program.name}</li>
              })}
          </ul>
        </div>
        <button onClick={handleSubmit} className='btn'>
          Add Resident
        </button>
      </form>
    </section>
  )
}

export default AddResident
