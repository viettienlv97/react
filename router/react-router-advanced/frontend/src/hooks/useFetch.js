import { useState } from 'react'

const useFetch = (url, { initialData }) => {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error()
      }
      const resData = await res.json()
      setData(resData)
    } catch (error) {
      setError(error)
      setData(null)
    } finally {
      setLoading(false)
    }
  }
  return { data, loading, error, fetchData }
}

export default useFetch
