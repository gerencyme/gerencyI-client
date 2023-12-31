'use client';

import { ProductCard } from '~shared/components/ProductCard';
import { useProductCardController } from '../controller';
import { PurshaseModal } from './modals/EditModal';
import { NFModal } from './modals/NFModal';
import { CancelPurshaseModal } from './modals/CancelPurshaseModal';
import { ProductCard as ProductCardType } from '~/src/app/shared/types/ProductCard';

interface ProductCardContentProps {
  productCard: ProductCardType[];
}

export function ProductCardContent({ productCard = [] }: ProductCardContentProps) {
  const {
    isEditing,
    indexModalOpen,
    indexNFModalOpen,
    indexCancelModalOpen,
    productCardActions,
    closeModal,
    closeNFModal,
    toggleIsEditing,
    closeCancelModal,
    openCancelModal,
    handleLike
  } = useProductCardController();

  return (
    <div className="flex items-center gap-8 flex-wrap justify-center">
      {productCard.map((productCardContent) => (
        <ProductCard.root key={productCardContent.orderId}>
          <PurshaseModal
            isEditing={isEditing}
            isModalOpen={indexModalOpen === productCardContent.orderId}
            productName={productCardContent.product.productName}
            quantity={productCardContent.product.quantity}
            unitPrice={productCardContent.product.unitPrice}
            closeModal={closeModal}
            toggleIsEditing={toggleIsEditing}
          />
          <NFModal
            closeNFModal={closeNFModal}
            isNFModalOpen={indexNFModalOpen === productCardContent.orderId}
          />
          <CancelPurshaseModal
            productName={productCardContent.product.productName}
            closeCancelModal={closeCancelModal}
            isCancelPurshaseModalOpen={indexCancelModalOpen === productCardContent.orderId}
          />
          <ProductCard.identify color={productCardContent.orderColorIdentity} />
          <ProductCard.status
            handleCancel={() => openCancelModal(productCardContent.orderId)}
            state={productCardContent.orderStatus}
          />
          <ProductCard.header
            date={productCardContent.orderDate}
            productBrand={productCardContent.product.productBrand}
            productName={productCardContent.product.productName}
          />
          <ProductCard.likeAction isLiked={productCardContent.isLiked} handleLike={handleLike} />
          <ProductCard.contentInfo
            isUnderAnalysis={productCardContent.orderStatus === 'underAnalysis'}
            totalPrice={productCardContent.product.totalPrice}
            quantity={productCardContent.product.quantity}
            unitPrice={productCardContent.product.unitPrice}
          />
          <ProductCard.similarCompanies
            similarCompanies={productCardContent.partnerCompaniesInthisOrder}
          />
          <ProductCard.actions
            status={productCardContent.orderStatus}
            actions={() => productCardActions(productCardContent.orderId)}
          />
        </ProductCard.root>
      ))}
    </div>
  );
}
