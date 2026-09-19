import WeatherIcon from './WeatherIcon'
import { capitalize, formatTemp, tempClass } from '../utils/formatters'

export default function WeatherHero({ current, unit, isFavorite, onToggleFavorite }) {
  const { name, sys, main, weather } = current
  const condition = weather[0]
  const unitSymbol = unit === 'imperial' ? '°F' : '°C'
  const temp = formatTemp(main.temp, unit)
  const modifier = tempClass(main.temp)

  return (
    <section className="hero">
      <button
        type="button"
        className={`hero__save${isFavorite ? ' hero__save--active' : ''}`}
        onClick={onToggleFavorite}
      >
        {isFavorite ? 'salvo' : 'salvar'}
      </button>

      <p className="hero__location">
        {name}, {sys.country}
      </p>

      <div className="hero__main">
        <WeatherIcon condition={condition.main} className="hero__icon" />
        <span className={`hero__temp${modifier ? ` hero__temp--${modifier}` : ''}`}>
          {temp}
          <small>{unitSymbol}</small>
        </span>
      </div>

      <p className="hero__condition">{capitalize(condition.description)}</p>
    </section>
  )
}
