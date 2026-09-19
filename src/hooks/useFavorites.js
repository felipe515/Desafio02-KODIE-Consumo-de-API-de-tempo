import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'painel-clima:favoritos'

function readStoredFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(readStoredFavorites)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      // localStorage indisponível (ex.: modo privado) — segue sem persistir
    }
  }, [favorites])

  const isFavorite = useCallback(
    (city) => favorites.some((item) => item.toLowerCase() === city.toLowerCase()),
    [favorites],
  )

  const toggleFavorite = useCallback((city) => {
    setFavorites((prev) =>
      prev.some((item) => item.toLowerCase() === city.toLowerCase())
        ? prev.filter((item) => item.toLowerCase() !== city.toLowerCase())
        : [...prev, city],
    )
  }, [])

  const removeFavorite = useCallback((city) => {
    setFavorites((prev) => prev.filter((item) => item !== city))
  }, [])

  return { favorites, isFavorite, toggleFavorite, removeFavorite }
}
