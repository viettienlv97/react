import { useEffect, useState } from 'react'
import { requestOptions, apiUrl } from '../services/apiService'

const useFetchAPI = (url, initialData, movieAPI) => {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        url ? apiUrl + url : movieAPI,
        requestOptions
      )
      if (!response.ok) {
        throw new Error(response)
      }

      const data = await response.json()
      console.log(data)
      setData(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetchAPI
