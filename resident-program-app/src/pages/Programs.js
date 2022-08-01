import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFetch } from '../components/useFetch'
import SingleProgram from './SingleProgram'
import { Link } from 'react-router-dom'

const Programs = () => {
  const { loading, programs } = useFetch()
  console.log(programs)
  // const newPrograms = [...new Set(programs.map((program) => program.name))]

  if (loading) {
    return <h2 className='section'>Loading...</h2>
  } else {
    return (
      <section className='section'>
        <h4>Here is the list of Programs</h4>
        <ul>
          {programs
            // .sort((a, b) => a.localeCompare(b))
            .map((program, index) => {
              const { id, name } = program
              return (
                <li key={id}>
                  <Link to={`/programs/${id}`}>{name}</Link>
                </li>
              )
            })}
        </ul>
      </section>
    )
  }
}

Programs.propTypes = {}

export default Programs
