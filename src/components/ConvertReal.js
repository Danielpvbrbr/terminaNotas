const CvrtReal = (value) => {
  const total = Number(value);

  return total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};
export default CvrtReal;