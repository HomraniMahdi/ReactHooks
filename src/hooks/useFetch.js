import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadData() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`)
        }
        const json = await response.json()
        setData(json)
      } catch (err) {
    
        if (err.name === 'AbortError') return
        setData(null)
        setError(err)
      }

      setLoading(false)
    }

    loadData()

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

export default useFetch