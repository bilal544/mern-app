import { useCallback, useState } from "react"
import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const UseApi = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get(`${BASE_URL}/data.json`, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (response) {
        setLoading(false)
        setData(response.data)
      }
    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, fetchData, loading, error }
}

export default UseApi
