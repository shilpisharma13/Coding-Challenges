import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../components/useFetch'

const SingleResident = () => {
  const { residentID } = useParams()
  const { loading, residents } = useFetch()
  const resident = residents?.find((resident) => resident.id === residentID)
  // const { firstName, lastName, levelOfCare, room, id, ambulation } = resident

  if (loading) {
    return <h2>Loading....</h2>
  } else {
    return (
      <section className='section' key={resident?.id}>
        <p>{`ID: ${resident?.id}`}</p>
        <p>{`First Name: ${resident?.firstName}`}</p>
        <p>{`Last Name: ${resident?.lastName}`}</p>
        <p>{`Room: ${resident?.room}`}</p>
        <p>{`Level of Care: ${resident?.levelOfCare}`}</p>
        <p>{`Ambulation: ${resident?.ambulation}`}</p>

        <Link to='/residents' className='btn'>
          Back to List
        </Link>
      </section>
    )
  }
}

// SingleResident.propTypes = {}

// SingleResident.defaultProps = {

// }

export default SingleResident
