import { ProductCard } from '~shared/types/ProductCard';
import { SimilarCompaniesContent } from '~shared/types/SimilarCompaniesContent';

let id = 0;

export const similarCompaniesContent: SimilarCompaniesContent[] = [
  {
    id: id++,
    alt: 'alt',
    companyName: 'Nome da Empresa',
    src: 'https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: id++,
    alt: 'alt',
    companyName: 'GerencyI',
    src: ''
  },
  {
    id: id++,
    alt: 'alt',
    companyName: 'Nome da Empresa 2',
    src: ''
  }
];

export const similarCompaniesContent1: SimilarCompaniesContent[] = [
  {
    id: id++,
    alt: 'alt',
    companyName: 'Nome da Empresa',
    src: 'https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: id++,
    alt: 'alt',
    companyName: 'Nome da Empresa 2',
    src: ''
  }
];

export const similarCompaniesContent2: SimilarCompaniesContent[] = [];

export const mockedProductCardContent: ProductCard[] = [
  {
    orderDate: '2023-12-29T16:58:19.764Z',
    companyId: 'f',
    orderColorIdentity: '#5F5A2A',
    product: {
      lastTotalPrice: 0,
      productBrand: 'Terra Nova',
      productName: 'Arroz Integral 1kg',
      quantity: 100,
      totalPrice: 599,
      unitPrice: 5.99
    },
    orderId: 'a',
    partnerCompaniesInthisOrder: similarCompaniesContent,
    orderStatus: 'done',
    isLiked: true,
    isModalOpen: false
  },
  {
    orderDate: '2023-12-29T16:58:19.764Z',
    companyId: 'g',
    orderColorIdentity: '#13FA86',
    product: {
      lastTotalPrice: 0,
      productBrand: 'Terra Nova',
      productName: 'Arroz Integral 1kg',
      quantity: 100,
      totalPrice: 599,
      unitPrice: 5.99
    },
    orderId: 'b',
    partnerCompaniesInthisOrder: similarCompaniesContent,
    orderStatus: 'done',
    isLiked: true,
    isModalOpen: false
  },
  {
    orderDate: '2023-12-29T16:58:19.764Z',
    companyId: 'h',
    orderColorIdentity: '#37A18F',
    product: {
      lastTotalPrice: 0,
      productBrand: 'Três Corações',
      productName: 'Café Forte',
      quantity: 10,
      totalPrice: 59.9,
      unitPrice: 5.99
    },
    orderId: 'c',
    partnerCompaniesInthisOrder: similarCompaniesContent1,
    orderStatus: 'canceled',
    isLiked: false,
    isModalOpen: false
  },
  {
    orderDate: '2023-12-29T16:58:19.764Z',
    companyId: 'i',
    orderColorIdentity: '#bd1b56',
    product: {
      lastTotalPrice: 0,
      productBrand: 'Alguma Marca',
      productName: 'Algum Produto',
      quantity: 75,
      totalPrice: 200.25,
      unitPrice: 2.67
    },
    orderId: 'd',
    partnerCompaniesInthisOrder: similarCompaniesContent2,
    orderStatus: 'underAnalysis',
    isLiked: true,
    isModalOpen: false
  },
  {
    orderDate: '2023-12-29T16:58:19.764Z',
    companyId: 'j',
    orderColorIdentity: '#bd1b56',
    product: {
      lastTotalPrice: 0,
      productBrand: 'Alguma Marca',
      productName: 'Algum Produto',
      quantity: 75,
      totalPrice: 200.25,
      unitPrice: 2.67
    },
    orderId: 'e',
    partnerCompaniesInthisOrder: similarCompaniesContent2,
    orderStatus: 'underAnalysis',
    isLiked: true,
    isModalOpen: false
  }
];
