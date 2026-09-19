import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FavoritesBar from './components/FavoritesBar'
import StatusMessage from './components/StatusMessage'
import WeatherHero from './components/WeatherHero'
import DataRow from './components/DataRow'
import ForecastStrip from './components/ForecastStrip'
import Footer from './components/Footer'
import { useWeather } from './hooks/useWeather'
import { useFavorites } from './hooks/useFavorites'

export default function App() {
  const [unit, setUnit] = useState('metric')
  const { status, current, forecast, errorMessage, search } = useWeather()
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites()

  const activeCity = current?.name ?? null

  return (
    <div className="page">
      <Header unit={unit} onUnitChange={setUnit} />

      <SearchBar onSearch={search} isLoading={status === 'loading'} />

      <FavoritesBar
        favorites={favorites}
        activeCity={activeCity}
        onSelect={search}
        onRemove={removeFavorite}
      />

      {status === 'success' && current && forecast ? (
        <>
          <WeatherHero
            current={current}
            unit={unit}
            isFavorite={isFavorite(current.name)}
            onToggleFavorite={() => toggleFavorite(current.name)}
          />
          <DataRow current={current} unit={unit} />
          <ForecastStrip forecast={forecast} unit={unit} />
        </>
      ) : (
        <StatusMessage status={status} errorMessage={errorMessage} />
      )}

      <Footer />
    </div>
  )
}
