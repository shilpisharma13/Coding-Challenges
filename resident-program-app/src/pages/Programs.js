import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFetch } from '../components/useFetch'

const Programs = () => {
  const { loading, programs } = useFetch()
  const newPrograms = [...new Set(programs.map((program) => program.name))]

  if (loading) {
    return <h2>Loading...</h2>
  } else {
    return (
      <section className='section'>
        <h4>Here is the list of Programs</h4>
        <ul>
          {newPrograms
            .sort((a, b) => a.localeCompare(b))
            .map((program, index) => {
              return <li key={index}>{program}</li>
            })}
        </ul>
      </section>
    )
  }
}

Programs.propTypes = {}

export default Programs
