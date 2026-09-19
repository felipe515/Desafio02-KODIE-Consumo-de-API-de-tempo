const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY

class WeatherApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

async function request(endpoint, city) {
  if (!API_KEY) {
    throw new WeatherApiError(
      'Chave da API não configurada. Crie um arquivo .env com VITE_OPENWEATHER_KEY.',
    )
  }

  const url = `${BASE_URL}/${endpoint}?q=${encodeURIComponent(
    city,
  )}&appid=${API_KEY}&units=metric&lang=pt_br`

  let response
  try {
    response = await fetch(url)
  } catch {
    throw new WeatherApiError('Falha de conexão. Verifique sua internet.')
  }

  if (response.status === 404) {
    throw new WeatherApiError(`Cidade "${city}" não encontrada.`, 404)
  }

  if (!response.ok) {
    throw new WeatherApiError('Não foi possível carregar o clima agora.', response.status)
  }

  return response.json()
}

export function getCurrentWeather(city) {
  return request('weather', city)
}

export function getForecast(city) {
  return request('forecast', city)
}
