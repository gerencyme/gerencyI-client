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
    date: new Date('11/12/2023'),
    id: id++,
    identifyColor: 'bg-purple',
    productBrand: 'Terra Nova',
    productName: 'Arroz Integral 1kg',
    quantity: 100,
    similarCompaniesContent,
    status: 'done',
    totalPrice: 599,
    unitPrice: 5.99,
    isLiked: true,
    isModalOpen: false
  },
  {
    date: new Date('11/12/2023'),
    id: id++,
    identifyColor: 'bg-purple',
    productBrand: 'Terra Nova',
    productName: 'Arroz Integral 1kg',
    quantity: 100,
    similarCompaniesContent,
    status: 'done',
    totalPrice: 599,
    unitPrice: 5.99,
    isLiked: true,
    isModalOpen: false
  },
  {
    date: new Date('11/12/2023'),
    id: id++,
    identifyColor: 'bg-[#37A18F]',
    productBrand: 'Três Corações',
    productName: 'Café Forte',
    quantity: 10,
    similarCompaniesContent: similarCompaniesContent1,
    status: 'canceled',
    totalPrice: 59.9,
    unitPrice: 5.99,
    isLiked: false,
    isModalOpen: false
  },
  {
    date: new Date('11/12/2023'),
    id: id++,
    identifyColor: 'bg-[#bd1b56]',
    productBrand: 'Alguma Marca',
    productName: 'Algum Produto',
    quantity: 75,
    similarCompaniesContent: similarCompaniesContent2,
    status: 'underAnalisis',
    totalPrice: 200.25,
    unitPrice: 2.67,
    isLiked: true,
    isModalOpen: false
  },
  {
    date: new Date('11/12/2023'),
    id: id++,
    identifyColor: 'bg-[#bd1b56]',
    productBrand: 'Alguma Marca',
    productName: 'Algum Produto',
    quantity: 75,
    similarCompaniesContent: similarCompaniesContent2,
    status: 'underAnalisis',
    totalPrice: 200.25,
    unitPrice: 2.67,
    isLiked: true,
    isModalOpen: false
  }
];
