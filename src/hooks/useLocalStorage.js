import { useState, useEffect } from 'react'

function readValue(key, initialValue) {
  try {
    const stored = window.localStorage.getItem(key)
    return stored !== null ? JSON.parse(stored) : initialValue
  } catch (error) {
    console.error(`Lecture de "${key}" impossible :`, error)
    return initialValue
  }
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readValue(key, initialValue))
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Écriture de "${key}" impossible :`, error)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage