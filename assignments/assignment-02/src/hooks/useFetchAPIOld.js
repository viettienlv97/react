import { useEffect, useState } from 'react'

const useFetchAPI = (fetchFn, initialData) => {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const resData = await fetchFn()
      setData(resData)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchFn])

  return { data, loading, error }
}

export default useFetchAPI
