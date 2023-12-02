export const rows = [
  {
    name: 'Arroz Integral 1kg',
    brand: 'Terra Nova',
    date: '27/11/2023',
    quantity: 100,
    price: 5.99,
    color: 'bg-[#583ED3]'
  },
  {
    name: 'Leite Desnatado',
    brand: 'Fazenda Feliz',
    date: '25/11/2023',
    quantity: 50,
    price: 3.49,
    color: 'bg-[#BD1B56]'
  },
  {
    name: 'Maçãs Gala (kg)',
    brand: 'Pomar Fresco',
    date: '30/11/2023',
    quantity: 75,
    price: 2.79,
    color: 'bg-[#FFFFFF]'
  },
  {
    name: 'Azeite de Oliva Extra Virgem 500ml',
    brand: 'Sabor Dourado',
    date: '28/11/2023',
    quantity: 30,
    price: 8.99,
    color: 'bg-[#1d0b70]'
  },
  {
    name: 'Café Torrado e Moído 250g',
    brand: 'Café do Sítio',
    date: '26/11/2023',
    quantity: 40,
    price: 6.49,
    color: 'bg-[#FF0000]'
  },
  {
    name: 'Iogurte Natural 400g',
    brand: 'Laticínios Saboroso',
    date: '29/11/2023',
    quantity: 60,
    price: 2.29,
    color: 'bg-[#1e594f]'
  }
];

export const areaChartData = [
  {
    name: 'Segunda',
    Autônomo: 4000,
    GerencyI: 2400,
    amt: 2400
  },
  {
    name: 'Terça',
    Autônomo: 3000,
    GerencyI: 1398,
    amt: 2210
  },
  {
    name: 'Quarta',
    Autônomo: 2000,
    GerencyI: 9800,
    amt: 2290
  },
  {
    name: 'Quinta',
    Autônomo: 2780,
    GerencyI: 3908,
    amt: 2000
  },
  {
    name: 'Sexta',
    Autônomo: 1890,
    GerencyI: 4800,
    amt: 2181
  },
  {
    name: 'Sábado',
    Autônomo: 2390,
    GerencyI: 3800,
    amt: 2500
  },
  {
    name: 'Domingo',
    Autônomo: 3490,
    GerencyI: 4300,
    amt: 2100
  }
];

let id = 0;

export const pieChartData = [
  { id: id++, name: 'Arroz Integral 1kg', value: 599 },
  { id: id++, name: 'Leite Desnatado', value: 174.5 },
  { id: id++, name: 'Maçãs Gala (kg)', value: 209.25 },
  { id: id++, name: 'Azeite de Oliva Extra Virgem 500ml', value: 269.7 },
  { id: id++, name: 'Café Torrado e Moído 250g', value: 194.7 },
  { id: id++, name: 'Iogurte Natural 400g', value: 137.4 }
];

export const bestSellersData = [
  { id: id++, name: 'Arroz Integral 1kg', value: 599, economyPercent: 4 },
  { id: id++, name: 'Maçãs Gala (kg)', value: 209.25, economyPercent: 1 },
  { id: id++, name: 'Azeite de Oliva Extra Virgem 500ml', value: 269.7, economyPercent: 2 }
];