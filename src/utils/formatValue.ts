const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

/*
export const formatValue = (value: number): string => {
  // Intl.NumberFormat().format(value);

  const format = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));

  return format;
};
*/

// export const dateValue = (date: Date): string => {
//   return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
//   // return new Intl.DateTimeFormat('pt-BR').format(Date.parse(date));
// };

export default formatValue;
