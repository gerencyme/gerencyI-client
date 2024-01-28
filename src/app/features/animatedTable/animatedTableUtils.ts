// mocked base graphics

import { ProductCard } from '../../shared/types/ProductCard';
import { BestSellersData } from '../../shared/types/graphics/BestSellersData';

export const rows: ProductCard[] = [
  {
    companyId: '',
    isLiked: false,
    isModalOpen: false,
    orderId: '',
    orderStatus: 'done',
    product: {
      productName: 'Arroz Integral 1kg',
      productBrand: 'Terra Nova',
      quantity: 100,
      lastTotalPrice: 0,
      totalPrice: 599,
      unitPrice: 5.99
    },
    orderDate: '2023-12-29T16:58:19.764Z',
    orderColorIdentity: 'bg-[#583ED3]',
    partnerCompaniesInthisOrder: []
  },
  {
    companyId: '',
    isLiked: false,
    isModalOpen: false,
    orderId: '',
    orderStatus: 'done',
    product: {
      productName: 'Leite Desnatado',
      productBrand: 'Fazenda Feliz',
      quantity: 50,
      lastTotalPrice: 0,
      totalPrice: 599,
      unitPrice: 3.49
    },
    orderDate: '2023-12-29T16:58:19.764Z',
    orderColorIdentity: 'bg-[#BD1B56]',
    partnerCompaniesInthisOrder: []
  },
  {
    companyId: '',
    isLiked: false,
    isModalOpen: false,
    orderId: '',
    orderStatus: 'done',
    product: {
      productName: 'Maçãs Gala (kg)',
      productBrand: 'Pomar Fresco',
      quantity: 75,
      lastTotalPrice: 0,
      totalPrice: 599,
      unitPrice: 2.79
    },
    orderDate: '2023-12-29T16:58:19.764Z',
    orderColorIdentity: 'bg-[#FFFFFF]',
    partnerCompaniesInthisOrder: []
  },
  {
    companyId: '',
    isLiked: false,
    isModalOpen: false,
    orderId: '',
    orderStatus: 'done',
    product: {
      productName: 'Azeite de Oliva Extra Virgem 500ml',
      productBrand: 'Sabor Dourado',
      quantity: 30,
      lastTotalPrice: 0,
      totalPrice: 599,
      unitPrice: 8.99
    },
    orderDate: '2023-12-29T16:58:19.764Z',
    orderColorIdentity: 'bg-[#1d0b70]',
    partnerCompaniesInthisOrder: []
  },
  {
    companyId: '',
    isLiked: false,
    isModalOpen: false,
    orderId: '',
    orderStatus: 'done',
    product: {
      productName: 'Café Torrado e Moído 250g',
      productBrand: 'Café do Sítio',
      quantity: 40,
      lastTotalPrice: 0,
      totalPrice: 599,
      unitPrice: 6.49
    },
    orderDate: '2023-12-29T16:58:19.764Z',
    orderColorIdentity: 'bg-[#FF0000]',
    partnerCompaniesInthisOrder: []
  },
  {
    companyId: '',
    isLiked: false,
    isModalOpen: false,
    orderId: '',
    orderStatus: 'done',
    product: {
      productName: 'Iogurte Natural 400g',
      productBrand: 'Laticínios Saboroso',
      quantity: 60,
      lastTotalPrice: 0,
      totalPrice: 599,
      unitPrice: 2.29
    },
    orderDate: '2023-12-29T16:58:19.764Z',
    orderColorIdentity: 'bg-[#1e594f]',
    partnerCompaniesInthisOrder: []
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

export const pieChartData = [
  { id: 0, name: 'Arroz Integral 1kg', value: 599 },
  { id: 1, name: 'Leite Desnatado', value: 174.5 },
  { id: 2, name: 'Maçãs Gala (kg)', value: 209.25 },
  { id: 3, name: 'Azeite de Oliva Extra Virgem 500ml', value: 269.7 },
  { id: 4, name: 'Café Torrado e Moído 250g', value: 194.7 },
  { id: 5, name: 'Iogurte Natural 400g', value: 137.4 }
];

export const bestSellersData: BestSellersData[] = [
  {
    id: 6,
    name: 'Arroz Integral 1kg',
    value: 599,
    economyPercent: 4,
    productType: 'Grãos',
    productBrand: 'Terra Nova'
  },
  {
    id: 7,
    name: 'Maçãs Gala (kg)',
    value: 209.25,
    economyPercent: 1,
    productType: 'Frutas',
    productBrand: 'Galas'
  },
  {
    id: 8,
    name: 'Azeite de Oliva Extra Virgem 500ml',
    value: 269.7,
    economyPercent: 2,
    productType: 'Óleos',
    productBrand: 'Azeites do Sul'
  },
  {
    id: 9,
    name: 'Leite Desnatado 1L',
    value: 320,
    economyPercent: 3,
    productType: 'Laticínio',
    productBrand: 'Piracanjuba'
  },
  {
    id: 10,
    name: 'Frango Congelado 1kg',
    value: 1500,
    economyPercent: 5,
    productType: 'Aves',
    productBrand: 'Sadia'
  }
];
