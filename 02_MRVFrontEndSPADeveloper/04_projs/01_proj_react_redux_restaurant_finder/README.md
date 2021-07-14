# ResutaurantFinder

Criação de um site para encontrar restaurantes usando Google Maps que consulta API do Google, usando React.JS e nuvem.

## Passo-a-passo
1. Setup do projeto: babel, prettier e eslint
1. Criação do arquivo `themes.js` para definição da paleta de cores global
1. Criação dos pages: Home
1. Utilização do `ThemeProvider` no `app.js`: aplicação do passo 2
1. Inserção do `Reset` no `app.js` para remoção da estilização padrão dos navegadores para cada tag
1. `react-text-field` - Caixa de texto para pesquisa
1. `react-rating-stars-component` - Avaliação de estrelas
1. Modal - Conceito de [Portals](https://reactjs.org/docs/portals.html)
1. Criação .env 
   1. Chave: REACT_APP_GOOGLE_API_KEY | Valor: `GooleApiKey`
1. |`google-map-react` - Rendrização do Google Maps
1. [Redux](https://redux.js.org/) - Gerenciamento de estados: entre o mapa e a seleção do resutaurante
   1. Criação da store - flux - single source of truth
   1. Criação dos reducers
   1. `<Provider>` in` app.js`
   1. Criação dos modules para cada estado
   1. `useDispatch` usando `react-redux`
1. LottieFiles - Imagem de carregamento
   1. Versao react: [react-lottie](https://github.com/chenqingspring/react-lottie)

## Google Api Places

1. Acesse: Google Cloud Console.  
1. Crie um novo projeto
1. Vá em:
   1. Biblioteca
   1. Maps JavaScript API
1. Habilite também: Places API
1. Vá em credenciais -> criar credenciais -> Api Key
1. Restringir chaves
1. Escolha as apis definidas na etapa 3


## Tech Stack
1. [React](https://reactjs.org/)
1. [styled-components](https://styled-components.com/)
1. [material-ui](https://material-ui.com/pt/)
1. [styled-reset](https://www.npmjs.com/package/styled-reset)
1. [react-text-field](https://github.com/material-components/material-components-web-react/tree/master/packages/text-field)
1. [Icons](https://fonts.google.com/icons)
1. [React Carousel](https://react-slick.neostack.com/)
1. [react-rating-stars-component](https://github.com/ertanhasani/react-stars#readme)
1. [Google Places Library](https://developers.google.com/maps/documentation/javascript/places#add-places-api-to-the-api-keys-api-restrictions-list)
1. [google-maps-react](https://github.com/google-map-react/google-map-react)
2. [LottieFiles](https://lottiefiles.com/)