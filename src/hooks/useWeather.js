import { useCallback, useState } from 'react'
import { getCurrentWeather, getForecast } from '../services/weatherApi'

export function useWeather() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const search = useCallback(async (city) => {
    const trimmed = city.trim()
    if (!trimmed) return

    setStatus('loading')
    setErrorMessage('')

    try {
      const [currentData, forecastData] = await Promise.all([
        getCurrentWeather(trimmed),
        getForecast(trimmed),
      ])
      setCurrent(currentData)
      setForecast(forecastData)
      setStatus('success')
    } catch (error) {
      setCurrent(null)
      setForecast(null)
      setErrorMessage(error.message || 'Erro inesperado.')
      setStatus('error')
    }
  }, [])

  return { status, current, forecast, errorMessage, search }
}
