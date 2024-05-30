import React, { useEffect, useState } from 'react'

const useFetch = (fetchFn, initialData) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(initialData)

  const fetchData = async (payload) => {
    setLoading(true)
    try {
      const data = await fetchFn(payload)
      setData(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchFn])
  return { data, loading, error, fetchData }
}

export default useFetch
