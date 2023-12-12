'use client';

import { ProductCard } from '../../shared/components/ProductCard';
import { Title } from '../../shared/components/Title';
import { ProductCard as ProductCardType } from '../../shared/types/ProductCard';
import { ProductCardActions } from '../../shared/types/ProductCardActions';
import { SimilarCompaniesContent } from '../../shared/types/SimilarCompaniesContent';

const productCardActions: ProductCardActions[] = [
  {
    id: 0,
    color: 'dark',
    label: 'Visualizar NF',
    onClick: () => console.log('Visualizar NF')
  },
  {
    id: 1,
    color: 'primary',
    label: 'Repetir Compra',
    onClick: () => console.log('Repetir Compra')
  }
];

const similarCompaniesContent: SimilarCompaniesContent[] = [
  {
    id: 0,
    alt: 'alt',
    companyName: 'Nome da Empresa',
    src: 'https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 1,
    alt: 'alt',
    companyName: 'GerencyI',
    src: ''
  },
  {
    id: 2,
    alt: 'alt',
    companyName: 'Nome da Empresa 2',
    src: ''
  }
];

const similarCompaniesContent1: SimilarCompaniesContent[] = [
  {
    id: 0,
    alt: 'alt',
    companyName: 'Nome da Empresa',
    src: 'https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 1,
    alt: 'alt',
    companyName: 'Nome da Empresa 2',
    src: ''
  }
];

const similarCompaniesContent2: SimilarCompaniesContent[] = [];

const mockedProductCardContent: ProductCardType[] = [
  {
    date: new Date('11/12/2023'),
    handleCancel: () => console.log('abre o modal de cancelar'),
    id: 0,
    identifyColor: 'bg-purple',
    productBrand: 'Terra Nova',
    productCardActions,
    productName: 'Arroz Integral 1kg',
    quantity: 100,
    similarCompaniesContent,
    status: 'done',
    totalPrice: 599,
    unitPrice: 5.99
  },
  {
    date: new Date('11/12/2023'),
    handleCancel: () => console.log('abre o modal de cancelar'),
    id: 1,
    identifyColor: 'bg-[#37A18F]',
    productBrand: 'Três Corações',
    productCardActions,
    productName: 'Café Forte',
    quantity: 10,
    similarCompaniesContent: similarCompaniesContent1,
    status: 'canceled',
    totalPrice: 59.9,
    unitPrice: 5.99
  },
  {
    date: new Date('11/12/2023'),
    handleCancel: () => console.log('abre o modal de cancelar'),
    id: 2,
    identifyColor: 'bg-[#bd1b56]',
    productBrand: 'Alguma Marca',
    productCardActions,
    productName: 'Algum Produto',
    quantity: 75,
    similarCompaniesContent: similarCompaniesContent2,
    status: 'underAnalisis',
    totalPrice: 200.25,
    unitPrice: 2.67
  }
];

export default function LastMonthsPage() {
  return (
    <div className="flex flex-col gap-4">
      <Title title="Página: Últimos meses" size="2xl" weight="black" color="white" />
      <div className="flex gap-8">
        {mockedProductCardContent.map((productCardContent) => (
          <ProductCard.root key={productCardContent.id}>
            <ProductCard.identify color={productCardContent.identifyColor} />
            <ProductCard.status
              handleCancel={productCardContent.handleCancel}
              state={productCardContent.status}
            />
            <ProductCard.header
              date={productCardContent.date}
              productBrand={productCardContent.productBrand}
              productName={productCardContent.productName}
            />
            <ProductCard.contentInfo
              isUnderAnalysis={productCardContent.status === 'underAnalisis'}
              totalPrice={productCardContent.totalPrice}
              quantity={productCardContent.quantity}
              unitPrice={productCardContent.unitPrice}
            />
            <ProductCard.similarCompanies
              similarCompanies={productCardContent.similarCompaniesContent}
            />
            <ProductCard.actions actions={productCardContent.productCardActions} />
          </ProductCard.root>
        ))}
      </div>
    </div>
  );
}
