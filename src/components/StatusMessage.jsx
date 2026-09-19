export default function StatusMessage({ status, errorMessage }) {
  if (status === 'loading') {
    return <p className="status-message">Carregando o boletim…</p>
  }

  if (status === 'error') {
    return <p className="status-message status-message--error">{errorMessage}</p>
  }

  return (
    <p className="status-message">
      Busque uma cidade acima para ver o clima atual e a previsão dos próximos dias.
    </p>
  )
}
