export default function Header({ unit, onUnitChange }) {
  return (
    <header className="site-header">
      <div>
        <h1 className="site-header__title">Boletim</h1>
        <p className="site-header__tagline">Clima atual e previsão por cidade</p>
      </div>
      <div className="unit-toggle" role="group" aria-label="Unidade de temperatura">
        <button
          type="button"
          aria-pressed={unit === 'metric'}
          onClick={() => onUnitChange('metric')}
        >
          °C
        </button>
        <button
          type="button"
          aria-pressed={unit === 'imperial'}
          onClick={() => onUnitChange('imperial')}
        >
          °F
        </button>
      </div>
    </header>
  )
}
