import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import authFetch from '../axios/authFetch'
import axios from 'axios'
import ProgramsList from './ProgramsList'

const Programs = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [programs, setPrograms] = useState([])

  const fetchData = async () => {
    try {
      const programsResponse = await authFetch('/programs')
      console.log(programsResponse.data)
      setPrograms(programsResponse.data)
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
      <h2>
        hello
        {/* <ProgramsList programs={programs} /> */}
      </h2>
    )
  }
}

Programs.propTypes = {}

export default Programs
