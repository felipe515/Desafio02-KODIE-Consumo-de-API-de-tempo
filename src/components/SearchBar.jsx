import { useState } from 'react'

export default function SearchBar({ onSearch, isLoading }) {
  const [value, setValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(value)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Buscar cidade — ex.: Lisboa, Tóquio"
        aria-label="Nome da cidade"
      />
      <button type="submit" disabled={isLoading || !value.trim()}>
        {isLoading ? 'buscando…' : 'buscar'}
      </button>
    </form>
  )
}
