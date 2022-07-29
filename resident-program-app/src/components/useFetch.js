import { useState, useEffect } from 'react'
import authFetch from '../axios/authFetch'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [programs, setPrograms] = useState([])
  const [residents, setResidents] = useState([])

  const fetchData = async () => {
    setLoading(true)
    const programsResponse = await authFetch('/programs')
    const residentsResponse = await authFetch('/residents')
    setResidents(residentsResponse.data)
    setPrograms(programsResponse.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, programs, residents }
}
