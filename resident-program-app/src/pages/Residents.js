import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import authFetch from '../axios/authFetch'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useFetch } from '../components/useFetch'

const Residents = () => {
  const { loading, residents } = useFetch()

  if (loading) {
    return (
      <>
        <h2 className='section'>Loading....</h2>
      </>
    )
  } else {
    return (
      <section className='section'>
        <h4>List of current Residents</h4>
        <ul>
          {residents
            .sort((a, b) => a.firstName.localeCompare(b.firstName))
            .map((resident) => {
              const { id, name } = resident
              return (
                <li key={id}>
                  <Link to={`/residents/${resident.id}`}>{name}</Link>
                </li>
              )
            })}
        </ul>
      </section>
    )
  }
}

// Programs.propTypes = {}

export default Residents
