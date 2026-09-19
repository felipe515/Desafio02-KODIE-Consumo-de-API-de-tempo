import WeatherIcon from './WeatherIcon'
import { formatTemp, formatWeekday } from '../utils/formatters'

export default function ForecastDay({ entry, unit }) {
  const unitSymbol = unit === 'imperial' ? '°F' : '°C'

  return (
    <div className="forecast-day">
      <p className="forecast-day__weekday">{formatWeekday(entry.dt_txt)}</p>
      <WeatherIcon condition={entry.weather[0].main} className="forecast-day__icon" />
      <p className="forecast-day__high">
        {formatTemp(entry.main.temp_max, unit)}
        {unitSymbol}
      </p>
      <p className="forecast-day__low">{formatTemp(entry.main.temp_min, unit)}°</p>
    </div>
  )
}
