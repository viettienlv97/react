import { useEffect, useState } from 'react'

const useFetch = (fetchFn, initialData, status) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(initialData)

  async function fetchData(payload) {
    setLoading(true)
    try {
      const data = await fetchFn(payload)
      setData(data)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [fetchFn, status])

  return { data, loading, error, fetchData }
}

export default useFetch
