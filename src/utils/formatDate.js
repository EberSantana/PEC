const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

/** '2026-11-20' -> '20 de Novembro de 2026' */
export function formatDateLong(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return `${day} de ${MESES[month - 1]} de ${year}`;
}

/** '2026-11-20' -> { dia: '20', mes: 'NOV' } */
export function formatDateShort(isoDate) {
  const [, month, day] = isoDate.split('-').map(Number);
  const mesAbrev = MESES[month - 1].slice(0, 3).toUpperCase();
  return { dia: String(day).padStart(2, '0'), mes: mesAbrev };
}
