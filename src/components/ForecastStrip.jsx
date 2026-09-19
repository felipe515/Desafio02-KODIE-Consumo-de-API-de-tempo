import ForecastDay from './ForecastDay'
import { groupForecastByDay } from '../utils/formatters'

export default function ForecastStrip({ forecast, unit }) {
  const days = groupForecastByDay(forecast.list)

  return (
    <section className="forecast">
      <p className="forecast__title">Próximos dias</p>
      <div className="forecast__strip">
        {days.map((entry) => (
          <ForecastDay key={entry.dt_txt} entry={entry} unit={unit} />
        ))}
      </div>
    </section>
  )
}
