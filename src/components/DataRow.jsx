import { formatTemp } from '../utils/formatters'

export default function DataRow({ current, unit }) {
  const { main, wind } = current
  const unitSymbol = unit === 'imperial' ? '°F' : '°C'

  const items = [
    { label: 'Sensação', value: `${formatTemp(main.feels_like, unit)}${unitSymbol}` },
    { label: 'Umidade', value: `${main.humidity}%` },
    { label: 'Vento', value: `${wind.speed.toFixed(1)} m/s` },
  ]

  return (
    <div className="data-row">
      {items.map((item) => (
        <div className="data-row__item" key={item.label}>
          <span className="data-row__label">{item.label}</span>
          <span className="data-row__value">{item.value}</span>
        </div>
      ))}
    </div>
  )
}
