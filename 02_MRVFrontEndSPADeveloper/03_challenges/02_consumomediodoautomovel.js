const distânciaTotalPercorrida = gets();
const totalDeCombustívelConsumido = gets();

const consumoMedioDoAutomovel = distânciaTotalPercorrida / totalDeCombustívelConsumido;

const normalizeConsumoMedioDoAutomovel = consumoMedioDoAutomovel.toFixed(3)

const SUFFIX = 'km/l'

const result = normalizeConsumoMedioDoAutomovel + ' ' + SUFFIX;

console.log(result)
