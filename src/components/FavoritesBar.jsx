export default function FavoritesBar({ favorites, activeCity, onSelect, onRemove }) {
  if (favorites.length === 0) return null

  return (
    <nav className="favorites-bar" aria-label="Cidades favoritas">
      {favorites.map((city) => {
        const isActive = activeCity && city.toLowerCase() === activeCity.toLowerCase()
        return (
          <button
            key={city}
            type="button"
            className={`favorites-bar__item${isActive ? ' favorites-bar__item--active' : ''}`}
            onClick={() => onSelect(city)}
          >
            {city}
            <span
              className="favorites-bar__remove"
              role="button"
              tabIndex={0}
              aria-label={`Remover ${city} dos favoritos`}
              onClick={(event) => {
                event.stopPropagation()
                onRemove(city)
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.stopPropagation()
                  onRemove(city)
                }
              }}
            >
              ×
            </span>
          </button>
        )
      })}
    </nav>
  )
}
