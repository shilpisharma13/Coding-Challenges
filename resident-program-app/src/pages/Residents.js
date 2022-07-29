import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import authFetch from '../axios/authFetch'
import axios from 'axios'

const Residents = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [residents, setResidents] = useState([])

  const fetchData = async () => {
    try {
      const residentsResponse = await authFetch('/residents')
      setResidents(residentsResponse.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(true)
      console.log(`💥💥💥 Error: ${error}`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <>
        <h2>Loading....</h2>
      </>
    )
  } else {
    return (
      <section className='section'>
        {residents.map((resident, index) => {
          const { name } = resident
          return <p key={index}>{name}</p>
        })}
      </section>
    )
  }
}

// Programs.propTypes = {}

export default Residents
