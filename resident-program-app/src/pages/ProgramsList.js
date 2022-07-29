import React from 'react'
import PropTypes from 'prop-types'

const ProgramsList = ({ programs }) => {
  const newPrograms = new Set(programs.map((program) => program.name))
  console.log(newPrograms)
  return (
    <section className='center'>
      {newPrograms.map((program, index) => {
        return <p key={index}>{program}</p>
      })}
    </section>
  )
}

// Programs.propTypes = {}

export default ProgramsList
