'use client';

import { ProductCard } from '~shared/components/ProductCard';
import { useProductCardController } from '../controller';
import { PurshaseModal } from './modals/EditModal';
import { mockedProductCardContent } from '../ProductCardsUtils';
import { NFModal } from './modals/NFModal';
import { CancelPurshaseModal } from './modals/CancelPurshaseModal';

export function ProductCardContent() {
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
    <div className="flex flex-wrap gap-8">
      {mockedProductCardContent.map((productCardContent) => (
        <ProductCard.root key={productCardContent.id}>
          <PurshaseModal
            isEditing={isEditing}
            isModalOpen={indexModalOpen === productCardContent.id}
            productName={productCardContent.productName}
            quantity={productCardContent.quantity}
            unitPrice={productCardContent.unitPrice}
            closeModal={closeModal}
            toggleIsEditing={toggleIsEditing}
          />
          <NFModal
            closeNFModal={closeNFModal}
            isNFModalOpen={indexNFModalOpen === productCardContent.id}
          />
          <CancelPurshaseModal
            productName={productCardContent.productName}
            closeCancelModal={closeCancelModal}
            isCancelPurshaseModalOpen={indexCancelModalOpen === productCardContent.id}
          />
          <ProductCard.identify color={productCardContent.identifyColor} />
          <ProductCard.status
            handleCancel={() => openCancelModal(+productCardContent.id)}
            state={productCardContent.status}
          />
          <ProductCard.header
            date={+productCardContent.date}
            productBrand={productCardContent.productBrand}
            productName={productCardContent.productName}
          />
          <ProductCard.likeAction isLiked={productCardContent.isLiked} handleLike={handleLike} />
          <ProductCard.contentInfo
            isUnderAnalysis={productCardContent.status === 'underAnalisis'}
            totalPrice={productCardContent.totalPrice}
            quantity={productCardContent.quantity}
            unitPrice={productCardContent.unitPrice}
          />
          <ProductCard.similarCompanies
            similarCompanies={productCardContent.similarCompaniesContent}
          />
          <ProductCard.actions
            status={productCardContent.status}
            actions={() => productCardActions(+productCardContent.id)}
          />
        </ProductCard.root>
      ))}
    </div>
  );
}
