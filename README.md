# Boletim — painel de clima

Painel interativo que consome a API pública da OpenWeatherMap para mostrar o
clima atual e a previsão dos próximos dias de qualquer cidade do mundo.

## Problemática

Consultar o clima geralmente exige abrir sites ou aplicativos carregados de
informação para responder a uma pergunta simples: "vou precisar de
guarda-chuva ou casaco nos próximos dias?". Este projeto propõe uma forma
rápida e visual de consultar o clima atual e a tendência dos próximos dias de
uma ou mais cidades, em uma única tela.

## Objetivo

Desenvolver uma aplicação React responsiva e publicada que consuma a API
pública da OpenWeatherMap, organizando os dados de forma clara e permitindo
que o usuário busque cidades, veja detalhes do clima atual e salve cidades
favoritas para consulta rápida.

## Tecnologias utilizadas

- React 18 + Vite
- CSS puro (sem framework de UI)
- `localStorage` para persistir os favoritos
- Fetch API para consumo da API pública

## API utilizada

[OpenWeatherMap](https://openweathermap.org/api) — endpoints gratuitos:

- **Current Weather Data** (`/data/2.5/weather`) — clima atual por nome de
  cidade.
- **5 Day / 3 Hour Forecast** (`/data/2.5/forecast`) — previsão agrupada em
  um card por dia.

## Principais funcionalidades

- 🔎 Busca de clima por nome de cidade
- 📋 Visualização de detalhes: temperatura, sensação térmica, umidade, vento
  e condição do tempo
- 📅 Previsão dos próximos dias
- ❤️ Favoritar/remover cidades, salvas no `localStorage` do navegador
- 🌡️ Alternância entre °C e °F
- ⚠️ Estados de carregamento, cidade não encontrada e falha de conexão

## Como executar o projeto

```bash
# 1. instale as dependências
npm install

# 2. crie o arquivo de variáveis de ambiente
cp .env.example .env

# 3. gere uma chave gratuita em https://openweathermap.org/api,
#    aguarde alguns minutos até ela ativar, e cole em .env:
#    VITE_OPENWEATHER_KEY=sua_chave_aqui

# 4. rode em modo desenvolvimento
npm run dev

# 5. gere a build de produção (usada no deploy)
npm run build
```

## Aplicação publicada

`https://previsao-de-tempo-zeta.vercel.app/`

## 🤖 Uso de Inteligência Artificial

Utilizei o Claude como apoio durante o desenvolvimento, tanto para planejar o
projeto quanto para montar a estrutura inicial de componentes.

### Prompt utilizado

"Quero usar a API pública OpenWeatherMap para o desafio do painel interativo
em React. Me ajuda a planejar seguindo o roteiro Problemática → Usuário →
Requisitos → API → Dados → Arquitetura → Componentes → Interface antes de
começar a codar?"

### Objetivo

Entender, antes de escrever qualquer código, qual seria a estrutura de dados
da API, como dividir a aplicação em componentes com responsabilidades claras
e quais decisões de interface fariam sentido para o problema — para então
implementar o projeto com compreensão de cada decisão tomada.
