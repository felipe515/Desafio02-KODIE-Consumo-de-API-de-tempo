const CLOUD_PATH =
  'M6.5 17.5a3.75 3.75 0 0 1-.6-7.45 5 5 0 0 1 9.62-2.1A4.25 4.25 0 0 1 17.5 17.5h-11Z'

const commonProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Sun(props) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="12" cy="12" r="4.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="3.5"
          x2="12"
          y2="5.6"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  )
}

function Cloud(props) {
  return (
    <svg {...commonProps} {...props}>
      <path d={CLOUD_PATH} />
    </svg>
  )
}

function Rain(props) {
  return (
    <svg {...commonProps} {...props}>
      <path d={CLOUD_PATH} />
      <line x1="8.5" y1="19.5" x2="7.5" y2="21.5" />
      <line x1="12" y1="19.5" x2="11" y2="21.5" />
      <line x1="15.5" y1="19.5" x2="14.5" y2="21.5" />
    </svg>
  )
}

function Thunder(props) {
  return (
    <svg {...commonProps} {...props}>
      <path d={CLOUD_PATH} />
      <path d="M12.5 18.5 10 22h3l-1.5 3" />
    </svg>
  )
}

function Snow(props) {
  return (
    <svg {...commonProps} {...props}>
      <path d={CLOUD_PATH} />
      <circle cx="8.5" cy="20.2" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="20.2" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="20.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Fog(props) {
  return (
    <svg {...commonProps} {...props}>
      <line x1="4.5" y1="10" x2="19.5" y2="10" />
      <line x1="4.5" y1="14" x2="17" y2="14" />
      <line x1="4.5" y1="18" x2="19.5" y2="18" />
    </svg>
  )
}

const ICONS_BY_CONDITION = {
  Clear: Sun,
  Clouds: Cloud,
  Rain: Rain,
  Drizzle: Rain,
  Thunderstorm: Thunder,
  Snow: Snow,
  Mist: Fog,
  Smoke: Fog,
  Haze: Fog,
  Dust: Fog,
  Fog: Fog,
  Sand: Fog,
  Ash: Fog,
  Squall: Fog,
  Tornado: Fog,
}

export default function WeatherIcon({ condition, className }) {
  const IconComponent = ICONS_BY_CONDITION[condition] || Cloud
  return <IconComponent className={className} aria-hidden="true" />
}
