const WEEKDAYS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']

/**
 * A previsão da OpenWeatherMap vem em blocos de 3 em 3 horas.
 * Para exibir "um card por dia", pegamos o bloco mais próximo do
 * meio-dia de cada data e ignoramos o resto.
 */
export function groupForecastByDay(list, daysCount = 5) {
  const byDate = new Map()

  for (const entry of list) {
    const [date] = entry.dt_txt.split(' ')
    const hour = Number(entry.dt_txt.split(' ')[1].slice(0, 2))
    const current = byDate.get(date)

    // mantém o horário mais próximo de 12:00
    if (!current || Math.abs(hour - 12) < Math.abs(current.hour - 12)) {
      byDate.set(date, { hour, entry })
    }
  }

  return Array.from(byDate.values())
    .map(({ entry }) => entry)
    .slice(0, daysCount)
}

export function formatWeekday(dateTxt) {
  const date = new Date(dateTxt.replace(' ', 'T'))
  return WEEKDAYS[date.getDay()]
}

export function capitalize(text) {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/** A API é sempre buscada em Celsius; a troca de unidade é só de exibição. */
export function formatTemp(celsius, unit) {
  const value = unit === 'imperial' ? celsius * (9 / 5) + 32 : celsius
  return Math.round(value)
}

export function tempClass(celsius) {
  if (celsius <= 14) return 'cold'
  if (celsius >= 28) return 'warm'
  return null
}
