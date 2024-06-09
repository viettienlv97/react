import React, {useState} from 'react'

const useFetch = (fetchFn) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  const fetchData = async (payload) => {
    setLoading(true)
    try {
      const result = await fetchFn(payload)
      if (result) setData(result)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return {data, loading, error, fetchData}
}

export default useFetch
