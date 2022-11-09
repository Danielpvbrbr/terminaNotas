export default function CvrtReal(dataRouter, btnValue) {
  const valor = dataRouter.price;
  const total = Number(valor * btnValue);

  return total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};


