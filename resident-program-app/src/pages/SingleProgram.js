import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../components/useFetch'

const SingleProgram = ({ id, name, location }) => {
  const { programID } = useParams()
  const { loading, programs } = useFetch()
  const program = programs?.find((program) => program.id === programID)
  console.log(program)
  // const { firstName, lastName, levelOfCare, room, id, ambulation } = resident

  if (loading) {
    return <h2 className='section'>Loading....</h2>
  } else {
    return (
      <section className='section' key={program?.id}>
        <p>{`ID: ${program?.id}`}</p>
        <p>{`Name: ${program?.name}`}</p>
        <p>{`Location: ${program?.location}`}</p>
        <p>{`Start Date: ${program?.start.toString().slice(0, 10)}`}</p>
        <p>{`End Date: ${program?.end.toString().slice(0, 10)}`}</p>
        <p>{`Facilitators: ${program?.facilitators[0]}`}</p>
        <p>{`Participant(s): ${program?.attendance.length}`}</p>

        <Link to='/programs' className='btn'>
          Back to Programs List
        </Link>
      </section>
    )
  }
}

export default SingleProgram
